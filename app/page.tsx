import { StoreHeader } from "@/components/store-header";
import { HeroSection } from "@/components/hero-section";
import { ProductSection } from "@/components/product-section";
import { PopularItems } from "@/components/popular-items";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <StoreHeader />

      <main className="flex-1">
        <HeroSection />

        <ProductSection />

        <PopularItems />

        {/* Parallax / Highlight Section */}
        <section className="w-full bg-[#f6f6f6] py-20 relative overflow-hidden">
          {/* Background Graphic */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-black blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="flex justify-center">
              <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-white rounded-full flex items-center justify-center shadow-2xl overflow-hidden p-8 group">
                <Image
                  src="/images/product_3.png"
                  alt="Kobold Himalaya"
                  fill
                  className="object-contain transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold uppercase mb-4">
                Kobold Himalaya
              </h2>
              <span className="w-12 h-1 bg-black mb-6 block mx-auto md:mx-0"></span>
              <p className="text-gray-500 max-w-md mb-8 leading-relaxed text-sm">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis.
              </p>
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 border-black text-black hover:bg-black hover:text-white transition-all uppercase tracking-widest text-xs font-bold"
              >
                Discover Now <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </div>
          </div>
        </section>

        {/* Brand Section */}
        <section className="container mx-auto px-4 md:px-8 py-16">
          <div className="flex flex-wrap justify-between items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500 gap-8">
            {["BRAND", "BRAND", "BRAND", "BRAND", "BRAND"].map((b, i) => (
              <div
                key={i}
                className="text-3xl font-bold font-playfair tracking-widest border px-8 py-4 w-full md:w-auto text-center hover:bg-black hover:text-white transition-colors cursor-pointer"
              >
                {b}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
