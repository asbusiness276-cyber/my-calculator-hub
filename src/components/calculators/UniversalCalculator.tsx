"use client";

import React, { useMemo, useState } from "react";
import { Copy, RotateCcw, Check, ShieldCheck, Sparkles } from "lucide-react";
import { getCategoryTheme } from "@/lib/category-theme";

type Field = {
  key: string;
  label: string;
  defaultValue: string;
  type?: "number" | "date" | "time" | "text";
  step?: string;
};

const fieldsByMode: Record<string, Field[]> = {
  weighted: [
    { key: "a", label: "Result / Mark 1", defaultValue: "78" },
    { key: "b", label: "Weight / Credits 1", defaultValue: "6" },
    { key: "c", label: "Result / Mark 2", defaultValue: "84" },
    { key: "d", label: "Weight / Credits 2", defaultValue: "6" },
  ],
  "target-grade": [
    { key: "a", label: "Current Mark (%)", defaultValue: "68" },
    { key: "b", label: "Completed Weight (%)", defaultValue: "60" },
    { key: "c", label: "Target Final Mark (%)", defaultValue: "75" },
  ],
  percentage: [
    { key: "a", label: "Percentage (%)", defaultValue: "20" },
    { key: "b", label: "Number / Amount", defaultValue: "250" },
  ],
  "percentage-change": [
    { key: "a", label: "Original Value", defaultValue: "120" },
    { key: "b", label: "New Value", defaultValue: "150" },
  ],
  loan: [
    { key: "a", label: "Loan Amount ($)", defaultValue: "300000" },
    { key: "b", label: "Annual Interest Rate (%)", defaultValue: "6.5", step: "0.01" },
    { key: "c", label: "Loan Term (Years)", defaultValue: "30" },
  ],
  compound: [
    { key: "a", label: "Initial Investment ($)", defaultValue: "10000" },
    { key: "b", label: "Annual Return Rate (%)", defaultValue: "7", step: "0.01" },
    { key: "c", label: "Time Horizon (Years)", defaultValue: "10" },
    { key: "d", label: "Monthly Contribution ($)", defaultValue: "250" },
  ],
  salary: [
    { key: "a", label: "Annual Salary / Income ($)", defaultValue: "78000" },
    { key: "b", label: "Hours Worked Per Week", defaultValue: "38" },
    { key: "c", label: "Weeks Worked Per Year", defaultValue: "52" },
  ],
  margin: [
    { key: "a", label: "Selling Price / Revenue ($)", defaultValue: "250" },
    { key: "b", label: "Cost Price / Expense ($)", defaultValue: "150" },
  ],
  bmi: [
    { key: "a", label: "Weight (kg)", defaultValue: "72", step: "0.1" },
    { key: "b", label: "Height (cm)", defaultValue: "175", step: "0.1" },
  ],
  health: [
    { key: "a", label: "Primary Measurement (Weight/Value)", defaultValue: "72", step: "0.1" },
    { key: "b", label: "Secondary Measurement (Height/Target)", defaultValue: "175", step: "0.1" },
    { key: "c", label: "Age or Duration", defaultValue: "30", step: "0.1" },
  ],
  age: [
    { key: "dateA", label: "Date of Birth / Start Date", defaultValue: "2000-01-01", type: "date" },
    { key: "dateB", label: "Calculation Date", defaultValue: new Date().toISOString().slice(0, 10), type: "date" },
  ],
  "date-difference": [
    { key: "dateA", label: "Start Date", defaultValue: new Date().toISOString().slice(0, 10), type: "date" },
    { key: "dateB", label: "End Date", defaultValue: new Date(Date.now() + 86400000 * 30).toISOString().slice(0, 10), type: "date" },
  ],
  time: [
    { key: "a", label: "Hours or Days", defaultValue: "8" },
    { key: "b", label: "Minutes or Secondary Value", defaultValue: "30" },
  ],
  fuel: [
    { key: "a", label: "Trip Distance (km or miles)", defaultValue: "500" },
    { key: "b", label: "Fuel Consumption (L or Gal / 100)", defaultValue: "8", step: "0.1" },
    { key: "c", label: "Fuel Price per Unit ($)", defaultValue: "1.85", step: "0.01" },
  ],
  split: [
    { key: "a", label: "Total Amount ($)", defaultValue: "2400" },
    { key: "b", label: "Number of People or Months", defaultValue: "4" },
    { key: "c", label: "Additional Shared Costs ($)", defaultValue: "200" },
  ],
  conversion: [
    { key: "a", label: "Value to Convert", defaultValue: "100", step: "any" },
    { key: "b", label: "Conversion Factor", defaultValue: "0.621371", step: "any" },
  ],
  chemistry: [
    { key: "a", label: "Moles of Solute (mol)", defaultValue: "0.5", step: "any" },
    { key: "b", label: "Liters of Solution (L)", defaultValue: "2", step: "any" },
  ],
  dilution: [
    { key: "a", label: "Initial Concentration (M1 in mol/L)", defaultValue: "12", step: "any" },
    { key: "b", label: "Initial Volume (V1 in mL)", defaultValue: "50", step: "any" },
    { key: "c", label: "Final Volume (V2 in mL)", defaultValue: "500", step: "any" },
  ],
  ph: [
    { key: "a", label: "Hydrogen Ion Concentration [H+] (mol/L)", defaultValue: "0.0001", step: "any" },
  ],
  "gas-law": [
    { key: "a", label: "Moles of Gas (n)", defaultValue: "2", step: "any" },
    { key: "b", label: "Temperature (Kelvin)", defaultValue: "298.15", step: "any" },
    { key: "c", label: "Volume (Liters)", defaultValue: "10", step: "any" },
  ],
  density: [
    { key: "a", label: "Mass (grams)", defaultValue: "250", step: "any" },
    { key: "b", label: "Volume (cm³ or mL)", defaultValue: "100", step: "any" },
  ],
  "half-life": [
    { key: "a", label: "Initial Quantity (N0)", defaultValue: "100", step: "any" },
    { key: "b", label: "Half-Life Time Period", defaultValue: "5.73", step: "any" },
    { key: "c", label: "Elapsed Time (t)", defaultValue: "11.46", step: "any" },
  ],
  "ohms-law": [
    { key: "a", label: "Current (Amperes - I)", defaultValue: "2.5", step: "any" },
    { key: "b", label: "Resistance (Ohms - R)", defaultValue: "48", step: "any" },
  ],
  velocity: [
    { key: "a", label: "Distance (meters or km)", defaultValue: "100", step: "any" },
    { key: "b", label: "Time (seconds or hours)", defaultValue: "9.58", step: "any" },
  ],
  acceleration: [
    { key: "a", label: "Initial Velocity (v0 in m/s)", defaultValue: "0", step: "any" },
    { key: "b", label: "Final Velocity (vf in m/s)", defaultValue: "27.8", step: "any" },
    { key: "c", label: "Time Taken (seconds)", defaultValue: "5", step: "any" },
  ],
  force: [
    { key: "a", label: "Mass (kg)", defaultValue: "1200", step: "any" },
    { key: "b", label: "Acceleration (m/s²)", defaultValue: "3.5", step: "any" },
  ],
  "kinetic-energy": [
    { key: "a", label: "Mass (kg)", defaultValue: "70", step: "any" },
    { key: "b", label: "Velocity (m/s)", defaultValue: "12", step: "any" },
  ],
  pressure: [
    { key: "a", label: "Applied Force (Newtons - N)", defaultValue: "500", step: "any" },
    { key: "b", label: "Surface Area (m²)", defaultValue: "0.25", step: "any" },
  ],
  brick: [
    { key: "a", label: "Wall Length (ft or m)", defaultValue: "20", step: "any" },
    { key: "b", label: "Wall Height (ft or m)", defaultValue: "8", step: "any" },
  ],
  "z-score": [
    { key: "a", label: "Raw Score (X)", defaultValue: "85", step: "any" },
    { key: "b", label: "Population Mean (μ)", defaultValue: "70", step: "any" },
    { key: "c", label: "Standard Deviation (σ)", defaultValue: "10", step: "any" },
  ],
  basic: [
    { key: "a", label: "First Value", defaultValue: "24", step: "any" },
    { key: "b", label: "Second Value", defaultValue: "6", step: "any" },
  ],
};

function numberToWords(input: number): string {
  if (!Number.isFinite(input)) return "Enter a valid number";
  const n = Math.trunc(input);
  if (n === 0) return "zero";
  if (Math.abs(n) > 999999999) return n.toLocaleString();
  const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  const under1000 = (val: number): string => {
    if (val < 20) return ones[val];
    if (val < 100) return `${tens[Math.floor(val / 10)]}${val % 10 ? `-${ones[val % 10]}` : ""}`;
    return `${ones[Math.floor(val / 100)]} hundred${val % 100 ? ` ${under1000(val % 100)}` : ""}`;
  };
  const pos = Math.abs(n);
  const parts: string[] = [];
  if (pos >= 1000000) parts.push(`${under1000(Math.floor(pos / 1000000))} million`);
  if (pos % 1000000 >= 1000) parts.push(`${under1000(Math.floor((pos % 1000000) / 1000))} thousand`);
  if (pos % 1000) parts.push(under1000(pos % 1000));
  return `${n < 0 ? "minus " : ""}${parts.join(" ")}`;
}

function romanize(val: number) {
  let n = Math.max(1, Math.min(3999, Math.trunc(val)));
  const map: [number, string][] = [
    [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
    [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
    [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
  ];
  let res = "";
  for (const [num, sym] of map) {
    while (n >= num) { res += sym; n -= num; }
  }
  return res;
}

function format(val: number, suffix = "") {
  if (!Number.isFinite(val)) return "Please check inputs and try again";
  return `${val.toLocaleString(undefined, { maximumFractionDigits: 2 })}${suffix}`;
}

export default function UniversalCalculator({
  slug = "calculator",
  mode = "basic",
  title = "Online Calculator",
  calc,
}: {
  slug?: string;
  mode?: string;
  title?: string;
  calc?: { slug: string; mode?: string; title: string; category?: string };
}) {
  const activeSlug = calc?.slug || slug;
  const activeMode = calc?.mode || mode || "basic";
  const activeTitle = calc?.title?.split(" -")[0]?.replace("Free ", "") || title;
  const theme = getCategoryTheme(calc?.category || activeSlug);

  const numericFields = fieldsByMode[activeMode] ?? fieldsByMode.basic;
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(numericFields.map((f) => [f.key, f.defaultValue]))
  );
  const [text, setText] = useState("Enter your text, list, or values here to process instantly.");
  const [copied, setCopied] = useState(false);

  const usesText = [
    "text", "alphabetize", "case", "binary", "hex", "roman", "number-words", "password"
  ].includes(activeMode) || activeSlug === "random-name-picker";

  const result = useMemo(() => {
    const n = (key: string) => Number(values[key] || 0);

    // Custom formulas per slug
    if (/wam-to-4-0|wam-to-gpa/.test(activeSlug)) return `${format(n("a") / 25)} GPA on a 4.0 scale`;
    if (/wam-to-7-0/.test(activeSlug)) return `${format((n("a") * 7) / 100)} GPA on a 7.0 scale`;
    if (/4-0-gpa-to-wam|gpa-to-wam|cgpa-to-wam/.test(activeSlug)) return `${format(n("a") * 25, "% approximate WAM")}`;
    if (/7-0-gpa-to-wam/.test(activeSlug)) return `${format((n("a") * 100) / 7, "% approximate WAM")}`;
    if (/4-0-to-7-0/.test(activeSlug)) return `${format((n("a") * 7) / 4)} on a 7.0 scale`;
    if (/7-0-to-4-0/.test(activeSlug)) return `${format((n("a") * 4) / 7)} on a 4.0 scale`;
    if (/10-point-gpa-to-wam/.test(activeSlug)) return `${format(n("a") * 10, "% approximate WAM")}`;
    if (/percentage-to-gpa/.test(activeSlug)) return `${format(n("a") / 25)} (4.0 scale) · ${format((n("a") * 7) / 100)} (7.0 scale)`;
    if (/gpa-to-percentage/.test(activeSlug)) return `${format(n("a") * 25, "% linear percentage")}`;
    if (/attendance/.test(activeSlug)) return `${format((n("a") / Math.max(n("b"), 1)) * 100, "% attendance")}`;
    if (/degree-progress|credit-points/.test(activeSlug)) {
      return `${format((n("a") / Math.max(n("b"), 1)) * 100, "% complete")} · ${format(Math.max(n("b") - n("a"), 0))} credits remaining`;
    }
    if (/hecs-debt|hecs-indexation/.test(activeSlug)) {
      return `$${format(n("a") * (1 + n("b") / 100) ** Math.max(n("c") || 1, 1))} indexed balance`;
    }
    if (/hecs-repayment-time/.test(activeSlug)) {
      return `${format(n("a") / Math.max(n("b"), 1))} estimated years to repay`;
    }
    if (/student-tax|sales-tax|gst|vat/.test(activeSlug)) {
      return `$${format((n("a") * n("b")) / 100)} tax · Total: $${format(n("a") + (n("a") * n("b")) / 100)}`;
    }
    if (/caffeine/.test(activeSlug)) return `${format(n("a") * 0.5 ** (n("c") / 5))} mg caffeine remaining`;
    if (/standard-drinks|alcohol-unit/.test(activeSlug)) return `${format((n("a") * (n("b") / 100) * 0.789) / 10)} standard drinks`;
    if (/water-intake/.test(activeSlug)) return `${format(n("a") * 0.033)} Liters per day`;
    if (/protein-intake/.test(activeSlug)) return `${format(n("a") * n("b"))} grams of protein daily`;
    if (/one-rep-max/.test(activeSlug)) return `${format(n("a") * (1 + n("b") / 30))} kg/lbs 1-Rep Max`;
    if (/pace/.test(activeSlug)) return `${format(n("b") / Math.max(n("a"), 0.0001))} minutes per km/mile`;
    if (/heart-rate-zone/.test(activeSlug)) {
      return `${format((220 - n("c")) * 0.6)} – ${format((220 - n("c")) * 0.85)} bpm (Target Heart Rate Zone)`;
    }
    if (/ideal-weight/.test(activeSlug)) return `${format(50 + 2.3 * Math.max(n("b") / 2.54 - 60, 0))} kg (Reference Range)`;
    if (/body-fat/.test(activeSlug)) {
      return `${format(Math.max(1.2 * (n("a") / (n("b") / 100) ** 2) + 0.23 * n("c") - 16.2, 0), "% body fat")}`;
    }
    if (/sleep-cycle/.test(activeSlug)) return `${format(n("a") * 60 + n("b") + 15)} minutes (includes 15 min sleep onset)`;
    if (/fraction-to-decimal/.test(activeSlug)) return `${format(n("a") / Math.max(n("b"), 0.000001))}`;
    if (/decimal-to-fraction/.test(activeSlug)) return `${Math.round(n("a") * 1000)}/1000`;
    if (/ratio|proportion/.test(activeSlug)) return `${format(n("a") / Math.max(n("b"), 0.000001))}:1 ratio`;
    if (/average|mean-median-mode/.test(activeSlug)) return `${format((n("a") + n("b")) / 2)} average`;
    if (/square-root/.test(activeSlug)) return `${format(Math.sqrt(Math.max(n("a"), 0)))}`;
    if (/exponent/.test(activeSlug)) return `${format(n("a") ** n("b"))}`;
    if (/logarithm/.test(activeSlug)) return `${format(Math.log(n("a")) / Math.log(n("b") || 10))}`;
    if (/circle/.test(activeSlug)) return `Area: ${format(Math.PI * n("a") ** 2)} · Circumference: ${format(2 * Math.PI * n("a"))}`;
    if (/triangle/.test(activeSlug)) return `Area: ${format((n("a") * n("b")) / 2)}`;
    if (/pythagorean/.test(activeSlug)) return `Hypotenuse: ${format(Math.sqrt(n("a") ** 2 + n("b") ** 2))}`;
    if (/area|flooring|tile|paint|roofing/.test(activeSlug)) {
      return `${format(n("a") * n("b"))} sq units (add 10% for waste: ${format(n("a") * n("b") * 1.1)})`;
    }
    if (/perimeter|fence/.test(activeSlug)) return `${format(2 * (n("a") + n("b")))} linear units`;
    if (/volume|concrete|mulch/.test(activeSlug)) return `${format(n("a") * n("b") * Math.max(n("c") || 1, 1))} cubic units`;
    if (/electricity|appliance-energy/.test(activeSlug)) return `$${format(n("a") * n("b") * n("c"))} estimated energy cost`;
    if (/cpc-calculator/.test(activeSlug)) return `$${format(n("b") / Math.max(n("a"), 1))} Cost Per Click`;
    if (/cpm-calculator/.test(activeSlug)) return `$${format((n("b") / Math.max(n("a"), 1)) * 1000)} Cost Per 1,000 Impressions`;
    if (/ctr-calculator/.test(activeSlug)) return `${format((n("a") / Math.max(n("b"), 1)) * 100, "% CTR")}`;
    if (/conversion-rate/.test(activeSlug)) return `${format((n("a") / Math.max(n("b"), 1)) * 100, "% conversion rate")}`;
    if (/customer-acquisition/.test(activeSlug)) return `$${format(n("b") / Math.max(n("a"), 1))} per customer`;
    if (/mrr-calculator/.test(activeSlug)) return `$${format(n("a") * n("b"))} MRR`;
    if (/arr-calculator/.test(activeSlug)) return `$${format(n("a") * n("b") * 12)} ARR`;
    if (/slug-generator/.test(activeSlug)) {
      return text.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    }
    if (/json-formatter/.test(activeSlug)) {
      try {
        return JSON.stringify(JSON.parse(text), null, 2);
      } catch {
        return "Invalid JSON: please verify syntax";
      }
    }
    if (/base64/.test(activeSlug)) {
      try {
        return btoa(unescape(encodeURIComponent(text)));
      } catch {
        return "Unable to encode input";
      }
    }
    if (/url-encoder/.test(activeSlug)) return encodeURIComponent(text);

    // Mode-based fallbacks
    if (activeMode === "weighted") {
      return format(
        (n("a") * n("b") + n("c") * n("d")) / Math.max(n("b") + n("d"), 1),
        "% weighted result"
      );
    }
    if (activeMode === "target-grade") {
      return format(
        (n("c") - (n("a") * n("b")) / 100) / Math.max(1 - n("b") / 100, 0.01),
        "% needed on remaining assessment"
      );
    }
    if (activeMode === "percentage") return format((n("a") * n("b")) / 100);
    if (activeMode === "percentage-change") {
      return format(((n("b") - n("a")) / Math.max(Math.abs(n("a")), 0.00001)) * 100, "% change");
    }
    if (activeMode === "loan") {
      const rate = n("b") / 1200;
      const months = n("c") * 12;
      const payment =
        rate === 0
          ? n("a") / months
          : (n("a") * rate * (1 + rate) ** months) / ((1 + rate) ** months - 1);
      return `$${format(payment)} / mo · Total: $${format(payment * months)}`;
    }
    if (activeMode === "compound") {
      const monthly = n("b") / 1200;
      const periods = n("c") * 12;
      const future =
        n("a") * (1 + monthly) ** periods +
        (monthly ? n("d") * (((1 + monthly) ** periods - 1) / monthly) : n("d") * periods);
      return `$${format(future)} projected value`;
    }
    if (activeMode === "salary") {
      return `$${format(n("a") / Math.max(n("b") * n("c"), 1))} / hour · $${format(n("a") / 12)} / month`;
    }
    if (activeMode === "margin") {
      return `$${format(n("a") - n("b"))} profit · ${format(((n("a") - n("b")) / Math.max(n("a"), 0.00001)) * 100, "% margin")}`;
    }
    if (activeMode === "bmi") {
      const bmiVal = n("a") / (n("b") / 100) ** 2;
      const band =
        bmiVal < 18.5
          ? "Underweight"
          : bmiVal < 25
          ? "Normal weight"
          : bmiVal < 30
          ? "Overweight"
          : "Obese";
      return `${format(bmiVal)} BMI (${band})`;
    }
    if (activeMode === "health") {
      return `${format(10 * n("a") + 6.25 * n("b") - 5 * n("c") + 5)} estimated daily calories/units`;
    }
    if (activeMode === "age" || activeMode === "date-difference") {
      const start = new Date(values.dateA);
      const end = new Date(values.dateB);
      const days = Math.abs(end.getTime() - start.getTime()) / 86400000;
      return activeMode === "age"
        ? `${Math.floor(days / 365.2425)} years · ${Math.floor(days)} days total`
        : `${Math.floor(days).toLocaleString()} days (${format(days / 7)} weeks)`;
    }
    if (activeMode === "time") return `${format(n("a") * 60 + n("b"))} minutes (${format(n("a") + n("b") / 60)} hours)`;
    if (activeMode === "fuel") {
      return `$${format((n("a") * n("b") * n("c")) / 100)} total cost (${format((n("a") * n("b")) / 100)} fuel units)`;
    }
    if (activeMode === "split") {
      return `$${format((n("a") + n("c")) / Math.max(n("b"), 1))} per person`;
    }
    if (activeMode === "conversion") return `${format(n("a") * n("b"))} converted units`;
    if (activeMode === "alphabetize") {
      return text.split(/\n|,/).map((s) => s.trim()).filter(Boolean).sort((x, y) => x.localeCompare(y)).join("\n") || "Add items to alphabetize";
    }
    if (activeMode === "case") {
      return `UPPERCASE:\n${text.toUpperCase()}\n\nTitle Case:\n${text.toLowerCase().replace(/\\b\\w/g, (c) => c.toUpperCase())}`;
    }
    if (activeMode === "binary") {
      if (/^[01\\s]+$/.test(text.trim())) {
        return text.trim().split(/\\s+/).map((c) => String.fromCharCode(parseInt(c, 2))).join("");
      }
      return Array.from(text).map((c) => c.charCodeAt(0).toString(2).padStart(8, "0")).join(" ");
    }
    if (activeMode === "hex") return `${parseInt(text.trim() || "0", 16).toLocaleString()} decimal`;
    if (activeMode === "roman") return romanize(Number(text) || 1);
    if (activeMode === "number-words") return numberToWords(Number(text));
    if (activeMode === "password") {
      const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*";
      return Array.from({ length: 18 }, (_, idx) => chars[(idx * 17 + text.length * 11 + 7) % chars.length]).join("");
    }
    if (activeMode === "random") {
      if (/random-name/.test(activeSlug)) {
        const names = text.split(/\\n|,/).map((s) => s.trim()).filter(Boolean);
        return names.length ? names[(text.length * 7) % names.length] : "Enter names separated by comma or new line";
      }
      const min = Math.min(n("a"), n("b"));
      const max = Math.max(n("a"), n("b"));
      return `${Math.floor(min + ((Math.abs(n("a") * 9301 + n("b") * 49297 + 233280) % 233280) / 233280) * (max - min + 1))}`;
    }
    if (activeMode === "text") {
      const words = text.trim() ? text.trim().split(/\\s+/).length : 0;
      const chars = text.length;
      const sentences = text.split(/[.!?]+/).filter((s) => s.trim()).length;
      return `${words.toLocaleString()} words · ${chars.toLocaleString()} characters · ${sentences} sentences · ~${Math.max(1, Math.ceil(words / 200))} min read`;
    }
    if (activeMode === "chemistry") {
      const molarity = n("a") / Math.max(n("b"), 0.000001);
      return `${format(molarity)} M (mol/L)`;
    }
    if (activeMode === "dilution") {
      const finalMolarity = (n("a") * n("b")) / Math.max(n("c"), 0.000001);
      return `${format(finalMolarity)} M (M2 concentration)`;
    }
    if (activeMode === "ph") {
      const hConc = Math.max(n("a"), 1e-14);
      const phVal = -Math.log10(hConc);
      const pohVal = 14 - phVal;
      const type = phVal < 7 ? "Acidic" : phVal > 7 ? "Basic / Alkaline" : "Neutral";
      return `pH: ${format(phVal)} (${type}) · pOH: ${format(pohVal)}`;
    }
    if (activeMode === "gas-law") {
      const pAtm = (n("a") * 0.08206 * n("b")) / Math.max(n("c"), 0.000001);
      const pKPa = pAtm * 101.325;
      return `${format(pAtm)} atm (${format(pKPa)} kPa)`;
    }
    if (activeMode === "density") {
      const densityVal = n("a") / Math.max(n("b"), 0.000001);
      return `${format(densityVal)} g/cm³ (or kg/L)`;
    }
    if (activeMode === "half-life") {
      const remaining = n("a") * 0.5 ** (n("c") / Math.max(n("b"), 0.000001));
      const decayed = n("a") - remaining;
      return `${format(remaining)} remaining (${format((remaining / Math.max(n("a"), 0.000001)) * 100, "%")}) · ${format(decayed)} decayed`;
    }
    if (activeMode === "ohms-law") {
      const v = n("a") * n("b");
      const p = v * n("a");
      return `Voltage: ${format(v)} V · Power: ${format(p)} W`;
    }
    if (activeMode === "velocity") {
      const v = n("a") / Math.max(n("b"), 0.000001);
      return `${format(v)} m/s (${format(v * 3.6)} km/h · ${format(v * 2.23694)} mph)`;
    }
    if (activeMode === "acceleration") {
      const a = (n("b") - n("a")) / Math.max(n("c"), 0.000001);
      return `${format(a)} m/s²`;
    }
    if (activeMode === "force") {
      const f = n("a") * n("b");
      return `${format(f)} Newtons (N)`;
    }
    if (activeMode === "kinetic-energy") {
      const ke = 0.5 * n("a") * n("b") ** 2;
      return `${format(ke)} Joules (J)`;
    }
    if (activeMode === "pressure") {
      const p = n("a") / Math.max(n("b"), 0.000001);
      return `${format(p)} Pascals (Pa) · ${format(p / 1000)} kPa`;
    }
    if (activeMode === "brick") {
      const wallArea = n("a") * n("b");
      const bricksNeeded = Math.ceil(wallArea * 6.5 * 1.1);
      const mortarBags = Math.ceil(bricksNeeded / 100);
      return `${bricksNeeded.toLocaleString()} bricks (incl. 10% waste) · ~${mortarBags} mortar bags`;
    }
    if (activeMode === "z-score") {
      const z = (n("a") - n("b")) / Math.max(n("c"), 0.000001);
      return `Z-Score: ${format(z)} (${z >= 0 ? "+" : ""}${format(z)} σ from mean)`;
    }
    return `${format(n("a") + n("b"))} sum · ${format(n("a") * n("b"))} product`;
  }, [activeMode, activeSlug, values, text]);

  const reset = () => {
    setValues(Object.fromEntries(numericFields.map((f) => [f.key, f.defaultValue])));
    setText("Enter your text, list, or values here to process instantly.");
    setCopied(false);
  };

  const copyResult = async () => {
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className={`bg-white rounded-3xl shadow-xs border ${theme.borderLight} overflow-hidden transition-all`}>
        
        {/* Themed Header Bar */}
        <div className={`p-6 md:p-8 bg-gradient-to-r ${theme.cardGradient} border-b ${theme.borderLight} flex flex-col md:flex-row md:items-center justify-between gap-4`}>
          <div>
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r ${theme.pillGradient} text-white text-xs font-bold rounded-full mb-2 shadow-xs`}>
              <Sparkles className="w-3.5 h-3.5" /> {theme.badgeText}
            </div>
            <h2 className="text-xl md:text-2xl font-black text-gray-900">{activeTitle}</h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Private Browser Calculation</span>
          </div>
        </div>

        {/* Input Fields Area */}
        <div className="p-6 md:p-8 space-y-6">
          {usesText ? (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {activeMode === "password" ? "Seed text or salt (optional)" : "Enter Text or Values"}
              </label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={5}
                className={`w-full p-4 border border-gray-200 rounded-2xl ${theme.ringFocus} transition-all font-mono text-sm text-gray-800 bg-gray-50/50`}
                placeholder="Type or paste content here..."
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {numericFields.map((field) => (
                <div key={field.key} className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    {field.label}
                  </label>
                  <input
                    type={field.type ?? "number"}
                    step={field.step ?? "any"}
                    value={values[field.key] ?? ""}
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, [field.key]: e.target.value }))
                    }
                    className={`w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl ${theme.ringFocus} transition-all font-medium text-gray-900`}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Themed Result Card */}
          <div className={`mt-8 p-6 md:p-8 ${theme.resultCard} rounded-3xl shadow-lg relative overflow-hidden`}>
            {/* Subtle glow orb */}
            <div
              className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-2xl opacity-30 pointer-events-none"
              style={{ backgroundColor: theme.primaryHex }}
            />
            <span className="text-xs uppercase tracking-wider font-extrabold text-white/80 block mb-1.5 relative z-10 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" /> Calculated Output
            </span>
            <div className="text-2xl md:text-3xl font-black tracking-tight whitespace-pre-wrap break-words relative z-10 text-white drop-shadow-xs">
              {result}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={copyResult}
              className={`inline-flex items-center gap-2 px-6 py-3.5 ${theme.btnGradient} font-bold rounded-xl transition-all active:scale-95 text-sm cursor-pointer`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" /> Copied to Clipboard
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" /> Copy Result
                </>
              )}
            </button>
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all active:scale-95 text-sm cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" /> Reset
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
