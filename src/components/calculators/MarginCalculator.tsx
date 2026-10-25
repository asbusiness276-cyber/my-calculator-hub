"use client";

import React, { useState, useEffect } from "react";
import { TrendingUp, Briefcase, Percent, IndianRupee, ArrowRightLeft } from "lucide-react";

export default function MarginCalculator() {
  const [mode, setMode] = useState<"standard" | "reverse">("standard");
  
  // Standard Mode State
  const [costStr, setCostStr] = useState<string>("");
  const [revenueStr, setRevenueStr] = useState<string>("");
  
  // Reverse Mode State
  const [revCostStr, setRevCostStr] = useState<string>("");
  const [targetMarginStr, setTargetMarginStr] = useState<string>("");

  // Results
  const [results, setResults] = useState<{
    grossProfit: number;
    margin: number;
    markup: number;
    sellingPrice?: number;
  } | null>(null);

  useEffect(() => {
    if (mode === "standard") {
      if (costStr === "" || revenueStr === "") {
        setResults(null);
        return;
      }
      const cost = Number(costStr);
      const revenue = Number(revenueStr);
      if (cost < 0 || revenue < 0) return;

      const grossProfit = revenue - cost;
      const margin = revenue > 0 ? (grossProfit / revenue) * 100 : 0;
      const markup = cost > 0 ? (grossProfit / cost) * 100 : 0;

      setResults({ grossProfit, margin, markup });
    } else {
      if (revCostStr === "" || targetMarginStr === "") {
        setResults(null);
        return;
      }
      const cost = Number(revCostStr);
      const targetMargin = Number(targetMarginStr);
      if (cost < 0 || targetMargin < 0 || targetMargin >= 100) return;

      // Margin = (Revenue - Cost) / Revenue
      // Revenue * Margin = Revenue - Cost
      // Cost = Revenue - Revenue * Margin
      // Cost = Revenue * (1 - Margin)
      // Revenue = Cost / (1 - Margin)
      const marginDecimal = targetMargin / 100;
      const sellingPrice = cost / (1 - marginDecimal);
      const grossProfit = sellingPrice - cost;
      const markup = cost > 0 ? (grossProfit / cost) * 100 : 0;

      setResults({ grossProfit, margin: targetMargin, markup, sellingPrice });
    }
  }, [mode, costStr, revenueStr, revCostStr, targetMarginStr]);

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
        <div className="bg-emerald-700 p-8 md:w-5/12 relative overflow-hidden text-white flex flex-col">
          <TrendingUp className="absolute -bottom-10 -left-10 w-64 h-64 text-emerald-600 opacity-30" />
          
          <div className="flex justify-between items-center mb-8 relative z-10">
            <div className="flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-emerald-200" />
              <h2 className="text-2xl font-bold">Margin Calculator</h2>
            </div>
          </div>

          <div className="flex bg-emerald-800 p-1 rounded-xl mb-6 relative z-10">
            <button
              onClick={() => setMode("standard")}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-bold transition-all ${
                mode === "standard" ? "bg-white text-emerald-700 shadow-sm" : "text-emerald-100 hover:text-white"
              }`}
            >
              Calculate Margin
            </button>
            <button
              onClick={() => setMode("reverse")}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-1 ${
                mode === "reverse" ? "bg-white text-emerald-700 shadow-sm" : "text-emerald-100 hover:text-white"
              }`}
            >
              Find Selling Price
            </button>
          </div>

          <div className="space-y-6 relative z-10">
            {mode === "standard" ? (
              <>
                <div>
                  <label className="block text-emerald-100 font-medium mb-2">Cost Price (₹)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-lg">₹</span>
                    <input
                      type="number" min="0" value={costStr}
                      onChange={(e) => setCostStr(e.target.value)}
                      placeholder="0.00"
                      className="w-full pl-10 pr-4 py-3 rounded-xl text-lg font-bold text-gray-900 focus:outline-none focus:ring-4 focus:ring-emerald-400/50 shadow-inner"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-emerald-100 font-medium mb-2">Revenue / Selling Price (₹)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-lg">₹</span>
                    <input
                      type="number" min="0" value={revenueStr}
                      onChange={(e) => setRevenueStr(e.target.value)}
                      placeholder="0.00"
                      className="w-full pl-10 pr-4 py-3 rounded-xl text-lg font-bold text-gray-900 focus:outline-none focus:ring-4 focus:ring-emerald-400/50 shadow-inner"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-emerald-100 font-medium mb-2">Cost Price (₹)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-lg">₹</span>
                    <input
                      type="number" min="0" value={revCostStr}
                      onChange={(e) => setRevCostStr(e.target.value)}
                      placeholder="0.00"
                      className="w-full pl-10 pr-4 py-3 rounded-xl text-lg font-bold text-gray-900 focus:outline-none focus:ring-4 focus:ring-emerald-400/50 shadow-inner"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-emerald-100 font-medium mb-2">Desired Profit Margin (%)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-lg"><Percent className="w-5 h-5"/></span>
                    <input
                      type="number" min="0" max="99.9" value={targetMarginStr}
                      onChange={(e) => setTargetMarginStr(e.target.value)}
                      placeholder="0"
                      className="w-full pl-12 pr-4 py-3 rounded-xl text-lg font-bold text-gray-900 focus:outline-none focus:ring-4 focus:ring-emerald-400/50 shadow-inner"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Results Section */}
        <div className="p-8 md:p-12 md:w-7/12 bg-gray-50/50 flex flex-col justify-center">
          {results ? (
            <div className="space-y-6">
              
              {mode === "reverse" && (
                <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-200 text-center relative overflow-hidden shadow-sm">
                  <div className="text-emerald-800 font-semibold mb-2">Required Selling Price</div>
                  <div className="text-5xl font-black text-emerald-600 mb-2">{formatINR(results.sellingPrice || 0)}</div>
                  <div className="text-emerald-600/80 text-sm font-medium">To achieve a {results.margin.toFixed(1)}% margin</div>
                </div>
              )}

              {mode === "standard" && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-200 text-center shadow-sm">
                    <div className="text-emerald-800 font-semibold mb-1 text-sm">Profit Margin</div>
                    <div className="text-4xl font-black text-emerald-600">{results.margin.toFixed(2)}%</div>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-3xl border border-blue-200 text-center shadow-sm">
                    <div className="text-blue-800 font-semibold mb-1 text-sm">Markup</div>
                    <div className="text-4xl font-black text-blue-600">{results.markup.toFixed(2)}%</div>
                  </div>
                </div>
              )}

              {/* Gross Profit Card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Gross Profit</h3>
                  <p className="text-gray-500 text-sm">Revenue minus Cost</p>
                </div>
                <div className={`text-2xl font-black ${results.grossProfit >= 0 ? "text-emerald-600" : "text-red-500"}`}>
                  {results.grossProfit >= 0 ? "+" : ""}{formatINR(results.grossProfit)}
                </div>
              </div>

              {mode === "reverse" && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-2xl border border-gray-200 p-4 text-center">
                    <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Profit Margin</div>
                    <div className="text-xl font-bold text-gray-800">{results.margin.toFixed(2)}%</div>
                  </div>
                  <div className="bg-gray-50 rounded-2xl border border-gray-200 p-4 text-center">
                    <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Markup</div>
                    <div className="text-xl font-bold text-gray-800">{results.markup.toFixed(2)}%</div>
                  </div>
                </div>
              )}

            </div>
          ) : (
            <div className="text-center text-gray-400 py-12 flex flex-col items-center">
              <Briefcase className="w-16 h-16 text-gray-300 mb-4" />
              <p className="text-lg font-medium">Enter your cost {mode === "standard" ? "and revenue" : "and target margin"} to calculate profit metrics.</p>
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