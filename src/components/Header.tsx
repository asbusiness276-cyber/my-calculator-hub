"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Sparkles } from "lucide-react";
import { calculators } from "@/lib/calculators";
import { getCategoryTheme } from "@/lib/category-theme";
import BrandLogo from "@/components/ui/BrandLogo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Group calculators by category
  const groupedCalculators = calculators.reduce((acc, calc) => {
    const cat = calc.category || "Daily Utility & Math";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(calc);
    return acc;
  }, {} as Record<string, typeof calculators>);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-xs border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Brand Logo with Colorful Squircle Badge */}
        <BrandLogo size="md" variant="light" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 font-medium text-gray-700">
          
          {/* Calculators Dropdown */}
          <div 
            className="relative" 
            ref={dropdownRef} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold transition-all focus:outline-none ${
                isOpen 
                  ? "bg-indigo-50 text-indigo-700" 
                  : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              }`}
            >
              <span>Calculators</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180 text-indigo-600" : "text-gray-400"}`} />
            </button>

            {/* Dropdown Menu with bridging hit zone */}
            {isOpen && (
              <div 
                className="absolute top-full -right-20 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-200"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Invisible hover bridge to eliminate gap */}
                <div className="absolute -top-3 left-0 right-0 h-5 w-full bg-transparent" />

                <div className="w-[880px] max-h-[82vh] overflow-y-auto bg-white border border-gray-100 rounded-3xl shadow-2xl p-7 grid grid-cols-3 gap-6 relative">
                  
                  {Object.entries(groupedCalculators).map(([category, calcs]) => {
                    const theme = getCategoryTheme(category);
                    const categorySlug = category.toLowerCase().replace(/ /g, "-").replace(/&/g, "and");
                    return (
                      <div key={category} className="space-y-2 p-3 rounded-2xl hover:bg-gray-50/70 transition-colors">
                        <div className="border-b border-gray-100 pb-2">
                          <Link 
                            href={`/category/${categorySlug}`}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between group no-underline"
                          >
                            <span className="flex items-center gap-2">
                              <span className={`w-2 h-2 rounded-full ${theme.pillGradient} bg-gradient-to-r`} />
                              <span className="text-xs font-bold text-gray-900 group-hover:text-indigo-600 uppercase tracking-wider transition-colors truncate max-w-[170px]">
                                {category}
                              </span>
                            </span>
                            <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded-md ${theme.badgeClass}`}>
                              {calcs.length}
                            </span>
                          </Link>
                        </div>
                        <ul className="space-y-1.5 pt-1">
                          {calcs.slice(0, 4).map(calc => (
                            <li key={calc.slug}>
                              <Link 
                                href={`/${calc.slug}`} 
                                onClick={() => setIsOpen(false)}
                                className="text-gray-600 hover:text-indigo-600 text-xs hover:translate-x-0.5 transition-all block truncate"
                              >
                                {calc.title.split(" -")[0].replace("Free ", "").replace(" 2026", "")}
                              </Link>
                            </li>
                          ))}
                          <li className="pt-1">
                            <Link
                              href={`/category/${categorySlug}`}
                              onClick={() => setIsOpen(false)}
                              className={`text-xs font-bold ${theme.textPrimary} hover:underline inline-flex items-center gap-1`}
                            >
                              Explore all {calcs.length} tools &rarr;
                            </Link>
                          </li>
                        </ul>
                      </div>
                    );
                  })}
                  <div className="col-span-full pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-500" /> 260+ free calculation engines across 10 categories.
                    </span>
                    <Link
                      href="/category"
                      onClick={() => setIsOpen(false)}
                      className="text-indigo-600 font-bold hover:underline"
                    >
                      View All Categories Directory &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/category" className="text-sm hover:text-indigo-600 transition-colors">Categories</Link>
          <Link href="/articles" className="text-sm hover:text-indigo-600 transition-colors">Articles</Link>
          <Link href="/author" className="text-sm hover:text-indigo-600 transition-colors flex items-center gap-1">
            <span>Author</span>
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
          </Link>
          <Link href="/about" className="text-sm hover:text-indigo-600 transition-colors">About Us</Link>
          <Link href="/contact" className="text-sm hover:text-indigo-600 transition-colors">Contact</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-700 p-2 rounded-xl hover:bg-gray-100 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-5 space-y-5 max-h-[85vh] overflow-y-auto shadow-2xl absolute w-full left-0 z-50">
          <div className="space-y-4">
            {Object.entries(groupedCalculators).map(([category, calcs]) => {
              const theme = getCategoryTheme(category);
              const categorySlug = category.toLowerCase().replace(/ /g, "-").replace(/&/g, "and");
              return (
                <div key={category} className="space-y-2 p-3 rounded-2xl bg-gray-50/70 border border-gray-100">
                  <div className="flex items-center justify-between">
                    <Link 
                      href={`/category/${categorySlug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xs font-black text-gray-900 uppercase tracking-wider hover:text-indigo-600 transition-colors flex items-center gap-1.5"
                    >
                      <span className={`w-2 h-2 rounded-full ${theme.pillGradient} bg-gradient-to-r`} />
                      <span>{category}</span>
                    </Link>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${theme.badgeClass}`}>
                      {calcs.length}
                    </span>
                  </div>
                  <ul className="space-y-1.5 pl-2 border-l-2 border-gray-200">
                    {calcs.slice(0, 4).map(calc => (
                      <li key={calc.slug}>
                        <Link 
                          href={`/${calc.slug}`} 
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-gray-600 hover:text-indigo-600 text-xs py-0.5 truncate"
                        >
                          {calc.title.split(" -")[0].replace("Free ", "").replace(" 2026", "")}
                        </Link>
                      </li>
                    ))}
                    {calcs.length > 4 && (
                      <li className="pt-0.5">
                        <Link
                          href={`/category/${categorySlug}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`text-xs font-bold ${theme.textPrimary} block hover:underline`}
                        >
                          + View all {calcs.length} tools &rarr;
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="pt-4 border-t border-gray-200 flex flex-col gap-3 font-semibold text-sm">
            <Link href="/category" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 hover:text-indigo-600">All Categories Directory</Link>
            <Link href="/articles" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 hover:text-indigo-600">Educational Articles</Link>
            <Link href="/author" onClick={() => setIsMobileMenuOpen(false)} className="text-indigo-600 font-bold">Author Profile (Saahil)</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 hover:text-indigo-600">About Us</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 hover:text-indigo-600">Contact Support</Link>
          </div>
        </div>
      )}
    </header>
  );
}
