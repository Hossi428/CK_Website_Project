"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Calendar, MessageSquare, ArrowRight } from "lucide-react"

const articles = [
  {
    id: 1,
    title: "How to Choose the Right Fertilizer for Your Crops",
    excerpt:
      "Selecting the Right Fertilizer for Crops is crucial for maximizing yield, improving soil health, and ensuring sustainable agriculture...",
    image: "/hand-holding-fertilizer-pellets-over-soil-with-gre.jpg",
    date: "April 9, 2025",
    comments: 0,
  },
  {
    id: 2,
    title: "Organic vs. Chemical Fertilizers: Pros and Cons",
    excerpt:
      "When it comes to nourishing plants and boosting crop yields, farmers and gardeners face an important choice...",
    image: "/split-image-showing-organic-compost-and-chemical-f.jpg",
    date: "April 27, 2025",
    comments: 0,
  },
  {
    id: 3,
    title: "Drip Irrigation and Fertilizer: A Smart Farming Combo",
    excerpt: "Modern agriculture demands smarter, more efficient methods to grow food while conserving resources...",
    image: "/drip-irrigation-system-watering-rows-of-crops-in-l.jpg",
    date: "April 24, 2025",
    comments: 0,
  },
  {
    id: 4,
    title: "Understanding NPK Ratios in Fertilizers",
    excerpt: "Learn how to read and apply NPK ratios for optimal crop nutrition and growth performance...",
    image: "/fertilizer-bags-showing-npk-numbers.jpg",
    date: "April 15, 2025",
    comments: 0,
  },
  {
    id: 5,
    title: "Soil Testing: Your First Step to Better Yields",
    excerpt: "Discover why soil testing is essential for precision agriculture and how to interpret your results...",
    image: "/agronomist-testing-soil-sample-in-field.jpg",
    date: "April 12, 2025",
    comments: 0,
  },
  {
    id: 6,
    title: "Micronutrients: Small Elements, Big Impact",
    excerpt: "Explore the critical role of micronutrients in plant health and how deficiencies affect crop quality...",
    image: "/healthy-vibrant-crop-leaves-close-up.jpg",
    date: "April 6, 2025",
    comments: 0,
  },
]

export function KnowledgeHubSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % articles.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const getVisibleArticles = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      visible.push(articles[(currentIndex + i) % articles.length])
    }
    return visible
  }

  return (
    <section className="bg-[#1a3a1a] py-20 relative">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-20 bg-white/30"></div>
            <h2 className="text-4xl md:text-5xl font-light text-white">CK Knowledge Hub</h2>
            <div className="h-px w-20 bg-white/30"></div>
          </div>
        </div>

        {/* Articles Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-4 lg:-translate-x-12 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors"
            aria-label="Previous articles"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-4 lg:translate-x-12 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors"
            aria-label="Next articles"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-3 gap-6 px-4">
            {getVisibleArticles().map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Article Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>

                {/* Article Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold leading-tight text-balance">{article.title}</h3>
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">{article.excerpt}</p>

                  {/* Article Meta */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-yellow-500" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4 text-yellow-500" />
                        No Comments
                      </span>
                    </div>
                    <Button size="sm" className="bg-[#6b8e23] hover:bg-[#556b1d] text-white">
                      Read... <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {articles.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-yellow-500" : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to article ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
