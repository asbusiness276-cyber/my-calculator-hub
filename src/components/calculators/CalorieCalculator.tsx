"use client";

import React, { useState, useMemo } from "react";
import { Flame, Apple, Activity, Heart, ArrowDown, ArrowUp, User } from "lucide-react";

export default function CalorieCalculator() {
  const [age, setAge] = useState<number>(25);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [weight, setWeight] = useState<number>(70);
  const [height, setHeight] = useState<number>(170);
  const [activity, setActivity] = useState<number>(1.2);

  const results = useMemo(() => {
    // Mifflin-St Jeor Equation
    // Men: (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
    // Women: (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161
    
    let bmr = (10 * weight) + (6.25 * height) - (5 * age);
    if (gender === "male") {
      bmr += 5;
    } else {
      bmr -= 161;
    }

    const tdee = Math.round(bmr * activity);
    
    return {
      bmr: Math.round(bmr),
      maintain: tdee,
      lose: tdee - 500,
      gain: tdee + 500
    };
  }, [age, gender, weight, height, activity]);

  const activities = [
    { value: 1.2, label: "Sedentary (little to no exercise)" },
    { value: 1.375, label: "Lightly Active (light exercise/sports 1-3 days/week)" },
    { value: 1.55, label: "Moderately Active (moderate exercise/sports 3-5 days/week)" },
    { value: 1.725, label: "Very Active (hard exercise/sports 6-7 days a week)" },
    { value: 1.9, label: "Extra Active (very hard exercise/physical job)" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      
      <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden flex flex-col lg:flex-row">
        
        {/* Input Section */}
        <div className="p-8 lg:w-5/12 bg-orange-50/50 border-r border-gray-200">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-orange-100 p-3 rounded-xl">
              <Flame className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Your Details</h2>
          </div>

          <div className="space-y-6">
            
            {/* Gender Toggle */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Gender</label>
              <div className="flex bg-gray-100 p-1 rounded-xl">
                <button
                  onClick={() => setGender("male")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-bold transition-all ${
                    gender === "male" ? "bg-white text-orange-600 shadow-sm border border-gray-200" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <User className="w-4 h-4" /> Male
                </button>
                <button
                  onClick={() => setGender("female")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-bold transition-all ${
                    gender === "female" ? "bg-white text-orange-600 shadow-sm border border-gray-200" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <User className="w-4 h-4" /> Female
                </button>
              </div>
            </div>

            {/* Age & Height */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Age (Years)</label>
                <input
                  type="number"
                  min="15" max="100"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none font-bold text-gray-800"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Height (cm)</label>
                <input
                  type="number"
                  min="100" max="250"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none font-bold text-gray-800"
                />
              </div>
            </div>

            {/* Weight */}
            <div>
              <label className="block text-gray-700 font-medium mb-2 flex justify-between">
                Weight (kg) <span className="text-orange-600 font-bold">{weight} kg</span>
              </label>
              <input
                type="range"
                min="30" max="200" step="1"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
              />
            </div>

            {/* Activity Level */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Activity Level</label>
              <select
                value={activity}
                onChange={(e) => setActivity(Number(e.target.value))}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none font-bold text-gray-800 appearance-none cursor-pointer"
              >
                {activities.map((act) => (
                  <option key={act.value} value={act.value}>
                    {act.label}
                  </option>
                ))}
              </select>
            </div>
            
          </div>
        </div>

        {/* Results Section */}
        <div className="p-8 lg:w-7/12 flex flex-col justify-center">
          <div className="space-y-6">
            
            {/* Maintain Weight */}
            <div className="bg-orange-500 p-8 rounded-3xl text-center text-white relative overflow-hidden shadow-md">
              <Flame className="absolute -top-10 -right-10 w-48 h-48 text-orange-400 opacity-20" />
              <div className="text-orange-100 font-semibold mb-2 flex items-center justify-center gap-2 relative z-10">
                <Activity className="w-5 h-5" /> Daily Calories to Maintain Weight (TDEE)
              </div>
              <div className="text-6xl font-black relative z-10">{results.maintain.toLocaleString()}</div>
              <div className="text-orange-200 text-sm mt-2 font-medium relative z-10">kcal / day</div>
            </div>

            {/* Lose / Gain Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Lose Weight */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm relative overflow-hidden hover:border-red-200 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-gray-500 font-medium text-sm mb-1">Mild Weight Loss</div>
                    <div className="text-red-500 font-bold text-sm">~0.5 kg / week</div>
                  </div>
                  <div className="bg-red-50 text-red-500 p-2 rounded-full">
                    <ArrowDown className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-3xl font-black text-gray-900">{results.lose.toLocaleString()} <span className="text-lg font-medium text-gray-400">kcal</span></div>
              </div>

              {/* Gain Weight */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm relative overflow-hidden hover:border-emerald-200 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-gray-500 font-medium text-sm mb-1">Mild Weight Gain</div>
                    <div className="text-emerald-500 font-bold text-sm">~0.5 kg / week</div>
                  </div>
                  <div className="bg-emerald-50 text-emerald-500 p-2 rounded-full">
                    <ArrowUp className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-3xl font-black text-gray-900">{results.gain.toLocaleString()} <span className="text-lg font-medium text-gray-400">kcal</span></div>
              </div>

            </div>

            {/* BMR Note */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-start gap-3">
              <Heart className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-gray-800 font-semibold text-sm">Basal Metabolic Rate (BMR): {results.bmr.toLocaleString()} kcal</div>
                <div className="text-gray-500 text-xs mt-1">This is the absolute minimum energy your body requires at rest to keep vital organs functioning.</div>
              </div>
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