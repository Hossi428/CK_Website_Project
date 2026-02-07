"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { CKWorldMegaMenu } from "@/components/ck-world-mega-menu"
import { productLines } from "@/data/product-lines"
import { ArrowRight, ChevronDown } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [ckStoryOpen, setCkStoryOpen] = useState(false)
  const [ckStoryMobileOpen, setCkStoryMobileOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLAnchorElement>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!ckStoryOpen) return

      if (e.key === "Escape") {
        setCkStoryOpen(false)
        triggerRef.current?.focus()
      } else if (e.key === "ArrowDown") {
        e.preventDefault()
        const firstItem = dropdownRef.current?.querySelector("a")
        if (firstItem) (firstItem as HTMLElement).focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [ckStoryOpen])

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [])

  const handleMenuKeyDown = (e: React.KeyboardEvent) => {
    const items = dropdownRef.current?.querySelectorAll("a")
    if (!items) return

    const currentIndex = Array.from(items).findIndex((item) => item === document.activeElement)

    if (e.key === "ArrowDown") {
      e.preventDefault()
      const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0
      ;(items[nextIndex] as HTMLElement).focus()
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1
      ;(items[prevIndex] as HTMLElement).focus()
    } else if (e.key === "Escape") {
      setCkStoryOpen(false)
      triggerRef.current?.focus()
    }
  }

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
    }
    setCkStoryOpen(true)
  }

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setCkStoryOpen(false)
    }, 150)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-40 items-center justify-between">
        <Link href="/" className="flex flex-col items-center gap-2.5 px-6">
          <Image
            src="/ck-logo.png"
            alt="CK - Complete Krop"
            width={340}
            height={102}
            className="h-20 w-auto"
            priority
          />
          <span className="text-sm text-emerald-600 font-medium whitespace-nowrap leading-tight">
            CK® Your partner in smarter & tailored crop solutions
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Home
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <CKWorldMegaMenu />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link
              ref={triggerRef}
              href="/the-ck-story"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1"
              aria-expanded={ckStoryOpen}
              aria-controls="ck-story-menu"
              aria-haspopup="true"
            >
              The CK Story
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${ckStoryOpen ? "rotate-180" : ""}`} />
            </Link>

            {ckStoryOpen && (
              <div
                id="ck-story-menu"
                ref={dropdownRef}
                role="menu"
                className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur rounded-xl shadow-lg border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                onKeyDown={handleMenuKeyDown}
              >
                <Link
                  href="/the-ck-story/about-ck"
                  role="menuitem"
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors focus:bg-emerald-50 focus:text-emerald-700 focus:outline-none"
                  tabIndex={0}
                >
                  About CK
                </Link>
                <Link
                  href="/the-ck-story/mission-values"
                  role="menuitem"
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors focus:bg-emerald-50 focus:text-emerald-700 focus:outline-none"
                  tabIndex={0}
                >
                  Our Mission & Values
                </Link>
                <Link
                  href="/the-ck-story/work-with-us"
                  role="menuitem"
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors focus:bg-emerald-50 focus:text-emerald-700 focus:outline-none"
                  tabIndex={0}
                >
                  Work With Us
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/our-applied-science"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Our Applied Science
          </Link>
          <Link
            href="/ck-knowledge-hub"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            CK Knowledge Hub
          </Link>
          <Link
            href="/lets-connect"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Let's Connect
          </Link>

          <Link
            href="/verify-your-product"
            className="text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 px-6 py-2.5 rounded transition-colors flex items-center gap-2"
          >
            Verify Your Product
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>

        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12M6 12h16" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t bg-white">
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

            <div>
              <button
                onClick={() => setCkStoryMobileOpen(!ckStoryMobileOpen)}
                className="text-sm font-medium hover:text-emerald-600 transition-colors flex items-center gap-1 w-full text-left"
                aria-expanded={ckStoryMobileOpen}
              >
                The CK Story
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${ckStoryMobileOpen ? "rotate-180" : ""}`}
                />
              </button>
              {ckStoryMobileOpen && (
                <div className="pl-4 flex flex-col gap-2 mt-2">
                  <Link
                    href="/the-ck-story"
                    className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Overview
                  </Link>
                  <Link
                    href="/the-ck-story/about-ck"
                    className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    About CK
                  </Link>
                  <Link
                    href="/the-ck-story/mission-values"
                    className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Our Mission & Values
                  </Link>
                  <Link
                    href="/the-ck-story/work-with-us"
                    className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Work With Us
                  </Link>
                </div>
              )}
            </div>

            <Link href="/our-applied-science" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Our Applied Science
            </Link>
            <Link href="/lets-connect" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Let's Connect
            </Link>
            <Link
              href="/verify-your-product"
              className="text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 px-6 py-2.5 rounded transition-colors flex items-center gap-2"
            >
              Verify Your Product
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
