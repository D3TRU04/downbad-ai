'use client'

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { RefreshCw, Share2, TrendingDown, Skull, Bot } from "lucide-react"

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
        <h1 className="text-3xl font-medium gradient-text">Your Financial Trauma</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="glass p-8 rounded-2xl animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-medium">Downbad Score™</h2>
            <Skull className="w-6 h-6 text-[#F15A24]" />
          </div>
          <div className="text-6xl font-medium text-[#F15A24] mb-2 animate-pulse-slow">75%</div>
          <p className="text-[#999999]">You're pretty down bad, but not the worst we've seen.</p>
        </div>

        <div className="glass p-8 rounded-2xl animate-fade-in [animation-delay:200ms]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-medium">AI Roast</h2>
            <Bot className="w-6 h-6 text-[#F15A24]" />
          </div>
          <p className="text-[#F2F2F2] text-lg">
            "Your wallet history reads like a tragedy written by Shakespeare. 
            The only thing more volatile than your investments is your decision-making process."
          </p>
        </div>
      </div>

      <div className="glass p-8 rounded-2xl mb-8 animate-fade-in [animation-delay:400ms]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-medium">Loss Analysis</h2>
          <TrendingDown className="w-6 h-6 text-[#F15A24]" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#1A1A1A]/50 p-4 rounded-xl">
            <div className="text-sm text-[#999999] mb-1">Total Loss</div>
            <div className="text-2xl font-medium text-[#F15A24]">$42,069</div>
          </div>
          <div className="bg-[#1A1A1A]/50 p-4 rounded-xl">
            <div className="text-sm text-[#999999] mb-1">Worst Trade</div>
            <div className="text-2xl font-medium text-[#F15A24]">-89%</div>
          </div>
          <div className="bg-[#1A1A1A]/50 p-4 rounded-xl">
            <div className="text-sm text-[#999999] mb-1">Panic Sells</div>
            <div className="text-2xl font-medium text-[#F15A24]">23</div>
          </div>
          <div className="bg-[#1A1A1A]/50 p-4 rounded-xl">
            <div className="text-sm text-[#999999] mb-1">FOMO Buys</div>
            <div className="text-2xl font-medium text-[#F15A24]">47</div>
          </div>
        </div>
      </div>

      <div className="glass p-8 rounded-2xl animate-fade-in [animation-delay:600ms]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-medium">Share Your Pain</h2>
          <div className="flex items-center gap-4">
            <button className="text-[#F15A24] hover:text-[#F15A24]/90 transition-colors">
              <RefreshCw className="w-5 h-5" />
            </button>
            <button className="text-[#F15A24] hover:text-[#F15A24]/90 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="bg-[#1A1A1A]/50 p-6 rounded-xl">
          <p className="text-[#F2F2F2] text-lg">
            "In a world of diamond hands, you've mastered the art of buying high and selling low. 
            Your portfolio is a masterclass in what not to do in crypto."
          </p>
        </div>
      </div>
    </div>
  )
} 