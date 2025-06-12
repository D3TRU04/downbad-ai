'use client'

import { Github, Twitter } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-[#F2F2F2]/20 bg-[#1A1A1A]/80 backdrop-blur-md py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[#F2F2F2]/60 font-normal">Built with</span>
            <span className="text-[#F15A24]">♥</span>
            <span className="text-[#F2F2F2]/60 font-normal">by Downbad.ai</span>
          </div>
          
          <div className="flex items-center gap-6">
            <Link 
              href="https://x.com/d3tru04" 
              target="_blank"
              className="text-[#F2F2F2]/60 hover:text-[#F15A24] transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link 
              href="https://github.com/D3TRU04/downbad-ai" 
              target="_blank"
              className="text-[#F2F2F2]/60 hover:text-[#F15A24] transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 