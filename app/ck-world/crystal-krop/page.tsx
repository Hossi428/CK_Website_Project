import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const families = [
  {
    id: "pre-planting",
    name: "Pre-planting Family",
    description:
      "The Pre-planting Family brings together essential base fertilizers that secure a strong nutritional foundation for crops right from the start. This group of products deliver key macronutrients like nitrogen, phosphorus, and sulfur in highly available forms, ensuring vigorous early root development and balanced soil fertility. Designed for incorporation before sowing, this family helps optimize seedbed conditions, support uniform germination, and set the stage for higher yields throughout the growing season.",
    products: ["AMN", "MAP", "DAP", "AMS", "AMS Gr", "SSP"],
  },
  {
    id: "npks",
    name: "NPKS Family",
    description:
      "This range offers a complete selection of NPK fertilizers enriched with significant sulfur content, designed to improve nutrient availability in alkaline soils and irrigation water. Available in different physical forms - solid, liquid, powder, crystal, and granular - these formulations adapt to diverse application systems and crop needs. By combining balanced nutrition with enhanced sulfur supply, they promote efficient uptake, vigorous growth, and improved yield quality across a wide spectrum of crops.",
    products: [
      "NPKS Crys™",
      "NPKS NCrys™",
      "NPKS PCrys™",
      "NPKS NKCrys™",
      "NPKS KCrys™",
      "NPKS Gr™",
      "NPKS NGr™",
      "NPKS NSGr™",
      "NPKS NKGr™",
    ],
  },
  {
    id: "crystalline-npk",
    name: "Crystalline NPK Family",
    description:
      "This family includes fully water-soluble NPK formulations developed for precise fertigation and foliar application. With balanced ratios of nitrogen, phosphorus, and potassium, along with complementary elements such as magnesium and sulfur, these products ensure efficient nutrient uptake and rapid response in intensive cropping systems. Their high purity and complete solubility make them ideal for optimizing fertigation programs, supporting strong vegetative growth, uniform fruit set, and higher yields.",
    products: ["NPK Crys™", "NPK crysN™", "NPK crysP™", "NPK crys™", "YieldPro™ SMg", "YieldPro™ Cryst"],
  },
  {
    id: "powdery-npk",
    name: "Powdery NPK Family",
    description:
      "This group of fully soluble powder formulations delivers balanced nutrition with the flexibility to adapt to different crop stages and application systems. From general-purpose blends to crop- and stage-specific solutions, these fertilizers provide precise ratios of nitrogen, phosphorus, potassium, and micronutrients to maximize efficiency in fertigation and foliar programs. Their ease of handling, rapid solubility, and tailored formulas support stronger growth, improved fruit development, and higher-quality yields across a wide range of crops.",
    products: [
      "YieldPro™ Lite",
      "YieldPro™ FertiPro™",
      "YieldPro™ TE",
      "YieldPro™ FoliarPro™",
      "YieldPro™ RipenFast™",
      "Ngrow™",
      "Balance",
      "TriBalance™",
      "PhosIgniter™",
    ],
  },
  {
    id: "nutrigrow",
    name: "NutriGrow™ Family",
    description:
      "The NutriGrow™ Family provides a versatile range of NPK fertilizers in multiple ratios, designed to meet the diverse nutritional needs of crops throughout their growth cycle. Available in liquid and powder formulations, these products ensure efficient nutrient uptake, balanced development, and improved crop vigor. By combining essential macronutrients with complementary elements, they support robust vegetative growth, optimize flowering and fruit set, and enhance overall yield quality. Flexible in application, NutriGrow™ fertilizers adapt to both foliar and fertigation programs, delivering reliable performance across a wide range of cropping systems.",
    products: [
      "NutriGrow™ (GrowthMax™)",
      "NutriGrow™ (GreenBoost™)",
      "NutriGrow™ (Pitch™)",
      "NutriGrow™ (GreenRise™)",
      "NutriGrow™ (BioGrow™)",
      "NutriGrow™ (KSGrow™)",
      "NutriGrow™ (KalGrow™)",
      "NutriGrow™ (Vgrow™)",
      "NutriGrow™ (PowerYield™)",
      "NutriGrow™ (AllRound™)",
      "NPLiq™",
    ],
  },
  {
    id: "bivalent",
    name: "Bivalent Family",
    description:
      "The Bivalent Family offers a range of specialized fertilizers delivering one or two essential nutrients in highly available forms to address specific crop needs. This family ensures targeted nutrient supply for optimal plant development. Available in powder, crystal, granular, and liquid formulations, these fertilizers support root growth, strengthen plant structure, enhance stress tolerance, and improve overall yield quality, providing flexible solutions for a wide range of crops and soil conditions.",
    products: [
      "Urea Phosphate",
      "GrowMax™",
      "MKP",
      "KaliumS™",
      "PotaSulf™",
      "KalMagic™",
      "MagPro™ Hepta",
      "CalBoost™",
      "Calcium nitrate",
      "CalBoost™ CANS™",
    ],
  },
  {
    id: "trivalent",
    name: "Trivalent Family",
    description:
      "The Trivalent Family brings together specialized fertilizers that combine three essential nutrients in a single formulation, providing targeted support for balanced crop nutrition. These products deliver magnesium, sulfur, calcium, and micronutrients like boron and manganese to strengthen plant structure, improve nutrient uptake, and enhance stress resilience. Designed for precise application, these solutions optimize vegetative growth, flowering, and fruit quality, helping growers achieve consistent and higher yields across diverse cropping systems.",
    products: ["CalMagSul™", "MagBoronS™", "SulfoMag B-Mn™"],
  },
]

export default function CrystalKropPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
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
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-700">Crystal Krop™</h1>
          <p className="text-xl text-emerald-600 font-medium">Precision Meets Performance in Plant Nutrition</p>
          <p className="text-muted-foreground leading-relaxed max-w-4xl text-pretty">
            Welcome to Crystal Krop™ - where precision meets performance in plant nutrition. At CK®, we recognize that
            every crop, soil type, and growing environment is unique. That's why the Crystal Krop™ portfolio offers a
            comprehensive range of premium water-soluble NPKs, dual and triple nutrient formulations, and primary and
            secondary macronutrients in powder, crystal, and liquid forms. Our fertilizers are engineered to deliver
            balanced, efficient, and tailored nutrition, ensuring optimal uptake, enhanced crop growth, and superior
            yield quality–whether for fruits, vegetables, or field crops. Driven by sustainable agriculture and
            innovation, Crystal Krop™ products leverage advanced nutrient technologies that maximize efficiency while
            minimizing environmental impact. Partner with CK® and unlock the full potential of your crops with
            fertilizers designed to empower today's growth and meet the challenges of tomorrow.
          </p>
        </div>

        {/* Product Families Tabs */}
        <Tabs defaultValue={families[0].id} className="w-full">
          <TabsList className="w-full justify-start flex-wrap h-auto gap-2 bg-emerald-100/50 p-2">
            {families.map((family) => (
              <TabsTrigger
                key={family.id}
                value={family.id}
                className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
              >
                {family.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {families.map((family) => (
            <TabsContent key={family.id} value={family.id} className="mt-6">
              <Card className="border-emerald-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-emerald-700">{family.name}</CardTitle>
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
                          className="text-sm px-4 py-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-800"
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

        {/* Tailored Solutions for Your Success Section */}
        <section className="mt-20 mb-12">
          <Card className="border-emerald-300 bg-gradient-to-br from-emerald-50 to-emerald-100/50 shadow-lg">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-3xl md:text-4xl font-bold text-emerald-700 mb-2">
                Tailored Solutions for Your Success
              </CardTitle>
              <div className="h-1 w-24 bg-emerald-600 mx-auto rounded-full" />
            </CardHeader>
            <CardContent className="px-6 md:px-12 pb-8">
              <p className="text-base md:text-lg text-foreground leading-relaxed text-pretty">
                At CK® Crystal Krop™ line, we understand that every crop and growing environment is unique. That's why
                our expert formulation team is fully equipped to develop specialized water-soluble fertilizer blends
                tailored precisely to your soil characteristics and specific crop requirements. Whether you need
                balanced NPK blends like 18-18-18, 20-20-20, or crop-stage specific formulas such as 13-40-13 for
                flowering or 15-5-30 for fruit development, we customize solutions to optimize nutrient uptake and
                maximize yield. Our advanced formulation capabilities enable us to adjust nutrient ratios, incorporate
                essential micronutrients, and deliver high-purity crystal fertilizers that perform exceptionally under
                diverse conditions-especially in challenging climates like those found in MENA and Asia. Partner with
                CK® Crystal Krop™ to receive premium, tailor-made fertilizers designed to boost crop health, enhance
                soil fertility, and increase your farm's productivity with precision and reliability.
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
