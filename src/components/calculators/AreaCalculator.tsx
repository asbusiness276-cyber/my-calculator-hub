"use client";

import React, { useState } from 'react';
import { SquareMenu } from 'lucide-react';

export default function AreaCalculator() {
  const [shape, setShape] = useState<string>('rectangle');
  const [length, setLength] = useState<number>(10);
  const [width, setWidth] = useState<number>(5);
  const [radius, setRadius] = useState<number>(5);
  const [base, setBase] = useState<number>(10);
  const [height, setHeight] = useState<number>(5);

  const calculateArea = () => {
    switch (shape) {
      case 'rectangle':
        return length * width;
      case 'square':
        return length * length;
      case 'circle':
        return Math.PI * radius * radius;
      case 'triangle':
        return 0.5 * base * height;
      default:
        return 0;
    }
  };

  const area = calculateArea();

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-indigo-600 p-6 text-white">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <SquareMenu className="w-6 h-6" />
            Area Calculator
          </h2>
          <p className="text-indigo-100 mt-2">Calculate the area of rectangles, squares, circles, and triangles.</p>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Select Shape
            </label>
            <select
              value={shape}
              onChange={(e) => setShape(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all font-semibold text-lg text-gray-900 bg-white"
            >
              <option value="rectangle">Rectangle</option>
              <option value="square">Square</option>
              <option value="circle">Circle</option>
              <option value="triangle">Triangle</option>
            </select>
          </div>

          <div className="space-y-4">
            {shape === 'rectangle' && (
              <>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">Length</label>
                  <input type="number" value={length || ''} onChange={e => setLength(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">Width</label>
                  <input type="number" value={width || ''} onChange={e => setWidth(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500" />
                </div>
              </>
            )}
            {shape === 'square' && (
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Side Length</label>
                <input type="number" value={length || ''} onChange={e => setLength(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500" />
              </div>
            )}
            {shape === 'circle' && (
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Radius</label>
                <input type="number" value={radius || ''} onChange={e => setRadius(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500" />
              </div>
            )}
            {shape === 'triangle' && (
              <>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">Base</label>
                  <input type="number" value={base || ''} onChange={e => setBase(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">Height</label>
                  <input type="number" value={height || ''} onChange={e => setHeight(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500" />
                </div>
              </>
            )}
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center mt-8">
            <p className="text-sm font-bold text-slate-500 mb-2">Calculated Area</p>
            <p className="text-4xl font-black text-indigo-600">
              {Number.isFinite(area) ? +(area.toFixed(4)) : 0} <span className="text-xl">sq. units</span>
            </p>
          </div>
        </div>
      </div>
      
      <div className="w-full h-[250px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center text-gray-400">
        [AdSense Placement]
      </div>
    </div>
  );
}