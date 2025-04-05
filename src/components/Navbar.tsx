'use client'

import Link from "next/link"
import Image from "next/image"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white">
            <Image
              src="/logo.svg"
              alt="Downbad.ai Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span>Downbad.ai</span>
          </Link>
          <div className="opacity-0 animate-fade-in">
            <WalletMultiButton className="!bg-orange-500 hover:!bg-orange-600" />
          </div>
        </div>
      </div>
    </nav>
  )
} 