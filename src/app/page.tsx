'use client'

import { Hero } from "@/components/Hero"
import { Dashboard } from "@/components/Dashboard"
import { useWallet } from "@solana/wallet-adapter-react"

export default function Home() {
  const { connected } = useWallet()

  return (
    <div className="min-h-screen bg-gray-950">
      {!connected ? (
        <Hero />
      ) : (
        <Dashboard />
      )}
    </div>
  )
}
