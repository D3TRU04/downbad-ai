# Downbad.ai

> **Your wallet. Your trauma. Our roast.**

Downbad.ai is a Solana-powered web app that uses AI to analyze and roast your wallet. Connect your wallet, get a brutally honest (and meme-worthy) breakdown of your financial decisions, and share your Downbad Score™ with the world.

---

## 🚀 Features

- 🔥 **AI-Generated Roast:** Get roasted by an AI trained to be brutally honest about your wallet.
- 📉 **Loss Analysis:** See a detailed breakdown of your worst trades and investments.
- 💀 **Downbad Score™:** Receive a personal score and meme card to share your pain.
- 🧠 **Solana Native:** Built with Next.js, React, and Solana wallet adapter.
- 🛡️ **Abuse Protection:** Rate limits, payload size checks, and wallet validation to keep things fair.

---

## 🌐 Live Demo

> _Add your deployment link here, e.g. [downbad.ai](https://downbad.ai)_

![Downbad.ai Screenshot](screenshot.png)

---

## 🏗️ Architecture

- **Frontend:** Next.js (App Router), React, TailwindCSS
- **Solana Integration:** Wallet Adapter, web3.js
- **AI Backend:** Next.js API route using OpenAI GPT-3.5 Turbo
- **Smart Contract (optional):** Anchor framework (Rust)

---

## 📁 Folder Structure

```
/anchor           # (Optional) Solana smart contract (Rust, Anchor)
/src
  /app            # Next.js app directory (pages, API routes)
    /api/analyze  # AI analysis API route
    /dashboard    # Dashboard page
    /...          # Other app pages
  /components     # React components (Hero, Dashboard, Navbar, etc.)
  /...            # Utilities, hooks, etc.
/public           # Static assets (images, favicon, etc.)
/README.md        # This file
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js v18+
- Yarn or npm
- (Optional) Solana CLI & Anchor for smart contract development

### 1. Clone the repo
```sh
git clone https://github.com/D3TRU04/downbad-ai.git
cd downbad-ai
```

### 2. Install dependencies
```sh
npm install
# or
yarn install
```

### 3. Set up your OpenAI API key
- Copy `.env.example` to `.env` and add your OpenAI API key:
```
OPENAI_API_KEY=sk-...
```
- **Never commit your .env file!**

### 4. Run the app
```sh
npm run dev
# or
yarn dev
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧑‍💻 Usage
- Click **Connect Wallet** to connect your Solana wallet (Phantom supported).
- Click **View Dashboard** to get your AI-generated roast and Downbad Score™.
- Share your pain with friends (or enemies).

---

## 🔒 Security & Abuse Prevention
- **Wallet validation:** Only valid Solana addresses are accepted.
- **Rate limiting:** Max 5 analyses per wallet, 10 per IP per hour.
- **Payload size:** Stats payloads are limited to 1000 characters.
- **No secrets in git:** `.env` is gitignored and must never be committed.

---

## ⚙️ Tech Stack
- **Frontend:** Next.js, React, TailwindCSS
- **Solana:** Wallet Adapter, web3.js
- **AI:** OpenAI GPT-3.5 Turbo
- **Smart Contract:** Anchor (Rust, optional)

---

## 🤝 Contributing
PRs welcome! Please open an issue first to discuss major changes.

---

## 📜 License
MIT

---

## ❓ FAQ

### Is this financial advice?
> No. This app is for entertainment purposes only. If you get roasted, it's on you.

### Can I use a different wallet?
> Phantom is supported out of the box. Add more wallets in `src/components/WalletProvider.tsx` if needed.

### How do I deploy this?
> Deploy like any Next.js app (Vercel, Netlify, etc.). Make sure to set your `OPENAI_API_KEY` in the environment variables.

### How do I run the Solana smart contract?
> See the `/anchor` folder for Anchor/CLI instructions. This is optional for the AI roast features.

---

## 👤 Credits
- Built by [@D3TRU04](https://github.com/D3TRU04) and contributors
- Powered by [Solana](https://solana.com/) and [OpenAI](https://openai.com/)
