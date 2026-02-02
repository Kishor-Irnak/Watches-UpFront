"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Star,
  Heart,
  Share2,
  MapPin,
  MessageCircle,
  Ruler,
  Truck,
  Play,
} from "lucide-react";

import { StoreHeader } from "@/components/store-header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard } from "@/components/product-card";
import { PageHeader } from "@/components/page-header";
import { products } from "@/lib/data";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  // Related products (simple random or filtering for demo)
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <StoreHeader />
      <main className="flex-1">
        {/* Breadcrumb Header */}
        <div className="bg-[#f8f8f8] py-4 border-b border-gray-100">
          <div className="container mx-auto px-4 md:px-8 text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            <span>/</span>
            <Link href="/categories" className="hover:text-black">
              Women
            </Link>
            <span>/</span>
            <span className="text-black">{product.name}</span>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 py-12 md:py-20">
          {/* Top Section: Image & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Left: Image Gallery */}
            <div className="flex flex-col-reverse md:flex-row gap-4">
              {/* Thumbnails (Mock) */}
              <div className="flex md:flex-col gap-4 overflow-auto md:overflow-hidden">
                {[product.image, product.image, product.image].map((img, i) => (
                  <div
                    key={i}
                    className={`w-20 h-20 bg-gray-50 border ${i === 0 ? "border-black" : "border-transparent"} flex items-center justify-center cursor-pointer hover:border-black transition-colors`}
                  >
                    {img && (
                      <Image
                        src={img}
                        alt="Thumb"
                        width={50}
                        height={50}
                        className="object-contain"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 bg-[#f0f2f5] min-h-[400px] md:min-h-[600px] flex items-center justify-center relative rounded-sm">
                {/* Mock "360" icon or similar */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-white rounded-full shadow-sm hover:bg-gray-100"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                {product.image && (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-8 mix-blend-multiply"
                    priority
                  />
                )}
              </div>
            </div>

            {/* Right: Info */}
            <div className="flex flex-col justify-center">
              <div className="mb-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  {product.brand}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-playfair font-bold text-[#1c1c1c] mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  {product.id}
                </span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={`h-3 w-3 ${s <= (product.rating || 5) ? "fill-black text-black" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-2 font-bold">
                    {product.reviews} Reviews
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-8 mb-8 border-b border-gray-100 pb-8">
                <Button
                  size="lg"
                  className="rounded-full bg-[#3b55e6] hover:bg-[#2f44b8] text-white px-8 py-6 uppercase tracking-widest text-xs font-bold shadow-xl shadow-blue-200"
                >
                  Add to Bag
                </Button>
                <span className="text-2xl font-bold font-playfair">
                  ${product.price.toLocaleString()}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-xs font-bold uppercase tracking-widest text-gray-500 mb-8">
                <div className="flex items-center gap-2 hover:text-black cursor-pointer transition-colors">
                  <MapPin className="h-4 w-4" /> Locate a store near you
                </div>
                <div className="flex items-center gap-2 hover:text-black cursor-pointer transition-colors">
                  <MessageCircle className="h-4 w-4" /> Speak with an Expert
                </div>
                <div className="flex items-center gap-2 hover:text-black cursor-pointer transition-colors">
                  <Ruler className="h-4 w-4" /> Download Guide Size
                </div>
                <div className="flex items-center gap-2 hover:text-black cursor-pointer transition-colors">
                  <Truck className="h-4 w-4" /> Fast Shipping
                </div>
              </div>

              <p className="text-gray-500 leading-relaxed text-sm">
                {product.description}
              </p>
            </div>
          </div>

          {/* Middle Section: Specs & Video */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 border-t border-gray-100 pt-16">
            {/* Specs */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-sm font-bold text-[#3b55e6] uppercase tracking-widest">
                  Full Specification
                </h3>
                {/* Minimized / Expand icon placeholder */}
              </div>

              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                {product.specs?.map((spec, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-1 border-b border-gray-50 pb-4"
                  >
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                      {spec.label}
                    </span>
                    <span className="text-sm font-bold text-gray-800">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Video */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-sm font-bold text-[#3b55e6] uppercase tracking-widest">
                  Brand Video
                </h3>
              </div>

              <div className="relative w-full h-[300px] md:h-[400px] bg-black rounded-lg overflow-hidden group cursor-pointer">
                {/* Placeholder Video Thumb - reusing banner */}
                <Image
                  src="/images/banner_himalaya.png"
                  alt="Video Thumb"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#3b55e6] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 text-white ml-1 fill-white" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-widest">
                    MeisterSinger - The Single Hand Brand
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section: You May Also Like */}
          <div className="border-t border-gray-100 pt-16">
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                You May Also Like
              </h3>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full border border-gray-200 hover:bg-gray-100"
                >
                  <ArrowRight className="h-4 w-4 rotate-180" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full border border-gray-200 hover:bg-gray-100"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
