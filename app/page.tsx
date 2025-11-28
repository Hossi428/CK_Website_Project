import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Leaf, Sprout, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Navigation />

      <main>
        <section className="bg-emerald-600 py-6">
          <div className="container">
            <p className="text-center text-white text-xl md:text-2xl font-semibold tracking-wide">
              CK® Your partner in smarter & tailored crop solutions.
            </p>
          </div>
        </section>

        {/* Hero Section */}
        <section className="container py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Change for <span className="text-emerald-600">Healthy Farming</span>
              </h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                At CK® - Complete Krop, we deliver precision nutrition and sustainable solutions that empower farmers to
                achieve optimal yields while protecting the environment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/ck-world">
                    Explore CK World <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/fresh-vegetables-and-fruits-in-heart-shape-on-farm.jpg"
                alt="Healthy farming produce"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container py-20 border-t">
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
        </section>

        {/* CTA Section */}
        <section className="container py-20">
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
        </section>
      </main>

      <footer className="border-t bg-gray-50 py-12">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2025 CK® - Complete Krop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
