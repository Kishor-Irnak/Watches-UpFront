import { StoreHeader } from "@/components/store-header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";

export default function SalePage() {
  // Show all products but mock them as being on sale
  const saleProducts = products.map((p) => ({
    ...p,
    price: p.price * 0.8, // 20% off
    oldPrice: p.price,
    tag: "20% OFF",
  }));

  const displayProducts = [...saleProducts, ...saleProducts];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <StoreHeader />
      <main className="flex-1">
        <PageHeader
          title="Top Sale"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Sale" }]}
        />

        <section className="container mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {displayProducts.map((product, i) => (
              <ProductCard key={`${product.id}-${i}`} {...product} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
