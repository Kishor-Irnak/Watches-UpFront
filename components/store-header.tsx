import Link from "next/link";
import { Search, ShoppingCart, User, Heart, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
import { navLinks } from "@/lib/data";

export function StoreHeader() {
  return (
    <div className="w-full flex flex-col">
      {/* Top Bar */}
      <div className="w-full bg-[#1a1a1a] text-white text-[10px] py-2 px-4 md:px-8 flex-col gap-2 md:flex-row flex justify-between items-center tracking-widest uppercase">
        <div className="flex gap-4">
          <span>Language: ENG</span>
          <span>Currency: USD</span>
        </div>
        <div className="flex gap-4 items-center flex-wrap justify-center">
          <Link href="/login" className="hover:text-gray-300">
            Login
          </Link>
          <Link href="/register" className="hover:text-gray-300">
            Register
          </Link>
          <Link href="/wishlist" className="hover:text-gray-300">
            Wishlist
          </Link>
          <Link href="/account" className="hover:text-gray-300">
            Account
          </Link>
          <div className="flex items-center gap-1 text-red-400">
            <ShoppingCart className="h-3 w-3" />
            <span>2 Items - $239.00</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="w-full border-b bg-white py-6">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 border-2 border-black rounded-full flex items-center justify-center">
              <span className="font-playfair text-2xl font-bold">M</span>
            </div>
            <div className="flex flex-col">
              <span className="font-playfair text-2xl font-bold tracking-tight">
                Titanium.
              </span>
              <span className="text-[8px] tracking-[0.2em] text-gray-500 uppercase">
                Watches 2024
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors font-sans"
              >
                {link.name}
              </Link>
            ))}
            <Button variant="ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] sm:w-[400px] bg-white"
              >
                <div className="flex flex-col gap-8 mt-8">
                  <Link href="/" className="flex items-center gap-2">
                    <div className="h-8 w-8 border-2 border-black rounded-full flex items-center justify-center">
                      <span className="font-playfair text-xl font-bold">M</span>
                    </div>
                    <span className="font-playfair text-xl font-bold tracking-tight">
                      Titanium.
                    </span>
                  </Link>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors border-b border-gray-100 pb-2"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-gray-500">
                    <Link href="/login">Login</Link>
                    <Link href="/register">Register</Link>
                    <Link href="/wishlist">Wishlist</Link>
                    <Link href="/account">Account</Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}
