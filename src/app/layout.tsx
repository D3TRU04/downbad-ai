import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { WalletProviderWrapper } from "@/components/WalletProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Downbad.ai - Your wallet. Your trauma. Our roast.",
  description: "Connect your wallet and let our AI roast your financial decisions. We promise it's therapeutic (and slightly humiliating).",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <WalletProviderWrapper>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </WalletProviderWrapper>
      </body>
    </html>
  )
}
