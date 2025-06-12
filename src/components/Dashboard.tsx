'use client'

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { RefreshCw, Share2, TrendingDown, Skull, Bot } from "lucide-react"
import { useWallet } from "@solana/wallet-adapter-react"
import { useEffect, useState } from 'react';
import { useGetBalance, useGetTokenAccounts, useGetSignatures } from '../components/account/account-data-access';
import { PublicKey } from '@solana/web3.js';

export function Dashboard() {
  const { connected, publicKey } = useWallet();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<any>(null);

  const { data: balance } = useGetBalance({ address: publicKey || new PublicKey('11111111111111111111111111111111') });
  const { data: tokenAccounts } = useGetTokenAccounts({ address: publicKey || new PublicKey('11111111111111111111111111111111') });
  const { data: signatures } = useGetSignatures({ address: publicKey || new PublicKey('11111111111111111111111111111111') });

  useEffect(() => {
    if (!connected || !publicKey) return;
    setLoading(true);
    setError(null);
    const stats = {
      balance: balance || 0,
      tokenCount: tokenAccounts?.length || 0,
      txCount: signatures?.length || 0,
    };
    fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ walletAddress: publicKey.toString(), stats }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Failed to fetch analysis');
        setAnalysis(data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [connected, publicKey, balance, tokenAccounts, signatures]);

  if (!connected) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <p className="text-lg text-gray-400 mb-4">Please connect your wallet to view your analysis.</p>
        <WalletMultiButton className="!bg-orange-500 hover:!bg-orange-600" />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <p className="text-lg text-gray-400 mb-4">Analyzing your wallet with AI...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <p className="text-lg text-red-500 mb-4">{error}</p>
      </div>
    );
  }

  if (!analysis) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-medium gradient-text">Your Financial Trauma</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="glass p-8 rounded-2xl animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-medium">Downbad Score™</h2>
            <Skull className="w-6 h-6 text-[#F15A24]" />
          </div>
          <div className="text-6xl font-medium text-[#F15A24] mb-2 animate-pulse-slow">{analysis.downbadScore !== null ? analysis.downbadScore : 'N/A'}</div>
        </div>
        <div className="glass p-8 rounded-2xl animate-fade-in [animation-delay:200ms]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-medium">AI-Generated Roast</h2>
            <Bot className="w-6 h-6 text-[#F15A24]" />
          </div>
          <p className="text-[#F2F2F2] text-lg whitespace-pre-line">{analysis.roast}</p>
        </div>
      </div>
      <div className="glass p-8 rounded-2xl mb-8 animate-fade-in [animation-delay:400ms]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-medium">Loss Analysis</h2>
          <TrendingDown className="w-6 h-6 text-[#F15A24]" />
        </div>
        <p className="text-[#F2F2F2] text-lg whitespace-pre-line">{analysis.lossAnalysis}</p>
      </div>
      <div className="glass p-8 rounded-2xl animate-fade-in [animation-delay:600ms]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-medium">Share Your Pain</h2>
          <Share2 className="w-6 h-6 text-[#F15A24]" />
        </div>
        <div className="bg-[#1A1A1A]/50 p-6 rounded-xl">
          <p className="text-[#F2F2F2] text-lg whitespace-pre-line">{analysis.shareYourPain}</p>
        </div>
      </div>
    </div>
  )
} 