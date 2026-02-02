"use client";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  id: string;
  name: string;
  price: number;
  tag?: string;
  image?: string;
}

export function ProductCard({ id, name, price, tag, image }: ProductProps) {
  return (
    <Link
      href={`/product/${id}`}
      className="group relative flex flex-col items-center"
    >
      <div className="relative w-full aspect-3/4 bg-white mb-4 flex items-center justify-center overflow-hidden border border-gray-50">
        {/* Tag */}
        {tag && (
          <span className="absolute top-2 left-2 text-[10px] font-bold uppercase tracking-widest bg-black text-white px-2 py-1 z-20">
            {tag}
          </span>
        )}
        {/* Wishlist Icon */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-20"
          asChild
        >
          <div
            role="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            {" "}
            <Heart className="h-4 w-4" />{" "}
          </div>
        </Button>

        {/* Product Image */}
        <div className="relative w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
          {image ? (
            <Image src={image} alt={name} fill className="object-contain p-4" />
          ) : (
            <div className="w-48 h-48 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-gray-300 font-bold text-lg">WATCH</span>
            </div>
          )}
        </div>

        {/* Hover Action */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300 z-20">
          <Button className="rounded-none bg-black text-white text-xs uppercase tracking-widest px-6 py-4 h-auto hover:bg-gray-800">
            Add to Cart
          </Button>
        </div>
      </div>

      <div className="text-center flex flex-col gap-1">
        <h3 className="text-xs text-gray-900 font-serif font-bold tracking-wide uppercase group-hover:text-gray-600 transition-colors">
          {name}
        </h3>
        <span className="text-xs font-bold text-gray-500">
          ${price.toFixed(2)}
        </span>
      </div>
    </Link>
  );
}
