"use client";

import React, { useState } from 'react';
import { GraduationCap, Plus, Trash2 } from 'lucide-react';

interface Subject {
  id: number;
  name: string;
  mark: number | '';
  credit: number | '';
}

export default function WamCalculator() {
  const [subjects, setSubjects] = useState<Subject[]>([
    { id: 1, name: 'Subject 1', mark: 85, credit: 6 },
    { id: 2, name: 'Subject 2', mark: 72, credit: 6 },
    { id: 3, name: 'Subject 3', mark: 90, credit: 3 },
  ]);

  const addSubject = () => {
    setSubjects([...subjects, { id: Date.now(), name: `Subject ${subjects.length + 1}`, mark: '', credit: 6 }]);
  };

  const removeSubject = (id: number) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter(sub => sub.id !== id));
    }
  };

  const updateSubject = (id: number, field: keyof Subject, value: any) => {
    setSubjects(subjects.map(sub => sub.id === id ? { ...sub, [field]: value } : sub));
  };

  // Calculate WAM
  let totalWeightedMarks = 0;
  let totalCredits = 0;

  subjects.forEach(sub => {
    if (typeof sub.mark === 'number' && typeof sub.credit === 'number') {
      totalWeightedMarks += sub.mark * sub.credit;
      totalCredits += sub.credit;
    }
  });

  const wam = totalCredits > 0 ? (totalWeightedMarks / totalCredits) : 0;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-indigo-600 p-6 text-white flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              WAM Calculator
            </h2>
            <p className="text-indigo-100 mt-2">Calculate your Weighted Average Mark for university.</p>
          </div>
          <div className="bg-white/20 px-6 py-3 rounded-2xl text-center">
            <p className="text-sm font-medium text-indigo-100">Your WAM</p>
            <p className="text-4xl font-black">{wam.toFixed(2)}</p>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="pb-3 text-sm font-bold text-gray-500">Subject Name</th>
                  <th className="pb-3 text-sm font-bold text-gray-500">Mark (0-100)</th>
                  <th className="pb-3 text-sm font-bold text-gray-500">Credit Points</th>
                  <th className="pb-3"></th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((sub, index) => (
                  <tr key={sub.id} className="border-b border-gray-50">
                    <td className="py-3 pr-4">
                      <input type="text" value={sub.name} onChange={(e) => updateSubject(sub.id, 'name', e.target.value)} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500" placeholder="Subject Name" />
                    </td>
                    <td className="py-3 pr-4">
                      <input type="number" min="0" max="100" value={sub.mark} onChange={(e) => updateSubject(sub.id, 'mark', e.target.value ? Number(e.target.value) : '')} className="w-32 px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500" placeholder="e.g. 85" />
                    </td>
                    <td className="py-3 pr-4">
                      <input type="number" min="0" value={sub.credit} onChange={(e) => updateSubject(sub.id, 'credit', e.target.value ? Number(e.target.value) : '')} className="w-32 px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500" placeholder="e.g. 6" />
                    </td>
                    <td className="py-3">
                      <button onClick={() => removeSubject(sub.id)} className="p-2 text-gray-400 hover:text-red-500 transition-colors" disabled={subjects.length === 1}>
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <button onClick={addSubject} className="flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800 transition-colors">
            <Plus className="w-5 h-5" /> Add Subject
          </button>
        </div>
      </div>
      
      <div className="w-full h-[250px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center text-gray-400">
        [AdSense Placement]
      </div>
    </div>
  );
}