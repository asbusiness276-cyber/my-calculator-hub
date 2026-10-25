"use client";

import React, { useState } from "react";
import { Percent, TrendingUp, TrendingDown, HelpCircle, Calculator } from "lucide-react";

export default function PercentageCalculator() {
  // Card 1 State
  const [c1X, setC1X] = useState<number | "">("");
  const [c1Y, setC1Y] = useState<number | "">("");

  // Card 2 State
  const [c2X, setC2X] = useState<number | "">("");
  const [c2Y, setC2Y] = useState<number | "">("");

  // Card 3 State
  const [c3X, setC3X] = useState<number | "">("");
  const [c3Y, setC3Y] = useState<number | "">("");

  // Card 1 Logic
  const getC1Result = () => {
    if (c1X === "" || c1Y === "") return null;
    return (Number(c1X) / 100) * Number(c1Y);
  };

  // Card 2 Logic
  const getC2Result = () => {
    if (c2X === "" || c2Y === "") return null;
    if (Number(c2Y) === 0) return 0;
    return (Number(c2X) / Number(c2Y)) * 100;
  };

  // Card 3 Logic
  const getC3Result = () => {
    if (c3X === "" || c3Y === "") return null;
    const x = Number(c3X);
    const y = Number(c3Y);
    if (x === 0) return 0;
    
    const difference = y - x;
    const percentChange = (difference / Math.abs(x)) * 100;
    return percentChange;
  };

  const c1Result = getC1Result();
  const c2Result = getC2Result();
  const c3Result = getC3Result();

  return (
    <div className="max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="bg-indigo-600 rounded-t-3xl p-8 sm:p-12 text-center relative overflow-hidden">
        <Percent className="absolute -top-10 -right-10 w-48 h-48 text-indigo-500 opacity-20" />
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 relative z-10 flex items-center justify-center gap-3">
          <Calculator className="w-8 h-8" />
          Percentage Calculator
        </h2>
        <p className="text-indigo-100 relative z-10">Instant solutions for all your percentage math problems.</p>
      </div>

      <div className="bg-gray-50 p-6 sm:p-10 rounded-b-3xl border border-t-0 border-gray-200 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: What is X% of Y? */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col transition-shadow hover:shadow-md">
            <div className="bg-blue-50 border-b border-blue-100 p-4">
              <h3 className="font-semibold text-blue-900 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                What is X% of Y?
              </h3>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-gray-500 font-medium">What is</span>
                <input
                  type="number"
                  value={c1X}
                  onChange={(e) => setC1X(e.target.value === "" ? "" : Number(e.target.value))}
                  placeholder="X"
                  className="w-20 px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <span className="text-gray-500 font-medium">% of</span>
                <input
                  type="number"
                  value={c1Y}
                  onChange={(e) => setC1Y(e.target.value === "" ? "" : Number(e.target.value))}
                  placeholder="Y"
                  className="flex-1 min-w-[80px] px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <span className="text-gray-500 font-medium font-serif text-xl">?</span>
              </div>
              
              <div className="mt-auto pt-6 border-t border-gray-100">
                <div className="text-sm text-gray-400 mb-1">Result</div>
                <div className="text-3xl font-bold text-gray-800 break-words">
                  {c1Result !== null ? c1Result.toLocaleString("en-US", { maximumFractionDigits: 4 }) : "-"}
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: X is what % of Y? */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col transition-shadow hover:shadow-md">
            <div className="bg-indigo-50 border-b border-indigo-100 p-4">
              <h3 className="font-semibold text-indigo-900 flex items-center gap-2">
                <Percent className="w-5 h-5 text-indigo-600" />
                X is what % of Y?
              </h3>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <input
                  type="number"
                  value={c2X}
                  onChange={(e) => setC2X(e.target.value === "" ? "" : Number(e.target.value))}
                  placeholder="X"
                  className="flex-1 min-w-[60px] px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
                <span className="text-gray-500 font-medium text-center">is what % of</span>
                <input
                  type="number"
                  value={c2Y}
                  onChange={(e) => setC2Y(e.target.value === "" ? "" : Number(e.target.value))}
                  placeholder="Y"
                  className="flex-1 min-w-[60px] px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
                <span className="text-gray-500 font-medium font-serif text-xl">?</span>
              </div>
              
              <div className="mt-auto pt-6 border-t border-gray-100">
                <div className="text-sm text-gray-400 mb-1">Result</div>
                <div className="text-3xl font-bold text-gray-800 break-words">
                  {c2Result !== null ? `${c2Result.toLocaleString("en-US", { maximumFractionDigits: 4 })}%` : "-"}
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: % Increase/Decrease */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col transition-shadow hover:shadow-md">
            <div className="bg-purple-50 border-b border-purple-100 p-4">
              <h3 className="font-semibold text-purple-900 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                % Change (from X to Y)
              </h3>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex flex-col gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 font-medium w-12">From</span>
                  <input
                    type="number"
                    value={c3X}
                    onChange={(e) => setC3X(e.target.value === "" ? "" : Number(e.target.value))}
                    placeholder="X (Original)"
                    className="flex-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 font-medium w-12">To</span>
                  <input
                    type="number"
                    value={c3Y}
                    onChange={(e) => setC3Y(e.target.value === "" ? "" : Number(e.target.value))}
                    placeholder="Y (New)"
                    className="flex-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                </div>
              </div>
              
              <div className="mt-auto pt-6 border-t border-gray-100 flex items-end justify-between">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Result</div>
                  <div className="text-3xl font-bold text-gray-800 break-words flex items-center gap-2">
                    {c3Result !== null ? `${Math.abs(c3Result).toLocaleString("en-US", { maximumFractionDigits: 4 })}%` : "-"}
                  </div>
                </div>
                {c3Result !== null && (
                  <div className={`flex items-center gap-1 font-bold ${c3Result > 0 ? "text-emerald-500" : c3Result < 0 ? "text-red-500" : "text-gray-400"}`}>
                    {c3Result > 0 ? <><TrendingUp className="w-5 h-5"/> Increase</> : c3Result < 0 ? <><TrendingDown className="w-5 h-5"/> Decrease</> : "No Change"}
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* AdSense Space */}
      <div className="mt-8 w-full h-[250px] bg-gray-100 border border-gray-200 border-dashed rounded-xl flex items-center justify-center text-gray-400">
        [AdSense Placement]
      </div>
    </div>
  );
}