"use client";

import React, { useState, useMemo } from "react";
import { Cake, Calendar, Clock } from "lucide-react";

export default function AgeCalculator() {
  const [dob, setDob] = useState<string>("2000-01-01");

  const results = useMemo(() => {
    if (!dob) return null;

    const birthDate = new Date(dob);
    const today = new Date();

    if (birthDate > today) {
      return { error: "Date of birth cannot be in the future!" };
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const diffTime = Math.abs(today.getTime() - birthDate.getTime());
    const totalDaysLived = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    const currentYearBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    let nextBirthday = currentYearBirthday;
    
    if (today > currentYearBirthday) {
      nextBirthday = new Date(today.getFullYear() + 1, birthDate.getMonth(), birthDate.getDate());
    }

    let nextBdayMonths = nextBirthday.getMonth() - today.getMonth();
    let nextBdayDays = nextBirthday.getDate() - today.getDate();

    if (nextBdayDays < 0) {
      nextBdayMonths -= 1;
      const prevMonth = new Date(nextBirthday.getFullYear(), nextBirthday.getMonth(), 0);
      nextBdayDays += prevMonth.getDate();
    }

    if (nextBdayMonths < 0) {
      nextBdayMonths += 12;
    }

    return {
      error: null,
      years,
      months,
      days,
      totalDaysLived,
      nextBdayMonths,
      nextBdayDays,
    };
  }, [dob]);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
        
        <div className="bg-purple-600 p-8 sm:p-12 text-center relative overflow-hidden">
          <Cake className="absolute -bottom-10 -left-10 w-48 h-48 text-purple-500 opacity-20" />
          <h2 className="text-2xl font-bold text-white mb-6">Enter Your Date of Birth</h2>
          <div className="max-w-md mx-auto relative">
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full px-6 py-4 rounded-xl text-xl font-bold text-gray-800 focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg"
            />
          </div>
        </div>

        <div className="p-8 sm:p-12 bg-gray-50/50">
          {results?.error ? (
            <div className="text-center text-red-500 font-bold p-8">{results.error}</div>
          ) : results ? (
            <div className="space-y-8">
              
              <div>
                <h3 className="text-gray-500 font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-purple-500" /> Exact Age
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm text-center">
                    <div className="text-4xl font-black text-purple-600 mb-1">{results.years}</div>
                    <div className="text-sm font-medium text-purple-900/60 uppercase">Years</div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm text-center">
                    <div className="text-4xl font-black text-purple-600 mb-1">{results.months}</div>
                    <div className="text-sm font-medium text-purple-900/60 uppercase">Months</div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm text-center">
                    <div className="text-4xl font-black text-purple-600 mb-1">{results.days}</div>
                    <div className="text-sm font-medium text-purple-900/60 uppercase">Days</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
                  <div className="w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center shrink-0">
                    <Calendar className="w-7 h-7 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm font-medium mb-1">Total Days Lived</div>
                    <div className="text-2xl font-bold text-gray-900">{results.totalDaysLived?.toLocaleString()} days</div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
                  <div className="w-14 h-14 bg-pink-50 rounded-full flex items-center justify-center shrink-0">
                    <Cake className="w-7 h-7 text-pink-600" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm font-medium mb-1">Next Birthday In</div>
                    <div className="text-2xl font-bold text-gray-900">
                      {results.nextBdayMonths}m, {results.nextBdayDays}d
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            <div className="text-center text-gray-400 p-8">Please enter a valid date.</div>
          )}
        </div>
      </div>

      <div className="mt-8 w-full h-[250px] bg-gray-100 border border-gray-200 border-dashed rounded-xl flex items-center justify-center text-gray-400">
        [AdSense Placement]
      </div>
    </div>
  );
}