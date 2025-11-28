import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const families = [
  {
    id: "phytoshield",
    name: "PhytoShield™ Family",
    description:
      "The PhytoShield™ Family provides advanced solutions designed to enhance plant resilience and strengthen natural defenses against abiotic stresses. Products in this family combines phosphites, potassium, soluble silicates, and essential micronutrients with natural biostimulants like seaweed extracts and amino acids. By supporting stress tolerance, optimizing nutrient assimilation, and reinforcing structural integrity, these fertilizers help crops better adapt to climate variability while maintaining growth, productivity, and overall yield quality.",
    products: ["PhosGuard™", "TwinPhite", "ShieldSi™", "Oxidex™"],
  },
  {
    id: "amino-acids",
    name: "Amino Acids",
    description:
      "The Amino Acids Family provides targeted biostimulant solutions designed to enhance plant metabolism, nutrient uptake, and resilience against environmental stresses. By supplying essential amino acids, these products support enzymatic activity, protein synthesis, and chlorophyll formation, leading to stronger growth and improved crop performance. Suitable for foliar application or fertigation, the family promotes rapid recovery from stress, optimizes plant vigor, and contributes to higher yield quality across a wide range of crops.",
    products: ["AminoFort™ pro", "AminoFort™", "Aminoliq™", "MetaBoost™", "MetaGrowth™", "MetaVigor™"],
  },
  {
    id: "seaweed-extracts",
    name: "Seaweed Extracts Family",
    description:
      "The Seaweed Extracts Family offers natural biostimulant solutions in liquid and powdery formulations, derived from high-quality seaweed to promote healthy plant growth and improve stress resilience. Rich in natural hormones, trace elements, and polysaccharides, these products stimulate root development, enhance nutrient uptake, and boost overall crop vigor. Ideal for foliar application or fertigation, the family supports uniform growth, strengthens plant defenses against environmental stresses, and contributes to higher yields and improved crop quality across diverse agricultural systems.",
    products: [
      "KelpMax™",
      "Algavive™",
      "Algamax™",
      "AlgaICE™",
      "AlgaCream™",
      "AlgaEcklon™",
      "Algicklon™",
      "AlgaeAsco™",
      "Algamino™",
    ],
  },
]

export default function CropKeeperPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
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
          <h1 className="text-4xl md:text-5xl font-bold text-red-700">Crop Keeper™</h1>
          <p className="text-xl text-red-600 font-medium">
            Your Trusted Partner in Crop Protection and Stress Management
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-4xl text-pretty">
            Welcome to CK® Crop Keeper™ - Your Trusted Partner in Crop Protection and Stress Management. At CK® Crop
            Keeper™, we understand that healthy crops are the foundation of successful agriculture. Our Crop Keeper™
            product line is specially designed to support plant resilience and protect your harvest from biotic and
            abiotic stresses. Featuring innovative solutions, Crop Keeper™ enhances plant defense mechanisms, promotes
            stress tolerance, and helps safeguard yield quality in challenging environments. Whether you're battling
            diseases, environmental stress, or nutrient imbalances, Crop Keeper™ provides reliable, science-backed tools
            to keep your crops strong and productive from seedling to harvest.
          </p>
        </div>

        {/* Product Families Tabs */}
        <Tabs defaultValue={families[0].id} className="w-full">
          <TabsList className="w-full justify-start flex-wrap h-auto gap-2 bg-red-100/50 p-2">
            {families.map((family) => (
              <TabsTrigger
                key={family.id}
                value={family.id}
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
              >
                {family.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {families.map((family) => (
            <TabsContent key={family.id} value={family.id} className="mt-6">
              <Card className="border-red-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-red-700">{family.name}</CardTitle>
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
                          className="text-sm px-4 py-2 bg-red-100 hover:bg-red-200 text-red-800"
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
          <Card className="border-red-300 bg-gradient-to-br from-red-50 to-red-100/50 shadow-lg">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-3xl md:text-4xl font-bold text-red-700 mb-2">
                Precision Protection & Stress Management
              </CardTitle>
              <div className="h-1 w-24 bg-red-600 mx-auto rounded-full" />
            </CardHeader>
            <CardContent className="px-6 md:px-12 pb-8">
              <p className="text-base md:text-lg text-foreground leading-relaxed text-pretty">
                At CK® Crop Keeper™, we focus on protection that goes beyond the surface. Our solutions are engineered
                to support plant resilience, enhance root vitality, and activate internal defense mechanisms-especially
                under stress conditions such as drought, disease pressure, or transplant shock. With dual functionality
                as a nutrient and biostimulant, Crop Keeper™ products deliver systemic action that promotes phosphorus
                mobility, strengthens cell walls, and improves tolerance to both abiotic and biotic stress factors. The
                high purity and refined formulation ensure excellent solubility and compatibility with a wide range of
                cropping systems. By integrating optional co-formulants such as bioactive compounds, amino acids, or
                natural elicitors, CK® Crop Keeper™ is tailored for growers seeking a performance edge during critical
                crop stages or in high-pressure environments. At CK®, we are fully prepared to design customized,
                crop-specific solutions that respond to your regional challenges and evolving needs‒especially those
                posed by climate change. Whether you require advanced protection, stress tolerance, or strategic
                biostimulation, Crop Keeper™ delivers precision where your crops need it most. Trust Crop Keeper™ to
                help your crops maintain strength, resilience, and productivity-when it matters most.
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
