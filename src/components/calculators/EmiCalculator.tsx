"use client";

import React, { useState, useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(5000000); // 50 Lakhs
  const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5%
  const [tenureYears, setTenureYears] = useState<number>(20); // 20 years

  // EMI Calculation Math
  const calculateEMI = () => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenureYears * 12;

    let emi = 0;
    if (r === 0) {
      emi = P / n;
    } else {
      emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }
    
    const totalAmountPayable = emi * n;
    const totalInterest = totalAmountPayable - P;

    return {
      monthlyEMI: Math.round(emi),
      principal: Math.round(P),
      totalInterest: Math.round(totalInterest),
      totalPayable: Math.round(totalAmountPayable),
    };
  };

  const results = useMemo(() => calculateEMI(), [loanAmount, interestRate, tenureYears]);

  const chartData = [
    { name: "Principal Amount", value: results.principal },
    { name: "Total Interest", value: results.totalInterest },
  ];

  const COLORS = ["#dcfce7", "#16a34a"]; // Tailwind green-100 and green-600

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
            
            {/* Loan Amount Slider */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="font-semibold text-gray-700">Loan Amount</label>
                <div className="bg-green-50 text-green-700 font-bold px-4 py-2 rounded-lg border border-green-100">
                  {formatINR(loanAmount)}
                </div>
              </div>
              <input
                type="range"
                min="100000"
                max="50000000"
                step="100000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>{formatINR(100000)}</span>
                <span>{formatINR(50000000)}</span>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="font-semibold text-gray-700">Interest Rate (p.a)</label>
                <div className="bg-green-50 text-green-700 font-bold px-4 py-2 rounded-lg border border-green-100">
                  {interestRate}%
                </div>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>1%</span>
                <span>20%</span>
              </div>
            </div>

            {/* Loan Tenure Slider */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="font-semibold text-gray-700">Loan Tenure</label>
                <div className="bg-green-50 text-green-700 font-bold px-4 py-2 rounded-lg border border-green-100">
                  {tenureYears} Yr
                </div>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>1 Yr</span>
                <span>30 Yr</span>
              </div>
            </div>

          </div>
        </div>

        {/* Results Section */}
        <div className="p-8 lg:w-1/2 flex flex-col justify-center items-center">
          
          <div className="w-full space-y-6 mb-8">
            <div className="flex justify-between items-center pt-4 border-b border-gray-200 pb-4">
              <span className="text-lg font-bold text-gray-900">Monthly EMI</span>
              <span className="text-xl font-black text-green-600">{formatINR(results.monthlyEMI)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Principal Amount</span>
              <span className="font-semibold text-gray-900">{formatINR(results.principal)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Interest</span>
              <span className="font-semibold text-gray-900">{formatINR(results.totalInterest)}</span>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
              <span className="text-lg font-bold text-gray-900">Total Payable</span>
              <span className="text-xl font-black text-gray-900">{formatINR(results.totalPayable)}</span>
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
        [AdSense Placement]
      </div>
    </div>
  );
}