"use client";
import * as React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const heroSlides = [
  {
    title: "Unisex \n Leather",
    subtitle: "For Your Luxury & Elegant",
    description:
      "Experience the perfect blend of minimalist design and premium craftsmanship with our signature leather series.",
    image: "/images/hero_1.png",
  },
  {
    title: "Modern \n Classics",
    subtitle: "Sophistication redefined",
    description:
      "A precision-engineered timepiece that complements your professional and casual style with ease.",
    image: "/images/hero_2.png",
  },
  {
    title: "Vintage \n Automatic",
    subtitle: "Timeless Precision",
    description:
      "An homage to classic horology, featuring a mechanical movement that captures the essence of luxury.",
    image: "/images/hero_3.png",
  },
];

export function HeroSection() {
  return (
    <section className="w-full bg-[#f8f8f8] py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <Carousel opts={{ loop: true }} className="w-full">
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="flex flex-col items-start gap-4 md:pl-12">
                    <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
                      {slide.subtitle}
                    </span>
                    <h1 className="font-playfair text-4xl sm:text-5xl md:text-7xl font-bold leading-tight uppercase whitespace-pre-line">
                      {slide.title}
                    </h1>
                    <p className="text-gray-500 max-w-md text-sm leading-relaxed mb-4">
                      {slide.description}
                    </p>
                    <Button
                      variant="outline"
                      className="rounded-full px-8 py-6 border-black text-black hover:bg-black hover:text-white transition-all uppercase tracking-widest text-xs font-bold"
                    >
                      Discover Now <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                  <div className="flex justify-center items-center relative h-[400px] md:h-[600px] w-full">
                    <div className="relative w-full h-full flex items-center justify-center z-10 p-8">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority={index === 0}
                      />
                    </div>
                    {/* Graphic Element */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-gray-200 z-0"></div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
