"use client";

import React, { useState, useMemo } from "react";
import { FileText, Type, Copy, Trash2, Clock, AlignLeft, BarChart2 } from "lucide-react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmedText = text.trim();
    
    const words = trimmedText.length > 0 ? trimmedText.split(/\s+/).length : 0;
    const charsWithSpaces = text.length;
    const charsWithoutSpaces = text.replace(/\s/g, "").length;
    const sentences = trimmedText.length > 0 ? trimmedText.split(/[.!?]+/).filter(Boolean).length : 0;
    const paragraphs = trimmedText.length > 0 ? trimmedText.split(/\n+/).filter(Boolean).length : 0;
    
    // Reading time (200 words per minute)
    const readTimeMinutes = words / 200;
    const readMinutes = Math.floor(readTimeMinutes);
    const readSeconds = Math.round((readTimeMinutes - readMinutes) * 60);
    
    // Speaking time (130 words per minute)
    const speakTimeMinutes = words / 130;
    const speakMinutes = Math.floor(speakTimeMinutes);
    const speakSeconds = Math.round((speakTimeMinutes - speakMinutes) * 60);

    return {
      words,
      charsWithSpaces,
      charsWithoutSpaces,
      sentences,
      paragraphs,
      readingTime: `${readMinutes}m ${readSeconds}s`,
      speakingTime: `${speakMinutes}m ${speakSeconds}s`
    };
  }, [text]);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      
      {/* Top Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
          <div className="text-gray-500 font-medium mb-1">Words</div>
          <div className="text-4xl font-black text-indigo-600">{stats.words.toLocaleString()}</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
          <div className="text-gray-500 font-medium mb-1">Characters</div>
          <div className="text-4xl font-black text-indigo-600">{stats.charsWithSpaces.toLocaleString()}</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
          <div className="text-gray-500 font-medium mb-1">Sentences</div>
          <div className="text-4xl font-black text-indigo-600">{stats.sentences.toLocaleString()}</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
          <div className="text-gray-500 font-medium mb-1">Paragraphs</div>
          <div className="text-4xl font-black text-indigo-600">{stats.paragraphs.toLocaleString()}</div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden flex flex-col lg:flex-row">
        
        {/* Main Editor */}
        <div className="lg:w-8/12 flex flex-col border-b lg:border-b-0 lg:border-r border-gray-200">
          <div className="bg-slate-50 p-4 border-b border-gray-200 flex justify-between items-center">
            <div className="flex items-center gap-2 text-slate-700 font-bold">
              <Type className="w-5 h-5 text-indigo-500" /> Text Editor
            </div>
            <div className="flex gap-2">
              <button 
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 text-gray-700 transition-colors"
              >
                <Copy className="w-4 h-4" /> Copy
              </button>
              <button 
                onClick={handleClear}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-red-50 hover:text-red-600 hover:border-red-200 text-gray-700 transition-colors"
              >
                <Trash2 className="w-4 h-4" /> Clear
              </button>
            </div>
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste your text here to get instant word count and text statistics..."
            className="w-full flex-1 min-h-[400px] p-6 text-lg text-gray-800 focus:outline-none resize-none bg-white leading-relaxed"
          ></textarea>
        </div>

        {/* Detailed Stats Sidebar */}
        <div className="lg:w-4/12 bg-slate-50 p-6 flex flex-col">
          <div className="flex items-center gap-2 text-slate-800 font-bold mb-6 border-b border-slate-200 pb-3">
            <BarChart2 className="w-5 h-5 text-indigo-500" /> Detailed Statistics
          </div>
          
          <div className="space-y-6">
            
            {/* Time Estimates */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-slate-500 font-bold text-xs uppercase tracking-wider mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400" /> Time Estimates
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-700 font-medium">Reading Time</span>
                  <span className="font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded">{stats.readingTime}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700 font-medium">Speaking Time</span>
                  <span className="font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded">{stats.speakingTime}</span>
                </div>
              </div>
            </div>

            {/* Character Breakdown */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-slate-500 font-bold text-xs uppercase tracking-wider mb-4 flex items-center gap-2">
                <AlignLeft className="w-4 h-4 text-slate-400" /> Text Breakdown
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-dashed border-slate-200">
                  <span className="text-slate-700 font-medium">Characters (no spaces)</span>
                  <span className="font-bold text-slate-900">{stats.charsWithoutSpaces.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-dashed border-slate-200">
                  <span className="text-slate-700 font-medium">Characters (with spaces)</span>
                  <span className="font-bold text-slate-900">{stats.charsWithSpaces.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-dashed border-slate-200">
                  <span className="text-slate-700 font-medium">Unique Words</span>
                  <span className="font-bold text-slate-900">
                    {new Set(text.toLowerCase().match(/\b\w+\b/g)).size.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* AdSense Space */}
      <div className="w-full h-[250px] bg-gray-100 border border-gray-200 border-dashed rounded-xl flex items-center justify-center text-gray-400">
        [AdSense Placement]
      </div>
    </div>
  );
}