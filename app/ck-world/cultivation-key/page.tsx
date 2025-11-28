import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const families = [
  {
    id: "anti-salinity",
    name: "Anti-Salinity Concepts",
    description:
      "The Anti-Salinity Concepts provide specialized solutions designed to help crops cope with saline soils, enhancing resilience and maintaining productivity under stress conditions. These products improve osmotic balance, protect cellular metabolism, and support nutrient uptake, reducing the negative impact of excess salts. Suitable for fertigation applications, they strengthen plant defenses, promote healthy growth, and ensure consistent yields even in challenging environmental conditions. Available in liquid and powdery formulations, these concepts offer flexible solutions tailored to diverse crops and farming systems.",
    products: ["SaltBlock™", "SaltBlock™ Plus"],
  },
  {
    id: "chelated-fe",
    name: "Chelated-Fe Family",
    description:
      "The Chelated-Fe Family provides advanced iron fertilizers in powdery, liquid, and microgranular formulations, designed for optimal iron availability and uptake. Featuring chelation technologies such as EDTA, EDTDHA, EDDHA, and lignosulfonates, these products prevent and correct iron deficiencies even in challenging soils with high pH or calcareous conditions. By ensuring efficient iron supply, they support chlorophyll synthesis, enhance photosynthesis, and improve overall plant vigor and yield quality. Suitable for foliar, fertigation, or soil application, the family offers flexible solutions to maintain healthy, productive crops across a variety of growing systems.",
    products: ["PrimeFer™", "EdgeFer™", "EdgeFer™ Advance", "FeTriple™", "FeMaxED™", "Feligno™"],
  },
  {
    id: "npk-tech",
    name: "NPK Tech. Family",
    description:
      "The NPK Tech. Family offers advanced nutrient solutions designed to provide precise and efficient crop nutrition. This family combines balanced NPK ratios with essential micronutrients like iron, manganese, zinc, copper, boron, and molybdenum. Some formulations include innovative components, such as urease inhibitors, to improve nitrogen use efficiency. Available in liquid, suspension, and granular forms, these fertilizers optimize nutrient uptake, promote uniform growth, and support higher yields, making them suitable for diverse crops and intensive cultivation systems.",
    products: ["BasePrimeS™ UI", "BasePrimeS-Plus™ UI", "3Equaliq Fert™", "YieldProKal™"],
  },
  {
    id: "ph-conditioners",
    name: "pH Conditioners",
    description:
      "The pH Conditioners Family offers targeted solutions to optimize soil and nutrient solution pH, enhancing nutrient availability and improving crop performance. These products are formulated to balance acidity and alkalinity, supporting efficient uptake of key nutrients like nitrogen and sulfur. Available in liquid forms, these conditioners are suitable for fertigation or foliar applications, providing flexible solutions that maintain optimal growing conditions and promote healthy, uniform plant development.",
    products: ["Bufferizer™", "pH Optimizer™"],
  },
  {
    id: "root-enhancers",
    name: "Root Enhancers",
    description:
      "The Root Enhancers Family provides specialized solutions in liquid and powdery formulations to stimulate robust root development and improve overall plant health. The family combine humic and fulvic acids with key nutrients like potassium to enhance nutrient availability, boost soil microbial activity, and strengthen root architecture. By promoting deeper and more efficient root systems, these products help crops absorb nutrients more effectively, recover quickly from stress, and achieve stronger growth and higher yields across a variety of soil conditions.",
    products: ["RootVive™", "RootVive™ Ultra Eco"],
  },
  {
    id: "n-tech",
    name: "N Tech. Family",
    description:
      "The N Tech. Family delivers advanced nitrogen fertilizer solutions designed to maximize nitrogen use efficiency and minimize environmental impact. Featuring urease inhibitor technology, these products reduce nitrogen losses through volatilization, ensuring more nitrogen reaches the crop. Available in liquid and granular formulations, they provide flexible application options for diverse cropping systems, supporting vigorous growth, improved protein content, and higher yields while promoting sustainable nitrogen management.",
    products: ["UreaTech™", "UreaTech™Gr", "UreSafe™"],
  },
  {
    id: "innovative-concepts",
    name: "Innovative Concepts",
    description:
      "The Innovative Concepts Family provides cutting-edge solutions in both liquid and powdery formulations, designed to combine balanced nutrition with biostimulant benefits. Products such as PistaLoad™, MagElite™, and KelpAmin™ integrate macronutrients, micronutrients, polycarboxylic acids, amino acids, and seaweed extracts to optimize plant growth, enhance nutrient uptake, and stimulate physiological processes for both general crop health and specific crop requirements. By supporting root development, stress resilience, and overall crop vigor, these advanced formulations enable growers to achieve higher yields, improved quality, and consistent performance across a variety of cropping systems.",
    products: ["PistaLoad™", "MagElite™", "KelpAmin™"],
  },
]

export default function CultivationKeyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
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
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700">Cultivation Key™</h1>
          <p className="text-xl text-blue-600 font-medium">Unlock the Full Potential of Your Soil and Crops</p>
          <p className="text-muted-foreground leading-relaxed max-w-4xl text-pretty">
            Welcome to Cultivation Key™ at CK® – Complete Krop, we proudly introduce Cultivation Key™, a specialized
            product line crafted to unlock the full potential of your soil and crops. Designed with precision science
            and field-proven performance, each solution in the Cultivation Key™ series addresses critical agronomic
            challenges - ranging from salinity stress and nutrient deficiency to soil structure recovery and root zone
            activation. Whether you're a grower in high-demand commercial agriculture or sustainable horticulture,
            Cultivation Key™ offers the strategic tools to cultivate healthier plants, optimize resource efficiency, and
            secure higher yields - all while safeguarding the vitality of your soil for seasons to come.
          </p>
        </div>

        {/* Product Families Tabs */}
        <Tabs defaultValue={families[0].id} className="w-full">
          <TabsList className="w-full justify-start flex-wrap h-auto gap-2 bg-blue-100/50 p-2">
            {families.map((family) => (
              <TabsTrigger
                key={family.id}
                value={family.id}
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                {family.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {families.map((family) => (
            <TabsContent key={family.id} value={family.id} className="mt-6">
              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-700">{family.name}</CardTitle>
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
                          className="text-sm px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800"
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
          <Card className="border-blue-300 bg-gradient-to-br from-blue-50 to-blue-100/50 shadow-lg">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
                Tailored Solutions for Your Success
              </CardTitle>
              <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full" />
            </CardHeader>
            <CardContent className="px-6 md:px-12 pb-8">
              <p className="text-base md:text-lg text-foreground leading-relaxed text-pretty">
                At CK® Cultivation Key™, we understand that the path to productive and sustainable agriculture begins
                with precision. Every crop, climate, and soil condition requires a solution that goes beyond the
                standard–a strategic approach. That's why our team of expert agronomists and plant nutrition formulators
                is dedicated to developing tailor-made water-soluble fertilizer solutions, carefully adapted to your
                regional soils and crop-specific needs. CK® Cultivation Key™ delivers high-efficiency formulations
                designed to enhance nutrient absorption, stimulate plant vitality, and maximize field performance, even
                in challenging environments across the Middle East, South Asia, and tropical zones. Our advanced
                formulation systems ensure optimal macro- and micronutrient balance, rapid solubility, and the
                possibility of integrating bioactive enhancers, amino acids, or biostimulants to meet the unique goals
                of your cultivation plan. We also offer flexible product formats and packaging options, ranging from
                crystalline powders to high-purity liquids, ideal for growers of all scales. Whether you're managing
                precision fertigation, foliar feeding, or soil application, our products are engineered for maximum
                compatibility and performance. Choosing CK® Cultivation Key™ means gaining more than a product-it's
                gaining access to a full-spectrum plant nutrition strategy rooted in science, built for results, and
                adapted to your success.
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
