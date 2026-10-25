"use client";
import React, { useState, useRef, useEffect } from "react";
import { Search, Calculator, ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { CalculatorMeta } from "@/lib/calculators";

export default function HomeSearch({ calculators }: { calculators: CalculatorMeta[] }) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = query.trim().length > 0 
    ? calculators.filter(c => 
        c.title.toLowerCase().includes(query.toLowerCase()) || 
        c.description.toLowerCase().includes(query.toLowerCase()) ||
        c.slug.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8)
    : [];

  return (
    <div ref={containerRef} className="w-full max-w-2xl mx-auto relative text-left">
      <div className="relative shadow-2xl rounded-full">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
          <Search className="h-6 w-6 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-14 pr-12 py-5 rounded-full border-2 border-white bg-white focus:outline-none focus:ring-4 focus:ring-blue-300 text-gray-900 text-lg font-bold placeholder-gray-400 transition-all shadow-xl"
          placeholder="Search 250+ calculators (e.g. SIP, EMI, Salary, BMI)..."
          value={query}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
        />
        {query.length > 0 && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            className="absolute inset-y-0 right-0 pr-5 flex items-center text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Dropdown Results */}
      {isOpen && query.trim().length > 0 && (
        <div className="absolute w-full mt-3 bg-white border border-gray-200 rounded-3xl shadow-2xl z-50 max-h-96 overflow-y-auto overflow-hidden divide-y divide-gray-100">
          {filtered.length > 0 ? (
            <ul className="py-2">
              {filtered.map((calc) => (
                <li key={calc.id}>
                  <Link 
                    href={`/${calc.slug}`} 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-6 py-3.5 hover:bg-blue-50/80 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <Calculator className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-base">
                          {calc.title.split(" -")[0].replace("Free ", "").replace(" 2026", "")}
                        </div>
                        <div className="text-xs text-gray-500 line-clamp-1 max-w-md">
                          {calc.description}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-8 text-center">
              <p className="text-gray-600 font-medium mb-2">No matching calculators found for "{query}"</p>
              <Link
                href="/category"
                onClick={() => setIsOpen(false)}
                className="text-sm text-blue-600 font-bold hover:underline"
              >
                Browse all categories &rarr;
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}