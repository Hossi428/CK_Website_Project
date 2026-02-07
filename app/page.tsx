import { HeroCarousel } from "@/components/hero-carousel"
import { KnowledgeHubSection } from "@/components/knowledge-hub-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Leaf, Sprout, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative h-[700px] lg:h-[800px] flex items-center overflow-hidden">
          <HeroCarousel />

          <div className="container relative z-10 text-white px-8 lg:px-16">
            <div className="max-w-4xl space-y-8">
              <p className="text-base md:text-lg font-medium uppercase tracking-wider text-emerald-400">
                CK® Your partner in smarter & tailored crop solutions
              </p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-tight text-balance">
                Change for Healthy Farming
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-100 max-w-3xl">
                At CK® - Complete Krop, we deliver precision nutrition and sustainable solutions that empower farmers to
                achieve optimal yields while protecting the environment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-base px-8 py-6">
                  <Link href="/ck-world" className="flex items-center gap-2">
                    Explore CK World <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white text-base px-8 py-6"
                >
                  <Link href="/lets-connect" className="flex items-center gap-2">
                    Contact Us <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 border-t">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CK®?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Our comprehensive product lines are designed to meet every agricultural need
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Precision Nutrition</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tailored fertilizer solutions for every crop, soil type, and growing environment
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                  <Sprout className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sustainable Solutions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Environmentally responsible products that maximize efficiency and minimize impact
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Proven Performance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Field-tested products backed by agronomic expertise and scientific innovation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <div className="bg-emerald-600 rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Transform Your Farming?</h2>
              <p className="text-lg mb-8 text-emerald-50 max-w-2xl mx-auto text-pretty">
                Discover our complete range of agricultural solutions in CK World
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link href="/ck-world">
                  Explore Our Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CK Knowledge Hub Section */}
        <KnowledgeHubSection />
      </main>

      <footer className="border-t bg-gray-50 py-12">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2025 CK® - Complete Krop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
