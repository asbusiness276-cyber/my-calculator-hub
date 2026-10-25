"use client";

import React, { useState } from 'react';
import { Banknote } from 'lucide-react';

export default function SalaryCalculator() {
  const [amount, setAmount] = useState<number>(600000);
  const [period, setPeriod] = useState<string>('Year');
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(40);
  const [daysPerWeek, setDaysPerWeek] = useState<number>(5);

  // Calculate equivalent annual salary first
  let annualSalary = 0;
  if (period === 'Year') annualSalary = amount;
  if (period === 'Month') annualSalary = amount * 12;
  if (period === 'Bi-Week') annualSalary = amount * 26;
  if (period === 'Week') annualSalary = amount * 52;
  if (period === 'Day') annualSalary = amount * (daysPerWeek * 52);
  if (period === 'Hour') annualSalary = amount * (hoursPerWeek * 52);

  const monthly = annualSalary / 12;
  const biweekly = annualSalary / 26;
  const weekly = annualSalary / 52;
  const daily = annualSalary / (daysPerWeek * 52);
  const hourly = annualSalary / (hoursPerWeek * 52);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-emerald-600 p-6 text-white">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Banknote className="w-6 h-6" />
            Salary Calculator
          </h2>
          <p className="text-emerald-100 mt-2">Convert your salary across hourly, daily, weekly, monthly, and yearly rates.</p>
        </div>

        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Salary Amount (₹)</label>
              <input type="number" min="0" value={amount || ''} onChange={e => setAmount(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 font-semibold text-lg" />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Per</label>
              <select value={period} onChange={e => setPeriod(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 font-semibold text-lg bg-white">
                <option value="Year">Year</option>
                <option value="Month">Month</option>
                <option value="Bi-Week">Bi-Week (Every 2 Weeks)</option>
                <option value="Week">Week</option>
                <option value="Day">Day</option>
                <option value="Hour">Hour</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Hours / Week</label>
                <input type="number" value={hoursPerWeek || ''} onChange={e => setHoursPerWeek(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Days / Week</label>
                <input type="number" value={daysPerWeek || ''} onChange={e => setDaysPerWeek(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500" />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col gap-4">
            <h3 className="text-lg font-bold text-gray-900 border-b border-slate-200 pb-2">Salary Breakdown</h3>
            <div className="flex justify-between items-center">
              <span className="text-slate-600 font-medium">Yearly:</span>
              <span className="text-xl font-bold text-emerald-700">{formatCurrency(annualSalary)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600 font-medium">Monthly:</span>
              <span className="text-xl font-bold text-emerald-700">{formatCurrency(monthly)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600 font-medium">Bi-Weekly:</span>
              <span className="text-xl font-bold text-emerald-700">{formatCurrency(biweekly)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600 font-medium">Weekly:</span>
              <span className="text-xl font-bold text-emerald-700">{formatCurrency(weekly)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600 font-medium">Daily:</span>
              <span className="text-xl font-bold text-emerald-700">{formatCurrency(daily)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600 font-medium">Hourly:</span>
              <span className="text-xl font-bold text-emerald-700">{formatCurrency(hourly)}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full h-[250px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center text-gray-400">
        [AdSense Placement]
      </div>
    </div>
  );
}