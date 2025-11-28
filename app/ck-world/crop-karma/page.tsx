import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const families = [
  {
    id: "humic-acid",
    name: "Humic Acid Family",
    description:
      "This family offers high-quality humic acid products in powder and liquid formulations to enhance soil fertility and support plant nutrition. By improving nutrient availability, stimulating root development, and increasing water retention in the soil, these products help crops achieve stronger growth and better stress resilience. Ideal for incorporation into fertigation or soil amendment programs, the Humic Acid Family promotes healthier plants, more efficient nutrient uptake, and improved yield quality across a wide variety of crops.",
    products: ["Humivive™ LQ", "Humivive™ Eco LQ", "Humivive™ PW", "HumiPlus™ PW", "HumiPlus™ Eco PW"],
  },
  {
    id: "biomatrix",
    name: "BioMatrix™ Series",
    description:
      "The BioMatrix™ Series delivers advanced organic and biostimulant solutions in both liquid and powder formulations to enhance soil fertility and crop performance. Combining organic nitrogen, fulvic and humic acids, carbohydrates, and essential nutrients, these products stimulate root growth, improve nutrient uptake, and increase microbial activity in the soil. Ideal for fertigation, foliar application, or soil amendment programs, the series supports healthier, more resilient crops, optimizes growth throughout all stages, and contributes to higher yields and improved crop quality across diverse farming systems.",
    products: [
      "Nitrovive™",
      "Humi OrganiCore™",
      "LignoBoost™",
      "OrganiCharge™",
      "OrganEnriched",
      "Carbovive™",
      "Carbonitro™",
      "OrganiGrowth™",
    ],
  },
]

export default function CropKarmaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navigation />

      <main className="container py-12 md:py-20">
        {/* Back Button */}
        <Link href="/ck-world">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to CK World
          </Button>
        </Link>

        {/* Page Header */}
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-700">Crop Karma™</h1>
          <p className="text-xl text-amber-600 font-medium">Rebuilding Soil, Rooting the Future</p>
          <p className="text-muted-foreground leading-relaxed max-w-4xl text-pretty">
            Welcome to Crop Karma™ - Rebuilding Soil, Rooting the Future. The Crop Karma™ line by CK® is dedicated to
            one essential principle: healthy roots grow in living soil. This exclusive collection focuses on
            soil-applied products that directly improve soil structure, biological activity, and rooting conditions -
            laying the foundation for long-term agricultural success. The Crop Karma™ product line features soil
            conditioners, microbial activators, and biologically active compounds designed to enrich the soil
            environment, stimulate beneficial microbial flora, and enhance nutrient bioavailability. From compacted
            fields to nutrient-depleted soils, Crop Karma™ supports the restoration and biological balance of the
            rhizosphere, enabling stronger root systems and more resilient crops. Whether in open fields, orchards, or
            greenhouse systems, Crop Karma™ is the smart first step toward sustainable farming. With every application,
            you are not only feeding the soil - you are activating its full potential for years to come.
          </p>
        </div>

        {/* Product Families Tabs */}
        <Tabs defaultValue={families[0].id} className="w-full">
          <TabsList className="w-full justify-start flex-wrap h-auto gap-2 bg-amber-100/50 p-2">
            {families.map((family) => (
              <TabsTrigger
                key={family.id}
                value={family.id}
                className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
              >
                {family.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {families.map((family) => (
            <TabsContent key={family.id} value={family.id} className="mt-6">
              <Card className="border-amber-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-amber-700">{family.name}</CardTitle>
                  <CardDescription className="text-base">{family.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">Products in this family:</h3>
                    <div className="flex flex-wrap gap-2">
                      {family.products.map((product, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-sm px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-800"
                        >
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Tailored Solutions section */}
        <section className="mt-20 mb-12">
          <Card className="border-amber-300 bg-gradient-to-br from-amber-50 to-amber-100/50 shadow-lg">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-3xl md:text-4xl font-bold text-amber-700 mb-2">
                Tailored Solutions for Your Success
              </CardTitle>
              <div className="h-1 w-24 bg-amber-600 mx-auto rounded-full" />
            </CardHeader>
            <CardContent className="px-6 md:px-12 pb-8">
              <p className="text-base md:text-lg text-foreground leading-relaxed text-pretty">
                At CK® Crop Karma™, we believe that every farm, crop, and soil profile has its own unique story‒and it
                deserves a nutrient solution crafted accordingly. That's why our specialized team of agronomists and
                formulation experts is ready to develop customized water-soluble fertilizer blends tailored precisely to
                your local soil conditions and crop-specific nutritional needs. CK® Crop Karma™ delivers precision
                formulations designed to maximize nutrient uptake, boost photosynthetic efficiency, and improve yield
                performance-especially under demanding environments like those in MENA, South Asia, and Subtropical
                Regions. Our advanced formulation technology enables us to fine-tune macro- and micronutrient ratios,
                enhance solubility, and integrate bioactive compounds when needed, ensuring every granule supports soil
                fertility, plant resilience, and sustainable productivity. In addition, CK® Crop Karma™ offers fully
                customizable packaging and product formats to meet the diverse needs of both smallholders and commercial
                producers. Whether you prefer crystal, powder, or liquid formulations, we provide scalable solutions
                with packaging options suited for both manual application and mechanized farming systems. Our products
                are engineered for compatibility with all modern delivery methods‒including fertigation, foliar
                application, and soil drenching-ensuring nutrients are available exactly when and where your crops need
                them most. When you partner with CK® Crop Karma™, you're not just buying a fertilizer-you're investing
                in a tailored growth strategy rooted in agronomic insight and field performance.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t bg-gray-50 py-12 mt-20">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2025 CK® - Complete Krop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
