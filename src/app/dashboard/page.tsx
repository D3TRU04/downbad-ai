'use client'

import { useWallet } from "@solana/wallet-adapter-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Dashboard } from "@/components/Dashboard"
import { AuroraBackground } from "@/components/AuroraBackground"

export default function DashboardPage() {
  const { connected } = useWallet()
  const router = useRouter()

  // Redirect to home if not connected
  useEffect(() => {
    if (!connected) {
      router.push('/')
    }
  }, [connected, router])

  if (!connected) {
    return null
  }

  return (
    <>
      <AuroraBackground />
      <Dashboard />
    </>
  )
} 