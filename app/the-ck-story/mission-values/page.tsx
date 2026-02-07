import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Leaf, BookOpen, Lightbulb } from "lucide-react"

export default function MissionValuesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-700 to-emerald-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/modern-agricultural-research-laboratory-with-green.jpg"
            alt="Agricultural innovation"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-700/80" />
        <div className="container relative mx-auto px-8 lg:px-16 max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Our Mission & Values</h1>
            <p className="text-xl text-emerald-50 leading-relaxed">
              Guided by purpose, driven by science, and committed to empowering growers with smarter, sustainable
              solutions that transform agriculture.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-8 lg:px-16 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-4 border-b-2 border-emerald-200">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At CK®, our mission is to empower growers, agronomists, and agricultural professionals with smarter and
              tailored crop solutions — built on science, sustainability, and shared progress. We believe every crop,
              every region, and every farmer deserves a solution designed for their unique needs. Our goal is to connect
              innovation with practicality, helping you achieve consistent performance and measurable outcomes across
              every season.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 lg:px-16 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Row - 3 cards */}
            <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="pt-8 pb-8">
                <Target className="h-12 w-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Applied Science First</h3>
                <p className="text-gray-700">
                  Science drives everything we do. We bridge the gap between laboratory insights and real-field
                  applications, ensuring every CK® solution is grounded in proven agronomic performance.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="pt-8 pb-8">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Partnership over Transaction</h3>
                <p className="text-gray-700">
                  We view every collaboration as a partnership — not just a business exchange. Building long-term
                  relationships based on trust, shared goals, and mutual growth.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="pt-8 pb-8">
                <Leaf className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Sustainability in Action</h3>
                <p className="text-gray-700">
                  Our approach emphasizes efficient resource use, reduced chemical dependency, and environmental
                  resilience for agriculture that protects our planet.
                </p>
              </CardContent>
            </Card>

            {/* Second Row - 2 cards centered using col-span-3 wrapper with flexbox */}
            <div className="md:col-span-3 flex flex-col md:flex-row justify-center gap-8">
              <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1 md:w-[calc(33.333%-1rem)]">
                <CardContent className="pt-8 pb-8">
                  <BookOpen className="h-12 w-12 text-amber-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Knowledge as a Force Multiplier</h3>
                  <p className="text-gray-700">
                    Through the CK Knowledge Hub, we deliver continuous education, data insights, and expert dialogue to
                    amplify your agricultural success.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1 md:w-[calc(33.333%-1rem)]">
                <CardContent className="pt-8 pb-8">
                  <Lightbulb className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Innovation with Purpose</h3>
                  <p className="text-gray-700">
                    Every new formula, technology, or method must have a clear purpose: improving yield quality,
                    enhancing resilience, or optimizing cost efficiency.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Agriculture */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="container mx-auto px-8 lg:px-16 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Commitment to the Future</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur border-emerald-200">
              <CardContent className="pt-8 pb-8">
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  At CK®, we're cultivating a future where data, science, and sustainability converge — standing by our
                  partners, challenging limits, and redefining what modern agriculture can achieve responsibly and
                  intelligently.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white">
        <div className="container mx-auto px-8 lg:px-16 max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-6">Complete Krop, Complete Konfidence™</h2>
          <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
            At CK®, our mission and values aren't just words - they're the foundation of every product we create and
            every partnership we build. Join us in cultivating a more sustainable, productive future for agriculture.
          </p>
        </div>
      </section>
    </div>
  )
}
