import { StoreHeader } from "@/components/store-header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Watchmaking: A History of Precision",
    excerpt:
      "Discover the intricate history behind the movements that power our lives. From the first pocket watches to the modern automatic chronographs.",
    image: "/images/banner_himalaya.png",
    date: "Oct 12, 2024",
    author: "Admin",
    category: "History",
  },
  {
    id: 2,
    title: "Why Leather Straps Are Making a Comeback",
    excerpt:
      "In a world of smartwatches and silicone bands, the classic leather strap returns as a symbol of elegance and timeless style.",
    image: "/images/banner_expedition.png",
    date: "Sep 28, 2024",
    author: "Editor",
    category: "Trends",
  },
  {
    id: 3,
    title: "Choosing Your First Luxury Timepiece",
    excerpt:
      "A comprehensive guide for the new collector. Understand what makes a watch 'luxury' and how to pick one that suits your lifestyle.",
    image: "/images/hero_2.png",
    date: "Sep 15, 2024",
    author: "Admin",
    category: "Guides",
  },
  {
    id: 4,
    title: "Titanium vs. Stainless Steel: What's Best?",
    excerpt:
      "We compare the two most popular metals in watchmaking. Strength, weight, and aesthetics - finding the perfect material for you.",
    image: "/images/hero_3.png",
    date: "Aug 30, 2024",
    author: "Tech Team",
    category: "Materials",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <StoreHeader />
      <main className="flex-1">
        <PageHeader
          title="Our Blog"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        />

        <section className="container mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="flex flex-col gap-4 group">
                <div className="relative w-full h-[300px] overflow-hidden bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-4 text-xs text-gray-400 uppercase tracking-widest">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" /> {post.author}
                    </span>
                  </div>
                  <h2 className="text-2xl font-playfair font-bold hover:text-gray-600 transition-colors cursor-pointer">
                    <Link href="#">{post.title}</Link>
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-widest mt-2 hover:underline"
                  >
                    Read More <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Mock */}
          <div className="flex justify-center mt-16 gap-2">
            <button className="w-10 h-10 border border-black bg-black text-white text-xs font-bold flex items-center justify-center">
              1
            </button>
            <button className="w-10 h-10 border border-gray-200 text-gray-500 hover:border-black hover:text-black text-xs font-bold flex items-center justify-center transition-colors">
              2
            </button>
            <button className="w-10 h-10 border border-gray-200 text-gray-500 hover:border-black hover:text-black text-xs font-bold flex items-center justify-center transition-colors">
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
