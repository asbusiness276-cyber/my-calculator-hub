"use client";

import React, { useState, useEffect } from 'react';
import { FileText, Clock, Type, AlignLeft } from 'lucide-react';

export default function SentenceCounter() {
  const [text, setText] = useState("");
  const [stats, setStats] = useState({
    sentences: 0,
    words: 0,
    characters: 0,
    charactersNoSpaces: 0,
    paragraphs: 0,
    readingTime: 0,
    speakingTime: 0,
  });

  useEffect(() => {
    // Calculate statistics whenever text changes
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, '').length;
    const paragraphs = text.trim() ? text.split(/\n+/).filter(p => p.trim().length > 0).length : 0;
    
    // Sentence calculation (split by ., !, ?, then filter empty)
    const sentences = text.trim() ? text.split(/[.!?]+/).filter(s => s.trim().length > 0).length : 0;

    // Averages (225 words per min reading, 130 words per min speaking)
    const readingTime = Math.ceil(words / 225);
    const speakingTime = Math.ceil(words / 130);

    setStats({
      sentences,
      words,
      characters,
      charactersNoSpaces,
      paragraphs,
      readingTime,
      speakingTime
    });
  }, [text]);

  const clearText = () => {
    setText("");
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
      <div className="mb-6 flex justify-between items-end">
        <label htmlFor="text-input" className="block text-sm font-bold text-gray-700">
          Paste your text below:
        </label>
        <button 
          onClick={clearText}
          className="text-sm font-semibold text-red-500 hover:text-red-700 transition-colors"
        >
          Clear Text
        </button>
      </div>
      
      <textarea
        id="text-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here to instantly count sentences, words, and characters..."
        className="w-full h-64 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-y text-lg text-gray-800"
      ></textarea>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex flex-col items-center justify-center text-center">
          <AlignLeft className="w-8 h-8 text-blue-600 mb-2" />
          <span className="text-3xl font-black text-blue-900">{stats.sentences}</span>
          <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Sentences</span>
        </div>
        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 flex flex-col items-center justify-center text-center">
          <FileText className="w-8 h-8 text-emerald-600 mb-2" />
          <span className="text-3xl font-black text-emerald-900">{stats.words}</span>
          <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">Words</span>
        </div>
        <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100 flex flex-col items-center justify-center text-center">
          <Type className="w-8 h-8 text-purple-600 mb-2" />
          <span className="text-3xl font-black text-purple-900">{stats.characters}</span>
          <span className="text-sm font-semibold text-purple-700 uppercase tracking-wide">Characters</span>
        </div>
        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 flex flex-col items-center justify-center text-center">
          <Clock className="w-8 h-8 text-amber-600 mb-2" />
          <span className="text-3xl font-black text-amber-900">{stats.readingTime}m</span>
          <span className="text-sm font-semibold text-amber-700 uppercase tracking-wide">Reading Time</span>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-gray-500 justify-center">
        <div className="px-4 py-2 bg-gray-50 rounded-lg">
          Characters (no spaces): <span className="font-bold text-gray-800">{stats.charactersNoSpaces}</span>
        </div>
        <div className="px-4 py-2 bg-gray-50 rounded-lg">
          Paragraphs: <span className="font-bold text-gray-800">{stats.paragraphs}</span>
        </div>
        <div className="px-4 py-2 bg-gray-50 rounded-lg">
          Speaking Time: <span className="font-bold text-gray-800">{stats.speakingTime} min</span>
        </div>
      </div>
    </div>
  );
}
