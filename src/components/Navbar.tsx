'use client'

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import Link from "next/link"
import Image from "next/image"
import { useWallet } from "@solana/wallet-adapter-react"
import { useRouter } from "next/navigation"

export function Navbar() {
  const { connected } = useWallet()
  const router = useRouter()

  const goToLanding = () => {
    // Force navigation to landing page without redirect
    window.location.href = '/'
  }

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-[#F2F2F2]/20 bg-[#1A1A1A]/80">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <button onClick={goToLanding} className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Downbad.ai Logo"
              width={240}
              height={240}
              className="hover:opacity-90 transition-opacity"
            />
          </button>

          <div className="flex items-center gap-4">
            <WalletMultiButton />
          </div>
        </div>
      </div>
    </nav>
  )
} 