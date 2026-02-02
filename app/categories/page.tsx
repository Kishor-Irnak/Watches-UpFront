import { StoreHeader } from "@/components/store-header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Men's Watches",
    image: "/images/product_3.png",
    href: "/men",
    count: 24,
  },
  {
    name: "Women's Watches",
    image: "/images/product_5.png",
    href: "/women",
    count: 18,
  },
  {
    name: "Unisex Collections",
    image: "/images/product_1.png",
    href: "/categories",
    count: 12,
  },
  {
    name: "Titanium Specials",
    image: "/images/banner_himalaya.png",
    href: "/categories",
    count: 6,
  },
  {
    name: "Luxury & Gold",
    image: "/images/product_4.png",
    href: "/categories",
    count: 9,
  },
  {
    name: "Sport & Expedition",
    image: "/images/banner_expedition.png",
    href: "/categories",
    count: 15,
  },
];

export default function CategoriesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <StoreHeader />
      <main className="flex-1">
        <PageHeader
          title="Categories"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Categories" }]}
        />

        <section className="container mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                href={category.href}
                key={index}
                className="group relative block overflow-hidden bg-[#f9f9f9] min-h-[300px]"
              >
                <div className="absolute inset-0 flex items-center justify-center p-8 transition-transform duration-700 group-hover:scale-105">
                  <div className="relative w-full h-full">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-10 transition-opacity" />

                <div className="absolute bottom-6 left-6 z-10">
                  <h3 className="font-playfair text-xl font-bold uppercase mb-1">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">
                    {category.count} Products
                  </p>
                  <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600 transition-colors">
                    View Collection <ArrowRight className="ml-2 h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
