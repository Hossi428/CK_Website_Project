"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/hero-slide-healthy-farming.jpg",
    title: "Change for Healthy Farming",
    description:
      "At CK\u00AE \u2013 Complete Krop, we deliver precision nutrition and sustainable solutions that empower farmers to achieve optimal yields while protecting the environment.",
  },
  {
    image: "/hero-slide-soil-starting-point.jpg",
    title: "Soil as the Starting Point",
    description:
      "At CK\u00AE \u2013 Complete Krop, we know healthy farming begins with living soil. Fertile, balanced, and biologically active soil forms the foundation for resilient crops and long-term productivity.",
  },
  {
    image: "/hero-slide-fertility-vitality.jpg",
    title: "From Fertility to Vitality",
    description:
      "At CK\u00AE \u2013 Complete Krop, we turn soil fertility into plant vitality. Strong roots, balanced nutrients, and thriving biology create healthy, naturally growing plants without forcing growth.",
  },
  {
    image: "/hero-slide-vitality-resilience.jpg",
    title: "From Vitality to Resilience",
    description:
      "At CK\u00AE \u2013 Complete Krop, we nurture resilience in every plant. Robust root systems and balanced nutrition improve stress tolerance, disease resistance, and adaptability to environmental changes.",
  },
  {
    image: "/hero-slide-resilience-productivity.jpg",
    title: "From Resilience to Productivity",
    description:
      "At CK\u00AE \u2013 Complete Krop, we convert plant resilience into reliable productivity. Consistent growth and optimized nutrient use create stable, sustainable output across seasons.",
  },
  {
    image: "/hero-slide-productivity-yield.jpg",
    title: "From Productivity to Yield",
    description:
      "At CK\u00AE \u2013 Complete Krop, we transform productivity into sustainable yield. Long-term success comes from balanced systems that respect soil, plants, and the environment \u2014 not from short-term intensification.",
  },
  {
    image: "/hero-slide-ck-philosophy.jpg",
    title: "The CK\u00AE Philosophy",
    description:
      "At CK\u00AE \u2013 Complete Krop, we take a systemic approach. Our precision nutrition solutions work with natural processes to strengthen soil, support plants, and enable sustainable farming for future generations.",
  },
]

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
  }, [])

  useEffect(() => {
    const interval = setInterval(goToNext, 6000)
    return () => clearInterval(interval)
  }, [goToNext])

  return (
    <div className="absolute inset-0">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      {/* Slide text content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container relative z-10 text-white px-8 lg:px-16">
          <div className="max-w-4xl space-y-8">
            <p className="text-base md:text-lg font-medium uppercase tracking-wider text-emerald-400">
              {"CK\u00AE Your partner in smarter & tailored crop solutions"}
            </p>
            {slides.map((slide, index) => (
              <div
                key={slide.title}
                className={`transition-all duration-700 ${
                  index === currentIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 absolute pointer-events-none"
                }`}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-balance mb-6">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl leading-relaxed text-gray-100 max-w-3xl">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
