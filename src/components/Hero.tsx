'use client'

import { useWallet } from "@solana/wallet-adapter-react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import Link from "next/link"
import { ArrowRight, Bot, TrendingDown, Skull } from "lucide-react"

const features = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: "AI-generated roast report",
    description: "Get roasted by our AI trained on your worst financial decisions"
  },
  {
    icon: <TrendingDown className="w-6 h-6" />,
    title: "Loss analysis of your wallet",
    description: "Detailed breakdown of your most painful trades and investments"
  },
  {
    icon: <Skull className="w-6 h-6" />,
    title: "Downbad Score + meme card",
    description: "Get your personal Downbad Score and shareable meme card"
  }
]

export function Hero() {
  const { connected } = useWallet()

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight animate-fade-in">
          Your wallet. Your trauma.{" "}
          <span className="text-orange-500">Our roast.</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in [animation-delay:200ms]">
          Connect your wallet and let our AI roast your financial decisions. 
          We promise it's therapeutic (and slightly humiliating).
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in [animation-delay:400ms]">
          {!connected ? (
            <WalletMultiButton className="!bg-orange-500 hover:!bg-orange-600 !text-white !font-medium !rounded-full !px-6 !py-3" />
          ) : (
            <Link 
              href="/dashboard" 
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              View Dashboard
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
} 