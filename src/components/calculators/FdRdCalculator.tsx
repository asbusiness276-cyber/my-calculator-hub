"use client";

import React, { useState, useMemo } from "react";
import { Landmark, IndianRupee, PieChart as PieChartIcon } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

export default function FdRdCalculator() {
  const [mode, setMode] = useState<"FD" | "RD">("FD");
  
  // States
  const [fdAmount, setFdAmount] = useState<number>(100000);
  const [rdAmount, setRdAmount] = useState<number>(5000);
  const [rate, setRate] = useState<number>(6.5);
  const [years, setYears] = useState<number>(5);

  const results = useMemo(() => {
    let investedAmount = 0;
    let maturityValue = 0;

    if (mode === "FD") {
      investedAmount = fdAmount;
      // Formula: A = P(1 + r/n)^(n*t) assuming quarterly compounding (n=4)
      maturityValue = fdAmount * Math.pow(1 + (rate / 100) / 4, 4 * years);
    } else {
      investedAmount = rdAmount * 12 * years;
      // RD Formula: A = P * n + P * n(n+1)/2 * r/12/100
      const months = years * 12;
      const i = rate / 100;
      maturityValue = rdAmount * ((Math.pow(1 + i / 4, 4 * years) - 1) / (1 - Math.pow(1 + i / 4, -1 / 3)));
      // Note: The above is a strict RD formula, but often a simpler approximation is used:
      maturityValue = 0;
      for (let j = 0; j < months; j++) {
        maturityValue += rdAmount * Math.pow(1 + (rate / 100) / 4, 4 * ((months - j) / 12));
      }
    }

    const estimatedReturns = maturityValue - investedAmount;

    return {
      investedAmount,
      estimatedReturns,
      maturityValue
    };
  }, [mode, fdAmount, rdAmount, rate, years]);

  const chartData = [
    { name: "Invested Amount", value: results.investedAmount, color: "#14b8a6" }, // Teal 500
    { name: "Estimated Returns", value: results.estimatedReturns, color: "#06b6d4" }, // Cyan 500
  ];

  const formatINR = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="max-w-6xl mx-auto">
      
      {/* Header Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-white p-1 rounded-full shadow-sm border border-gray-200 inline-flex">
          <button
            onClick={() => setMode("FD")}
            className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${
              mode === "FD" ? "bg-teal-600 text-white shadow-md" : "text-gray-500 hover:text-teal-600"
            }`}
          >
            Fixed Deposit (FD)
          </button>
          <button
            onClick={() => setMode("RD")}
            className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${
              mode === "RD" ? "bg-teal-600 text-white shadow-md" : "text-gray-500 hover:text-teal-600"
            }`}
          >
            Recurring Deposit (RD)
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden flex flex-col lg:flex-row">
        
        {/* Input Section */}
        <div className="p-8 lg:w-1/2 lg:border-r border-gray-200 bg-teal-50/30">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-teal-100 p-3 rounded-xl">
              <Landmark className="w-6 h-6 text-teal-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              {mode === "FD" ? "FD Calculator" : "RD Calculator"}
            </h2>
          </div>

          <div className="space-y-10">
            {/* Amount Slider */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="font-semibold text-gray-700">
                  {mode === "FD" ? "Total Investment" : "Monthly Investment"}
                </label>
                <div className="bg-teal-50 text-teal-700 font-bold px-4 py-2 rounded-lg border border-teal-100">
                  {formatINR(mode === "FD" ? fdAmount : rdAmount)}
                </div>
              </div>
              <input
                type="range"
                min={mode === "FD" ? 10000 : 500}
                max={mode === "FD" ? 10000000 : 100000}
                step={mode === "FD" ? 10000 : 500}
                value={mode === "FD" ? fdAmount : rdAmount}
                onChange={(e) => mode === "FD" ? setFdAmount(Number(e.target.value)) : setRdAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
              />
            </div>

            {/* Interest Rate Slider */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="font-semibold text-gray-700">Interest Rate (p.a)</label>
                <div className="bg-teal-50 text-teal-700 font-bold px-4 py-2 rounded-lg border border-teal-100">
                  {rate}%
                </div>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
              />
            </div>

            {/* Time Period Slider */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="font-semibold text-gray-700">Time Period</label>
                <div className="bg-teal-50 text-teal-700 font-bold px-4 py-2 rounded-lg border border-teal-100">
                  {years} {years === 1 ? "Year" : "Years"}
                </div>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
              />
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="p-8 lg:w-1/2 flex flex-col justify-center">
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <div className="text-gray-500 text-sm font-medium mb-1">Total Invested</div>
              <div className="text-xl font-bold text-gray-900">{formatINR(results.investedAmount)}</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <div className="text-gray-500 text-sm font-medium mb-1">Est. Returns</div>
              <div className="text-xl font-bold text-teal-600">{formatINR(results.estimatedReturns)}</div>
            </div>
            <div className="col-span-2 bg-teal-600 p-6 rounded-xl shadow-md text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <IndianRupee className="w-16 h-16" />
              </div>
              <div className="text-teal-100 text-sm font-medium mb-2 relative z-10">Total Maturity Value</div>
              <div className="text-4xl font-black relative z-10">{formatINR(results.maturityValue)}</div>
            </div>
          </div>

          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: any) => formatINR(Number(value))} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
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