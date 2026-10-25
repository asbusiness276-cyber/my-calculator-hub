"use client";

import React, { useState, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from 'recharts';
import { IndianRupee, Info } from 'lucide-react';

export default function PpfCalculator() {
  const [yearlyInvestment, setYearlyInvestment] = useState<number>(150000);
  const [tenure, setTenure] = useState<number>(15);
  const interestRate = 7.1; // Current PPF rate is fixed in calculator usually

  const { totalInvestment, totalInterest, maturityAmount, yearlyData } = useMemo(() => {
    let currentBalance = 0;
    let totalInvested = 0;
    const data = [];

    for (let year = 1; year <= tenure; year++) {
      totalInvested += yearlyInvestment;
      // PPF interest is compounded annually. Assuming investment at the start of the year.
      const interestForYear = (currentBalance + yearlyInvestment) * (interestRate / 100);
      currentBalance += yearlyInvestment + interestForYear;
      
      data.push({
        name: `Year ${year}`,
        Invested: Math.round(totalInvested),
        Balance: Math.round(currentBalance),
        Interest: Math.round(currentBalance - totalInvested)
      });
    }

    return {
      totalInvestment: totalInvested,
      totalInterest: Math.round(currentBalance - totalInvested),
      maturityAmount: Math.round(currentBalance),
      yearlyData: data
    };
  }, [yearlyInvestment, tenure]);

  const chartData = [
    { name: 'Total Investment', value: totalInvestment, color: '#3b82f6' },
    { name: 'Total Interest', value: totalInterest, color: '#10b981' }
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Calculator Container */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-blue-600 p-6 text-white">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <IndianRupee className="w-6 h-6" />
            PPF Calculator
          </h2>
          <p className="text-blue-100 mt-2">Calculate your Public Provident Fund maturity amount and interest earned over time.</p>
        </div>

        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Inputs */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Yearly Investment (₹)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">₹</span>
                <input
                  type="number"
                  min="500"
                  max="150000"
                  value={yearlyInvestment || ''}
                  onChange={(e) => setYearlyInvestment(Number(e.target.value))}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-semibold text-lg text-gray-900"
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-500">Min: ₹500</span>
                <span className="text-xs text-gray-500">Max: ₹1,50,000</span>
              </div>
              <input
                type="range"
                min="500"
                max="150000"
                step="500"
                value={yearlyInvestment}
                onChange={(e) => setYearlyInvestment(Number(e.target.value))}
                className="w-full mt-4 accent-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Time Period (Years)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="15"
                  max="50"
                  step="5"
                  value={tenure || ''}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-semibold text-lg text-gray-900"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">Yr</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">PPF matures in 15 years, can be extended in blocks of 5 years.</p>
              <input
                type="range"
                min="15"
                max="35"
                step="5"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full mt-4 accent-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Interest Rate (%)
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={interestRate}
                  disabled
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-500 font-semibold text-lg cursor-not-allowed"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">%</span>
              </div>
              <p className="text-xs text-gray-400 mt-2">Current fixed rate set by the Government of India.</p>
            </div>
          </div>

          {/* Results & Chart */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-center">
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <p className="text-sm font-semibold text-slate-500 mb-1">Total Investment</p>
                <p className="text-xl font-bold text-blue-700">{formatCurrency(totalInvestment)}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-500 mb-1">Total Interest</p>
                <p className="text-xl font-bold text-emerald-600">{formatCurrency(totalInterest)}</p>
              </div>
              <div className="col-span-2 mt-2 pt-4 border-t border-slate-200">
                <p className="text-sm font-bold text-slate-500 mb-1">Maturity Amount</p>
                <p className="text-3xl font-black text-gray-900">{formatCurrency(maturityAmount)}</p>
              </div>
            </div>

            <div className="h-48 w-full">
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
                  <RechartsTooltip formatter={(value: any) => formatCurrency(value)} />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
              </ResponsiveContainer>
            </div>

          </div>
        </div>
      </div>
      
      {/* AdSense Placeholder */}
      <div className="w-full h-[250px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center text-gray-400">
        [AdSense Placement]
      </div>
    </div>
  );
}