"use client";

import React, { useState, useMemo } from "react";
import { Award, BookOpen, GraduationCap, Percent } from "lucide-react";

export default function CgpaCalculator() {
  const [cgpa, setCgpa] = useState<number | "">("");

  const results = useMemo(() => {
    if (cgpa === "") return null;
    const value = Number(cgpa);
    if (value < 0 || value > 10) return null;

    const percentage = value * 9.5;
    
    let grade = "F";
    let message = "Fail";
    let color = "text-red-500";
    let bg = "bg-red-50 border-red-200";

    if (value >= 9.1) {
      grade = "A1 / A+";
      message = "Outstanding";
      color = "text-emerald-600";
      bg = "bg-emerald-50 border-emerald-200";
    } else if (value >= 8.1) {
      grade = "A2 / A";
      message = "Excellent";
      color = "text-blue-600";
      bg = "bg-blue-50 border-blue-200";
    } else if (value >= 7.1) {
      grade = "B1 / B+";
      message = "Very Good";
      color = "text-indigo-600";
      bg = "bg-indigo-50 border-indigo-200";
    } else if (value >= 6.1) {
      grade = "B2 / B";
      message = "Good";
      color = "text-purple-600";
      bg = "bg-purple-50 border-purple-200";
    } else if (value >= 5.1) {
      grade = "C1 / C+";
      message = "Above Average";
      color = "text-orange-500";
      bg = "bg-orange-50 border-orange-200";
    } else if (value >= 4.1) {
      grade = "C2 / C";
      message = "Average";
      color = "text-amber-500";
      bg = "bg-amber-50 border-amber-200";
    } else if (value >= 3.1) {
      grade = "D";
      message = "Pass";
      color = "text-yellow-600";
      bg = "bg-yellow-50 border-yellow-200";
    }

    return {
      percentage: percentage.toFixed(2),
      grade,
      message,
      color,
      bg
    };
  }, [cgpa]);

  return (
    <div className="max-w-4xl mx-auto">
      
      <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-indigo-600 p-8 sm:p-12 text-center relative overflow-hidden text-white">
          <GraduationCap className="absolute -top-10 -right-10 w-48 h-48 text-indigo-500 opacity-30" />
          
          <div className="flex items-center justify-center gap-3 mb-4 relative z-10">
            <Award className="w-8 h-8 text-indigo-200" />
            <h2 className="text-3xl sm:text-4xl font-bold">CGPA to Percentage</h2>
          </div>
          <p className="text-indigo-100 relative z-10">Convert your CGPA to equivalent percentage instantly.</p>
        </div>

        <div className="p-8 sm:p-12 flex flex-col items-center">
          
          {/* Input Section */}
          <div className="w-full max-w-md bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-8">
            <label className="block text-center text-gray-700 font-bold mb-4 text-lg">
              Enter your CGPA (Max 10.0)
            </label>
            <input
              type="number"
              min="0" max="10" step="0.1"
              value={cgpa}
              onChange={(e) => {
                let val = Number(e.target.value);
                if (val > 10) val = 10;
                setCgpa(e.target.value === "" ? "" : val);
              }}
              placeholder="e.g. 8.5"
              className="w-full text-center px-6 py-4 text-3xl font-black text-indigo-700 bg-white border-2 border-indigo-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 shadow-inner"
            />
          </div>

          {/* Results Section */}
          {results ? (
            <div className="w-full max-w-xl space-y-6">
              
              <div className="bg-white border-2 border-indigo-100 rounded-3xl p-8 text-center shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 text-indigo-500">
                  <Percent className="w-16 h-16" />
                </div>
                <div className="text-gray-500 font-semibold mb-2 text-lg">Your Estimated Percentage is</div>
                <div className="text-6xl font-black text-indigo-600 mb-2">{results.percentage}%</div>
                <div className="text-indigo-300 font-medium font-mono text-sm">Formula: {cgpa} × 9.5</div>
              </div>

              <div className={`rounded-2xl p-6 border flex items-center justify-between ${results.bg}`}>
                <div>
                  <div className={`font-bold ${results.color} opacity-70 text-sm uppercase tracking-wider mb-1`}>Grade</div>
                  <div className={`text-3xl font-black ${results.color}`}>{results.grade}</div>
                </div>
                <div className="text-right">
                  <div className={`font-bold ${results.color} opacity-70 text-sm uppercase tracking-wider mb-1`}>Remark</div>
                  <div className={`text-xl font-bold ${results.color}`}>{results.message}</div>
                </div>
              </div>

            </div>
          ) : (
            <div className="text-center text-gray-400 py-8 flex flex-col items-center">
              <BookOpen className="w-16 h-16 text-gray-200 mb-4" />
              <p className="text-lg font-medium">Please enter a valid CGPA between 0 and 10.</p>
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