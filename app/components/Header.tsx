"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart/cart-context";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { items } = useCart();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { href: "/browse", label: "Browse" },
    { href: "/upload", label: "Upload Score" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-[#111622] text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logonobg.png"
              alt="Sheet Music Africa Logo"
              width={48}
              height={48}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-[#ee9418]">
              Sheet Music Africa
            </span>
          </Link>
          <div className="hidden md:flex space-x-4 items-center">
            {menuItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className="text-white hover:text-[#ee9418]"
                asChild
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
            <Button
              variant="outline"
              className="text-[#ee9418] border-[#ee9418] hover:bg-[#ee9418] hover:text-white"
              asChild
            >
              <Link href="/auth">Login / Register</Link>
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-[#ee9418] relative"
              asChild
            >
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-2 -right-2 bg-[#ee9418] text-[#111622]"
                  >
                    {itemCount}
                  </Badge>
                )}
              </Link>
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              className="text-white hover:text-[#ee9418] relative mr-2"
              asChild
            >
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-2 -right-2 bg-[#ee9418] text-[#111622]"
                  >
                    {itemCount}
                  </Badge>
                )}
              </Link>
            </Button>
            <Button
              variant="ghost"
              onClick={toggleMenu}
              className="text-white hover:text-[#ee9418]"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#111622] border-t border-gray-700"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  className="text-white hover:text-[#ee9418] justify-start"
                  asChild
                >
                  <Link href={item.href} onClick={toggleMenu}>
                    {item.label}
                  </Link>
                </Button>
              ))}
              <Button
                variant="outline"
                className="text-[#ee9418] border-[#ee9418] hover:bg-[#ee9418] hover:text-white justify-start"
                asChild
              >
                <Link href="/auth" onClick={toggleMenu}>
                  Login / Register
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
