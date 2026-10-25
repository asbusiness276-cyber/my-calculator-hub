export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  published: string;
  updated: string;
  featuredImage: string;
};

// 49 high-value, distinct, defensible pillar articles across 5 core categories
const articleGroups: { category: string; slugs: string[] }[] = [
  {
    category: "Personal Finance",
    slugs: [
      "how-compound-interest-works",
      "simple-interest-vs-compound-interest",
      "how-to-calculate-loan-repayments",
      "mortgage-repayment-guide",
      "how-much-emergency-fund",
      "salary-to-hourly-rate-guide",
      "hecs-help-debt-explained",
      "credit-card-payoff-strategies",
      "saving-for-a-house-deposit",
      "apr-vs-apy-explained",
      "how-inflation-affects-savings",
      "debt-to-income-ratio-guide",
      "how-to-calculate-sip",
      "how-to-calculate-ppf",
    ],
  },
  {
    category: "Health & Fitness",
    slugs: [
      "how-to-calculate-bmi",
      "bmr-vs-tdee-explained",
      "how-to-calculate-calorie-deficit",
      "daily-water-intake-guide",
      "protein-intake-guide",
      "sleep-cycle-calculator-guide",
      "heart-rate-training-zones",
      "body-fat-percentage-guide",
      "ideal-weight-formulas-explained",
    ],
  },
  {
    category: "Math & Everyday Calculations",
    slugs: [
      "how-to-calculate-percentage",
      "percentage-change-formula",
      "how-to-calculate-a-weighted-average",
      "area-and-volume-formulas",
      "fractions-decimals-and-percentages",
      "mean-median-mode-explained",
      "standard-deviation-basics",
      "ratio-and-proportion-guide",
      "unit-conversion-guide",
      "probability-basics",
      "margin-vs-markup",
      "how-to-calculate-roi",
    ],
  },
  {
    category: "Academic & Grading",
    slugs: [
      "what-is-a-good-wam",
      "how-to-improve-wam-at-uni",
      "how-to-calculate-wam",
      "uni-wam-projection-guide",
      "uni-wam-to-gpa-conversion",
      "uni-cgpa-explained-guide",
      "4-0-gpa-calculator-guide",
      "gpa-scales-explained",
      "uni-final-exam-mark-calculator-guide",
      "best-universities-in-australia",
    ],
  },
  {
    category: "Productivity & Writing",
    slugs: [
      "how-to-estimate-reading-time",
      "how-many-words-per-page",
      "keyword-density-explained",
      "how-to-use-a-pomodoro-timer",
      "readability-scores-explained",
      "strong-password-guide",
    ],
  },
];

const exactTitles: Record<string, string> = {
  "how-compound-interest-works": "How Compound Interest Works: The Mathematical Power of Compounding",
  "simple-interest-vs-compound-interest": "Simple Interest vs Compound Interest: Key Differences & Formulas",
  "how-to-calculate-loan-repayments": "How to Calculate Loan Repayments: Complete EMI & Amortization Guide",
  "how-to-calculate-sip": "How to Calculate SIP Returns: Step-by-Step Formula & Examples",
  "how-to-calculate-ppf": "How to Calculate PPF Maturity: Step-by-Step Formula & Examples",
  "mortgage-repayment-guide": "Mortgage Repayment Guide: Principal, Interest & Amortization Mechanics",
  "how-much-emergency-fund": "How Much Emergency Fund Do You Really Need? Practical Rules & Benchmarks",
  "salary-to-hourly-rate-guide": "Salary to Hourly Rate Guide: Accurate Conversion Formula & Overtime",
  "hecs-help-debt-explained": "HECS-HELP Debt Explained: Indexation, Repayments, and Planning",
  "credit-card-payoff-strategies": "Credit Card Payoff Strategies: Debt Snowball vs Debt Avalanche",
  "saving-for-a-house-deposit": "Saving for a House Deposit: Roadmap, Timelines & Savings Strategies",
  "apr-vs-apy-explained": "APR vs APY: The Critical Difference That Changes Borrowing and Savings",
  "how-inflation-affects-savings": "How Inflation Affects Savings: Purchasing Power & Real Return Math",
  "debt-to-income-ratio-guide": "Debt-to-Income (DTI) Ratio Guide: Borrowing Power & Bank Limits",

  "how-to-calculate-bmi": "How to Calculate BMI: The Definitive Body Mass Index Formula Guide",
  "bmr-vs-tdee-explained": "BMR vs TDEE: What Each Number Means and How to Use It for Caloric Goals",
  "how-to-calculate-calorie-deficit": "How to Calculate a Calorie Deficit for Sustainable, Healthy Fat Loss",
  "daily-water-intake-guide": "Daily Water Intake Guide: Scientific Hydration Targets by Weight & Activity",
  "protein-intake-guide": "Daily Protein Intake Guide: Optimal Grams for Health, Muscle & Fat Loss",
  "sleep-cycle-calculator-guide": "Sleep Cycle Calculator Guide: The 90-Minute Circadian Rhythm Wave",
  "heart-rate-training-zones": "Heart Rate Training Zones: Calculating Your 5 Cardiovascular Zones",
  "body-fat-percentage-guide": "Body Fat Percentage Guide: Accurate Measurement Methods & Healthy Ranges",
  "ideal-weight-formulas-explained": "Ideal Weight Formulas Explained: Devine, Robinson, Miller & Hamwi",

  "how-to-calculate-percentage": "How to Calculate Percentage: 3 Simple Formulas with Practical Examples",
  "percentage-change-formula": "Percentage Change Formula: Calculating Percentage Increase and Decrease",
  "how-to-calculate-a-weighted-average": "How to Calculate a Weighted Average: The Ultimate 2026 Guide",
  "area-and-volume-formulas": "Complete Area and Volume Formulas Cheat Sheet for 2D & 3D Shapes",
  "fractions-decimals-and-percentages": "Fractions, Decimals, and Percentages: Complete Conversion Guide",
  "mean-median-mode-explained": "Mean, Median, and Mode Explained with Visual Real-World Distributions",
  "standard-deviation-basics": "Standard Deviation Basics: Formula, Calculation, and Empirical 68-95 Rule",
  "ratio-and-proportion-guide": "Ratio and Proportion Guide: Core Formulas and Step-by-Step Solving",
  "unit-conversion-guide": "Comprehensive Unit Conversion Guide: Metric, Imperial & Standard Constants",
  "probability-basics": "Probability Basics: Concepts, Formulas, and Real-World Examples",
  "margin-vs-markup": "Margin vs Markup: The Critical Business Difference for Profitability",
  "how-to-calculate-roi": "How to Calculate ROI (Return on Investment) with Formulas and Examples",

  "what-is-a-good-wam": "What Is a Good WAM? University Benchmarks, Context, and Career Planning",
  "how-to-improve-wam-at-uni": "How to Improve Your WAM at University: Actionable Academic Recovery",
  "how-to-calculate-wam": "How to Calculate WAM Correctly: Step-by-Step Weighted Method",
  "uni-wam-projection-guide": "University WAM Projection Guide: Forecasting Milestone Academic Targets",
  "uni-wam-to-gpa-conversion": "WAM to GPA Conversion: 4.0 and 7.0 Scales Explained",
  "uni-cgpa-explained-guide": "CGPA Explained: Calculation, Scales, and International Grade Conversion",
  "4-0-gpa-calculator-guide": "4.0 GPA Scale Guide: Conversion Table, Quality Points & Step-by-Step Math",
  "gpa-scales-explained": "GPA Scales Explained: 4.0, 7.0, and 10.0 Grading Systems Demystified",
  "uni-final-exam-mark-calculator-guide": "Final Exam Mark Needed to Pass Calculator Guide & Hurdle Requirements",
  "best-universities-in-australia": "Best Universities in Australia: Rankings, ATAR & Admission WAM Standards",

  "how-to-estimate-reading-time": "How to Estimate Reading Time: The Science of Words Per Minute (WPM)",
  "how-many-words-per-page": "How Many Words Per Page? Single vs Double Spaced Academic Guidelines",
  "keyword-density-explained": "Keyword Density Explained: Optimal SEO Percentages & Formula Checks",
  "how-to-use-a-pomodoro-timer": "How to Use a Pomodoro Timer for Peak Deep Work & Study Sessions",
  "readability-scores-explained": "Readability Scores Explained: Flesch-Kincaid, Gunning Fog & Grade Levels",
  "strong-password-guide": "Strong Password Guide: Cryptographic Entropy, Length & Defense Best Practices",
};

// SEO redirects for removed/pruned thin variations -> mapping to relevant pillar article
export const articleRedirects: Record<string, string> = {
  "uni-university-australia": "/articles/best-universities-in-australia",
  "best-pharmacy-universities-in-australia": "/articles/best-universities-in-australia",
  "best-universities-for-economics-in-australia": "/articles/best-universities-in-australia",
  "how-to-find-wam-on-uni-transcript": "/articles/how-to-calculate-wam",
  "uni-credit-points-wam-explained": "/articles/how-to-calculate-wam",
  "weighted-average-mark-vs-average-mark": "/articles/how-to-calculate-wam",
  "does-first-year-wam-matter": "/articles/how-to-improve-wam-at-uni",
  "how-universities-calculate-wam": "/articles/how-to-calculate-wam",
  "what-is-a-distinction-average": "/articles/what-is-a-good-wam",
  "credit-weighting-explained": "/articles/how-to-calculate-wam",
  "wam-calculation-mistakes": "/articles/how-to-calculate-wam",
  "uni-honours-wam-requirements": "/articles/what-is-a-good-wam",
  "uni-scholarship-wam-requirements": "/articles/what-is-a-good-wam",
  "uni-wam-target-guide": "/articles/uni-wam-projection-guide",
  "uni-semester-wam-guide": "/articles/uni-wam-projection-guide",
  "uni-wam-milestones-guide": "/articles/uni-wam-projection-guide",
  "uni-year-1-wam-weighting-guide": "/articles/how-to-calculate-wam",
  "how-to-plan-final-exam-marks": "/articles/uni-final-exam-mark-calculator-guide",
  "semester-grade-planning-guide": "/articles/uni-wam-projection-guide",
  "how-many-marks-needed-to-pass": "/articles/uni-final-exam-mark-calculator-guide",
  "study-load-and-academic-performance": "/articles/how-to-improve-wam-at-uni",
  "setting-a-realistic-wam-target": "/articles/uni-wam-projection-guide",
  "how-to-recover-your-wam": "/articles/how-to-improve-wam-at-uni",
  "uni-wam-vs-gpa-postgraduate": "/articles/uni-wam-to-gpa-conversion",
  "how-to-convert-wam-from-one-university-to-another": "/articles/uni-wam-to-gpa-conversion",
  "percentage-to-gpa-calculator-guide": "/articles/gpa-scales-explained",
  "7-0-scale-gpa-calculator-guide": "/articles/gpa-scales-explained",
  "semester-gpa-calculator-guide": "/articles/4-0-gpa-calculator-guide",
  "gpa-to-cgpa-calculator-guide": "/articles/uni-cgpa-explained-guide",
  "atar-to-gpa-wam-conversion-guide": "/articles/gpa-scales-explained",
  "how-to-convert-10-point-cgpa": "/articles/gpa-scales-explained",
  "us-gpa-vs-australian-gpa": "/articles/gpa-scales-explained",
  "how-wes-evaluates-grades": "/articles/gpa-scales-explained",
  "percentage-to-gpa-conversion-mistakes": "/articles/gpa-scales-explained",
  "failed-unit-wam-impact-uni": "/articles/uni-final-exam-mark-calculator-guide",
  "uni-supplementary-exam-wam-guide": "/articles/uni-final-exam-mark-calculator-guide",
  "uni-repeat-unit-wam-guide": "/articles/how-to-improve-wam-at-uni",
  "uni-withdrawn-fail-wam-guide": "/articles/how-to-calculate-wam",
  "uni-exchange-grades-wam-guide": "/articles/how-to-calculate-wam",
  "what-happens-if-you-fail-a-university-unit": "/articles/uni-final-exam-mark-calculator-guide",
  "supplementary-exam-vs-repeat-unit": "/articles/uni-final-exam-mark-calculator-guide",
  "late-penalty-impact-on-final-grade": "/articles/how-to-improve-wam-at-uni",
  "academic-probation-explained": "/articles/how-to-improve-wam-at-uni",
  "appealing-a-university-grade": "/articles/how-to-improve-wam-at-uni",
  "exam-mark-needed-to-pass": "/articles/uni-final-exam-mark-calculator-guide",
  "uni-deans-honours-list-wam-guide": "/articles/what-is-a-good-wam",
  "uni-wam-internship-graduate-jobs-guide": "/articles/what-is-a-good-wam",
  "uni-distinction-average-guide": "/articles/what-is-a-good-wam",
  "course-transfer-wam-requirements": "/articles/best-universities-in-australia",
  "postgraduate-entry-grade-requirements": "/articles/what-is-a-good-wam",
  "scholarship-grade-requirements-australia": "/articles/what-is-a-good-wam",
  "honours-entry-requirements-australia": "/articles/what-is-a-good-wam",
  "how-employers-read-university-grades": "/articles/what-is-a-good-wam",
  "study-abroad-grade-conversion": "/articles/gpa-scales-explained",
  "transcript-grades-explained": "/articles/gpa-scales-explained",
  "how-to-build-a-student-budget": "/articles/how-much-emergency-fund",
  "rent-affordability-guide": "/articles/salary-to-hourly-rate-guide",
  "investment-return-basics": "/articles/how-compound-interest-works",
  "running-pace-guide": "/articles/heart-rate-training-zones",
  "caffeine-half-life-explained": "/articles/sleep-cycle-calculator-guide",
  "standard-drinks-guide": "/articles/daily-water-intake-guide",
  "how-to-estimate-typing-time": "/articles/how-to-estimate-reading-time",
  "text-case-style-guide": "/articles/readability-scores-explained",
  "how-to-analyze-text": "/articles/readability-scores-explained",
  "study-time-planning-guide": "/articles/how-to-use-a-pomodoro-timer",
};

function titleFromSlug(slug: string) {
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

export const articles: Article[] = articleGroups.flatMap((group, groupIndex) =>
  group.slugs.map((slug, itemIndex) => {
    const title = titleFromSlug(slug);
    return {
      slug,
      title,
      category: group.category,
      excerpt: `${title} explained with definitions, formulas, worked examples, decision checks, common mistakes, and links to the most relevant free calculators.`,
      published: `2026-${String(((groupIndex + itemIndex) % 7) + 1).padStart(2, "0")}-12`,
      updated: "2026-08-14",
      featuredImage: `/images/articles/${slug}.webp`,
    };
  }),
);

export const articleCategories = articleGroups.map((group) => group.category);

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(article: Article, limit = 5) {
  return articles.filter((item) => item.category === article.category && item.slug !== article.slug).slice(0, limit);
}
