"use client";

import React, { useState, useMemo } from "react";
import { Receipt, Percent, PlusCircle, MinusCircle } from "lucide-react";

export default function GstCalculator() {
  const [amount, setAmount] = useState<number | "">("");
  const [rate, setRate] = useState<number>(18);
  const [mode, setMode] = useState<"add" | "remove">("add");

  const results = useMemo(() => {
    if (amount === "") return null;
    const val = Number(amount);
    if (val < 0) return null;

    let netAmount = 0;
    let gstAmount = 0;
    let grossAmount = 0;

    if (mode === "add") {
      netAmount = val;
      gstAmount = (val * rate) / 100;
      grossAmount = val + gstAmount;
    } else {
      grossAmount = val;
      netAmount = val / (1 + rate / 100);
      gstAmount = grossAmount - netAmount;
    }

    const cgst = gstAmount / 2;
    const sgst = gstAmount / 2;

    return {
      netAmount,
      gstAmount,
      grossAmount,
      cgst,
      sgst
    };
  }, [amount, rate, mode]);

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
        <div className="bg-amber-500 p-8 md:w-5/12 relative overflow-hidden text-white flex flex-col justify-center">
          <Receipt className="absolute -top-10 -right-10 w-48 h-48 text-amber-400 opacity-30" />
          
          <h2 className="text-3xl font-bold mb-8 relative z-10">GST Calculator</h2>

          <div className="space-y-6 relative z-10">
            {/* Mode Toggle */}
            <div className="flex bg-amber-600/50 p-1 rounded-xl">
              <button
                onClick={() => setMode("add")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-colors ${
                  mode === "add" ? "bg-white text-amber-600 shadow-sm" : "text-amber-100 hover:text-white"
                }`}
              >
                <PlusCircle className="w-5 h-5" /> Add GST
              </button>
              <button
                onClick={() => setMode("remove")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-colors ${
                  mode === "remove" ? "bg-white text-amber-600 shadow-sm" : "text-amber-100 hover:text-white"
                }`}
              >
                <MinusCircle className="w-5 h-5" /> Remove GST
              </button>
            </div>

            {/* Amount Input */}
            <div>
              <label className="block text-amber-100 font-medium mb-2">
                {mode === "add" ? "Net Amount (Exclusive of GST)" : "Gross Amount (Inclusive of GST)"}
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-lg">₹</span>
                <input
                  type="number"
                  min="0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
                  placeholder="0.00"
                  className="w-full pl-10 pr-4 py-4 rounded-xl text-xl font-bold text-gray-900 focus:outline-none focus:ring-4 focus:ring-amber-300/50 shadow-inner"
                />
              </div>
            </div>

            {/* GST Rate */}
            <div>
              <label className="block text-amber-100 font-medium mb-3">GST Rate (%)</label>
              <div className="grid grid-cols-4 gap-2">
                {[5, 12, 18, 28].map((r) => (
                  <button
                    key={r}
                    onClick={() => setRate(r)}
                    className={`py-3 rounded-lg font-bold border-2 transition-all ${
                      rate === r 
                        ? "bg-white text-amber-600 border-white shadow-sm" 
                        : "border-amber-400 text-amber-100 hover:bg-amber-400 hover:text-white"
                    }`}
                  >
                    {r}%
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="p-8 md:p-12 md:w-7/12 bg-gray-50/50 flex flex-col justify-center">
          {results ? (
            <div className="space-y-6">
              
              {/* Total GST Card */}
              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-amber-800 font-semibold">Total GST Amount</div>
                  <div className="bg-amber-200/50 text-amber-700 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Percent className="w-4 h-4" /> {rate}%
                  </div>
                </div>
                <div className="text-4xl font-black text-amber-600 mb-6">{formatINR(results.gstAmount)}</div>
                
                {/* CGST / SGST Split */}
                <div className="grid grid-cols-2 gap-4 border-t border-amber-200/60 pt-4">
                  <div>
                    <div className="text-amber-600/70 text-sm font-medium">CGST ({rate/2}%)</div>
                    <div className="text-lg font-bold text-amber-900">{formatINR(results.cgst)}</div>
                  </div>
                  <div>
                    <div className="text-amber-600/70 text-sm font-medium">SGST ({rate/2}%)</div>
                    <div className="text-lg font-bold text-amber-900">{formatINR(results.sgst)}</div>
                  </div>
                </div>
              </div>

              {/* Net / Gross Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <div className="text-gray-500 text-sm font-medium mb-1">Net Amount</div>
                  <div className="text-xl font-bold text-gray-800">{formatINR(results.netAmount)}</div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <div className="text-gray-500 text-sm font-medium mb-1">Gross Amount</div>
                  <div className="text-xl font-bold text-gray-800">{formatINR(results.grossAmount)}</div>
                </div>
              </div>

            </div>
          ) : (
            <div className="text-center text-gray-400 py-12 flex flex-col items-center">
              <Receipt className="w-16 h-16 text-gray-300 mb-4" />
              <p className="text-lg font-medium">Enter an amount to see the GST breakdown.</p>
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