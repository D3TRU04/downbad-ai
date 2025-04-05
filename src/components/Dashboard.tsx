'use client'

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { RefreshCw, Share2 } from "lucide-react"

// Mock data - replace with real data later
const mockData = {
  score: 84,
  roast: "You bought a JPEG and it aged like milk. Sell your wallet.",
  stats: {
    totalLoss: "$6,969",
    worstTrade: "Bought $PEPE at ATH",
    paperhandMoment: "Sold $DOGE before it pumped",
    gasBurned: "0.45 ETH"
  }
}

export function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Financial Trauma</h1>
        <WalletMultiButton className="!bg-orange-500 hover:!bg-orange-600" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900 p-6 rounded-xl animate-fade-in">
          <h2 className="text-xl font-semibold mb-4">Downbad Score</h2>
          <div className="text-4xl font-bold text-orange-500">75%</div>
          <p className="text-gray-400 mt-2">You're pretty down bad, but not the worst we've seen.</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl animate-fade-in [animation-delay:200ms]">
          <h2 className="text-xl font-semibold mb-4">AI Roast</h2>
          <p className="text-gray-300">
            "Your wallet history reads like a tragedy written by Shakespeare. 
            The only thing more volatile than your investments is your decision-making process."
          </p>
        </div>
      </div>

      {/* Downbad Score Section */}
      <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 mb-8 animate-fade-in">
        <h2 className="text-2xl font-bold mb-4">Your Downbad Score</h2>
        <div className="flex items-center justify-center">
          <div className="relative w-48 h-48">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#1f2937"
                strokeWidth="8"
              />
              {/* Progress circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="8"
                strokeDasharray={`${mockData.score * 2.83} 283`}
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold">{mockData.score}</span>
            </div>
          </div>
        </div>
        <p className="text-center mt-4 text-xl text-gray-400">
          You're down bad. Like... real bad.
        </p>
      </div>

      {/* AI Roast Panel */}
      <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 mb-8 animate-fade-in [animation-delay:200ms]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Your AI-Generated Roast</h2>
          <button className="text-orange-500 hover:text-orange-600 transition-colors">
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>
        <div className="bg-gray-800/50 p-6 rounded-xl">
          <p className="text-gray-300">{mockData.roast}</p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <span className="text-sm text-gray-400">Sarcasm Level:</span>
          <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
          </div>
        </div>
      </div>

      {/* Wallet Loss Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 animate-fade-in [animation-delay:400ms]">
        {Object.entries(mockData.stats).map(([key, value], index) => (
          <div 
            key={key}
            className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800"
          >
            <h3 className="text-sm text-gray-400 mb-2">{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
            <p className="text-xl font-semibold">{value}</p>
          </div>
        ))}
      </div>

      {/* Shareable Report Card */}
      <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 animate-fade-in [animation-delay:600ms]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Share Your Downbad Status</h2>
          <button className="flex items-center space-x-2 text-orange-500 hover:text-orange-600 transition-colors">
            <Share2 className="w-5 h-5" />
            <span>Export as PNG</span>
          </button>
        </div>
        <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 p-6 rounded-xl border border-orange-500/20">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-400">0xBEEF...4200</span>
            <span className="px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-sm">
              L Certified
            </span>
          </div>
          <div className="text-center">
            <span className="text-4xl font-bold">{mockData.score}</span>
            <p className="text-gray-400 mt-2">{mockData.roast}</p>
          </div>
        </div>
      </div>
    </div>
  )
} 