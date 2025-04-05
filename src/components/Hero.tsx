'use client'

import { useWallet } from "@solana/wallet-adapter-react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import Link from "next/link"
import { ArrowRight, Bot, TrendingDown, Skull } from "lucide-react"

const features = [
  {
    icon: <Bot className="w-6 h-6 text-[#F15A24]" />,
    title: "AI-generated roast",
    description: "Get roasted by our AI trained on your worst financial decisions"
  },
  {
    icon: <TrendingDown className="w-6 h-6 text-[#F15A24]" />,
    title: "Loss analysis",
    description: "Detailed breakdown of your most painful trades and investments"
  },
  {
    icon: <Skull className="w-6 h-6 text-[#F15A24]" />,
    title: "Downbad Score™",
    description: "Get your personal Downbad Score and shareable meme card"
  }
]

export function Hero() {
  const { connected } = useWallet()

  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
      {/* Background grid with gradient overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-[#1A1A1A]/80 to-[#1A1A1A]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-6 gradient-text animate-fade-in">
            Your wallet. Your trauma.<br />Our roast.
          </h1>
          <p className="text-xl text-[#999999] mb-12 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            Connect your wallet and let our AI roast your financial decisions. 
            We promise it's therapeutic (and slightly humiliating).
          </p>
          
          <div className="flex justify-center mb-20 animate-fade-in [animation-delay:400ms]">
            {!connected ? (
              <WalletMultiButton className="!bg-[#F15A24] hover:!bg-[#F15A24]/90 !text-[#F2F2F2] !font-normal !rounded-full !px-8 !py-4 !text-lg" />
            ) : (
              <Link 
                href="/dashboard" 
                className="orange-button inline-flex items-center gap-2 text-lg"
              >
                View Dashboard
                <ArrowRight className="w-5 h-5" />
              </Link>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in [animation-delay:600ms]">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="glass p-6 rounded-2xl hover:border-[#F15A24]/30 transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-medium mb-2 text-[#F2F2F2]">{feature.title}</h3>
                <p className="text-[#999999] text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 