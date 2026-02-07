import Link from "next/link"
import { ArrowRight, Microscope, FlaskConical, Sprout, Globe, Target, Recycle, TestTube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AppliedSciencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <Microscope className="w-16 h-16 mx-auto text-yellow-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">CK Applied Science</h1>
            <p className="text-xl md:text-2xl text-emerald-100 font-light text-balance">From Knowledge to Field</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-emerald-200 shadow-lg">
              <CardContent className="p-8 md:p-12">
                <p className="text-lg leading-relaxed text-gray-700 mb-8">
                  At <span className="font-semibold text-emerald-700">CK® (Complete Krop)</span>, science is more than
                  research–it's how we transform knowledge into practical solutions. Our team of expert agronomists and
                  plant nutrition formulators applies cutting-edge science to create tailor-made water-soluble
                  fertilizers that align with the unique requirements of regional soils and crop-specific needs.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  This approach ensures that every grower benefits from optimized nutrition, higher yields, and
                  sustainable results.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {/* Philosophy of Tailored Nutrition */}
              <Card className="border-emerald-200 hover:border-emerald-400 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Philosophy of Tailored Nutrition</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    We believe agriculture is never one-size-fits-all. Each field, each crop, and each growing season
                    carries its own challenges. CK's Applied Science focuses on personalized plant nutrition strategies,
                    built on data, soil conditions, and crop demands.
                  </p>
                </CardContent>
              </Card>

              {/* Regional Soil Adaptation */}
              <Card className="border-emerald-200 hover:border-emerald-400 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <Globe className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Regional Soil Adaptation</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Soil is the foundation of crop performance, and no two regions are alike. Our specialists analyze
                    local soil composition, pH levels, salinity, and water quality before recommending solutions that
                    work with your land.
                  </p>
                </CardContent>
              </Card>

              {/* Crop-Specific Programs */}
              <Card className="border-emerald-200 hover:border-emerald-400 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <Sprout className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Crop-Specific Programs</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Different crops demand different strategies. High-value crops such as tomatoes, grapes, citrus, or
                    potatoes require nutrition programs adapted to their growth stages and yield goals–always with
                    precision and efficiency.
                  </p>
                </CardContent>
              </Card>

              {/* Innovation in Formulation */}
              <Card className="border-emerald-200 hover:border-emerald-400 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <FlaskConical className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Innovation in Formulation</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Our product development is driven by innovation. CK's formulations are created with advanced
                    solubility, stability, and compatibility in mind, making them ideal for fertigation and foliar
                    applications.
                  </p>
                </CardContent>
              </Card>

              {/* Sustainability & Efficiency */}
              <Card className="border-emerald-200 hover:border-emerald-400 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <Recycle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Sustainability & Efficiency</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    We see sustainability as a responsibility. CK's Applied Science approach is designed to minimize
                    nutrient losses, reduce environmental impact, and maximize resource efficiency for future
                    generations.
                  </p>
                </CardContent>
              </Card>

              {/* From Science to Field */}
              <Card className="border-emerald-200 hover:border-emerald-400 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <TestTube className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">From Science to Field: Case Insights</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Every product we deliver is backed by real-world results. Through field trials, partnerships with
                    growers, and continuous feedback, our Applied Science evolves to meet the changing needs of modern
                    agriculture. This cycle of research, application, and refinement is what makes CK solutions dynamic,
                    adaptable, and trusted worldwide.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-12 border-emerald-300 bg-gradient-to-br from-emerald-50 to-white shadow-md">
              <CardContent className="p-8 md:p-10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-4">
                  At CK®, "Our Applied Science" is more than a concept
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  It's the bridge between scientific knowledge and agricultural success. By combining expertise,
                  innovation, and regional adaptation, we empower farmers to cultivate stronger crops, healthier soils,
                  and sustainable growth.
                </p>
              </CardContent>
            </Card>

            <div className="mt-16 text-center">
              <Card className="bg-gradient-to-r from-emerald-700 to-emerald-600 border-0 shadow-xl">
                <CardContent className="p-10">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Ready to see how CK Applied Science can transform your crops?
                  </h2>
                  <p className="text-emerald-100 text-lg mb-6 max-w-2xl mx-auto">
                    Connect with our team of agronomists today and discover tailor-made nutrition programs designed for
                    your fields. Together, we'll turn knowledge into yield.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                      <Link href="/lets-connect">
                        Contact CK Experts <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="bg-white hover:bg-emerald-50 text-emerald-700 border-white"
                    >
                      <Link href="/ck-world">Explore CK World</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
