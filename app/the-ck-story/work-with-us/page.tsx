import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Handshake, Package, Globe, Truck, Users, Award } from "lucide-react"
import Link from "next/link"

export default function WorkWithUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-700 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-8 lg:px-16 max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Work With Us</h1>
            <p className="text-xl text-emerald-50">
              Partner with CK® to bring innovative, custom-formulated agricultural solutions to your market. Together,
              we'll grow success.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-16">
        <div className="container mx-auto px-8 lg:px-16 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Partnership Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Handshake className="h-12 w-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Distribution Partners</h3>
                <p className="text-gray-700 mb-4">
                  Join our global network of distributors bringing CK® solutions to farmers worldwide.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Exclusive territorial rights</li>
                  <li>• Marketing support</li>
                  <li>• Technical training</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Package className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Private Label Solutions</h3>
                <p className="text-gray-700 mb-4">
                  Create your own branded fertilizer line with our formulation expertise.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Custom formulations</li>
                  <li>• Branded packaging</li>
                  <li>• Flexible MOQ</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Truck className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Bulk Supply Partners</h3>
                <p className="text-gray-700 mb-4">
                  Access premium formulations in bulk formats for large-scale operations.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• IBC containers</li>
                  <li>• Jumbo bags</li>
                  <li>• Custom delivery</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Agronomic Consultants</h3>
                <p className="text-gray-700 mb-4">
                  Collaborate with our team to develop region-specific crop programs.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Field trial support</li>
                  <li>• Technical resources</li>
                  <li>• Co-branding options</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Globe className="h-12 w-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">International Markets</h3>
                <p className="text-gray-700 mb-4">
                  Expand into new territories with our proven agricultural solutions.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Export assistance</li>
                  <li>• Regulatory support</li>
                  <li>• Market entry strategy</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Research Collaborations</h3>
                <p className="text-gray-700 mb-4">
                  Partner on innovative R&D projects to advance agricultural science.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Joint research</li>
                  <li>• Field testing</li>
                  <li>• Knowledge sharing</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Partner with CK */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8 lg:px-16 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Partner with CK®?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">18+ Years of Excellence</h3>
              <p className="text-gray-700 mb-6">
                Backed by Nevian Fertilizantes S.L., we bring nearly two decades of proven expertise in fertilizer
                manufacturing and agronomic innovation to every partnership.
              </p>

              <h3 className="text-xl font-bold mb-4">Custom Formulation Capabilities</h3>
              <p className="text-gray-700 mb-6">
                Our in-house team of agronomists and chemists can develop tailor-made solutions for any crop, soil, or
                climate challenge your market faces.
              </p>

              <h3 className="text-xl font-bold mb-4">Comprehensive Product Portfolio</h3>
              <p className="text-gray-700">
                From classic fertilizers to advanced biostimulants and stress tolerance enhancers, we offer complete
                agricultural solutions under one roof.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Flexible Packaging Options</h3>
              <p className="text-gray-700 mb-6">
                We accommodate diverse market needs with packaging ranging from small bottles to IBCs and jumbo formats,
                all with customization options.
              </p>

              <h3 className="text-xl font-bold mb-4">Quality Assurance & Verification</h3>
              <p className="text-gray-700 mb-6">
                Every product features our unique QR code and verification system, protecting both your brand reputation
                and your customers from counterfeits.
              </p>

              <h3 className="text-xl font-bold mb-4">Dedicated Support Team</h3>
              <p className="text-gray-700">
                Our team provides ongoing technical support, marketing materials, and agronomic guidance to help you
                succeed in your market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white">
        <div className="container mx-auto px-8 lg:px-16 max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner with CK®?</h2>
          <p className="text-xl text-emerald-50 max-w-2xl mx-auto mb-8">
            Let's discuss how we can work together to bring innovative agricultural solutions to your market. Contact us
            to explore partnership opportunities.
          </p>
          <Link href="/lets-connect">
            <Button size="lg" variant="secondary" className="bg-white text-emerald-700 hover:bg-gray-100">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
