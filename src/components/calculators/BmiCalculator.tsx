"use client";

import React, { useState, useMemo } from "react";

export default function BmiCalculator() {
  const [heightCm, setHeightCm] = useState<number>(170); // 170 cm
  const [weightKg, setWeightKg] = useState<number>(70); // 70 kg

  // BMI Calculation Math
  const calculateBMI = () => {
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);
    
    let category = "";
    let color = "";

    if (bmi < 18.5) {
      category = "Underweight";
      color = "text-blue-500";
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Normal";
      color = "text-green-500";
    } else if (bmi >= 25 && bmi < 30) {
      category = "Overweight";
      color = "text-yellow-500";
    } else {
      category = "Obese";
      color = "text-red-500";
    }

    return {
      bmi: parseFloat(bmi.toFixed(1)),
      category,
      color,
    };
  };

  const results = useMemo(() => calculateBMI(), [heightCm, weightKg]);

  // For the gauge/progress bar
  // Map BMI 10 -> 0%, BMI 40 -> 100%
  const getGaugePercentage = (bmi: number) => {
    const min = 15;
    const max = 40;
    if (bmi <= min) return 0;
    if (bmi >= max) return 100;
    return ((bmi - min) / (max - min)) * 100;
  };

  const gaugePercentage = getGaugePercentage(results.bmi);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden flex flex-col lg:flex-row">
        
        {/* Input Section */}
        <div className="p-8 lg:w-1/2 lg:border-r border-gray-200 bg-gray-50/50">
          <div className="space-y-10">
            
            {/* Height Slider */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="font-semibold text-gray-700">Height</label>
                <div className="bg-rose-50 text-rose-700 font-bold px-4 py-2 rounded-lg border border-rose-100">
                  {heightCm} cm
                </div>
              </div>
              <input
                type="range"
                min="100"
                max="250"
                step="1"
                value={heightCm}
                onChange={(e) => setHeightCm(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-rose-500"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>100 cm</span>
                <span>250 cm</span>
              </div>
            </div>

            {/* Weight Slider */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="font-semibold text-gray-700">Weight</label>
                <div className="bg-rose-50 text-rose-700 font-bold px-4 py-2 rounded-lg border border-rose-100">
                  {weightKg} kg
                </div>
              </div>
              <input
                type="range"
                min="20"
                max="200"
                step="1"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-rose-500"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>20 kg</span>
                <span>200 kg</span>
              </div>
            </div>

          </div>
        </div>

        {/* Results Section */}
        <div className="p-8 lg:w-1/2 flex flex-col justify-center items-center">
          
          <div className="text-center mb-8">
            <h3 className="text-gray-500 font-medium mb-2">Your Body Mass Index (BMI)</h3>
            <div className={`text-6xl font-black mb-2 ${results.color}`}>
              {results.bmi}
            </div>
            <div className={`text-2xl font-bold ${results.color}`}>
              {results.category}
            </div>
          </div>

          {/* Color-Coded Status Bar */}
          <div className="w-full max-w-md mx-auto mt-8">
            <div className="relative w-full h-4 rounded-full flex overflow-hidden">
              <div className="h-full bg-blue-500" style={{ width: "25%" }} title="Underweight (< 18.5)"></div>
              <div className="h-full bg-green-500" style={{ width: "25%" }} title="Normal (18.5 - 24.9)"></div>
              <div className="h-full bg-yellow-500" style={{ width: "25%" }} title="Overweight (25 - 29.9)"></div>
              <div className="h-full bg-red-500" style={{ width: "25%" }} title="Obese (30+)"></div>
            </div>
            
            {/* Pointer */}
            <div className="relative w-full h-6 mt-2">
              <div 
                className="absolute top-0 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-transparent border-b-gray-800 transition-all duration-300 ease-out -ml-2"
                style={{ left: `${gaugePercentage}%` }}
              ></div>
            </div>

            <div className="flex justify-between text-xs text-gray-500 mt-2 font-medium">
              <span className="w-1/4 text-center">Underweight</span>
              <span className="w-1/4 text-center">Normal</span>
              <span className="w-1/4 text-center">Overweight</span>
              <span className="w-1/4 text-center">Obese</span>
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