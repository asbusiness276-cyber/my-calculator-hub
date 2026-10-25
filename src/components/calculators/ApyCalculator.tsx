"use client";

import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function ApyCalculator() {
  const [interestRate, setInterestRate] = useState<number>(5);
  const [compoundingFreq, setCompoundingFreq] = useState<number>(12); // Monthly default

  // Calculate APY
  // APY = (1 + r/n)^n - 1
  const apy = (Math.pow(1 + (interestRate / 100) / compoundingFreq, compoundingFreq) - 1) * 100;

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-teal-600 p-6 text-white">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Calculator className="w-6 h-6" />
            APY Calculator
          </h2>
          <p className="text-teal-100 mt-2">Calculate your Annual Percentage Yield (APY) based on compounding frequency.</p>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Interest Rate (Stated/Nominal Rate) %
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                step="0.1"
                value={interestRate || ''}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all font-semibold text-lg text-gray-900"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">%</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Compounding Frequency
            </label>
            <select
              value={compoundingFreq}
              onChange={(e) => setCompoundingFreq(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all font-semibold text-lg text-gray-900 bg-white"
            >
              <option value="1">Annually (1/year)</option>
              <option value="2">Semi-Annually (2/year)</option>
              <option value="4">Quarterly (4/year)</option>
              <option value="12">Monthly (12/year)</option>
              <option value="365">Daily (365/year)</option>
            </select>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center mt-8">
            <p className="text-sm font-bold text-slate-500 mb-2">Effective Annual Percentage Yield (APY)</p>
            <p className="text-4xl font-black text-teal-600">{apy.toFixed(3)}%</p>
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