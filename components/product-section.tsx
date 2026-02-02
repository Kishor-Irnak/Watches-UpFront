import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BannerProps {
  title: string;
  subtitle?: string;
  price?: string;
  image?: string;
  align?: "left" | "right" | "center";
  bg?: "white" | "gray";
  className?: string;
}

function ProductBanner({
  title,
  subtitle,
  price,
  image,
  align = "center",
  bg = "gray",
  className,
}: BannerProps) {
  const alignClass =
    align === "left"
      ? "items-start text-left"
      : align === "right"
        ? "items-end text-right"
        : "items-center text-center";
  const bgClass = bg === "white" ? "bg-white" : "bg-[#f9f9f9]";

  return (
    <div
      className={`relative p-12 flex flex-col justify-center ${alignClass} ${bgClass} ${className} min-h-[400px] overflow-hidden group`}
    >
      <div className="z-10 flex flex-col gap-2 max-w-[200px] md:max-w-xs transition-transform duration-500 group-hover:-translate-y-2">
        {price && (
          <span className="text-gray-500 italic font-serif text-sm">
            {price}
          </span>
        )}
        {subtitle && (
          <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
            {subtitle}
          </span>
        )}
        <h3 className="text-2xl font-bold font-playfair uppercase leading-tight">
          {title}
        </h3>
        <Button
          variant="link"
          className="p-0 h-auto font-bold text-[10px] uppercase tracking-widest mt-4 w-fit"
        >
          More Detail <ArrowRight className="ml-1 h-3 w-3" />
        </Button>
      </div>

      {image && (
        <div
          className={`absolute ${align === "right" ? "left-0" : "right-0"} bottom-0 w-1/2 h-full z-0 opacity-80 group-hover:scale-110 transition-transform duration-700`}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain object-bottom md:object-bottom-right"
          />
        </div>
      )}

      {!image && (
        <div
          className={`absolute ${align === "right" ? "left-10 bottom-10" : "right-10 bottom-10"} w-40 h-40 bg-gray-200 rounded-full mix-blend-multiply opacity-50`}
        ></div>
      )}
    </div>
  );
}

export function ProductSection() {
  return (
    <section className="container mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductBanner
          title="Kobold Himalaya"
          price="From $2950.00"
          image="/images/banner_himalaya.png"
          bg="gray"
          align="left"
        />
        <ProductBanner
          title="Kobold Expedition"
          subtitle="Awesome, Luxury & Elegant"
          image="/images/banner_expedition.png"
          bg="white"
          align="right"
        />
        <ProductBanner
          title="The Horse Creative"
          subtitle="All in tonight"
          image="/images/banner_horse.png"
          bg="white"
          align="left"
        />
        <ProductBanner
          title="New Arrivals"
          subtitle="Collection 2024"
          image="/images/product_4.png"
          bg="gray"
          align="right"
        />
      </div>
    </section>
  );
}
