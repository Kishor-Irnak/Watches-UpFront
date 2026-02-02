import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
}

export function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="bg-[#f8f8f8] py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold uppercase mb-4">
          {title}
        </h1>
        <div className="flex justify-center items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-500">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="h-3 w-3" />}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-black transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-black">{crumb.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
