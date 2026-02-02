import { StoreHeader } from "@/components/store-header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";

export default function MenPage() {
  const menProducts = products.filter(
    (p) => p.category === "Men" || p.category === "Unisex",
  );
  // Duplicate to fill grid
  const displayProducts = [...menProducts, ...menProducts, ...menProducts];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <StoreHeader />
      <main className="flex-1">
        <PageHeader
          title="Men's Collection"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Men" }]}
        />

        <section className="container mx-auto px-4 md:px-8 py-16">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Filter Placeholder */}
            <div className="w-full md:w-64 shrink-0 space-y-8">
              <div>
                <h3 className="font-bold text-xs uppercase tracking-widest mb-4 border-b pb-2">
                  Categories
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <a href="#" className="hover:text-black">
                      All Men's
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Luxury
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Casual
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Sport
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xs uppercase tracking-widest mb-4 border-b pb-2">
                  Price
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <a href="#" className="hover:text-black">
                      $0 - $100
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      $100 - $300
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      $300+
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
                {displayProducts.map((product, i) => (
                  <ProductCard key={`${product.id}-${i}`} {...product} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
