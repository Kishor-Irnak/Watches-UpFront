import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";

export function PopularItems() {
  return (
    <section className="container mx-auto px-4 md:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold font-playfair uppercase tracking-wide mb-8">
          Popular Items
        </h2>

        <Tabs defaultValue="new" className="w-full flex flex-col items-center">
          <TabsList className="bg-transparent border-b border-gray-100 w-full justify-center gap-8 rounded-none h-auto p-0 mb-8">
            <TabsTrigger
              value="new"
              className="bg-transparent rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:shadow-none p-4 text-xs font-bold tracking-widest uppercase text-gray-500 data-[state=active]:text-black"
            >
              New Arrivals
            </TabsTrigger>
            <TabsTrigger
              value="bestsellers"
              className="bg-transparent rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:shadow-none p-4 text-xs font-bold tracking-widest uppercase text-gray-500 data-[state=active]:text-black"
            >
              Best Sellers
            </TabsTrigger>
            <TabsTrigger
              value="featured"
              className="bg-transparent rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:shadow-none p-4 text-xs font-bold tracking-widest uppercase text-gray-500 data-[state=active]:text-black"
            >
              Featured Items
            </TabsTrigger>
            <TabsTrigger
              value="sale"
              className="bg-transparent rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:shadow-none p-4 text-xs font-bold tracking-widest uppercase text-gray-500 data-[state=active]:text-black"
            >
              Sale Off
            </TabsTrigger>
          </TabsList>

          <TabsContent value="new" className="w-full mt-0">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {products.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          </TabsContent>
          {/* Reuse same products for demo purposes */}
          <TabsContent value="bestsellers" className="w-full mt-0">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {products.slice(0, 4).map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="featured" className="w-full mt-0">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {products.slice(1, 5).map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="sale" className="w-full mt-0">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {products.slice(0, 3).map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
