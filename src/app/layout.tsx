import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { WalletProviderWrapper } from "@/components/WalletProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Downbad.ai - Your wallet. Your trauma. Our roast.",
  description: "Discover how financially wrecked you really are.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <WalletProviderWrapper>
          <div className="min-h-screen bg-gray-950 text-white">
            <Navbar />
            <main className="pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </WalletProviderWrapper>
      </body>
    </html>
  )
}
