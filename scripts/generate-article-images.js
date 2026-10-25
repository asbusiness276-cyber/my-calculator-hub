const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// 1. Article group definitions
const articleGroups = [
  {
    category: "WAM Fundamentals",
    slugs: [
      "best-universities-in-australia", "best-pharmacy-universities-in-australia",
      "best-universities-for-economics-in-australia", "uni-university-australia",
      "what-is-a-good-wam", "how-to-improve-wam-at-uni", "how-to-calculate-wam",
      "how-to-find-wam-on-uni-transcript", "uni-credit-points-wam-explained",
      "weighted-average-mark-vs-average-mark", "does-first-year-wam-matter",
      "how-universities-calculate-wam", "what-is-a-distinction-average",
      "credit-weighting-explained", "wam-calculation-mistakes"
    ],
  },
  {
    category: "WAM Planning",
    slugs: [
      "uni-honours-wam-requirements", "uni-scholarship-wam-requirements",
      "uni-wam-target-guide", "uni-semester-wam-guide", "uni-wam-projection-guide",
      "uni-wam-milestones-guide", "uni-year-1-wam-weighting-guide",
      "how-to-plan-final-exam-marks", "semester-grade-planning-guide",
      "how-many-marks-needed-to-pass", "study-load-and-academic-performance",
      "setting-a-realistic-wam-target", "how-to-recover-your-wam"
    ],
  },
  {
    category: "GPA & Conversion",
    slugs: [
      "uni-wam-vs-gpa-postgraduate", "how-to-convert-wam-from-one-university-to-another",
      "uni-wam-to-gpa-conversion", "uni-cgpa-explained-guide", "percentage-to-gpa-calculator-guide",
      "4-0-gpa-calculator-guide", "7-0-scale-gpa-calculator-guide", "semester-gpa-calculator-guide",
      "gpa-to-cgpa-calculator-guide", "atar-to-gpa-wam-conversion-guide",
      "gpa-scales-explained", "how-to-convert-10-point-cgpa", "us-gpa-vs-australian-gpa",
      "how-wes-evaluates-grades", "percentage-to-gpa-conversion-mistakes"
    ],
  },
  {
    category: "Recovery & Exams",
    slugs: [
      "failed-unit-wam-impact-uni", "uni-final-exam-mark-calculator-guide",
      "uni-supplementary-exam-wam-guide", "uni-repeat-unit-wam-guide",
      "uni-withdrawn-fail-wam-guide", "uni-exchange-grades-wam-guide",
      "what-happens-if-you-fail-a-university-unit", "supplementary-exam-vs-repeat-unit",
      "late-penalty-impact-on-final-grade", "academic-probation-explained",
      "appealing-a-university-grade", "exam-mark-needed-to-pass"
    ],
  },
  {
    category: "University Pathways",
    slugs: [
      "uni-deans-honours-list-wam-guide", "uni-wam-internship-graduate-jobs-guide",
      "uni-distinction-average-guide", "course-transfer-wam-requirements",
      "postgraduate-entry-grade-requirements", "scholarship-grade-requirements-australia",
      "honours-entry-requirements-australia", "how-employers-read-university-grades",
      "study-abroad-grade-conversion", "transcript-grades-explained"
    ],
  },
  {
    category: "Personal Finance",
    slugs: [
      "how-compound-interest-works", "simple-interest-vs-compound-interest",
      "how-to-calculate-loan-repayments", "mortgage-repayment-guide", "how-much-emergency-fund",
      "salary-to-hourly-rate-guide", "how-to-build-a-student-budget", "hecs-help-debt-explained",
      "credit-card-payoff-strategies", "saving-for-a-house-deposit", "apr-vs-apy-explained",
      "how-inflation-affects-savings", "rent-affordability-guide", "investment-return-basics",
      "debt-to-income-ratio-guide"
    ],
  },
  {
    category: "Health & Fitness",
    slugs: [
      "how-to-calculate-bmi", "bmr-vs-tdee-explained", "how-to-calculate-calorie-deficit",
      "daily-water-intake-guide", "protein-intake-guide", "sleep-cycle-calculator-guide",
      "heart-rate-training-zones", "running-pace-guide", "ideal-weight-formulas-explained",
      "body-fat-percentage-guide", "caffeine-half-life-explained", "standard-drinks-guide"
    ],
  },
  {
    category: "Math & Everyday Calculations",
    slugs: [
      "how-to-calculate-percentage", "percentage-change-formula", "how-to-calculate-a-weighted-average",
      "fractions-decimals-and-percentages", "mean-median-mode-explained", "standard-deviation-basics",
      "ratio-and-proportion-guide", "area-and-volume-formulas", "unit-conversion-guide",
      "probability-basics", "margin-vs-markup", "how-to-calculate-roi"
    ],
  },
  {
    category: "Productivity & Writing",
    slugs: [
      "how-to-estimate-reading-time", "how-many-words-per-page", "keyword-density-explained",
      "how-to-use-a-pomodoro-timer", "how-to-estimate-typing-time", "readability-scores-explained",
      "strong-password-guide", "text-case-style-guide", "how-to-analyze-text",
      "study-time-planning-guide"
    ],
  },
];

const exactTitles = {
  "what-is-a-good-wam": "What Is a Good WAM? Benchmarks, Context, and Planning",
  "how-to-improve-wam-at-uni": "How to Improve Your WAM at University",
  "how-to-calculate-wam": "How to Calculate WAM Correctly: Step-by-Step Weighted Method",
  "uni-wam-to-gpa-conversion": "WAM to GPA Conversion: 4.0 and 7.0 Scales Explained",
  "uni-cgpa-explained-guide": "CGPA Explained: Calculation, Scales, and Conversion",
  "hecs-help-debt-explained": "HECS-HELP Debt Explained: Indexation, Repayments, and Planning",
  "bmr-vs-tdee-explained": "BMR vs TDEE: What Each Number Means and How to Use It",
  "apr-vs-apy-explained": "APR vs APY: The Difference That Changes Borrowing and Savings",
  "how-to-calculate-a-weighted-average": "How to Calculate a Weighted Average: The Ultimate 2026 Guide",
  "uni-wam-projection-guide": "University WAM Projection Guide (Weighted Average Mark)",
  "area-and-volume-formulas": "Complete Area and Volume Formulas Cheat Sheet",
  "gpa-scales-explained": "GPA Scales Explained: 4.0, 7.0, and 10.0 Grading Systems",
  "probability-basics": "Probability Basics: Concepts, Formulas, and Real-World Examples",
};

function titleFromSlug(slug) {
  if (exactTitles[slug]) return exactTitles[slug];
  return slug
    .split("-")
    .map((word) => {
      if (["wam", "gpa", "cgpa", "atar", "wes", "hecs", "help", "bmi", "bmr", "tdee", "apr", "apy", "roi"].includes(word)) return word.toUpperCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ")
    .replace(/^Uni /, "University ");
}

function escapeXml(unsafe) {
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function wrapText(text, maxChars = 26) {
  const words = text.split(" ");
  const lines = [];
  let currentLine = "";

  for (const word of words) {
    if (!currentLine) {
      currentLine = word;
    } else if ((currentLine + " " + word).length <= maxChars) {
      currentLine += " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines;
}

// Category design themes
const THEMES = {
  "Personal Finance": {
    bgFrom: "#061a14",
    bgTo: "#09121a",
    primary: "#10b981",
    secondary: "#0d9488",
    accent: "#34d399",
    glow: "rgba(16, 185, 129, 0.25)",
    tag: "FINANCIAL MODELLING & WEALTH",
    pillBg: "rgba(16, 185, 129, 0.15)",
    pillBorder: "rgba(52, 211, 153, 0.35)",
    pillText: "#6ee7b7"
  },
  "Health & Fitness": {
    bgFrom: "#1a0810",
    bgTo: "#0c0a18",
    primary: "#f43f5e",
    secondary: "#db2777",
    accent: "#fb7185",
    glow: "rgba(244, 63, 94, 0.25)",
    tag: "HEALTH METRICS & PHYSIOLOGY",
    pillBg: "rgba(244, 63, 94, 0.15)",
    pillBorder: "rgba(251, 113, 133, 0.35)",
    pillText: "#fda4af"
  },
  "WAM Fundamentals": {
    bgFrom: "#080c1e",
    bgTo: "#091224",
    primary: "#6366f1",
    secondary: "#3b82f6",
    accent: "#818cf8",
    glow: "rgba(99, 102, 241, 0.25)",
    tag: "WAM & HIGHER EDUCATION",
    pillBg: "rgba(99, 102, 241, 0.15)",
    pillBorder: "rgba(129, 140, 248, 0.35)",
    pillText: "#c7d2fe"
  },
  "WAM Planning": {
    bgFrom: "#090d22",
    bgTo: "#0d1b2a",
    primary: "#4f46e5",
    secondary: "#0284c7",
    accent: "#38bdf8",
    glow: "rgba(79, 70, 229, 0.25)",
    tag: "ACADEMIC PLANNING & FORECASTING",
    pillBg: "rgba(79, 70, 229, 0.15)",
    pillBorder: "rgba(56, 189, 248, 0.35)",
    pillText: "#bae6fd"
  },
  "GPA & Conversion": {
    bgFrom: "#120924",
    bgTo: "#081026",
    primary: "#8b5cf6",
    secondary: "#3b82f6",
    accent: "#c084fc",
    glow: "rgba(139, 92, 246, 0.25)",
    tag: "GRADE CONVERSION & GPA SCALES",
    pillBg: "rgba(139, 92, 246, 0.15)",
    pillBorder: "rgba(192, 132, 252, 0.35)",
    pillText: "#e9d5ff"
  },
  "Recovery & Exams": {
    bgFrom: "#1a0f06",
    bgTo: "#120a1c",
    primary: "#f97316",
    secondary: "#ef4444",
    accent: "#fb923c",
    glow: "rgba(249, 115, 22, 0.25)",
    tag: "EXAM STRATEGY & RECOVERY",
    pillBg: "rgba(249, 115, 22, 0.15)",
    pillBorder: "rgba(251, 146, 60, 0.35)",
    pillText: "#fed7aa"
  },
  "University Pathways": {
    bgFrom: "#061324",
    bgTo: "#160b24",
    primary: "#2563eb",
    secondary: "#7c3aed",
    accent: "#60a5fa",
    glow: "rgba(37, 99, 235, 0.25)",
    tag: "UNIVERSITY RANKINGS & PATHWAYS",
    pillBg: "rgba(37, 99, 235, 0.15)",
    pillBorder: "rgba(96, 165, 250, 0.35)",
    pillText: "#bfdbfe"
  },
  "Math & Everyday Calculations": {
    bgFrom: "#061622",
    bgTo: "#091c1b",
    primary: "#06b6d4",
    secondary: "#10b981",
    accent: "#22d3ee",
    glow: "rgba(6, 182, 212, 0.25)",
    tag: "MATHEMATICAL LOGIC & FORMULAS",
    pillBg: "rgba(6, 182, 212, 0.15)",
    pillBorder: "rgba(34, 211, 238, 0.35)",
    pillText: "#a5f3fc"
  },
  "Productivity & Writing": {
    bgFrom: "#150820",
    bgTo: "#0c0d1e",
    primary: "#a855f7",
    secondary: "#ec4899",
    accent: "#c084fc",
    glow: "rgba(168, 85, 247, 0.25)",
    tag: "PRODUCTIVITY & TEXT ANALYSIS",
    pillBg: "rgba(168, 85, 247, 0.15)",
    pillBorder: "rgba(192, 132, 252, 0.35)",
    pillText: "#e9d5ff"
  }
};

// Generates dedicated vector illustration for the right side of the card
function getGraphicForArticle(slug, theme) {
  // 1. Compound Interest / Investment / APR
  if (slug.includes("compound-interest") || slug.includes("apr-vs-apy") || slug.includes("investment-return") || slug.includes("inflation")) {
    return `
      <!-- Compounding Curve Chart Graphic -->
      <g transform="translate(730, 140)">
        <rect width="470" height="440" rx="28" fill="#0f172a" fill-opacity="0.85" stroke="${theme.primary}" stroke-width="1.5" stroke-opacity="0.4" />
        
        <!-- Graph Grid -->
        <line x1="50" y1="360" x2="420" y2="360" stroke="#334155" stroke-width="2" />
        <line x1="50" y1="80" x2="50" y2="360" stroke="#334155" stroke-width="2" />
        <line x1="50" y1="280" x2="420" y2="280" stroke="#1e293b" stroke-dasharray="4,4" />
        <line x1="50" y1="200" x2="420" y2="200" stroke="#1e293b" stroke-dasharray="4,4" />
        <line x1="50" y1="120" x2="420" y2="120" stroke="#1e293b" stroke-dasharray="4,4" />

        <!-- Linear (Simple) line -->
        <line x1="50" y1="340" x2="410" y2="230" stroke="#64748b" stroke-width="3" stroke-dasharray="6,4" />
        <text x="310" y="220" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8" font-weight="600">Simple Growth</text>

        <!-- Exponential (Compound) curve -->
        <path d="M 50 340 Q 220 320, 310 200 T 410 90" fill="none" stroke="${theme.primary}" stroke-width="4.5" stroke-linecap="round" />
        <circle cx="410" cy="90" r="7" fill="${theme.accent}" filter="drop-shadow(0 0 8px ${theme.primary})" />
        
        <!-- Formula Badge -->
        <rect x="70" y="45" width="220" height="42" rx="12" fill="${theme.pillBg}" stroke="${theme.pillBorder}" stroke-width="1" />
        <text x="180" y="72" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="${theme.pillText}" text-anchor="middle">A = P(1 + r/n)^nt</text>

        <!-- Growth Indicator Pill -->
        <rect x="250" y="110" width="160" height="34" rx="10" fill="#047857" fill-opacity="0.3" stroke="#10b981" stroke-width="1" />
        <text x="330" y="132" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#34d399" text-anchor="middle">+248% Exponential</text>

        <!-- Metric comparisons -->
        <rect x="50" y="380" width="170" height="38" rx="10" fill="#1e293b" />
        <text x="135" y="404" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1" text-anchor="middle">Initial: <tspan fill="#ffffff" font-weight="bold">$10,000</tspan></text>
        <rect x="240" y="380" width="180" height="38" rx="10" fill="#1e293b" />
        <text x="330" y="404" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1" text-anchor="middle">30-Yr Total: <tspan fill="${theme.accent}" font-weight="bold">$100,627</tspan></text>
      </g>
    `;
  }

  // 2. Loans / Mortgages / Debt / HECS
  if (slug.includes("loan") || slug.includes("mortgage") || slug.includes("debt") || slug.includes("hecs") || slug.includes("credit-card")) {
    return `
      <!-- Loan & Amortization Graphic -->
      <g transform="translate(730, 140)">
        <rect width="470" height="440" rx="28" fill="#0f172a" fill-opacity="0.85" stroke="${theme.primary}" stroke-width="1.5" stroke-opacity="0.4" />
        
        <!-- Header Pill -->
        <rect x="40" y="35" width="220" height="36" rx="10" fill="${theme.pillBg}" stroke="${theme.pillBorder}" stroke-width="1" />
        <text x="150" y="58" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="${theme.pillText}" text-anchor="middle">Amortization Schedule</text>

        <!-- Donut Chart representation -->
        <circle cx="160" cy="190" r="75" fill="none" stroke="#334155" stroke-width="26" />
        <circle cx="160" cy="190" r="75" fill="none" stroke="${theme.primary}" stroke-width="26" stroke-dasharray="320 480" stroke-linecap="round" />
        <circle cx="160" cy="190" r="75" fill="none" stroke="${theme.accent}" stroke-width="26" stroke-dasharray="140 480" stroke-dashoffset="-320" stroke-linecap="round" />
        <text x="160" y="185" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#94a3b8" text-anchor="middle">MONTHLY</text>
        <text x="160" y="208" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#ffffff" text-anchor="middle">EMI</text>

        <!-- Breakdown Card -->
        <g transform="translate(270, 105)">
          <rect width="160" height="60" rx="12" fill="#1e293b" />
          <circle cx="20" cy="30" r="6" fill="${theme.primary}" />
          <text x="35" y="26" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Principal Portion</text>
          <text x="35" y="46" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#ffffff">68.4%</text>
        </g>
        <g transform="translate(270, 185)">
          <rect width="160" height="60" rx="12" fill="#1e293b" />
          <circle cx="20" cy="30" r="6" fill="${theme.accent}" />
          <text x="35" y="26" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Interest Charge</text>
          <text x="35" y="46" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="${theme.accent}">31.6%</text>
        </g>

        <!-- Repayment Timeline Bar -->
        <rect x="40" y="295" width="390" height="12" rx="6" fill="#1e293b" />
        <rect x="40" y="295" width="260" height="12" rx="6" fill="${theme.primary}" />
        <text x="40" y="330" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">Year 0</text>
        <text x="300" y="330" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="${theme.accent}">Accelerated Payoff</text>
        <text x="430" y="330" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8" text-anchor="end">Year 30</text>

        <!-- Key Formula -->
        <rect x="40" y="365" width="390" height="48" rx="14" fill="#1e293b" stroke="#334155" stroke-width="1" />
        <text x="235" y="395" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#e2e8f0" text-anchor="middle">EMI = [P x r x (1+r)^n] / [(1+r)^n - 1]</text>
      </g>
    `;
  }

  // 3. BMI & Body Metrics
  if (slug.includes("bmi") || slug.includes("ideal-weight") || slug.includes("body-fat")) {
    return `
      <!-- BMI Scale & Body Metrics Graphic -->
      <g transform="translate(730, 140)">
        <rect width="470" height="440" rx="28" fill="#0f172a" fill-opacity="0.85" stroke="${theme.primary}" stroke-width="1.5" stroke-opacity="0.4" />

        <!-- Header Pill -->
        <rect x="40" y="35" width="220" height="36" rx="10" fill="${theme.pillBg}" stroke="${theme.pillBorder}" stroke-width="1" />
        <text x="150" y="58" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="${theme.pillText}" text-anchor="middle">WHO BMI Spectrum</text>

        <!-- Speedometer / Spectrum Gauge -->
        <g transform="translate(50, 100)">
          <!-- Underweight (Blue) -->
          <rect x="0" y="50" width="85" height="24" rx="6" fill="#38bdf8" />
          <text x="42" y="95" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">&lt; 18.5</text>
          <text x="42" y="40" font-family="system-ui, sans-serif" font-size="10" fill="#38bdf8" text-anchor="middle" font-weight="bold">UNDER</text>

          <!-- Normal (Green) -->
          <rect x="95" y="50" width="105" height="24" rx="6" fill="#10b981" />
          <text x="147" y="95" font-family="system-ui, sans-serif" font-size="11" fill="#34d399" text-anchor="middle" font-weight="bold">18.5 - 24.9</text>
          <text x="147" y="40" font-family="system-ui, sans-serif" font-size="10" fill="#10b981" text-anchor="middle" font-weight="bold">HEALTHY</text>

          <!-- Overweight (Amber) -->
          <rect x="210" y="50" width="85" height="24" rx="6" fill="#f59e0b" />
          <text x="252" y="95" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">25.0 - 29.9</text>
          <text x="252" y="40" font-family="system-ui, sans-serif" font-size="10" fill="#f59e0b" text-anchor="middle" font-weight="bold">OVER</text>

          <!-- Obese (Red) -->
          <rect x="305" y="50" width="65" height="24" rx="6" fill="#ef4444" />
          <text x="337" y="95" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">30.0+</text>
          <text x="337" y="40" font-family="system-ui, sans-serif" font-size="10" fill="#ef4444" text-anchor="middle" font-weight="bold">OBESE</text>

          <!-- Target Indicator Pointer -->
          <polygon points="147,78 141,64 153,64" fill="#ffffff" filter="drop-shadow(0 0 6px rgba(255,255,255,0.8))" />
        </g>

        <!-- Current Target Result Card -->
        <g transform="translate(50, 220)">
          <rect width="370" height="110" rx="18" fill="#1e293b" stroke="#334155" stroke-width="1" />
          <text x="30" y="45" font-family="system-ui, sans-serif" font-size="13" fill="#94a3b8">Target Category Benchmark</text>
          <text x="30" y="85" font-family="system-ui, sans-serif" font-size="34" font-weight="900" fill="#10b981">22.4 <tspan font-size="18" fill="#94a3b8" font-weight="normal">Optimal Range</tspan></text>
          
          <rect x="230" y="32" width="115" height="45" rx="10" fill="#064e3b" stroke="#10b981" stroke-width="1" />
          <text x="287" y="60" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#34d399" text-anchor="middle">VERIFIED</text>
        </g>

        <!-- Formula Bar -->
        <rect x="50" y="360" width="370" height="48" rx="14" fill="${theme.pillBg}" stroke="${theme.pillBorder}" stroke-width="1" />
        <text x="235" y="390" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="${theme.pillText}" text-anchor="middle">BMI = Weight (kg) / [Height (m)]^2</text>
      </g>
    `;
  }

  // 4. BMR, TDEE, Calorie Deficit & Metabolism
  if (slug.includes("bmr") || slug.includes("tdee") || slug.includes("calorie") || slug.includes("water") || slug.includes("protein")) {
    return `
      <!-- Energy Expenditure & TDEE Graphic -->
      <g transform="translate(730, 140)">
        <rect width="470" height="440" rx="28" fill="#0f172a" fill-opacity="0.85" stroke="${theme.primary}" stroke-width="1.5" stroke-opacity="0.4" />

        <rect x="40" y="35" width="220" height="36" rx="10" fill="${theme.pillBg}" stroke="${theme.pillBorder}" stroke-width="1" />
        <text x="150" y="58" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="${theme.pillText}" text-anchor="middle">Energy Balance Model</text>

        <!-- Stacked Energy Bars -->
        <g transform="translate(45, 100)">
          <rect width="380" height="55" rx="14" fill="#1e293b" />
          <rect width="210" height="55" rx="14" fill="${theme.primary}" />
          <text x="20" y="34" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#ffffff">Basal Metabolic Rate (BMR)</text>
          <text x="360" y="34" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="${theme.accent}" text-anchor="end">1,720 kcal</text>
        </g>

        <g transform="translate(45, 175)">
          <rect width="380" height="55" rx="14" fill="#1e293b" />
          <rect width="310" height="55" rx="14" fill="${theme.secondary}" />
          <text x="20" y="34" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#ffffff">Activity Multiplier (PAL)</text>
          <text x="360" y="34" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="end">1.55x Moderate</text>
        </g>

        <g transform="translate(45, 250)">
          <rect width="380" height="75" rx="16" fill="#1e293b" stroke="${theme.primary}" stroke-width="1.5" />
          <text x="25" y="35" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">TOTAL DAILY EXPENDITURE</text>
          <text x="25" y="62" font-family="system-ui, sans-serif" font-size="28" font-weight="900" fill="#ffffff">2,666 <tspan font-size="15" font-weight="normal" fill="#94a3b8">kcal / day</tspan></text>
          <rect x="250" y="20" width="110" height="36" rx="10" fill="#047857" fill-opacity="0.4" stroke="#10b981" stroke-width="1" />
          <text x="305" y="43" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#34d399" text-anchor="middle">-500 Deficit</text>
        </g>

        <!-- Formula -->
        <rect x="45" y="355" width="380" height="48" rx="14" fill="${theme.pillBg}" stroke="${theme.pillBorder}" stroke-width="1" />
        <text x="235" y="385" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="${theme.pillText}" text-anchor="middle">TDEE = BMR x Activity Multiplier</text>
      </g>
    `;
  }

  // 5. Sleep Cycles, Heart Rate, Running Pace
  if (slug.includes("sleep") || slug.includes("heart-rate") || slug.includes("running") || slug.includes("caffeine") || slug.includes("drinks")) {
    return `
      <!-- Physiological Cycle & Rhythm Wave -->
      <g transform="translate(730, 140)">
        <rect width="470" height="440" rx="28" fill="#0f172a" fill-opacity="0.85" stroke="${theme.primary}" stroke-width="1.5" stroke-opacity="0.4" />

        <rect x="40" y="35" width="220" height="36" rx="10" fill="${theme.pillBg}" stroke="${theme.pillBorder}" stroke-width="1" />
        <text x="150" y="58" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="${theme.pillText}" text-anchor="middle">Circadian &amp; Cycle Waves</text>

        <!-- Waveform Path -->
        <g transform="translate(45, 100)">
          <line x1="0" y1="80" x2="380" y2="80" stroke="#334155" stroke-width="1.5" stroke-dasharray="4,4" />
          <path d="M 0 80 Q 40 10, 80 80 T 160 80 T 240 80 T 320 80 T 380 80" fill="none" stroke="${theme.primary}" stroke-width="4" stroke-linecap="round" />
          
          <!-- Cycle 1 to 5 dots -->
          <circle cx="80" cy="80" r="6" fill="${theme.accent}" />
          <circle cx="160" cy="80" r="6" fill="${theme.accent}" />
          <circle cx="240" cy="80" r="6" fill="${theme.accent}" />
          <circle cx="320" cy="80" r="8" fill="#ffffff" filter="drop-shadow(0 0 8px ${theme.accent})" />
          <text x="320" y="115" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">Wake: 6:30 AM</text>
        </g>

        <!-- Breakdown Card -->
        <g transform="translate(45, 230)">
          <rect width="180" height="90" rx="16" fill="#1e293b" />
          <text x="20" y="35" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">Cycle Duration</text>
          <text x="20" y="68" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#ffffff">90 <tspan font-size="14" font-weight="normal" fill="#94a3b8">Minutes</tspan></text>
        </g>
        <g transform="translate(245, 230)">
          <rect width="180" height="90" rx="16" fill="#1e293b" />
          <text x="20" y="35" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">Recommended</text>
          <text x="20" y="68" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="${theme.accent}">5 Cycles</text>
        </g>

        <!-- Metric -->
        <rect x="45" y="350" width="380" height="48" rx="14" fill="${theme.pillBg}" stroke="${theme.pillBorder}" stroke-width="1" />
        <text x="235" y="380" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="${theme.pillText}" text-anchor="middle">Optimal Sleep Architecture = 7.5 Hours</text>
      </g>
    `;
  }

  // 6. WAM Calculation, Grades & Fundamentals
  if (slug.includes("wam") || slug.includes("distinction") || slug.includes("credit-point")) {
    return `
      <!-- University WAM Ladder & Formula Graphic -->
      <g transform="translate(730, 140)">
        <rect width="470" height="440" rx="28" fill="#0f172a" fill-opacity="0.85" stroke="${theme.primary}" stroke-width="1.5" stroke-opacity="0.4" />

        <rect x="40" y="35" width="220" height="36" rx="10" fill="${theme.pillBg}" stroke="${theme.pillBorder}" stroke-width="1" />
        <text x="150" y="58" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="${theme.pillText}" text-anchor="middle">Australian WAM Tiers</text>

        <!-- Tier Ladder -->
        <g transform="translate(45, 95)">
          <rect x="0" y="0" width="380" height="45" rx="12" fill="#312e81" stroke="#6366f1" stroke-width="1" />
          <text x="20" y="28" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#ffffff">High Distinction (HD)</text>
          <text x="360" y="28" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#a5b4fc" text-anchor="end">85 - 100</text>
        </g>

        <g transform="translate(45, 150)">
          <rect x="0" y="0" width="380" height="45" rx="12" fill="#1e1b4b" />
          <text x="20" y="28" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#ffffff">Distinction (D)</text>
          <text x="360" y="28" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#c7d2fe" text-anchor="end">75 - 84</text>
        </g>

        <g transform="translate(45, 205)">
          <rect x="0" y="0" width="380" height="45" rx="12" fill="#1e293b" />
          <text x="20" y="28" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#ffffff">Credit (C)</text>
          <text x="360" y="28" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#cbd5e1" text-anchor="end">65 - 74</text>
        </g>

        <g transform="translate(45, 260)">
          <rect x="0" y="0" width="380" height="45" rx="12" fill="#1e293b" />
          <text x="20" y="28" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#ffffff">Pass (P)</text>
          <text x="360" y="28" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#94a3b8" text-anchor="end">50 - 64</text>
        </g>

        <!-- Master Formula -->
        <rect x="45" y="335" width="380" height="65" rx="16" fill="${theme.pillBg}" stroke="${theme.pillBorder}" stroke-width="1.5" />
        <text x="235" y="362" font-family="system-ui, sans-serif" font-size="12" fill="${theme.pillText}" text-anchor="middle">WEIGHTED AVERAGE MARK FORMULA</text>
        <text x="235" y="386" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">WAM = Σ (Mark × CP) / Σ (CP)</text>
      </g>
    `;
  }

  // 7. GPA Scales & Conversions
  if (slug.includes("gpa") || slug.includes("cgpa") || slug.includes("atar") || slug.includes("wes")) {
    return `
      <!-- GPA Scale & Conversion Matrix Graphic -->
      <g transform="translate(730, 140)">
        <rect width="470" height="440" rx="28" fill="#0f172a" fill-opacity="0.85" stroke="${theme.primary}" stroke-width="1.5" stroke-opacity="0.4" />

        <rect x="40" y="35" width="220" height="36" rx="10" fill="${theme.pillBg}" stroke="${theme.pillBorder}" stroke-width="1" />
        <text x="150" y="58" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="${theme.pillText}" text-anchor="middle">Scale Conversion Matrix</text>

        <!-- Comparison Matrix Table -->
        <g transform="translate(45, 95)">
          <!-- Header -->
          <rect width="380" height="35" rx="8" fill="#1e293b" />
          <text x="30" y="22" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#94a3b8">GRADE</text>
          <text x="120" y="22" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#94a3b8">WAM %</text>
          <text x="230" y="22" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#94a3b8">4.0 GPA</text>
          <text x="330" y="22" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#94a3b8">7.0 GPA</text>

          <!-- Row 1 HD -->
          <g transform="translate(0, 45)">
            <rect width="380" height="42" rx="8" fill="#312e81" />
            <text x="30" y="26" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#a5b4fc">HD</text>
            <text x="120" y="26" font-family="system-ui, sans-serif" font-size="14" fill="#ffffff">85%+</text>
            <text x="230" y="26" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#ffffff">4.00</text>
            <text x="330" y="26" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#38bdf8">7.00</text>
          </g>

          <!-- Row 2 D -->
          <g transform="translate(0, 95)">
            <rect width="380" height="42" rx="8" fill="#1e1b4b" />
            <text x="30" y="26" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#c7d2fe">D</text>
            <text x="120" y="26" font-family="system-ui, sans-serif" font-size="14" fill="#ffffff">75 - 84%</text>
            <text x="230" y="26" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#ffffff">3.50 - 3.75</text>
            <text x="330" y="26" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#38bdf8">6.00</text>
          </g>

          <!-- Row 3 C -->
          <g transform="translate(0, 145)">
            <rect width="380" height="42" rx="8" fill="#1e293b" />
            <text x="30" y="26" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#cbd5e1">C</text>
            <text x="120" y="26" font-family="system-ui, sans-serif" font-size="14" fill="#ffffff">65 - 74%</text>
            <text x="230" y="26" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#ffffff">3.00</text>
            <text x="330" y="26" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#38bdf8">5.00</text>
          </g>
        </g>

        <!-- Accuracy Badge -->
        <rect x="45" y="335" width="380" height="65" rx="16" fill="${theme.pillBg}" stroke="${theme.pillBorder}" stroke-width="1.5" />
        <text x="235" y="362" font-family="system-ui, sans-serif" font-size="12" fill="${theme.pillText}" text-anchor="middle">INTERNATIONAL CONVERSION BENCHMARK</text>
        <text x="235" y="386" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">Standardized 4.0, 7.0 &amp; 10.0 Scales</text>
      </g>
    `;
  }

  // 8. Exam Survival, Failed Units & Recovery
  if (slug.includes("exam") || slug.includes("failed") || slug.includes("supplementary") || slug.includes("repeat") || slug.includes("probation")) {
    return `
      <!-- Exam Target & Grade Calculator Graphic -->
      <g transform="translate(730, 140)">
        <rect width="470" height="440" rx="28" fill="#0f172a" fill-opacity="0.85" stroke="${theme.primary}" stroke-width="1.5" stroke-opacity="0.4" />

        <rect x="40" y="35" width="220" height="36" rx="10" fill="${theme.pillBg}" stroke="${theme.pillBorder}" stroke-width="1" />
        <text x="150" y="58" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="${theme.pillText}" text-anchor="middle">Passing Hurdle Engine</text>

        <!-- Hurdle Score Card -->
        <g transform="translate(45, 95)">
          <rect width="380" height="120" rx="18" fill="#1e293b" stroke="#334155" stroke-width="1" />
          <text x="25" y="38" font-family="system-ui, sans-serif" font-size="13" fill="#94a3b8">Final Exam Mark Needed to Pass</text>
          <text x="25" y="85" font-family="system-ui, sans-serif" font-size="44" font-weight="900" fill="#f97316">42.5% <tspan font-size="18" fill="#94a3b8" font-weight="normal">Hurdle Met</tspan></text>
          
          <rect x="250" y="30" width="105" height="45" rx="12" fill="#064e3b" stroke="#10b981" stroke-width="1" />
          <text x="302" y="58" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#34d399" text-anchor="middle">PASS 50+</text>
        </g>

        <!-- Progress breakdown -->
        <g transform="translate(45, 235)">
          <rect width="180" height="85" rx="14" fill="#1e293b" />
          <text x="20" y="32" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">Internal Weight (60%)</text>
          <text x="20" y="62" font-family="system-ui, sans-serif" font-size="22" font-weight="bold" fill="#ffffff">32.0 / 60</text>
        </g>
        <g transform="translate(245, 235)">
          <rect width="180" height="85" rx="14" fill="#1e293b" />
          <text x="20" y="32" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">Exam Weight (40%)</text>
          <text x="20" y="62" font-family="system-ui, sans-serif" font-size="22" font-weight="bold" fill="${theme.accent}">18.0 / 40 Needed</text>
        </g>

        <!-- Formula -->
        <rect x="45" y="340" width="380" height="60" rx="16" fill="${theme.pillBg}" stroke="${theme.pillBorder}" stroke-width="1.5" />
        <text x="235" y="365" font-family="system-ui, sans-serif" font-size="12" fill="${theme.pillText}" text-anchor="middle">MINIMUM EXAM SCORE FORMULA</text>
        <text x="235" y="388" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">Score Needed = (Target - Internal) / Weight</text>
      </g>
    `;
  }

  // 9. Best Universities / Rankings / Pathways
  if (slug.includes("universit") || slug.includes("honours") || slug.includes("scholarship") || slug.includes("admission") || slug.includes("transcript")) {
    return `
      <!-- University Prestige & Rankings Graphic -->
      <g transform="translate(730, 140)">
        <rect width="470" height="440" rx="28" fill="#0f172a" fill-opacity="0.85" stroke="${theme.primary}" stroke-width="1.5" stroke-opacity="0.4" />

        <rect x="40" y="35" width="220" height="36" rx="10" fill="${theme.pillBg}" stroke="${theme.pillBorder}" stroke-width="1" />
        <text x="150" y="58" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="${theme.pillText}" text-anchor="middle">Higher Ed Benchmarks</text>

        <!-- University Crest / Shield -->
        <g transform="translate(45, 95)">
          <rect width="380" height="135" rx="20" fill="#1e293b" stroke="#334155" stroke-width="1" />
          
          <!-- Shield Icon -->
          <path d="M 60 30 L 100 15 L 140 30 L 140 75 Q 100 115 60 75 Z" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2.5" />
          <text x="100" y="65" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#fbbf24" text-anchor="middle">★</text>

          <text x="165" y="45" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">NATIONAL COHORT RANK</text>
          <text x="165" y="75" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#ffffff">Group of Eight (Go8)</text>
          <text x="165" y="105" font-family="system-ui, sans-serif" font-size="13" fill="#60a5fa" font-weight="600">ATAR 90.00+ • WAM 75.0+</text>
        </g>

        <!-- Admissions Criteria Cards -->
        <g transform="translate(45, 250)">
          <rect width="180" height="75" rx="14" fill="#1e293b" />
          <text x="20" y="32" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Employment Rate</text>
          <text x="20" y="58" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#34d399">91.4%</text>
        </g>
        <g transform="translate(245, 250)">
          <rect width="180" height="75" rx="14" fill="#1e293b" />
          <text x="20" y="32" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Global QS Tier</text>
          <text x="20" y="58" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#60a5fa">Top 20 Worldwide</text>
        </g>

        <!-- Verified Seal -->
        <rect x="45" y="345" width="380" height="55" rx="14" fill="${theme.pillBg}" stroke="${theme.pillBorder}" stroke-width="1.5" />
        <text x="235" y="378" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="${theme.pillText}" text-anchor="middle">Official Syllabus &amp; Transfer Requirements</text>
      </g>
    `;
  }

  // 10. Math, Probability & Statistics
  if (slug.includes("percentage") || slug.includes("probability") || slug.includes("standard-deviation") || slug.includes("mean") || slug.includes("ratio") || slug.includes("area") || slug.includes("weighted-average") || slug.includes("roi") || slug.includes("margin")) {
    return `
      <!-- Mathematical Model & Statistical Graphic -->
      <g transform="translate(730, 140)">
        <rect width="470" height="440" rx="28" fill="#0f172a" fill-opacity="0.85" stroke="${theme.primary}" stroke-width="1.5" stroke-opacity="0.4" />

        <rect x="40" y="35" width="220" height="36" rx="10" fill="${theme.pillBg}" stroke="${theme.pillBorder}" stroke-width="1" />
        <text x="150" y="58" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="${theme.pillText}" text-anchor="middle">Deterministic Proof</text>

        <!-- Gaussian / Mathematical Bell Curve or Balance Scale -->
        <g transform="translate(45, 95)">
          <line x1="10" y1="120" x2="370" y2="120" stroke="#334155" stroke-width="2" />
          <path d="M 20 120 Q 110 115, 150 70 Q 190 10, 230 70 Q 270 115, 360 120" fill="none" stroke="${theme.primary}" stroke-width="4" stroke-linecap="round" />
          
          <!-- Shaded Mean Region -->
          <line x1="190" y1="10" x2="190" y2="120" stroke="${theme.accent}" stroke-width="2.5" stroke-dasharray="4,4" />
          <text x="190" y="145" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">μ (Mean)</text>

          <text x="110" y="145" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">-1σ</text>
          <text x="270" y="145" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">+1σ</text>
          <rect x="135" y="45" width="110" height="28" rx="8" fill="#0e7490" fill-opacity="0.4" stroke="#22d3ee" stroke-width="1" />
          <text x="190" y="64" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#67e8f9" text-anchor="middle">68.2% Standard</text>
        </g>

        <!-- Metric Badges -->
        <g transform="translate(45, 260)">
          <rect width="180" height="70" rx="14" fill="#1e293b" />
          <text x="20" y="30" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Confidence Interval</text>
          <text x="20" y="54" font-family="system-ui, sans-serif" font-size="18" font-weight="bold" fill="#ffffff">95% (± 2σ)</text>
        </g>
        <g transform="translate(245, 260)">
          <rect width="180" height="70" rx="14" fill="#1e293b" />
          <text x="20" y="30" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Sample Variance</text>
          <text x="20" y="54" font-family="system-ui, sans-serif" font-size="18" font-weight="bold" fill="${theme.accent}">s² = Σ(x-μ)²/N</text>
        </g>

        <!-- Formula Bar -->
        <rect x="45" y="345" width="380" height="55" rx="14" fill="${theme.pillBg}" stroke="${theme.pillBorder}" stroke-width="1.5" />
        <text x="235" y="378" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="${theme.pillText}" text-anchor="middle">P(E) = n(E) / n(S) • Precise Mathematical Logic</text>
      </g>
    `;
  }

  // 11. Productivity, Writing, Pomodoro & Password Tools
  return `
    <!-- Productivity & Text Analysis Graphic -->
    <g transform="translate(730, 140)">
      <rect width="470" height="440" rx="28" fill="#0f172a" fill-opacity="0.85" stroke="${theme.primary}" stroke-width="1.5" stroke-opacity="0.4" />

      <rect x="40" y="35" width="220" height="36" rx="10" fill="${theme.pillBg}" stroke="${theme.pillBorder}" stroke-width="1" />
      <text x="150" y="58" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="${theme.pillText}" text-anchor="middle">Efficiency Engine</text>

      <!-- Circular Timer / Gauge representation -->
      <g transform="translate(235, 185)">
        <circle cx="0" cy="0" r="75" fill="none" stroke="#1e293b" stroke-width="16" />
        <circle cx="0" cy="0" r="75" fill="none" stroke="${theme.primary}" stroke-width="16" stroke-dasharray="350 480" stroke-linecap="round" />
        <text x="0" y="-5" font-family="system-ui, sans-serif" font-size="32" font-weight="900" fill="#ffffff" text-anchor="middle">25:00</text>
        <text x="0" y="24" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="${theme.accent}" text-anchor="middle">FOCUS INTERVAL</text>
      </g>

      <!-- Productivity Metrics -->
      <g transform="translate(45, 280)">
        <rect width="180" height="65" rx="12" fill="#1e293b" />
        <text x="20" y="28" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Words Per Minute</text>
        <text x="20" y="50" font-family="system-ui, sans-serif" font-size="18" font-weight="bold" fill="#ffffff">238 WPM</text>
      </g>
      <g transform="translate(245, 280)">
        <rect width="180" height="65" rx="12" fill="#1e293b" />
        <text x="20" y="28" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Standard Density</text>
        <text x="20" y="50" font-family="system-ui, sans-serif" font-size="18" font-weight="bold" fill="${theme.accent}">1.8% Target</text>
      </g>

      <!-- Footer Bar -->
      <rect x="45" y="360" width="380" height="48" rx="14" fill="${theme.pillBg}" stroke="${theme.pillBorder}" stroke-width="1.5" />
      <text x="235" y="390" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="${theme.pillText}" text-anchor="middle">Standardized Readability &amp; Timing Formulas</text>
    </g>
  `;
}

// Generate the full SVG string
function buildArticleSvg(article) {
  const theme = THEMES[article.category] || THEMES["Math & Everyday Calculations"];
  const lines = wrapText(article.title, 26);
  
  // Title starting Y coordinate based on number of lines
  const startY = lines.length >= 3 ? 280 : 310;
  const lineHeight = 56;
  
  const titleTspans = lines
    .map((line, idx) => `<tspan x="90" y="${startY + (idx * lineHeight)}">${escapeXml(line)}</tspan>`)
    .join("\n");

  const graphicSvg = getGraphicForArticle(article.slug, theme);

  return `
<svg width="1280" height="720" viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${theme.bgFrom}" />
      <stop offset="50%" stop-color="#0b1120" />
      <stop offset="100%" stop-color="${theme.bgTo}" />
    </linearGradient>

    <!-- Radial Glows -->
    <radialGradient id="glowLeft" cx="15%" cy="30%" r="50%">
      <stop offset="0%" stop-color="${theme.primary}" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>

    <radialGradient id="glowRight" cx="85%" cy="60%" r="55%">
      <stop offset="0%" stop-color="${theme.secondary}" stop-opacity="0.30" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>

    <!-- Card Background Gradient -->
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.8" />
    </linearGradient>
  </defs>

  <!-- Canvas Background -->
  <rect width="1280" height="720" fill="url(#bgGrad)" />
  <rect width="1280" height="720" fill="url(#glowLeft)" pointer-events="none" />
  <rect width="1280" height="720" fill="url(#glowRight)" pointer-events="none" />

  <!-- Subtle Coordinate / Matrix Grid -->
  <g opacity="0.08" stroke="#ffffff" stroke-width="1">
    <line x1="0" y1="90" x2="1280" y2="90" />
    <line x1="0" y1="180" x2="1280" y2="180" />
    <line x1="0" y1="270" x2="1280" y2="270" />
    <line x1="0" y1="360" x2="1280" y2="360" />
    <line x1="0" y1="450" x2="1280" y2="450" />
    <line x1="0" y1="540" x2="1280" y2="540" />
    <line x1="0" y1="630" x2="1280" y2="630" />

    <line x1="160" y1="0" x2="160" y2="720" />
    <line x1="320" y1="0" x2="320" y2="720" />
    <line x1="480" y1="0" x2="480" y2="720" />
    <line x1="640" y1="0" x2="640" y2="720" />
    <line x1="800" y1="0" x2="800" y2="720" />
    <line x1="960" y1="0" x2="960" y2="720" />
    <line x1="1120" y1="0" x2="1120" y2="720" />
  </g>

  <!-- Top Header Bar -->
  <g transform="translate(90, 60)">
    <!-- Brand Logo Icon -->
    <rect width="36" height="36" rx="10" fill="${theme.primary}" />
    <path d="M 12 18 L 18 12 L 24 18 L 18 24 Z" fill="#ffffff" />
    <circle cx="18" cy="18" r="3" fill="${theme.bgFrom}" />
    
    <!-- Brand Name -->
    <text x="50" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="900" letter-spacing="1" fill="#ffffff">MY CALCULATOR HUB</text>
    <text x="240" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="14" fill="#64748b">•</text>
    <text x="255" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" letter-spacing="1.5" fill="#94a3b8">VERIFIED EDITORIAL GUIDE</text>
  </g>

  <!-- Category Badge Pill (Left) -->
  <g transform="translate(90, 130)">
    <rect width="280" height="38" rx="19" fill="${theme.pillBg}" stroke="${theme.pillBorder}" stroke-width="1.5" />
    <circle cx="20" cy="19" r="5" fill="${theme.accent}" />
    <text x="35" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="800" letter-spacing="1" fill="${theme.pillText}">${escapeXml(theme.tag)}</text>
  </g>

  <!-- Article Title (Left Column) -->
  <g>
    <text font-family="system-ui, -apple-system, sans-serif" font-size="46" font-weight="900" fill="#ffffff" letter-spacing="-0.5">
      ${titleTspans}
    </text>
  </g>

  <!-- Subtitle / Meta Description -->
  <g transform="translate(90, 520)">
    <text font-family="system-ui, -apple-system, sans-serif" font-size="18" fill="#94a3b8" font-weight="500">
      Deterministic formula analysis, worked examples, and interactive benchmark tools.
    </text>
  </g>

  <!-- Footer Author Badge (Left Column) -->
  <g transform="translate(90, 580)">
    <rect width="440" height="54" rx="16" fill="#0f172a" fill-opacity="0.8" stroke="#334155" stroke-width="1" />
    <!-- Author Initials Circle -->
    <circle cx="32" cy="27" r="18" fill="${theme.primary}" />
    <text x="32" y="33" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">S</text>
    <text x="62" y="26" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#f8fafc">By Saahil &#8212; Founder &amp; Lead Computational Editor</text>
    <text x="62" y="44" font-family="system-ui, sans-serif" font-size="11" fill="#64748b">Client-Side Engine • Zero Data Tracking</text>
  </g>

  <!-- Right Section: Customized Graphic for Article -->
  ${graphicSvg}

  <!-- 16:9 Border Frame Accent -->
  <rect x="2" y="2" width="1276" height="716" rx="0" fill="none" stroke="#334155" stroke-width="1.5" opacity="0.3" />
</svg>
`;
}

async function main() {
  const outputDir = path.join(__dirname, '..', 'public', 'images', 'articles');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Compile full article list
  const allArticles = articleGroups.flatMap((group) =>
    group.slugs.map((slug) => {
      const title = titleFromSlug(slug);
      return {
        slug,
        title,
        category: group.category
      };
    })
  );

  console.log(`Starting generation of ${allArticles.length} unique 16:9 article images...`);
  let count = 0;

  for (const article of allArticles) {
    const svg = buildArticleSvg(article);
    const outFile = path.join(outputDir, `${article.slug}.webp`);
    
    await sharp(Buffer.from(svg))
      .webp({ quality: 90 })
      .toFile(outFile);

    count++;
    if (count % 20 === 0 || count === allArticles.length) {
      console.log(`Generated ${count}/${allArticles.length} images...`);
    }
  }

  console.log(`Successfully generated all ${count} unique 16:9 article images in ${outputDir}!`);
}

main().catch((err) => {
  console.error("Image generation failed:", err);
  process.exit(1);
});
