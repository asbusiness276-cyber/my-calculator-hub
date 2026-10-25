import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CalculatorMeta, calculators } from "@/lib/calculators";
import { articles, Article } from "@/lib/articles";
import { getCategoryTheme } from "@/lib/category-theme";
import { 
  CheckCircle2, 
  AlertTriangle, 
  BookOpen, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  HelpCircle, 
  ArrowRight, 
  User, 
  Calendar, 
  Award,
  ExternalLink
} from "lucide-react";

interface Props {
  calc: CalculatorMeta;
  faqs: Array<{ question: string; answer: string }>;
}

const categoryContext: Record<string, { noun: string; authority: string; caution: string }> = {
  "Finance & Investment": {
    noun: "personal finance modeling, loan comparison, and wealth projection",
    authority: "your official banking statement, lender loan estimate, tax authority guidelines, or certified financial advisor",
    caution: "Interest rate compounding frequency, pre-payment penalties, processing fees, and regional taxes can alter the real-world outcome.",
  },
  "Health & Fitness": {
    noun: "evidence-based health orientation, energy expenditure, and fitness tracking",
    authority: "a qualified physician, registered dietitian, clinical history, and validated medical laboratory tests",
    caution: "Mathematical equations cannot evaluate metabolic adaptations, endocrine profiles, or individual medical conditions.",
  },
  "Academic & Students": {
    noun: "academic standing, grade-point averages, semester targets, and degree progression",
    authority: "your official academic transcript, university grading policy, faculty handbook, and student records office",
    caution: "University grading conventions, fail grade inclusion rules, and credit weightings vary by faculty and institution.",
  },
  "Daily Utility & Math": {
    noun: "everyday mathematical problem-solving, measurements, and conversions",
    authority: "standard SI measurement conventions, source parameters, and exact geometric dimensions",
    caution: "Ensure input numbers share consistent units (e.g. centimeters vs meters, inches vs feet) before concluding calculations.",
  },
  "Science & Chemistry": {
    noun: "chemical equilibrium, stoichiometry, laboratory concentration, and molecular analysis",
    authority: "IUPAC chemical standards, standard laboratory procedures, calibrated scales, and peer-reviewed chemical handbooks",
    caution: "Temperature, pressure fluctuations, and solvent purity directly influence real-world chemical reactions.",
  },
  "Physics & Engineering": {
    noun: "classical mechanics, electrical engineering analysis, and energy computation",
    authority: "standard physics textbooks, engineering specifications, calibrated sensor data, and certified electrical codes",
    caution: "Theoretical equations often assume ideal conditions (frictionless surfaces, zero air resistance, or constant resistance).",
  },
  "Construction & Real Estate": {
    noun: "material estimation, construction planning, and project surface area takeoff",
    authority: "on-site physical tape measurements, architectural blueprints, supplier specifications, and local building codes",
    caution: "Always add an industry-standard 10% to 15% wastage allowance for cutting, overlaps, and site irregularities.",
  },
  "Statistics & Probability": {
    noun: "statistical inference, data distribution, and probability modeling",
    authority: "peer-reviewed statistical methodologies, population census data, and verified sample datasets",
    caution: "Small sample sizes and non-normal distributions can introduce bias into statistical estimators.",
  },
  "Business & Marketing": {
    noun: "commercial economics, ad spend efficiency, unit economics, and growth forecasting",
    authority: "audited accounting ledgers, CRM databases, verified advertising platforms, and GAAP reporting standards",
    caution: "Attribution models, refund rates, payment processing fees, and seasonal volatility heavily impact marketing metrics.",
  },
  "Text & Developer Tools": {
    noun: "text analysis, data formatting, algorithmic encoding, and string processing",
    authority: "Unicode standards, RFC specifications, programming language documentation, and destination platform limits",
    caution: "Special character sets, multiline encodings, and hidden whitespace characters can alter automated counts.",
  },
};

const categoryWorkedExamples: Record<string, {
  scenarioTitle: string;
  setup: string;
  step1: string;
  step2: string;
  step3: string;
  conclusion: string;
}> = {
  "Finance & Investment": {
    scenarioTitle: "Wealth Growth & Amortization Modeling",
    setup: "Suppose an investor models a $10,000 baseline sum with $500 monthly additions at an estimated 8.5% annual return over a 10-year investment horizon.",
    step1: "Initial variables are validated: compounding occurs monthly (n = 12), with periodic rate r = 0.085 / 12 = 0.007083, and monthly additions are made at the beginning of each month.",
    step2: "Applying standard future value equations yields a total principal invested of $70,000 ($10,000 initial + $60,000 monthly contributions).",
    step3: "Total wealth accumulated reaches $118,062, generating $48,062 in compound interest alone (beginning-of-month payments).",
    conclusion: "Notice how compound growth accelerates exponentially in years 7 through 10, highlighting why time in the market outweighs short-term timing.",
  },
  "Science & Chemistry": {
    scenarioTitle: "Laboratory Solution & Stoichiometry Walkthrough",
    setup: "Consider preparing a 0.50 M standard sodium chloride (NaCl) solution in a 500 mL volumetric flask.",
    step1: "Determine solute molar mass: Na (22.99 g/mol) + Cl (35.45 g/mol) = 58.44 g/mol.",
    step2: "Calculate required moles: Moles = Molarity × Volume (L) = 0.50 mol/L × 0.500 L = 0.250 moles.",
    step3: "Convert moles to mass: Mass = 0.250 mol × 58.44 g/mol = 14.61 grams of solid NaCl.",
    conclusion: "14.61 grams of NaCl is weighed on an analytical balance, dissolved in distilled water, and filled accurately to the 500 mL calibration mark at standard laboratory temperature (20°C).",
  },
  "Physics & Engineering": {
    scenarioTitle: "Circuit Load & Mechanical Force Analysis",
    setup: "An electrical engineer evaluates a 12V DC power supply powering an industrial sensor circuit presenting a 4.0 Ω load resistance.",
    step1: "Apply Ohm's Law (V = I × R) to isolate current: I = V / R = 12.0 V / 4.0 Ω = 3.00 Amperes.",
    step2: "Compute circuit power dissipation: P = V × I = 12.0 V × 3.00 A = 36.0 Watts.",
    step3: "Thermal rating check: Select a power resistor rated for at least 50W to provide a safe 40% thermal overhead margin.",
    conclusion: "This deterministic workflow ensures components operate safely within electrical and thermal tolerances without hazardous overheating.",
  },
  "Construction & Real Estate": {
    scenarioTitle: "Material Takeoff & Wastage Allowance",
    setup: "A masonry contractor calculates brick requirements for an exterior garden wall measuring 20 feet long by 6 feet high (120 square feet face area).",
    step1: "Standard modular brick sizing requires approximately 6.75 bricks per square foot including standard 3/8-inch mortar joints.",
    step2: "Baseline brick count: 120 sq ft × 6.75 bricks/sq ft = 810 bricks.",
    step3: "Add industry-standard 10% wastage for cutting, end caps, and transit breakage: 810 × 1.10 = 891 bricks.",
    conclusion: "The contractor orders 900 bricks (rounded up to the nearest pallet), ensuring the project avoids costly mid-construction supply halts.",
  },
  "Academic & Students": {
    scenarioTitle: "Semester WAM & Degree Progression Walkthrough",
    setup: "A university student finishes a semester with four subjects: Two 6-credit core units (scores 84% and 72%), one 12-credit capstone unit (score 90%), and one 6-credit elective (score 66%).",
    step1: "Multiply each mark by its credit weighting: (84 × 6 = 504) + (72 × 6 = 432) + (90 × 12 = 1080) + (66 × 6 = 396). Total weighted product = 2,412.",
    step2: "Sum total eligible credit points: 6 + 6 + 12 + 6 = 30 credit points.",
    step3: "Calculate Weighted Average Mark: 2,412 / 30 = 80.40% (Distinction average).",
    conclusion: "Because the capstone carried 12 credit points, scoring 90% in it gave massive upward leverage, lifting the overall average firmly above the 80% mark.",
  },
  "Health & Fitness": {
    scenarioTitle: "Energy Expenditure & Caloric Target Evaluation",
    setup: "A 28-year-old individual weighing 75 kg with a height of 178 cm seeks an evidence-based maintenance and fat loss caloric target.",
    step1: "Compute Basal Metabolic Rate (BMR) via Mifflin-St Jeor: (10 × 75) + (6.25 × 178) - (5 × 28) + 5 = 750 + 1112.5 - 140 + 5 = 1,727.5 kcal.",
    step2: "Apply moderate activity multiplier (1.55): Total Daily Energy Expenditure (TDEE) = 1,727.5 × 1.55 = 2,678 kcal/day for weight maintenance.",
    step3: "Establish a safe 15% caloric deficit for progressive fat loss: 2,678 - 400 = 2,278 kcal/day with 1.6–2.0g protein per kg bodyweight.",
    conclusion: "Tracking weekly scale weight averages against this target provides an empirical feedback loop to adjust calories without crash dieting.",
  },
  "Statistics & Probability": {
    scenarioTitle: "Z-Score Standardization & Percentile Mapping",
    setup: "A data analyst benchmarks a standardized exam score of 88 against a population distribution with mean μ = 76 and standard deviation σ = 6.",
    step1: "Calculate raw difference from the mean: 88 - 76 = +12 points.",
    step2: "Divide by the standard deviation to determine standard score: Z = 12 / 6 = +2.00.",
    step3: "Map Z = +2.00 to standard normal cumulative distribution tables: P(Z < 2.00) = 0.9772 (97.72nd percentile).",
    conclusion: "The candidate scored higher than approximately 97.7% of the testing population, placing their performance in the top 2.3% of candidates.",
  },
  "Business & Marketing": {
    scenarioTitle: "Unit Economics: Margin vs. Markup Calculation",
    setup: "An e-commerce retailer sources a specialized tech gadget for $45 (cost of goods sold) and targets a retail listing price of $90.",
    step1: "Calculate gross profit per unit: Selling Price ($90) - Cost Price ($45) = $45 gross profit.",
    step2: "Determine Profit Margin: ($45 Gross Profit / $90 Revenue) × 100 = 50.0% profit margin.",
    step3: "Determine Markup: ($45 Gross Profit / $45 Cost Price) × 100 = 100.0% markup.",
    conclusion: "Understanding that a 100% markup corresponds to a 50% profit margin protects advertising budgets from unsustainable Customer Acquisition Cost (CAC) thresholds.",
  },
  "Daily Utility & Math": {
    scenarioTitle: "Percentage Change & Discount Realization",
    setup: "A shopper evaluates a store promotion offering 25% off an item originally priced at $140, with an additional 10% loyalty discount at checkout.",
    step1: "Calculate first discount: $140 × 0.25 = $35 reduction, bringing the intermediate price to $105.",
    step2: "Apply second discount to reduced subtotal: $105 × 0.10 = $10.50 reduction, resulting in a final pre-tax price of $94.50.",
    step3: "Determine total real discount: Total savings = $35 + $10.50 = $45.50. Overall discount rate = ($45.50 / $140) × 100 = 32.5% (not 35%).",
    conclusion: "Compounded sequential discounts are mathematically applied to the diminishing subtotal, preventing overestimation of savings.",
  },
  "Text & Developer Tools": {
    scenarioTitle: "Text Metric Analysis & Speaking Pace Estimate",
    setup: "A content strategist prepares a keynote address containing 1,800 words across 95 sentences.",
    step1: "Average sentence length calculation: 1,800 words / 95 sentences = 18.9 words per sentence (ideal for oral comprehension).",
    step2: "Silent reading time at 220 words per minute: 1,800 / 220 = 8.18 minutes.",
    step3: "Public speaking delivery time at standard pacing (140 words per minute): 1,800 / 140 = 12.85 minutes (approx 12 minutes 50 seconds).",
    conclusion: "The speaker budgets a 15-minute conference slot, providing a comfortable 2-minute buffer for audience interaction and slide transitions.",
  },
};

// Per-slug worked examples, checked before the category fallback below.
// This stops a single SIP example appearing on EMI, GST, PPF, HECS and
// mortgage pages. All figures below were independently recomputed.
const slugWorkedExamples: Record<string, {
  scenarioTitle: string;
  setup: string;
  step1: string;
  step2: string;
  step3: string;
  conclusion: string;
}> = {
  "sip-calculator": {
    scenarioTitle: "SIP Wealth Growth Walkthrough",
    setup: "Suppose an investor models a $10,000 baseline sum with $500 monthly additions at an estimated 8.5% annual return over a 10-year investment horizon, with payments at the beginning of each month.",
    step1: "Initial variables are validated: compounding occurs monthly (n = 12), with periodic rate r = 0.085 / 12 = 0.007083.",
    step2: "Applying standard future value equations yields a total principal invested of $70,000 ($10,000 initial + $60,000 monthly contributions).",
    step3: "Total wealth accumulated reaches $118,062, generating $48,062 in compound interest alone (beginning-of-month payments).",
    conclusion: "Notice how compound growth accelerates exponentially in years 7 through 10, highlighting why time in the market outweighs short-term timing.",
  },
  "emi-calculator": {
    scenarioTitle: "EMI Repayment Walkthrough",
    setup: "A borrower takes a loan of Rs 5,00,000 at 8.5% annual interest for 20 years, repaid in equal monthly instalments.",
    step1: "Use EMI = [P x r x (1 + r)^n] / [(1 + r)^n - 1], with monthly rate r = 0.085 / 12 and n = 240 months.",
    step2: "Substituting P = 5,00,000 gives EMI = Rs 4,339 per month.",
    step3: "Total paid = Rs 10,41,388; total interest = Rs 5,41,388.",
    conclusion: "A longer tenure lowers the monthly EMI but raises total interest, so the EMI alone does not show the full cost of the loan.",
  },
  "mortgage-calculator": {
    scenarioTitle: "Mortgage Repayment Walkthrough",
    setup: "A borrower takes a $400,000 mortgage at 6.5% annual interest for 30 years, repaid in equal monthly instalments.",
    step1: "Use EMI = [P x r x (1 + r)^n] / [(1 + r)^n - 1], with monthly rate r = 0.065 / 12 and n = 360 months.",
    step2: "Substituting P = $400,000 gives a monthly payment of $2,528.",
    step3: "Total paid = $910,178; total interest = $510,178.",
    conclusion: "Over 30 years the interest exceeds the original principal, which is why extra principal payments early in the loan have the largest effect.",
  },
  "gst-calculator": {
    scenarioTitle: "GST Addition and Removal Walkthrough",
    setup: "A product is priced at $100 before tax, with GST at 18%.",
    step1: "GST amount = $100 x 18% = $18, split as CGST $9 + SGST $9.",
    step2: "Price including GST = $100 + $18 = $118.",
    step3: "Working backwards, an inclusive price of $118 gives a base of $100 and GST of $18.",
    conclusion: "GST is calculated on the pre-tax price, not on the inclusive price, so the two directions must not be mixed.",
  },
  "ppf-calculator": {
    scenarioTitle: "PPF Maturity Walkthrough",
    setup: "An investor deposits Rs 1,50,000 each year for 15 years at 7.1% annual interest, deposited each April with annual crediting. The rate is declared quarterly and can change, so this is an illustration, not a guaranteed return.",
    step1: "Annual deposits over 15 years total Rs 22,50,000 in principal.",
    step2: "Applying annual compounding at 7.1% to April deposits gives a maturity value of approximately Rs 40,68,209.",
    step3: "Interest earned is approximately Rs 18,18,209 (maturity minus principal).",
    conclusion: "The 15-year lock-in is what allows compounding to do most of the work in the later years.",
  },
  "hecs-debt-calculator": {
    scenarioTitle: "HECS Indexation Example",
    setup: "Example only, not a current official rate: a HECS debt of $40,000 is indexed at 4.0%.",
    step1: "Indexation amount = $40,000 x 4.0% = $1,600.",
    step2: "Indexed debt = $40,000 + $1,600 = $41,600.",
    step3: "No repayment is assumed in this step; repayments depend on income and the applicable repayment rate.",
    conclusion: "Indexation raises the debt balance before repayments are applied, so the balance can grow even without new study debt.",
  },
  "hecs-indexation-calculator": {
    scenarioTitle: "HECS Indexation Example",
    setup: "Example only, not a current official rate: a HECS debt of $40,000 is indexed at 4.0%.",
    step1: "Indexation amount = $40,000 x 4.0% = $1,600.",
    step2: "Indexed debt = $40,000 + $1,600 = $41,600.",
    step3: "No repayment is assumed in this step; repayments depend on income and the applicable repayment rate.",
    conclusion: "Indexation raises the debt balance before repayments are applied, so the balance can grow even without new study debt.",
  },
  "hecs-repayment-time-calculator": {
    scenarioTitle: "HECS Indexation Example",
    setup: "Example only, not a current official rate: a HECS debt of $40,000 is indexed at 4.0%.",
    step1: "Indexation amount = $40,000 x 4.0% = $1,600.",
    step2: "Indexed debt = $40,000 + $1,600 = $41,600.",
    step3: "Repayment time then depends on income-based repayments applied after indexation, not on indexation alone.",
    conclusion: "Indexation and repayments move the balance in opposite directions, so both must be modelled together.",
  },
};

export default function CalculatorSeoGuide({ calc, faqs }: Props) {
  const cleanTitle = calc.title.split(" -")[0].replace("Free ", "").replace(" 2026", "");
  const ctx = categoryContext[calc.category] || categoryContext["Daily Utility & Math"];
  const example = slugWorkedExamples[calc.slug] || categoryWorkedExamples[calc.category] || categoryWorkedExamples["Daily Utility & Math"];
  const categorySlug = calc.category.toLowerCase().replace(/ /g, "-").replace(/&/g, "and");
  const theme = getCategoryTheme(calc.category);

  // Fetch sibling calculators in the same category (excluding current)
  const siblingCalculators = calculators
    .filter((c) => c.category === calc.category && c.slug !== calc.slug)
    .slice(0, 4);

  // Fetch relevant articles matching category keywords
  const matchedArticles = articles
    .filter((art) => {
      const artCat = art.category.toLowerCase();
      const calcCat = calc.category.toLowerCase();
      if (calcCat.includes("finance") || calcCat.includes("business")) {
        return artCat.includes("finance") || artCat.includes("wam planning");
      }
      if (calcCat.includes("health")) {
        return artCat.includes("health");
      }
      if (calcCat.includes("academic")) {
        return artCat.includes("wam") || artCat.includes("gpa");
      }
      return artCat.includes("math") || artCat.includes("productivity");
    })
    .slice(0, 3);

  return (
    <article className="mt-16 bg-white p-8 md:p-14 rounded-3xl shadow-sm border border-gray-100 text-gray-800 space-y-12 leading-relaxed">
      
      {/* 01. Overview */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit">
          <BookOpen className="w-3.5 h-3.5" /> 01. Theoretical Foundation
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
          What the {cleanTitle} Calculates
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          The <strong>{cleanTitle}</strong> is a dedicated computational engine engineered for <em>{ctx.noun}</em>. By transforming your raw input values into an immediate, transparent estimate, it removes guesswork and surfaces the mathematical relationship governing the result.
        </p>
        <p className="text-gray-600 leading-relaxed">
          In practice, numbers are only meaningful when evaluated in context. While our algorithm computes results with absolute mathematical accuracy, you should treat the output as a high-fidelity planning baseline. When making legally binding commitments, medical changes, financial investments, or academic submissions, cross-reference this output with {ctx.authority}. {ctx.caution}
        </p>
      </section>

      {/* 02. How to Use */}
      <section className="space-y-4 pt-8 border-t border-gray-100">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit">
          <Layers className="w-3.5 h-3.5" /> 02. Step-by-Step Guide
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
          How to Use the {cleanTitle}
        </h2>
        <ol className="space-y-3 list-decimal list-inside text-gray-700 font-medium">
          <li className="pl-2">
            <strong className="text-gray-900">Gather Your Source Information:</strong> Locate your relevant records, measurements, bills, or course outlines before starting.
          </li>
          <li className="pl-2">
            <strong className="text-gray-900">Check Required Units:</strong> Ensure your inputs match the requested units (such as annual vs monthly, centimeters vs inches, or raw scores vs percentages).
          </li>
          <li className="pl-2">
            <strong className="text-gray-900">Enter Values into Input Fields:</strong> Fill in each input box. The calculation runs instantly in your browser as you type without reloading the page.
          </li>
          <li className="pl-2">
            <strong className="text-gray-900">Review the Output Card:</strong> Examine your primary result and supplementary breakdown metrics displayed in the highlight box.
          </li>
          <li className="pl-2">
            <strong className="text-gray-900">Test Different Scenarios:</strong> Adjust one parameter at a time (e.g. a slightly higher interest rate or lower weight) to evaluate sensitivity.
          </li>
        </ol>
      </section>

      {/* 03. Formula & Unit Discipline */}
      <section className="space-y-4 pt-8 border-t border-gray-100">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit">
          <Sparkles className="w-3.5 h-3.5" /> 03. Formula & Unit Discipline
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
          Formula & Mathematical Discipline
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Every verified calculation begins with consistent numerators, denominators, and unit matching. Mixing daily rates with monthly periods or confusing percentages with decimals is the most frequent cause of calculation errors.
        </p>

        {/* Structured Table */}
        <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm">
          <table className="w-full text-left text-sm divide-y divide-gray-200">
            <thead className="bg-gray-50 text-gray-900 font-bold uppercase text-xs">
              <tr>
                <th className="px-6 py-4">Component</th>
                <th className="px-6 py-4">Mathematical Meaning</th>
                <th className="px-6 py-4">Quality Verification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-900">Primary Inputs</td>
                <td className="px-6 py-4">Variables entered directly into the interactive fields</td>
                <td className="px-6 py-4">Verify figures match current quotes or transcripts</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-900">Calculation Engine</td>
                <td className="px-6 py-4">Deterministically executes the formal formula</td>
                <td className="px-6 py-4">Preserves decimal precision during intermediate steps</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-900">Output Result</td>
                <td className="px-6 py-4">The final synthesized metric or projection</td>
                <td className="px-6 py-4">Rounded to standard precision (e.g. 2 decimal places)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-900">Sensitivity Spread</td>
                <td className="px-6 py-4">Comparison between low and high expected inputs</td>
                <td className="px-6 py-4">Provides a realistic confidence interval</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 04. Numerical Worked Example (Domain-Specific) */}
      <section className="space-y-4 pt-8 border-t border-gray-100 bg-blue-50/50 p-6 md:p-8 rounded-3xl border border-blue-100 not-prose">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full w-fit">
          <CheckCircle2 className="w-3.5 h-3.5" /> 04. Worked Numerical Example ({calc.category})
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
          {example.scenarioTitle}
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          {example.setup}
        </p>
        <div className="bg-white p-6 rounded-2xl border border-blue-100 space-y-3 text-sm text-gray-800 shadow-sm">
          <p>
            <strong className="text-blue-900">Step 1 — Input Standardization:</strong> {example.step1}
          </p>
          <p>
            <strong className="text-blue-900">Step 2 — Mathematical Execution:</strong> {example.step2}
          </p>
          <p>
            <strong className="text-blue-900">Step 3 — Output Synthesis:</strong> {example.step3}
          </p>
        </div>
        <p className="text-xs md:text-sm text-gray-600 bg-blue-100/60 p-3.5 rounded-xl border border-blue-200">
          <strong>Key Takeaway:</strong> {example.conclusion}
        </p>
      </section>

      {/* 05. Common Mistakes */}
      <section className="space-y-4 pt-8 border-t border-gray-100">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full w-fit">
          <AlertTriangle className="w-3.5 h-3.5" /> 05. Common Calculation Mistakes
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
          Mistakes to Avoid
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
            <span><strong>Unit Mismatches:</strong> Combining annual metrics with monthly periods, or imperial measurements with metric values.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
            <span><strong>Premature Rounding:</strong> Truncating numbers during intermediate calculation steps instead of rounding the final answer.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
            <span><strong>Omitting Ancillary Costs or Fees:</strong> Forgetting tax rates, material waste allowances, credit weightings, or broker fees.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
            <span><strong>Treating Estimates as Contracts:</strong> Submitting a planning calculation where a certified institution or authority statement is legally required.</span>
          </li>
        </ul>
      </section>

      {/* 06. Accuracy & Privacy Guarantee */}
      <section className="space-y-4 pt-8 border-t border-gray-100">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full w-fit">
          <ShieldCheck className="w-3.5 h-3.5" /> 06. Accuracy & Privacy Guarantee
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
          100% In-Browser Privacy
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Your sensitive numbers and calculation parameters belong solely to you. All computations on My Calculator Hub are executed locally via client-side JavaScript inside your web browser. <strong>We do not transmit, log, or store your inputs on remote databases.</strong> You can use our calculation engines repeatedly with total privacy and security.
        </p>
      </section>

      {/* 07. Frequently Asked Questions */}
      <section className="space-y-6 pt-8 border-t border-gray-100 not-prose">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit">
          <HelpCircle className="w-3.5 h-3.5" /> 07. Frequently Asked Questions
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
          Questions & Answers
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 08. E-E-A-T Author & Editorial Review Box */}
      {/* 08. Author Review & Editorial Trust Card */}
      <section className="pt-8 border-t border-gray-100 not-prose">
        <div className={`rounded-3xl p-6 md:p-8 border ${theme.borderLight} bg-gradient-to-br from-slate-50 ${theme.cardGradient} flex flex-col md:flex-row items-center md:items-start gap-6 shadow-2xs`}>
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-md flex-shrink-0 border-2 border-white ring-4 ring-gray-100">
            <Image
              src="/images/saahil.jpg"
              alt="Saahil - Lead Computational Editor"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="space-y-3 text-center md:text-left flex-grow">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Mathematically Verified
              </span>
              <span className="text-xs text-gray-500 font-medium">Updated for 2026</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              Reviewed by Saahil — Founder & Lead Editor
            </h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Every formula on My Calculator Hub is audited against controlling academic curricula, GAAP financial standards, and peer-reviewed reference specifications. All code runs client-side to safeguard user data integrity.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-semibold">
              <Link href="/author" className={`${theme.textPrimary} hover:underline inline-flex items-center gap-1`}>
                View Full Author Profile & Methodology &rarr;
              </Link>
              <span className="text-gray-300">·</span>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 hover:underline">
                Report a Formula Issue / Feedback
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 09. Topical Semantic Clusters & Internal Links */}
      <section className="pt-8 border-t border-gray-100 not-prose space-y-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">Related {calc.category} Calculators</h3>
          <p className="text-xs text-gray-500">Cross-reference your figures with sibling computational tools.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {siblingCalculators.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className={`p-4 bg-white hover:${theme.bgLight} border border-gray-100 ${theme.borderHover} rounded-2xl transition-all duration-200 group block shadow-2xs hover:-translate-y-0.5`}
            >
              <span className={`text-[11px] font-bold ${theme.textPrimary} block mb-1`}>Verified Tool</span>
              <span className="font-bold text-gray-900 group-hover:text-gray-950 text-sm line-clamp-1">
                {s.title.split(" -")[0].replace("Free ", "").replace(" 2026", "")}
              </span>
              <p className="text-xs text-gray-500 line-clamp-2 mt-1">{s.description}</p>
            </Link>
          ))}
        </div>

        {matchedArticles.length > 0 && (
          <div className="pt-4">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
              In-Depth Formula Guides for {calc.category}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {matchedArticles.map((art) => (
                <Link
                  key={art.slug}
                  href={`/articles/${art.slug}`}
                  className="p-3.5 bg-white border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-xs transition-all group block"
                >
                  <span className="text-[11px] font-bold text-purple-700 block mb-1">{art.category}</span>
                  <span className={`font-semibold text-gray-800 group-hover:${theme.textPrimary} text-xs line-clamp-2`}>
                    {art.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-600">
          <Link
            href={`/category/${categorySlug}`}
            className={`${theme.textPrimary} font-bold hover:underline inline-flex items-center gap-1`}
          >
            Explore all tools in {calc.category} &rarr;
          </Link>
          <Link
            href="/category"
            className="text-gray-500 hover:text-gray-900 hover:underline"
          >
            Browse All 10 Categories Directory
          </Link>
        </div>
      </section>

    </article>
  );
}
