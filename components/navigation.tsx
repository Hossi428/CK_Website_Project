"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { CKWorldMegaMenu } from "@/components/ck-world-mega-menu"
import { productLines } from "@/data/product-lines"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center gap-8">
        <Link href="/" className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm">
          <Image src="/ck-logo.png" alt="CK - Complete Krop" width={180} height={50} className="h-12 w-auto" priority />
        </Link>

        <nav className="hidden md:flex flex-1 items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Home
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <CKWorldMegaMenu />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/ck-knowledge-hub" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            CK Knowledge Hub
          </Link>
          <Link href="/the-ck-story" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            The CK Story
          </Link>
          <Link href="/our-applied-science" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Our Applied Science
          </Link>
          <Link href="/lets-connect" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Let's Connect
          </Link>
          <Link
            href="/verify-product"
            className="text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md transition-colors"
          >
            Verify Your Product
          </Link>
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container py-4 flex flex-col gap-4">
            <Link href="/" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <div>
              <div className="text-sm font-medium mb-2">CK World</div>
              <div className="pl-4 flex flex-col gap-2">
                {productLines.map((line) => (
                  <Link
                    key={line.name}
                    href={line.href}
                    className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors"
                  >
                    {line.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/ck-knowledge-hub" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              CK Knowledge Hub
            </Link>
            <Link href="/the-ck-story" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              The CK Story
            </Link>
            <Link href="/our-applied-science" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Our Applied Science
            </Link>
            <Link href="/lets-connect" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Let's Connect
            </Link>
            <Link
              href="/verify-product"
              className="text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md transition-colors inline-block"
            >
              Verify Your Product
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
