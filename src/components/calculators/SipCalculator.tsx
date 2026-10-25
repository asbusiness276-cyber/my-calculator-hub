"use client";

import React, { useState, useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(25000);
  const [returnRate, setReturnRate] = useState<number>(12);
  const [timePeriod, setTimePeriod] = useState<number>(10);

  // SIP Calculation Math
  const calculateSIP = () => {
    const P = monthlyInvestment;
    const i = returnRate / 12 / 100;
    const n = timePeriod * 12;

    const totalInvested = P * n;
    
    // Future Value = P * [ (1+i)^n - 1 ] * (1+i) / i
    let futureValue = 0;
    if (i === 0) {
      futureValue = totalInvested;
    } else {
      futureValue = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    }
    
    const estimatedReturns = futureValue - totalInvested;

    return {
      totalInvested: Math.round(totalInvested),
      estimatedReturns: Math.round(estimatedReturns),
      totalValue: Math.round(futureValue),
    };
  };

  const results = useMemo(() => calculateSIP(), [monthlyInvestment, returnRate, timePeriod]);

  const chartData = [
    { name: "Invested Amount", value: results.totalInvested },
    { name: "Est. Returns", value: results.estimatedReturns },
  ];

  const COLORS = ["#dbeafe", "#2563eb"]; // Tailwind blue-100 and blue-600

  // Formatter for INR
  const formatINR = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden flex flex-col lg:flex-row">
        
        {/* Input Section */}
        <div className="p-8 lg:w-1/2 lg:border-r border-gray-200 bg-gray-50/50">
          <div className="space-y-10">
            
            {/* Monthly Investment Slider */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="font-semibold text-gray-700">Monthly investment</label>
                <div className="bg-blue-50 text-blue-700 font-bold px-4 py-2 rounded-lg border border-blue-100">
                  {formatINR(monthlyInvestment)}
                </div>
              </div>
              <input
                type="range"
                min="500"
                max="1000000"
                step="500"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>{formatINR(500)}</span>
                <span>{formatINR(1000000)}</span>
              </div>
            </div>

            {/* Expected Return Rate Slider */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="font-semibold text-gray-700">Expected return rate (p.a)</label>
                <div className="bg-blue-50 text-blue-700 font-bold px-4 py-2 rounded-lg border border-blue-100">
                  {returnRate}%
                </div>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="0.1"
                value={returnRate}
                onChange={(e) => setReturnRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>1%</span>
                <span>30%</span>
              </div>
            </div>

            {/* Time Period Slider */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="font-semibold text-gray-700">Time period</label>
                <div className="bg-blue-50 text-blue-700 font-bold px-4 py-2 rounded-lg border border-blue-100">
                  {timePeriod} Yr
                </div>
              </div>
              <input
                type="range"
                min="1"
                max="40"
                step="1"
                value={timePeriod}
                onChange={(e) => setTimePeriod(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>1 Yr</span>
                <span>40 Yr</span>
              </div>
            </div>

          </div>
        </div>

        {/* Results Section */}
        <div className="p-8 lg:w-1/2 flex flex-col justify-center items-center">
          
          <div className="w-full space-y-6 mb-8">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Invested amount</span>
              <span className="font-semibold text-gray-900">{formatINR(results.totalInvested)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Est. returns</span>
              <span className="font-semibold text-gray-900">{formatINR(results.estimatedReturns)}</span>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
              <span className="text-lg font-bold text-gray-900">Total value</span>
              <span className="text-xl font-black text-blue-600">{formatINR(results.totalValue)}</span>
            </div>
          </div>

          <div className="w-full h-64 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius="60%"
                  outerRadius="80%"
                  paddingAngle={2}
                  dataKey="value"
                  stroke="none"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: any) => formatINR(Number(value))}
                  contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>

      {/* AdSense Space */}
      <div className="mt-8 w-full h-[250px] bg-gray-100 border border-gray-200 border-dashed rounded-xl flex items-center justify-center text-gray-400">
        [AdSense Space]
      </div>
    </div>
  );
}