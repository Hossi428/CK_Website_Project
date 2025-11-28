import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const products = [
  "SRP Eco",
  "CalFort™",
  "BorEtha™",
  "BFort™",
  "ZnFort™",
  "MicroFort™",
  "K-Vantage™",
  "K Blast™",
  "Kcliq™",
  "NitroMax™",
  "NitroMax™ Plus",
  "NitroPlus™",
  "NitroAmino™",
  "NitroSulfix™",
  "NitraMag™",
  "BoroMax™",
  "NutriTrace™",
  "MolyBor Active™",
  "ZincoSul™",
  "SulFe™",
  "FerroSul™ Pro",
  "ZincoMan™",
  "ManSul™",
  "FMZPrime™",
  "CuPro™",
  "CopperS™",
  "MagBorS™",
]

export default function CropKitPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
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
          <h1 className="text-4xl md:text-5xl font-bold text-violet-700">Crop Kit™</h1>
          <p className="text-xl text-violet-600 font-medium">Integrated Solutions for Crop Performance</p>
          <p className="text-muted-foreground leading-relaxed max-w-4xl text-pretty">
            Welcome to CK® Crop Kit™ – Integrated Solutions for Crop Performance. At CK®, we know that successful
            cultivation depends on more than just individual products - it requires smart integration, precision, and
            adaptability. That's why we proudly introduce CK® Crop Kit™, a comprehensive line of synergistic input
            solutions, including single elements (Ca, Mg, Zn, etc.) and micronutrient formulations, designed to work
            together throughout the entire crop cycle. From soil preparation and seedling establishment to vegetative
            growth and fruiting, each Crop Kit™ provides tailored nutrient programs that simplify decision-making and
            maximize crop productivity. Whether you're managing open-field agriculture or high-tech greenhouses, CK®
            Crop Kit™ delivers practical, easy-to-apply solutions backed by agronomic expertise and field-proven
            results. Unlock the full potential of your crops - kit by kit.
          </p>
        </div>

        {/* Products */}
        <Card className="border-violet-200 bg-white">
          <CardHeader>
            <CardTitle className="text-2xl text-violet-700">Our Complete Product Range</CardTitle>
            <CardDescription className="text-base">
              A comprehensive collection of {products.length} specialized nutrient solutions for every stage of crop
              development
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {products.map((product, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-sm px-4 py-2 bg-violet-100 hover:bg-violet-200 text-violet-800"
                >
                  {product}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tailored Solutions section */}
        <section className="mt-20 mb-12">
          <Card className="border-violet-300 bg-gradient-to-br from-violet-50 to-violet-100/50 shadow-lg">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-3xl md:text-4xl font-bold text-violet-700 mb-2">
                Elemental Precision for Modern Agriculture
              </CardTitle>
              <div className="h-1 w-24 bg-violet-600 mx-auto rounded-full" />
            </CardHeader>
            <CardContent className="px-6 md:px-12 pb-8">
              <p className="text-base md:text-lg text-foreground leading-relaxed text-pretty">
                At CK® Crop Kit™, we deliver precision at the elemental level. Our single-nutrient and micronutrient
                solutions are formulated to address the specific deficiencies that compromise plant health and
                productivity-offering targeted support exactly where and when it's needed. Each product in the Crop Kit™
                line is developed with high-purity raw materials and optimized for rapid solubility, full
                bioavailability, and system compatibility-whether applied through fertigation, foliar feeding, or direct
                soil use. From Calcium and Magnesium to essential trace elements like Zinc, Iron, Manganese, Boron, and
                Copper, every formulation is calibrated to integrate seamlessly into your crop management plan. Built
                for accuracy and efficiency, CK® Crop Kit™ products empower growers to fine-tune nutrient delivery,
                correct imbalances, and support critical growth functions-from root development to flowering and fruit
                set. We also offer flexible product formats and packaging options, ranging from crystalline powders to
                high-purity liquids, ideal for growers of all scales. Whether you're managing precision fertigation,
                foliar feeding, or soil application, our products are engineered for maximum compatibility and
                performance. Choosing CK® Crop Kit™ means gaining more than a product-it's gaining access to a
                full-spectrum plant nutrition strategy rooted in science, built for results, and adapted to your
                success. Choosing CK® Crop Kit™ means choosing elemental precision-backed by agronomic insight and
                engineered to perform under the demanding conditions of modern agriculture.
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
