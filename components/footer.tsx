import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Section - Logo and Navigation */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="flex items-center">
              <div className="relative w-20 h-20">
                <Image src="/ck-logo-white.png" alt="CK Logo" fill className="object-contain" />
              </div>
            </Link>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/" className="hover:text-emerald-400 transition-colors">
                Home
              </Link>
              <Link href="/ck-world" className="hover:text-emerald-400 transition-colors">
                CK Word
              </Link>
              <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                Let's Connect
              </Link>
              <Link href="/science" className="hover:text-emerald-400 transition-colors">
                Our Applied Science
              </Link>
            </nav>
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-yellow-400 rounded"></div>
              <div className="w-8 h-8 bg-yellow-400 rounded"></div>
            </div>
          </div>

          {/* Center Section - Verification Message and Button */}
          <div className="flex flex-col items-center gap-4 px-4">
            <p className="text-base leading-relaxed text-center">
              Check the authenticity of your product easily: every CK® package comes with a unique QR code and
              verification code on the back.
            </p>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6">
              Verify Your Product
            </Button>
          </div>

          {/* Right Section - Badge Only */}
          <div className="flex flex-col items-center md:items-end">
            <div className="relative w-32 h-32">
              <Image src="/ronafm-badge.png" alt="RonaFM Distributor" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Strip */}
      <div className="bg-emerald-600 py-3">
        <div className="container mx-auto px-4 text-center text-sm">Copyright © 2023 CK. All rights reserved.</div>
      </div>
    </footer>
  )
}
