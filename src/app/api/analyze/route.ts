import { NextRequest, NextResponse } from 'next/server'

// In-memory usage tracker (resets on server restart)
const usageMap = new Map<string, number>();
const ipMap = new Map<string, { count: number, last: number }>();

function isValidSolanaAddress(address: string) {
  // Simple base58 and length check (32 or 44 chars)
  return typeof address === 'string' && /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address);
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') || 'unknown';
  const { walletAddress, stats } = await req.json();

  // 1. Validate wallet address
  if (!isValidSolanaAddress(walletAddress)) {
    return NextResponse.json({ error: 'Invalid wallet address.' }, { status: 400 });
  }

  // 2. Limit: 5 analyses per wallet
  const usage = usageMap.get(walletAddress) || 0;
  if (usage >= 5) {
    return NextResponse.json({ error: 'Analysis limit reached for this wallet.' }, { status: 429 });
  }

  // 3. Rate limit by IP: 10 requests per hour
  const now = Date.now();
  const ipData = ipMap.get(ip) || { count: 0, last: now };
  if (ipData.count >= 10 && now - ipData.last < 60 * 60 * 1000) {
    return NextResponse.json({ error: 'Too many requests from this IP. Try again later.' }, { status: 429 });
  }
  if (now - ipData.last > 60 * 60 * 1000) {
    ipMap.set(ip, { count: 1, last: now });
  } else {
    ipMap.set(ip, { count: ipData.count + 1, last: ipData.last });
  }

  // 4. Limit stats size
  if (JSON.stringify(stats).length > 1000) {
    return NextResponse.json({ error: 'Stats payload too large.' }, { status: 400 });
  }

  usageMap.set(walletAddress, usage + 1);

  const prompt = `Analyze this Solana wallet: ${walletAddress}. Stats: ${JSON.stringify(stats)}.\nReturn a JSON object with the following fields:\n- "roast": the most degenerate, edgy, and funny roast possible.\n- "downbadScore": a number from 0 (not down bad) to 100 (max down bad).\n- "lossAnalysis": a detailed breakdown of the wallet's worst losses and trading mistakes.\n- "shareYourPain": a short, meme-worthy summary or quote about this wallet's pain.\nBe brutally honest. Only return valid JSON.`;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 400,
    }),
  });

  const data = await response.json();
  let result = { roast: '', downbadScore: 0, lossAnalysis: '', shareYourPain: '' };
  try {
    const content = data?.choices?.[0]?.message?.content;
    if (!content) throw new Error('No content from OpenAI');
    const json = JSON.parse(content);
    result = {
      roast: json.roast || 'This wallet is so empty, even the AI is speechless.',
      downbadScore: json.downbadScore ?? 0,
      lossAnalysis: json.lossAnalysis || 'No losses found. This wallet is a ghost town.',
      shareYourPain: json.shareYourPain || 'Your wallet is so empty, it echoes.',
    };
  } catch (e) {
    result = {
      roast: 'This wallet is so empty, even the AI is speechless.',
      downbadScore: 0,
      lossAnalysis: 'No losses found. This wallet is a ghost town.',
      shareYourPain: 'Your wallet is so empty, it echoes.',
    };
  }
  return NextResponse.json(result);
} 