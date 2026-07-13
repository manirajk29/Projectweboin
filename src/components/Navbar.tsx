"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#", active: true },
  { name: "Features", href: "#" },
  { name: "About", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Blog", href: "#" },
  { name: "All pages", href: "#" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-[1240px] z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,71,255,0.05),0_4px_12px_rgba(0,0,0,0.03)] border border-white/25 py-2.5"
            : "bg-white/90 backdrop-blur-md border border-slate-100 shadow-[0_8px_32px_rgba(0,0,0,0.02)] py-3.5"
        } rounded-full`}
      >
        <div className="px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="text-brand-blue flex items-center transition-transform duration-300 group-hover:scale-105">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                className="transform -rotate-12"
              >
                <line x1="8" y1="20" x2="14" y2="4" />
                <line x1="14" y1="20" x2="20" y2="4" />
              </svg>
            </div>
            <span className="text-[20px] font-bold text-text-dark tracking-tight">
              fizens
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-[15px] font-medium transition-all duration-200 rounded-full flex items-center gap-1.5 ${
                  item.active
                    ? "bg-brand-soft-blue text-brand-blue"
                    : "text-text-gray hover:text-text-dark"
                }`}
              >
                {item.active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                )}
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden lg:block">
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-brand-blue text-white px-6 py-2.5 rounded-full font-medium text-[15px] hover:bg-brand-dark-blue transition-colors duration-200 shadow-sm shadow-brand-blue/10 flex items-center justify-center"
            >
              Contact us
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1 text-text-gray hover:text-text-dark transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-[4%] w-[92%] bg-white border border-gray-100 rounded-3xl p-6 shadow-xl z-40 lg:hidden flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-[16px] font-semibold flex items-center gap-2 ${
                    item.active
                      ? "bg-brand-soft-blue text-brand-blue"
                      : "text-text-gray hover:bg-gray-50 hover:text-text-dark"
                  }`}
                >
                  {item.active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                  )}
                  {item.name}
                </a>
              ))}
            </div>
            <hr className="border-gray-100" />
            <a
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-brand-blue text-white py-3 rounded-xl font-semibold text-center hover:bg-brand-dark-blue transition-colors duration-200 block"
            >
              Contact us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
