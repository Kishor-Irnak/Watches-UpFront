import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-[#fcfcfc] border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Us */}
          <div className="space-y-6">
            <h4 className="font-bold text-xs uppercase tracking-widest">
              About Us
            </h4>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
              Claritas est etiam processus dynamicus, qui sequitur mutationem
              consuetudium lectorum. Mirum est notare quam littera gothica.
            </p>
            <div className="space-y-2 text-xs text-gray-500">
              <p>221b Baker Street - London - UK</p>
              <p>(+01) 123 - 456 - 789</p>
              <p>titaniumsupport@titanium.lnk</p>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="font-bold text-xs uppercase tracking-widest">
              Support
            </h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li>
                <Link href="#" className="hover:text-black">
                  F.A.Q
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div className="space-y-6">
            <h4 className="font-bold text-xs uppercase tracking-widest">
              Account
            </h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li>
                <Link href="#" className="hover:text-black">
                  Login
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black">
                  Register
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black">
                  My Cart
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black">
                  Checkout
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="font-bold text-xs uppercase tracking-widest">
              Newsletter
            </h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              Signup to become the first receiver our latest news
            </p>
            <div className="flex w-full items-center space-x-2 relative">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white border-gray-200 text-xs h-10 pr-10 rounded-sm focus-visible:ring-0 focus-visible:border-black"
              />
              <Button
                type="submit"
                size="sm"
                variant="ghost"
                className="absolute right-0 top-0 h-10 w-10 p-0 text-black hover:bg-transparent"
              >
                <Send className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-400 hover:text-black"
            >
              <Facebook className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-400 hover:text-black"
            >
              <Twitter className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-400 hover:text-black"
            >
              <Instagram className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-400 hover:text-black"
            >
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-[10px] text-gray-500 text-center md:text-right">
            <p>&copy; Copyright 2024 Titanium. All Rights Reserved.</p>
            <p>
              Made with{" "}
              <Heart className="h-2 w-2 inline text-black fill-black" /> by
              Antigravity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
