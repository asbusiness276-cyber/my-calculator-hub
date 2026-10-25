"use client";

import React, { useState, useMemo } from "react";
import { Tag, ShoppingCart, IndianRupee, Percent } from "lucide-react";

export default function DiscountCalculator() {
  const [price, setPrice] = useState<number | "">("");
  const [discount, setDiscount] = useState<number | "">("");
  const [tax, setTax] = useState<number | "">("");

  const results = useMemo(() => {
    if (price === "") return null;
    const originalPrice = Number(price);
    const discountRate = discount === "" ? 0 : Number(discount);
    const taxRate = tax === "" ? 0 : Number(tax);

    if (originalPrice < 0 || discountRate < 0 || taxRate < 0) return null;

    const savedAmount = (originalPrice * discountRate) / 100;
    const priceAfterDiscount = originalPrice - savedAmount;
    const taxAmount = (priceAfterDiscount * taxRate) / 100;
    const finalPrice = priceAfterDiscount + taxAmount;

    return {
      originalPrice,
      savedAmount,
      priceAfterDiscount,
      taxAmount,
      finalPrice,
    };
  }, [price, discount, tax]);

  const formatINR = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row">
        
        {/* Input Section */}
        <div className="bg-rose-500 p-8 md:w-5/12 relative overflow-hidden text-white flex flex-col justify-center">
          <Tag className="absolute -top-10 -right-10 w-48 h-48 text-rose-400 opacity-30 rotate-12" />
          
          <div className="flex items-center gap-3 mb-8 relative z-10">
            <ShoppingCart className="w-8 h-8 text-rose-100" />
            <h2 className="text-3xl font-bold">Discount Calculator</h2>
          </div>

          <div className="space-y-6 relative z-10">
            {/* Original Price */}
            <div>
              <label className="block text-rose-100 font-medium mb-2">Original Price</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-lg">₹</span>
                <input
                  type="number"
                  min="0"
                  value={price}
                  onChange={(e) => setPrice(e.target.value === "" ? "" : Number(e.target.value))}
                  placeholder="0.00"
                  className="w-full pl-10 pr-4 py-4 rounded-xl text-xl font-bold text-gray-900 focus:outline-none focus:ring-4 focus:ring-rose-300/50 shadow-inner"
                />
              </div>
            </div>

            {/* Discount % */}
            <div>
              <label className="block text-rose-100 font-medium mb-2">Discount (%)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-lg"><Percent className="w-5 h-5"/></span>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value === "" ? "" : Number(e.target.value))}
                  placeholder="0"
                  className="w-full pl-12 pr-4 py-4 rounded-xl text-xl font-bold text-gray-900 focus:outline-none focus:ring-4 focus:ring-rose-300/50 shadow-inner"
                />
              </div>
              <div className="flex gap-2 mt-3">
                {[10, 20, 30, 50, 75].map((d) => (
                  <button
                    key={d}
                    onClick={() => setDiscount(d)}
                    className="flex-1 py-1.5 bg-rose-600/50 hover:bg-white hover:text-rose-600 rounded-lg text-sm font-bold border border-rose-400 transition-colors"
                  >
                    {d}%
                  </button>
                ))}
              </div>
            </div>

            {/* Tax % */}
            <div>
              <label className="block text-rose-100 font-medium mb-2">Tax (%) <span className="text-rose-200 text-sm font-normal">(Optional)</span></label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-lg"><Percent className="w-5 h-5"/></span>
                <input
                  type="number"
                  min="0"
                  value={tax}
                  onChange={(e) => setTax(e.target.value === "" ? "" : Number(e.target.value))}
                  placeholder="0"
                  className="w-full pl-12 pr-4 py-3 rounded-xl text-lg font-bold text-gray-900 focus:outline-none focus:ring-4 focus:ring-rose-300/50 shadow-inner"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="p-8 md:p-12 md:w-7/12 bg-gray-50/50 flex flex-col justify-center">
          {results ? (
            <div className="space-y-6">
              
              {/* Final Price Card */}
              <div className="bg-rose-50 p-6 rounded-3xl border border-rose-200 text-center relative overflow-hidden">
                <div className="text-rose-800 font-semibold mb-2">Final Price to Pay</div>
                <div className="text-5xl font-black text-rose-600 mb-2">{formatINR(results.finalPrice)}</div>
                
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full font-bold text-sm border border-emerald-200 mt-2">
                  <Tag className="w-4 h-4" /> You Saved: {formatINR(results.savedAmount)}
                </div>
              </div>

              {/* Breakdown */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-4 border-b border-gray-100 pb-2">Calculation Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-gray-600">
                    <span>Original Price</span>
                    <span className="font-semibold">{formatINR(results.originalPrice)}</span>
                  </div>
                  <div className="flex justify-between items-center text-emerald-600">
                    <span>Discount Amount ({discount || 0}%)</span>
                    <span className="font-semibold">- {formatINR(results.savedAmount)}</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-800 border-t border-dashed border-gray-200 pt-2">
                    <span className="font-medium">Price After Discount</span>
                    <span className="font-bold">{formatINR(results.priceAfterDiscount)}</span>
                  </div>
                  {results.taxAmount > 0 && (
                    <div className="flex justify-between items-center text-rose-500">
                      <span>Tax Amount ({tax}%)</span>
                      <span className="font-semibold">+ {formatINR(results.taxAmount)}</span>
                    </div>
                  )}
                </div>
              </div>

            </div>
          ) : (
            <div className="text-center text-gray-400 py-12 flex flex-col items-center">
              <ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
              <p className="text-lg font-medium">Enter the original price to see your savings.</p>
            </div>
          )}
        </div>
      </div>

      {/* AdSense Space */}
      <div className="mt-8 w-full h-[250px] bg-gray-100 border border-gray-200 border-dashed rounded-xl flex items-center justify-center text-gray-400">
        [AdSense Placement]
      </div>
    </div>
  );
}