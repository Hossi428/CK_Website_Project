import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Globe, Award } from "lucide-react"

export default function AboutCKPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-700 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-8 lg:px-16 max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">About CK</h1>
            <p className="text-xl text-emerald-50">
              Discover the heritage, expertise, and commitment that make CK® - Complete Krop your trusted partner in
              agricultural innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-8 lg:px-16 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-700 mb-4">
                CK® - Complete Krop is a proud division of Nevian Fertilizantes S.L., a company with over 18 years of
                excellence in fertilizer manufacturing and agronomic innovation, headquartered in Puente, Granada,
                Southern Spain.
              </p>
              <p className="text-gray-700 mb-4">
                Since 2006, Nevian has built a solid reputation across Europe and international markets by offering a
                diverse portfolio of proprietary brands - from classic fertilizers to next-generation agricultural
                solutions.
              </p>
              <p className="text-gray-700">
                CK® was born from this rich legacy with a clear mission: to deliver custom-formulated agricultural
                technologies for today's dynamic climate, diverse soils, and evolving crop demands.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <Building2 className="h-12 w-12 text-emerald-600 mb-4" />
                  <h3 className="font-bold text-2xl mb-2">18+</h3>
                  <p className="text-sm text-gray-600">Years of Excellence</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Globe className="h-12 w-12 text-emerald-600 mb-4" />
                  <h3 className="font-bold text-2xl mb-2">Global</h3>
                  <p className="text-sm text-gray-600">Market Presence</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-emerald-600 mb-4" />
                  <h3 className="font-bold text-2xl mb-2">Expert</h3>
                  <p className="text-sm text-gray-600">Agronomy Team</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Award className="h-12 w-12 text-emerald-600 mb-4" />
                  <h3 className="font-bold text-2xl mb-2">Premium</h3>
                  <p className="text-sm text-gray-600">Quality Standards</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Heritage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8 lg:px-16 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Andalusian Heritage</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Rooted in the fertile lands of Southern Spain, CK® combines Andalusian farming passion with European
            precision in formulation. Our headquarters in Granada serves as the heart of our research, development, and
            production operations.
          </p>
          <p className="text-gray-700 max-w-3xl">
            This strategic location allows us to understand Mediterranean agriculture intimately while serving diverse
            climates and crops worldwide - from orchards to greenhouses, from arid zones to high-rainfall regions.
          </p>
        </div>
      </section>

      {/* Distribution Partnership */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-8 lg:px-16 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Global Distribution Partnership</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-4">
                Thanks to our exclusive distribution partnership with <strong>RONAFM S.L.</strong>, CK® products reach
                new markets with customized packaging, bulk delivery formats (IBC, Jumbo), and private labeling
                opportunities for international partners.
              </p>
              <p className="text-gray-700">
                This collaboration ensures that every grower receives the right formula, in the right form, at the right
                time - whether cultivating vineyards in Europe, orchards in the Middle East, or open-field vegetables in
                North Africa.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
