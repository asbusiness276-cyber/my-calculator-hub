export const CATEGORIES = [
  "Finance & Investment",
  "Daily Utility & Math",
  "Academic & Students",
  "Health & Fitness",
  "Science & Chemistry",
  "Physics & Engineering",
  "Construction & Real Estate",
  "Statistics & Probability",
  "Business & Marketing",
  "Text & Developer Tools"
] as const;

export type Category = typeof CATEGORIES[number];

export interface CalculatorMeta {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: Category;
  componentName: string;
  mode?: string;
}

export const calculators: CalculatorMeta[] = [
  {
    "id": "sip-calculator",
    "slug": "sip-calculator",
    "title": "Free SIP Calculator 2026 - Calculate Mutual Fund Returns",
    "description": "Use our free SIP Calculator to estimate your mutual fund returns. Plan your investments and track wealth creation easily.",
    "category": "Finance & Investment",
    "componentName": "SipCalculator",
    "mode": "compound"
  },
  {
    "id": "salary-calculator",
    "slug": "salary-calculator",
    "title": "Free Salary Calculator 2026 - Hourly, Daily, Weekly, Monthly",
    "description": "Convert your salary across hourly, daily, weekly, and monthly rates. Plan your income and taxes effortlessly.",
    "category": "Finance & Investment",
    "componentName": "SalaryCalculator",
    "mode": "salary"
  },
  {
    "id": "emi-calculator",
    "slug": "emi-calculator",
    "title": "Free EMI Calculator 2026 - Home & Car Loan Planner",
    "description": "Calculate your Equated Monthly Installments for home, car, or personal loans instantly.",
    "category": "Finance & Investment",
    "componentName": "EmiCalculator",
    "mode": "loan"
  },
  {
    "id": "ppf-calculator",
    "slug": "ppf-calculator",
    "title": "Free PPF Calculator 2026 - Calculate Public Provident Fund Returns",
    "description": "Calculate your Public Provident Fund (PPF) maturity amount, total interest earned, and investment growth over 15+ years. Plan your tax-free retirement corpus easily.",
    "category": "Finance & Investment",
    "componentName": "PpfCalculator",
    "mode": "compound"
  },
  {
    "id": "fd-rd-calculator",
    "slug": "fd-rd-calculator",
    "title": "Free FD & RD Calculator 2026 - Calculate Maturity Value",
    "description": "Calculate your Fixed Deposit (FD) and Recurring Deposit (RD) returns accurately. Find out your total maturity value and wealth gained.",
    "category": "Finance & Investment",
    "componentName": "FdRdCalculator",
    "mode": "compound"
  },
  {
    "id": "gst-calculator",
    "slug": "gst-calculator",
    "title": "Free GST Calculator 2026 - Add or Remove GST Instantly",
    "description": "Calculate Goods and Services Tax (GST) easily. Find the Net Amount, Gross Amount, and get the exact CGST and SGST breakdown.",
    "category": "Finance & Investment",
    "componentName": "GstCalculator",
    "mode": "percentage"
  },
  {
    "id": "margin-calculator",
    "slug": "margin-calculator",
    "title": "Free Margin & Markup Calculator 2026 - Profit Margin Calculator",
    "description": "Calculate your Gross Profit, Profit Margin, and Markup instantly. Essential tool for E-commerce sellers, retail businesses, and dropshippers.",
    "category": "Business & Marketing",
    "componentName": "MarginCalculator",
    "mode": "margin"
  },
  {
    "id": "apy-calculator",
    "slug": "apy-calculator",
    "title": "Free APY Calculator 2026 - Calculate Annual Percentage Yield",
    "description": "Calculate your Annual Percentage Yield (APY) based on interest rate and compounding frequency.",
    "category": "Finance & Investment",
    "componentName": "ApyCalculator",
    "mode": "compound"
  },
  {
    "id": "bmi-calculator",
    "slug": "bmi-calculator",
    "title": "Free BMI Calculator 2026 - Check Your Body Mass Index",
    "description": "Calculate your Body Mass Index (BMI) instantly to find out if you are at a healthy weight for your height.",
    "category": "Health & Fitness",
    "componentName": "BmiCalculator",
    "mode": "bmi"
  },
  {
    "id": "calorie-calculator",
    "slug": "calorie-calculator",
    "title": "Free Daily Calorie Calculator 2026 - Find Your Maintenance Calories",
    "description": "Calculate your BMR and Total Daily Energy Expenditure (TDEE). Find out exactly how many calories you need to eat to lose, maintain, or gain weight.",
    "category": "Health & Fitness",
    "componentName": "CalorieCalculator",
    "mode": "health"
  },
  {
    "id": "wam-calculator",
    "slug": "wam-calculator",
    "title": "Free WAM Calculator 2026 - University Weighted Average Mark",
    "description": "Calculate your university Weighted Average Mark (WAM) easily. Just enter your subject marks and credit points.",
    "category": "Academic & Students",
    "componentName": "WamCalculator",
    "mode": "weighted"
  },
  {
    "id": "cgpa-calculator",
    "slug": "cgpa-calculator",
    "title": "Free CGPA to Percentage Calculator 2026 - Instant Conversion",
    "description": "Convert your Cumulative Grade Point Average (CGPA) to Percentage instantly using the standard 9.5 formula. Perfect for Indian students and university graduates.",
    "category": "Academic & Students",
    "componentName": "CgpaCalculator",
    "mode": "weighted"
  },
  {
    "id": "age-calculator",
    "slug": "age-calculator",
    "title": "Free Age Calculator 2026 - Exact Age & Birthday Countdown",
    "description": "Calculate your exact age in years, months, and days. Find out how many days you have lived and countdown to your next birthday.",
    "category": "Daily Utility & Math",
    "componentName": "AgeCalculator",
    "mode": "age"
  },
  {
    "id": "percentage-calculator",
    "slug": "percentage-calculator",
    "title": "Free Percentage Calculator 2026 - Find % Increase & Decrease",
    "description": "Instantly calculate percentages. Find what X% of Y is, calculate percentage differences, and check percent increase or decrease.",
    "category": "Daily Utility & Math",
    "componentName": "PercentageCalculator",
    "mode": "percentage"
  },
  {
    "id": "discount-calculator",
    "slug": "discount-calculator",
    "title": "Free Discount Calculator 2026 - Calculate Sale Prices & Savings",
    "description": "Instantly calculate your final price after discounts and taxes. Find out exactly how much money you are saving during sales.",
    "category": "Daily Utility & Math",
    "componentName": "DiscountCalculator",
    "mode": "percentage"
  },
  {
    "id": "area-calculator",
    "slug": "area-calculator",
    "title": "Free Area Calculator 2026 - Calculate Area of Shapes",
    "description": "Calculate the area of rectangles, squares, circles, and triangles instantly.",
    "category": "Daily Utility & Math",
    "componentName": "AreaCalculator",
    "mode": "basic"
  },
  {
    "id": "word-counter",
    "slug": "word-counter",
    "title": "Free Word & Character Counter 2026 - Instant Text Statistics",
    "description": "Count words, characters, sentences, and paragraphs in real-time. Estimate reading and speaking time for your essays, blog posts, and copy.",
    "category": "Text & Developer Tools",
    "componentName": "WordCounter",
    "mode": "text"
  },
  {
    "id": "sentence-counter",
    "slug": "sentence-counter",
    "title": "Free Sentence Counter 2026 - Instant Text Statistics",
    "description": "Count sentences, words, and characters in real-time. Improve your readability.",
    "category": "Text & Developer Tools",
    "componentName": "SentenceCounter",
    "mode": "text"
  },
  {
    "id": "semester-wam-calculator",
    "slug": "semester-wam-calculator",
    "title": "Free Semester WAM Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Semester WAM Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "weighted"
  },
  {
    "id": "wam-projection-calculator",
    "slug": "wam-projection-calculator",
    "title": "Free WAM Projection Calculator 2026 - Instant Online Calculator",
    "description": "Use our free WAM Projection Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "weighted"
  },
  {
    "id": "wam-target-calculator",
    "slug": "wam-target-calculator",
    "title": "Free WAM Target Calculator 2026 - Instant Online Calculator",
    "description": "Use our free WAM Target Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "weighted"
  },
  {
    "id": "wam-milestones-calculator",
    "slug": "wam-milestones-calculator",
    "title": "Free WAM Milestones Calculator 2026 - Instant Online Calculator",
    "description": "Use our free WAM Milestones Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "weighted"
  },
  {
    "id": "degree-progress-calculator",
    "slug": "degree-progress-calculator",
    "title": "Free Degree Progress Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Degree Progress Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "weighted"
  },
  {
    "id": "wam-to-gpa-calculator",
    "slug": "wam-to-gpa-calculator",
    "title": "Free WAM To GPA Calculator 2026 - Instant Online Calculator",
    "description": "Use our free WAM To GPA Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "weighted"
  },
  {
    "id": "wam-to-4-0-gpa-calculator",
    "slug": "wam-to-4-0-gpa-calculator",
    "title": "Free WAM To 4 0 GPA Calculator 2026 - Instant Online Calculator",
    "description": "Use our free WAM To 4 0 GPA Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "CgpaCalculator",
    "mode": "weighted"
  },
  {
    "id": "wam-to-7-0-gpa-calculator",
    "slug": "wam-to-7-0-gpa-calculator",
    "title": "Free WAM To 7 0 GPA Calculator 2026 - Instant Online Calculator",
    "description": "Use our free WAM To 7 0 GPA Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "weighted"
  },
  {
    "id": "wam-to-cgpa-calculator",
    "slug": "wam-to-cgpa-calculator",
    "title": "Free WAM To CGPA Calculator 2026 - Instant Online Calculator",
    "description": "Use our free WAM To CGPA Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "CgpaCalculator",
    "mode": "weighted"
  },
  {
    "id": "gpa-to-wam-calculator",
    "slug": "gpa-to-wam-calculator",
    "title": "Free GPA To WAM Calculator 2026 - Instant Online Calculator",
    "description": "Use our free GPA To WAM Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "weighted"
  },
  {
    "id": "4-0-gpa-to-wam-calculator",
    "slug": "4-0-gpa-to-wam-calculator",
    "title": "Free 4 0 GPA To WAM Calculator 2026 - Instant Online Calculator",
    "description": "Use our free 4 0 GPA To WAM Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "weighted"
  },
  {
    "id": "7-0-gpa-to-wam-calculator",
    "slug": "7-0-gpa-to-wam-calculator",
    "title": "Free 7 0 GPA To WAM Calculator 2026 - Instant Online Calculator",
    "description": "Use our free 7 0 GPA To WAM Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "weighted"
  },
  {
    "id": "cgpa-to-wam-calculator",
    "slug": "cgpa-to-wam-calculator",
    "title": "Free CGPA To WAM Calculator 2026 - Instant Online Calculator",
    "description": "Use our free CGPA To WAM Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "CgpaCalculator",
    "mode": "weighted"
  },
  {
    "id": "gpa-to-percentage-calculator",
    "slug": "gpa-to-percentage-calculator",
    "title": "Free GPA To Percentage Calculator 2026 - Instant Online Calculator",
    "description": "Use our free GPA To Percentage Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "CgpaCalculator",
    "mode": "age"
  },
  {
    "id": "4-0-to-7-0-gpa-calculator",
    "slug": "4-0-to-7-0-gpa-calculator",
    "title": "Free 4 0 To 7 0 GPA Calculator 2026 - Instant Online Calculator",
    "description": "Use our free 4 0 To 7 0 GPA Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "weighted"
  },
  {
    "id": "7-0-to-4-0-gpa-calculator",
    "slug": "7-0-to-4-0-gpa-calculator",
    "title": "Free 7 0 To 4 0 GPA Calculator 2026 - Instant Online Calculator",
    "description": "Use our free 7 0 To 4 0 GPA Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "CgpaCalculator",
    "mode": "weighted"
  },
  {
    "id": "gpa-calculator",
    "slug": "gpa-calculator",
    "title": "Free GPA Calculator (Australia) 2026 - Instant Online Calculator",
    "description": "Use our free GPA Calculator (Australia) to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "CgpaCalculator",
    "mode": "weighted"
  },
  {
    "id": "4-0-gpa-calculator",
    "slug": "4-0-gpa-calculator",
    "title": "Free 4.0 GPA Calculator 2026 - Instant Online Calculator",
    "description": "Use our free 4.0 GPA Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "CgpaCalculator",
    "mode": "weighted"
  },
  {
    "id": "semester-gpa-calculator",
    "slug": "semester-gpa-calculator",
    "title": "Free Semester GPA Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Semester GPA Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "CgpaCalculator",
    "mode": "weighted"
  },
  {
    "id": "gpa-to-cgpa-calculator",
    "slug": "gpa-to-cgpa-calculator",
    "title": "Free GPA To CGPA Calculator 2026 - Instant Online Calculator",
    "description": "Use our free GPA To CGPA Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "weighted"
  },
  {
    "id": "cgpa-to-gpa-calculator",
    "slug": "cgpa-to-gpa-calculator",
    "title": "Free CGPA To GPA Calculator 2026 - Instant Online Calculator",
    "description": "Use our free CGPA To GPA Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "weighted"
  },
  {
    "id": "10-point-gpa-to-wam-calculator",
    "slug": "10-point-gpa-to-wam-calculator",
    "title": "Free 10-Point GPA to WAM Calculator 2026 - Instant Online Calculator",
    "description": "Use our free 10-Point GPA to WAM Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "weighted"
  },
  {
    "id": "atar-to-gpa-wam-calculator",
    "slug": "atar-to-gpa-wam-calculator",
    "title": "Free ATAR to GPA & WAM Calculator 2026 - Instant Online Calculator",
    "description": "Use our free ATAR to GPA & WAM Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "weighted"
  },
  {
    "id": "high-school-gpa-calculator",
    "slug": "high-school-gpa-calculator",
    "title": "Free High School GPA Calculator 2026 - Instant Online Calculator",
    "description": "Use our free High School GPA Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "weighted"
  },
  {
    "id": "mark-to-grade-calculator",
    "slug": "mark-to-grade-calculator",
    "title": "Free Mark To Grade Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Mark To Grade Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "percentage-to-gpa-calculator",
    "slug": "percentage-to-gpa-calculator",
    "title": "Free Percentage To GPA Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Percentage To GPA Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "CgpaCalculator",
    "mode": "percentage"
  },
  {
    "id": "7-0-scale-gpa-calculator",
    "slug": "7-0-scale-gpa-calculator",
    "title": "Free 7.0 Scale GPA Calculator 2026 - Instant Online Calculator",
    "description": "Use our free 7.0 Scale GPA Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "weighted"
  },
  {
    "id": "grade-average-calculator",
    "slug": "grade-average-calculator",
    "title": "Free Grade Average Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Grade Average Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "age"
  },
  {
    "id": "weighted-average-calculator",
    "slug": "weighted-average-calculator",
    "title": "Free Weighted Average Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Weighted Average Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "age"
  },
  {
    "id": "final-grade-calculator",
    "slug": "final-grade-calculator",
    "title": "Free Final Grade Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Final Grade Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "target-grade"
  },
  {
    "id": "unit-mark-calculator",
    "slug": "unit-mark-calculator",
    "title": "Free Unit Mark Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Unit Mark Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "conversion"
  },
  {
    "id": "unit-target-calculator",
    "slug": "unit-target-calculator",
    "title": "Free Unit Target Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Unit Target Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "target-grade"
  },
  {
    "id": "pass-mark-calculator",
    "slug": "pass-mark-calculator",
    "title": "Free Pass Mark Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Pass Mark Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "target-grade"
  },
  {
    "id": "failed-unit-wam-calculator",
    "slug": "failed-unit-wam-calculator",
    "title": "Free Failed Unit WAM Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Failed Unit WAM Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "weighted"
  },
  {
    "id": "withdrawn-fail-impact-calculator",
    "slug": "withdrawn-fail-impact-calculator",
    "title": "Free Withdrawn Fail Impact Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Withdrawn Fail Impact Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "supp-repeat-wam-calculator",
    "slug": "supp-repeat-wam-calculator",
    "title": "Free Supplementary vs Repeat WAM Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Supplementary vs Repeat WAM Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "weighted"
  },
  {
    "id": "academic-standing-calculator",
    "slug": "academic-standing-calculator",
    "title": "Free Academic Standing Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Academic Standing Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "loan"
  },
  {
    "id": "course-transfer-wam-checker",
    "slug": "course-transfer-wam-checker",
    "title": "Free Course Transfer WAM Checker 2026 - Instant Online Calculator",
    "description": "Use our free Course Transfer WAM Checker to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "weighted"
  },
  {
    "id": "visa-load-calculator",
    "slug": "visa-load-calculator",
    "title": "Free Student Visa Load Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Student Visa Load Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "weighted"
  },
  {
    "id": "attendance-calculator",
    "slug": "attendance-calculator",
    "title": "Free Attendance Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Attendance Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "weighted"
  },
  {
    "id": "essay-word-count-allocator",
    "slug": "essay-word-count-allocator",
    "title": "Free Essay Word Count Allocator 2026 - Instant Online Calculator",
    "description": "Use our free Essay Word Count Allocator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "text"
  },
  {
    "id": "study-time-calculator",
    "slug": "study-time-calculator",
    "title": "Free Study Time Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Study Time Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "time"
  },
  {
    "id": "study-break-calculator",
    "slug": "study-break-calculator",
    "title": "Free Study Break Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Study Break Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "pomodoro-study-timer",
    "slug": "pomodoro-study-timer",
    "title": "Free Pomodoro Study Timer 2026 - Instant Online Calculator",
    "description": "Use our free Pomodoro Study Timer to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "time"
  },
  {
    "id": "lecture-speed-calculator",
    "slug": "lecture-speed-calculator",
    "title": "Free Lecture Speed Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Lecture Speed Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "conversion"
  },
  {
    "id": "textbook-reading-time-calculator",
    "slug": "textbook-reading-time-calculator",
    "title": "Free Textbook Reading Time Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Textbook Reading Time Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Text & Developer Tools",
    "componentName": "UniversalCalculator",
    "mode": "text"
  },
  {
    "id": "peer-review-mark-calculator",
    "slug": "peer-review-mark-calculator",
    "title": "Free Group Peer Mark Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Group Peer Mark Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "weighted"
  },
  {
    "id": "scholarship-eligibility-calculator",
    "slug": "scholarship-eligibility-calculator",
    "title": "Free Scholarship Eligibility Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Scholarship Eligibility Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "weighted"
  },
  {
    "id": "honours-classification-calculator",
    "slug": "honours-classification-calculator",
    "title": "Free Honours Classification Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Honours Classification Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "weighted"
  },
  {
    "id": "credit-points-calculator",
    "slug": "credit-points-calculator",
    "title": "Free Credit Points Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Credit Points Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "weighted"
  },
  {
    "id": "exam-score-calculator",
    "slug": "exam-score-calculator",
    "title": "Free Exam Score Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Exam Score Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "target-grade"
  },
  {
    "id": "quiz-grade-calculator",
    "slug": "quiz-grade-calculator",
    "title": "Free Quiz Grade Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Quiz Grade Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "target-grade"
  },
  {
    "id": "assignment-grade-calculator",
    "slug": "assignment-grade-calculator",
    "title": "Free Assignment Grade Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Assignment Grade Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Academic & Students",
    "componentName": "UniversalCalculator",
    "mode": "target-grade"
  },
  {
    "id": "class-rank-percentile-calculator",
    "slug": "class-rank-percentile-calculator",
    "title": "Free Class Rank Percentile Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Class Rank Percentile Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Construction & Real Estate",
    "componentName": "UniversalCalculator",
    "mode": "weighted"
  },
  {
    "id": "hecs-debt-calculator",
    "slug": "hecs-debt-calculator",
    "title": "Free HECS-HELP Debt Calculator 2026 - Instant Online Calculator",
    "description": "Use our free HECS-HELP Debt Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "UniversalCalculator",
    "mode": "salary"
  },
  {
    "id": "hecs-indexation-calculator",
    "slug": "hecs-indexation-calculator",
    "title": "Free HECS Indexation Calculator 2026 - Instant Online Calculator",
    "description": "Use our free HECS Indexation Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "UniversalCalculator",
    "mode": "salary"
  },
  {
    "id": "hecs-repayment-time-calculator",
    "slug": "hecs-repayment-time-calculator",
    "title": "Free HECS Repayment Time Calculator 2026 - Instant Online Calculator",
    "description": "Use our free HECS Repayment Time Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "UniversalCalculator",
    "mode": "time"
  },
  {
    "id": "student-budget-calculator",
    "slug": "student-budget-calculator",
    "title": "Free Student Budget Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Student Budget Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "UniversalCalculator",
    "mode": "split"
  },
  {
    "id": "student-tax-calculator",
    "slug": "student-tax-calculator",
    "title": "Free Student Tax Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Student Tax Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "UniversalCalculator",
    "mode": "salary"
  },
  {
    "id": "youth-allowance-estimator",
    "slug": "youth-allowance-estimator",
    "title": "Free Youth Allowance Estimator 2026 - Instant Online Calculator",
    "description": "Use our free Youth Allowance Estimator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "UniversalCalculator",
    "mode": "salary"
  },
  {
    "id": "loan-calculator",
    "slug": "loan-calculator",
    "title": "Free Loan Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Loan Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "EmiCalculator",
    "mode": "loan"
  },
  {
    "id": "compound-interest-calculator",
    "slug": "compound-interest-calculator",
    "title": "Free Compound Interest Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Compound Interest Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "FdRdCalculator",
    "mode": "compound"
  },
  {
    "id": "tip-calculator",
    "slug": "tip-calculator",
    "title": "Free Tip Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Tip Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "DiscountCalculator",
    "mode": "percentage"
  },
  {
    "id": "fuel-cost-calculator",
    "slug": "fuel-cost-calculator",
    "title": "Free Fuel Cost Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Fuel Cost Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "UniversalCalculator",
    "mode": "fuel"
  },
  {
    "id": "sharehouse-rent-splitter",
    "slug": "sharehouse-rent-splitter",
    "title": "Free Sharehouse Rent Splitter 2026 - Instant Online Calculator",
    "description": "Use our free Sharehouse Rent Splitter to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "UniversalCalculator",
    "mode": "split"
  },
  {
    "id": "daily-coffee-cost-calculator",
    "slug": "daily-coffee-cost-calculator",
    "title": "Free Daily Coffee Cost Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Daily Coffee Cost Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "commute-vs-rent-calculator",
    "slug": "commute-vs-rent-calculator",
    "title": "Free Commute Vs Rent Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Commute Vs Rent Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "UniversalCalculator",
    "mode": "fuel"
  },
  {
    "id": "mortgage-calculator",
    "slug": "mortgage-calculator",
    "title": "Free Mortgage Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Mortgage Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "EmiCalculator",
    "mode": "age"
  },
  {
    "id": "auto-loan-calculator",
    "slug": "auto-loan-calculator",
    "title": "Free Auto Loan Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Auto Loan Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "EmiCalculator",
    "mode": "loan"
  },
  {
    "id": "personal-loan-calculator",
    "slug": "personal-loan-calculator",
    "title": "Free Personal Loan Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Personal Loan Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "EmiCalculator",
    "mode": "loan"
  },
  {
    "id": "student-loan-calculator",
    "slug": "student-loan-calculator",
    "title": "Free Student Loan Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Student Loan Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "EmiCalculator",
    "mode": "loan"
  },
  {
    "id": "simple-interest-calculator",
    "slug": "simple-interest-calculator",
    "title": "Free Simple Interest Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Simple Interest Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "savings-goal-calculator",
    "slug": "savings-goal-calculator",
    "title": "Free Savings Goal Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Savings Goal Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "FdRdCalculator",
    "mode": "compound"
  },
  {
    "id": "investment-return-calculator",
    "slug": "investment-return-calculator",
    "title": "Free Investment Return Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Investment Return Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "UniversalCalculator",
    "mode": "compound"
  },
  {
    "id": "retirement-calculator",
    "slug": "retirement-calculator",
    "title": "Free Retirement Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Retirement Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "UniversalCalculator",
    "mode": "compound"
  },
  {
    "id": "401k-calculator",
    "slug": "401k-calculator",
    "title": "Free 401(k) Calculator 2026 - Instant Online Calculator",
    "description": "Use our free 401(k) Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "UniversalCalculator",
    "mode": "compound"
  },
  {
    "id": "credit-card-payoff-calculator",
    "slug": "credit-card-payoff-calculator",
    "title": "Free Credit Card Payoff Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Credit Card Payoff Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "UniversalCalculator",
    "mode": "loan"
  },
  {
    "id": "debt-to-income-calculator",
    "slug": "debt-to-income-calculator",
    "title": "Free Debt To Income Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Debt To Income Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "net-worth-calculator",
    "slug": "net-worth-calculator",
    "title": "Free Net Worth Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Net Worth Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "emergency-fund-calculator",
    "slug": "emergency-fund-calculator",
    "title": "Free Emergency Fund Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Emergency Fund Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "paycheck-calculator",
    "slug": "paycheck-calculator",
    "title": "Free Paycheck Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Paycheck Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "SalaryCalculator",
    "mode": "salary"
  },
  {
    "id": "overtime-pay-calculator",
    "slug": "overtime-pay-calculator",
    "title": "Free Overtime Pay Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Overtime Pay Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "SalaryCalculator",
    "mode": "time"
  },
  {
    "id": "hourly-to-salary-calculator",
    "slug": "hourly-to-salary-calculator",
    "title": "Free Hourly To Salary Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Hourly To Salary Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "SalaryCalculator",
    "mode": "salary"
  },
  {
    "id": "salary-to-hourly-calculator",
    "slug": "salary-to-hourly-calculator",
    "title": "Free Salary To Hourly Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Salary To Hourly Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "SalaryCalculator",
    "mode": "salary"
  },
  {
    "id": "vat-calculator",
    "slug": "vat-calculator",
    "title": "Free VAT Calculator 2026 - Instant Online Calculator",
    "description": "Use our free VAT Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "GstCalculator",
    "mode": "percentage"
  },
  {
    "id": "sales-tax-calculator",
    "slug": "sales-tax-calculator",
    "title": "Free Sales Tax Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Sales Tax Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "GstCalculator",
    "mode": "salary"
  },
  {
    "id": "inflation-calculator",
    "slug": "inflation-calculator",
    "title": "Free Inflation Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Inflation Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "UniversalCalculator",
    "mode": "compound"
  },
  {
    "id": "currency-converter",
    "slug": "currency-converter",
    "title": "Free Currency Converter 2026 - Instant Online Calculator",
    "description": "Use our free Currency Converter to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "UniversalCalculator",
    "mode": "conversion"
  },
  {
    "id": "rent-affordability-calculator",
    "slug": "rent-affordability-calculator",
    "title": "Free Rent Affordability Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Rent Affordability Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "UniversalCalculator",
    "mode": "split"
  },
  {
    "id": "home-affordability-calculator",
    "slug": "home-affordability-calculator",
    "title": "Free Home Affordability Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Home Affordability Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "UniversalCalculator",
    "mode": "split"
  },
  {
    "id": "refinance-calculator",
    "slug": "refinance-calculator",
    "title": "Free Refinance Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Refinance Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "UniversalCalculator",
    "mode": "loan"
  },
  {
    "id": "break-even-calculator",
    "slug": "break-even-calculator",
    "title": "Free Break Even Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Break Even Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Business & Marketing",
    "componentName": "UniversalCalculator",
    "mode": "margin"
  },
  {
    "id": "apr-calculator",
    "slug": "apr-calculator",
    "title": "Free APR Calculator 2026 - Instant Online Calculator",
    "description": "Use our free APR Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "UniversalCalculator",
    "mode": "loan"
  },
  {
    "id": "sleep-cycle-calculator",
    "slug": "sleep-cycle-calculator",
    "title": "Free Sleep Cycle Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Sleep Cycle Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Health & Fitness",
    "componentName": "UniversalCalculator",
    "mode": "time"
  },
  {
    "id": "caffeine-crash-calculator",
    "slug": "caffeine-crash-calculator",
    "title": "Free Caffeine Crash Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Caffeine Crash Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Health & Fitness",
    "componentName": "UniversalCalculator",
    "mode": "health"
  },
  {
    "id": "standard-drinks-calculator",
    "slug": "standard-drinks-calculator",
    "title": "Free Standard Drinks Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Standard Drinks Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Health & Fitness",
    "componentName": "UniversalCalculator",
    "mode": "health"
  },
  {
    "id": "bmr-calculator",
    "slug": "bmr-calculator",
    "title": "Free BMR Calculator 2026 - Instant Online Calculator",
    "description": "Use our free BMR Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Health & Fitness",
    "componentName": "CalorieCalculator",
    "mode": "health"
  },
  {
    "id": "tdee-calculator",
    "slug": "tdee-calculator",
    "title": "Free TDEE Calculator 2026 - Instant Online Calculator",
    "description": "Use our free TDEE Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Health & Fitness",
    "componentName": "CalorieCalculator",
    "mode": "health"
  },
  {
    "id": "calorie-deficit-calculator",
    "slug": "calorie-deficit-calculator",
    "title": "Free Calorie Deficit Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Calorie Deficit Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Health & Fitness",
    "componentName": "CalorieCalculator",
    "mode": "health"
  },
  {
    "id": "calorie-maintenance-calculator",
    "slug": "calorie-maintenance-calculator",
    "title": "Free Calorie Maintenance Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Calorie Maintenance Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Health & Fitness",
    "componentName": "CalorieCalculator",
    "mode": "health"
  },
  {
    "id": "ideal-weight-calculator",
    "slug": "ideal-weight-calculator",
    "title": "Free Ideal Weight Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Ideal Weight Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Health & Fitness",
    "componentName": "UniversalCalculator",
    "mode": "conversion"
  },
  {
    "id": "body-fat-calculator",
    "slug": "body-fat-calculator",
    "title": "Free Body Fat Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Body Fat Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Health & Fitness",
    "componentName": "UniversalCalculator",
    "mode": "health"
  },
  {
    "id": "lean-body-mass-calculator",
    "slug": "lean-body-mass-calculator",
    "title": "Free Lean Body Mass Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Lean Body Mass Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Health & Fitness",
    "componentName": "UniversalCalculator",
    "mode": "health"
  },
  {
    "id": "water-intake-calculator",
    "slug": "water-intake-calculator",
    "title": "Free Water Intake Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Water Intake Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Health & Fitness",
    "componentName": "UniversalCalculator",
    "mode": "health"
  },
  {
    "id": "protein-intake-calculator",
    "slug": "protein-intake-calculator",
    "title": "Free Protein Intake Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Protein Intake Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Health & Fitness",
    "componentName": "UniversalCalculator",
    "mode": "health"
  },
  {
    "id": "macro-calculator",
    "slug": "macro-calculator",
    "title": "Free Macro Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Macro Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Health & Fitness",
    "componentName": "UniversalCalculator",
    "mode": "health"
  },
  {
    "id": "pace-calculator",
    "slug": "pace-calculator",
    "title": "Free Pace Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Pace Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Health & Fitness",
    "componentName": "UniversalCalculator",
    "mode": "health"
  },
  {
    "id": "running-pace-calculator",
    "slug": "running-pace-calculator",
    "title": "Free Running Pace Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Running Pace Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Health & Fitness",
    "componentName": "UniversalCalculator",
    "mode": "health"
  },
  {
    "id": "heart-rate-zone-calculator",
    "slug": "heart-rate-zone-calculator",
    "title": "Free Heart Rate Zone Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Heart Rate Zone Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Health & Fitness",
    "componentName": "UniversalCalculator",
    "mode": "health"
  },
  {
    "id": "pregnancy-due-date-calculator",
    "slug": "pregnancy-due-date-calculator",
    "title": "Free Pregnancy Due Date Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Pregnancy Due Date Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Health & Fitness",
    "componentName": "UniversalCalculator",
    "mode": "time"
  },
  {
    "id": "ovulation-calculator",
    "slug": "ovulation-calculator",
    "title": "Free Ovulation Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Ovulation Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Health & Fitness",
    "componentName": "UniversalCalculator",
    "mode": "health"
  },
  {
    "id": "blood-pressure-calculator",
    "slug": "blood-pressure-calculator",
    "title": "Free Blood Pressure Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Blood Pressure Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Physics & Engineering",
    "componentName": "UniversalCalculator",
    "mode": "health"
  },
  {
    "id": "waist-to-height-ratio-calculator",
    "slug": "waist-to-height-ratio-calculator",
    "title": "Free Waist To Height Ratio Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Waist To Height Ratio Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Health & Fitness",
    "componentName": "UniversalCalculator",
    "mode": "health"
  },
  {
    "id": "steps-to-calories-calculator",
    "slug": "steps-to-calories-calculator",
    "title": "Free Steps To Calories Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Steps To Calories Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Health & Fitness",
    "componentName": "UniversalCalculator",
    "mode": "health"
  },
  {
    "id": "one-rep-max-calculator",
    "slug": "one-rep-max-calculator",
    "title": "Free One Rep Max Calculator 2026 - Instant Online Calculator",
    "description": "Use our free One Rep Max Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Health & Fitness",
    "componentName": "UniversalCalculator",
    "mode": "health"
  },
  {
    "id": "alcohol-unit-calculator",
    "slug": "alcohol-unit-calculator",
    "title": "Free Alcohol Unit Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Alcohol Unit Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Health & Fitness",
    "componentName": "UniversalCalculator",
    "mode": "health"
  },
  {
    "id": "percentage-change-calculator",
    "slug": "percentage-change-calculator",
    "title": "Free Percentage Change Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Percentage Change Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "PercentageCalculator",
    "mode": "percentage-change"
  },
  {
    "id": "random-number-generator",
    "slug": "random-number-generator",
    "title": "Free Random Number Generator 2026 - Instant Online Calculator",
    "description": "Use our free Random Number Generator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "random"
  },
  {
    "id": "fraction-calculator",
    "slug": "fraction-calculator",
    "title": "Free Fraction Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Fraction Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "decimal-to-fraction-calculator",
    "slug": "decimal-to-fraction-calculator",
    "title": "Free Decimal To Fraction Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Decimal To Fraction Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "fraction-to-decimal-calculator",
    "slug": "fraction-to-decimal-calculator",
    "title": "Free Fraction To Decimal Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Fraction To Decimal Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "ratio-calculator",
    "slug": "ratio-calculator",
    "title": "Free Ratio Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Ratio Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "proportion-calculator",
    "slug": "proportion-calculator",
    "title": "Free Proportion Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Proportion Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "average-calculator",
    "slug": "average-calculator",
    "title": "Free Average Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Average Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "age"
  },
  {
    "id": "mean-median-mode-calculator",
    "slug": "mean-median-mode-calculator",
    "title": "Free Mean Median Mode Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Mean Median Mode Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Statistics & Probability",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "standard-deviation-calculator",
    "slug": "standard-deviation-calculator",
    "title": "Free Standard Deviation Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Standard Deviation Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Statistics & Probability",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "probability-calculator",
    "slug": "probability-calculator",
    "title": "Free Probability Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Probability Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Statistics & Probability",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "permutation-calculator",
    "slug": "permutation-calculator",
    "title": "Free Permutation Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Permutation Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Statistics & Probability",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "combination-calculator",
    "slug": "combination-calculator",
    "title": "Free Combination Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Combination Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Statistics & Probability",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "scientific-calculator",
    "slug": "scientific-calculator",
    "title": "Free Scientific Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Scientific Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "square-root-calculator",
    "slug": "square-root-calculator",
    "title": "Free Square Root Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Square Root Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "exponent-calculator",
    "slug": "exponent-calculator",
    "title": "Free Exponent Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Exponent Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "logarithm-calculator",
    "slug": "logarithm-calculator",
    "title": "Free Logarithm Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Logarithm Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "quadratic-formula-calculator",
    "slug": "quadratic-formula-calculator",
    "title": "Free Quadratic Formula Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Quadratic Formula Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "prime-number-calculator",
    "slug": "prime-number-calculator",
    "title": "Free Prime Number Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Prime Number Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "lcm-calculator",
    "slug": "lcm-calculator",
    "title": "Free LCM Calculator 2026 - Instant Online Calculator",
    "description": "Use our free LCM Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "gcf-calculator",
    "slug": "gcf-calculator",
    "title": "Free GCF Calculator 2026 - Instant Online Calculator",
    "description": "Use our free GCF Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "perimeter-calculator",
    "slug": "perimeter-calculator",
    "title": "Free Perimeter Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Perimeter Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "AreaCalculator",
    "mode": "basic"
  },
  {
    "id": "volume-calculator",
    "slug": "volume-calculator",
    "title": "Free Volume Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Volume Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "AreaCalculator",
    "mode": "basic"
  },
  {
    "id": "triangle-calculator",
    "slug": "triangle-calculator",
    "title": "Free Triangle Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Triangle Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "AreaCalculator",
    "mode": "basic"
  },
  {
    "id": "circle-calculator",
    "slug": "circle-calculator",
    "title": "Free Circle Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Circle Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "AreaCalculator",
    "mode": "basic"
  },
  {
    "id": "pythagorean-theorem-calculator",
    "slug": "pythagorean-theorem-calculator",
    "title": "Free Pythagorean Theorem Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Pythagorean Theorem Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "slope-calculator",
    "slug": "slope-calculator",
    "title": "Free Slope Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Slope Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "distance-formula-calculator",
    "slug": "distance-formula-calculator",
    "title": "Free Distance Formula Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Distance Formula Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "unit-converter",
    "slug": "unit-converter",
    "title": "Free Unit Converter 2026 - Instant Online Calculator",
    "description": "Use our free Unit Converter to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "conversion"
  },
  {
    "id": "length-converter",
    "slug": "length-converter",
    "title": "Free Length Converter 2026 - Instant Online Calculator",
    "description": "Use our free Length Converter to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "conversion"
  },
  {
    "id": "weight-converter",
    "slug": "weight-converter",
    "title": "Free Weight Converter 2026 - Instant Online Calculator",
    "description": "Use our free Weight Converter to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "conversion"
  },
  {
    "id": "temperature-converter",
    "slug": "temperature-converter",
    "title": "Free Temperature Converter 2026 - Instant Online Calculator",
    "description": "Use our free Temperature Converter to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "conversion"
  },
  {
    "id": "speed-converter",
    "slug": "speed-converter",
    "title": "Free Speed Converter 2026 - Instant Online Calculator",
    "description": "Use our free Speed Converter to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "conversion"
  },
  {
    "id": "data-storage-converter",
    "slug": "data-storage-converter",
    "title": "Free Data Storage Converter 2026 - Instant Online Calculator",
    "description": "Use our free Data Storage Converter to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "conversion"
  },
  {
    "id": "cooking-measurement-converter",
    "slug": "cooking-measurement-converter",
    "title": "Free Cooking Measurement Converter 2026 - Instant Online Calculator",
    "description": "Use our free Cooking Measurement Converter to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "conversion"
  },
  {
    "id": "days-between-dates-calculator",
    "slug": "days-between-dates-calculator",
    "title": "Free Days Between Dates Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Days Between Dates Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "date-difference"
  },
  {
    "id": "date-calculator",
    "slug": "date-calculator",
    "title": "Free Date Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Date Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "time"
  },
  {
    "id": "time-duration-calculator",
    "slug": "time-duration-calculator",
    "title": "Free Time Duration Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Time Duration Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "time"
  },
  {
    "id": "business-days-calculator",
    "slug": "business-days-calculator",
    "title": "Free Business Days Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Business Days Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "work-hours-calculator",
    "slug": "work-hours-calculator",
    "title": "Free Work Hours Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Work Hours Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "time"
  },
  {
    "id": "timesheet-calculator",
    "slug": "timesheet-calculator",
    "title": "Free Timesheet Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Timesheet Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "time"
  },
  {
    "id": "time-zone-converter",
    "slug": "time-zone-converter",
    "title": "Free Time Zone Converter 2026 - Instant Online Calculator",
    "description": "Use our free Time Zone Converter to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "time"
  },
  {
    "id": "countdown-calculator",
    "slug": "countdown-calculator",
    "title": "Free Countdown Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Countdown Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "time"
  },
  {
    "id": "birthday-countdown-calculator",
    "slug": "birthday-countdown-calculator",
    "title": "Free Birthday Countdown Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Birthday Countdown Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "time"
  },
  {
    "id": "anniversary-calculator",
    "slug": "anniversary-calculator",
    "title": "Free Anniversary Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Anniversary Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "time"
  },
  {
    "id": "week-number-calculator",
    "slug": "week-number-calculator",
    "title": "Free Week Number Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Week Number Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "time"
  },
  {
    "id": "hours-to-minutes-converter",
    "slug": "hours-to-minutes-converter",
    "title": "Free Hours To Minutes Converter 2026 - Instant Online Calculator",
    "description": "Use our free Hours To Minutes Converter to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "time"
  },
  {
    "id": "minutes-to-hours-converter",
    "slug": "minutes-to-hours-converter",
    "title": "Free Minutes To Hours Converter 2026 - Instant Online Calculator",
    "description": "Use our free Minutes To Hours Converter to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "time"
  },
  {
    "id": "decimal-hours-calculator",
    "slug": "decimal-hours-calculator",
    "title": "Free Decimal Hours Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Decimal Hours Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "time"
  },
  {
    "id": "alphabetizer",
    "slug": "alphabetizer",
    "title": "Free Alphabetizer 2026 - Instant Online Calculator",
    "description": "Use our free Alphabetizer to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Text & Developer Tools",
    "componentName": "UniversalCalculator",
    "mode": "alphabetize"
  },
  {
    "id": "binary-to-text-converter",
    "slug": "binary-to-text-converter",
    "title": "Free Binary To Text Converter 2026 - Instant Online Calculator",
    "description": "Use our free Binary To Text Converter to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Text & Developer Tools",
    "componentName": "UniversalCalculator",
    "mode": "binary"
  },
  {
    "id": "hex-to-decimal-converter",
    "slug": "hex-to-decimal-converter",
    "title": "Free Hex To Decimal Converter 2026 - Instant Online Calculator",
    "description": "Use our free Hex To Decimal Converter to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Text & Developer Tools",
    "componentName": "UniversalCalculator",
    "mode": "hex"
  },
  {
    "id": "number-to-words-converter",
    "slug": "number-to-words-converter",
    "title": "Free Number To Words Converter 2026 - Instant Online Calculator",
    "description": "Use our free Number To Words Converter to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Text & Developer Tools",
    "componentName": "UniversalCalculator",
    "mode": "number-words"
  },
  {
    "id": "word-counter-tool",
    "slug": "word-counter-tool",
    "title": "Free Word Counter 2026 - Instant Online Calculator",
    "description": "Use our free Word Counter to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Text & Developer Tools",
    "componentName": "WordCounter",
    "mode": "text"
  },
  {
    "id": "roman-numeral-converter",
    "slug": "roman-numeral-converter",
    "title": "Free Roman Numeral Converter 2026 - Instant Online Calculator",
    "description": "Use our free Roman Numeral Converter to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Text & Developer Tools",
    "componentName": "UniversalCalculator",
    "mode": "roman"
  },
  {
    "id": "password-generator",
    "slug": "password-generator",
    "title": "Free Password Generator 2026 - Instant Online Calculator",
    "description": "Use our free Password Generator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Text & Developer Tools",
    "componentName": "UniversalCalculator",
    "mode": "password"
  },
  {
    "id": "random-name-picker",
    "slug": "random-name-picker",
    "title": "Free Random Name Picker 2026 - Instant Online Calculator",
    "description": "Use our free Random Name Picker to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "random"
  },
  {
    "id": "detailed-text-analyzer",
    "slug": "detailed-text-analyzer",
    "title": "Free Detailed Text & Speech Analyzer 2026 - Instant Online Calculator",
    "description": "Use our free Detailed Text & Speech Analyzer to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "text"
  },
  {
    "id": "reading-time-calculator",
    "slug": "reading-time-calculator",
    "title": "Free Reading Time Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Reading Time Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Text & Developer Tools",
    "componentName": "UniversalCalculator",
    "mode": "time"
  },
  {
    "id": "typing-time-estimator",
    "slug": "typing-time-estimator",
    "title": "Free Typing Time Estimator 2026 - Instant Online Calculator",
    "description": "Use our free Typing Time Estimator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Text & Developer Tools",
    "componentName": "UniversalCalculator",
    "mode": "time"
  },
  {
    "id": "words-to-pages-converter",
    "slug": "words-to-pages-converter",
    "title": "Free Words To Pages Converter 2026 - Instant Online Calculator",
    "description": "Use our free Words To Pages Converter to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "text"
  },
  {
    "id": "text-case-converter",
    "slug": "text-case-converter",
    "title": "Free Text Case Converter 2026 - Instant Online Calculator",
    "description": "Use our free Text Case Converter to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Text & Developer Tools",
    "componentName": "UniversalCalculator",
    "mode": "case"
  },
  {
    "id": "character-counter",
    "slug": "character-counter",
    "title": "Free Character Counter 2026 - Instant Online Calculator",
    "description": "Use our free Character Counter to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Text & Developer Tools",
    "componentName": "WordCounter",
    "mode": "text"
  },
  {
    "id": "paragraph-counter",
    "slug": "paragraph-counter",
    "title": "Free Paragraph Counter 2026 - Instant Online Calculator",
    "description": "Use our free Paragraph Counter to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Text & Developer Tools",
    "componentName": "WordCounter",
    "mode": "text"
  },
  {
    "id": "keyword-density-calculator",
    "slug": "keyword-density-calculator",
    "title": "Free Keyword Density Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Keyword Density Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Science & Chemistry",
    "componentName": "UniversalCalculator",
    "mode": "text"
  },
  {
    "id": "reading-level-calculator",
    "slug": "reading-level-calculator",
    "title": "Free Reading Level Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Reading Level Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "text"
  },
  {
    "id": "word-frequency-counter",
    "slug": "word-frequency-counter",
    "title": "Free Word Frequency Counter 2026 - Instant Online Calculator",
    "description": "Use our free Word Frequency Counter to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "text"
  },
  {
    "id": "slug-generator",
    "slug": "slug-generator",
    "title": "Free Slug Generator 2026 - Instant Online Calculator",
    "description": "Use our free Slug Generator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Text & Developer Tools",
    "componentName": "UniversalCalculator",
    "mode": "text"
  },
  {
    "id": "uuid-generator",
    "slug": "uuid-generator",
    "title": "Free UUID Generator 2026 - Instant Online Calculator",
    "description": "Use our free UUID Generator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Text & Developer Tools",
    "componentName": "UniversalCalculator",
    "mode": "password"
  },
  {
    "id": "hash-generator",
    "slug": "hash-generator",
    "title": "Free Hash Generator 2026 - Instant Online Calculator",
    "description": "Use our free Hash Generator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Text & Developer Tools",
    "componentName": "UniversalCalculator",
    "mode": "password"
  },
  {
    "id": "base64-encoder-decoder",
    "slug": "base64-encoder-decoder",
    "title": "Free Base64 Encoder & Decoder 2026 - Instant Online Calculator",
    "description": "Use our free Base64 Encoder & Decoder to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Text & Developer Tools",
    "componentName": "UniversalCalculator",
    "mode": "text"
  },
  {
    "id": "json-formatter",
    "slug": "json-formatter",
    "title": "Free JSON Formatter 2026 - Instant Online Calculator",
    "description": "Use our free JSON Formatter to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Text & Developer Tools",
    "componentName": "UniversalCalculator",
    "mode": "text"
  },
  {
    "id": "csv-to-json-converter",
    "slug": "csv-to-json-converter",
    "title": "Free CSV to JSON Converter 2026 - Instant Online Calculator",
    "description": "Use our free CSV to JSON Converter to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "text"
  },
  {
    "id": "url-encoder-decoder",
    "slug": "url-encoder-decoder",
    "title": "Free URL Encoder Decoder 2026 - Instant Online Calculator",
    "description": "Use our free URL Encoder Decoder to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Text & Developer Tools",
    "componentName": "UniversalCalculator",
    "mode": "text"
  },
  {
    "id": "color-converter",
    "slug": "color-converter",
    "title": "Free Color Converter 2026 - Instant Online Calculator",
    "description": "Use our free Color Converter to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Text & Developer Tools",
    "componentName": "UniversalCalculator",
    "mode": "conversion"
  },
  {
    "id": "late-penalty-calculator",
    "slug": "late-penalty-calculator",
    "title": "Free Late Penalty Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Late Penalty Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "coffee-to-water-ratio-calculator",
    "slug": "coffee-to-water-ratio-calculator",
    "title": "Free Coffee To Water Ratio Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Coffee To Water Ratio Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "recipe-scaler-calculator",
    "slug": "recipe-scaler-calculator",
    "title": "Free Recipe Scaler Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Recipe Scaler Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "paint-calculator",
    "slug": "paint-calculator",
    "title": "Free Paint Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Paint Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Construction & Real Estate",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "flooring-calculator",
    "slug": "flooring-calculator",
    "title": "Free Flooring Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Flooring Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Construction & Real Estate",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "tile-calculator",
    "slug": "tile-calculator",
    "title": "Free Tile Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Tile Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Construction & Real Estate",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "concrete-calculator",
    "slug": "concrete-calculator",
    "title": "Free Concrete Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Concrete Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Construction & Real Estate",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "mulch-calculator",
    "slug": "mulch-calculator",
    "title": "Free Mulch Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Mulch Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Construction & Real Estate",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "fence-calculator",
    "slug": "fence-calculator",
    "title": "Free Fence Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Fence Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Construction & Real Estate",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "roofing-calculator",
    "slug": "roofing-calculator",
    "title": "Free Roofing Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Roofing Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Construction & Real Estate",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "electricity-cost-calculator",
    "slug": "electricity-cost-calculator",
    "title": "Free Electricity Cost Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Electricity Cost Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Business & Marketing",
    "componentName": "UniversalCalculator",
    "mode": "margin"
  },
  {
    "id": "appliance-energy-cost-calculator",
    "slug": "appliance-energy-cost-calculator",
    "title": "Free Appliance Energy Cost Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Appliance Energy Cost Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "solar-panel-calculator",
    "slug": "solar-panel-calculator",
    "title": "Free Solar Panel Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Solar Panel Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "moving-cost-calculator",
    "slug": "moving-cost-calculator",
    "title": "Free Moving Cost Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Moving Cost Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Construction & Real Estate",
    "componentName": "UniversalCalculator",
    "mode": "split"
  },
  {
    "id": "travel-budget-calculator",
    "slug": "travel-budget-calculator",
    "title": "Free Travel Budget Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Travel Budget Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "split"
  },
  {
    "id": "road-trip-cost-calculator",
    "slug": "road-trip-cost-calculator",
    "title": "Free Road Trip Cost Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Road Trip Cost Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "fuel"
  },
  {
    "id": "mileage-calculator",
    "slug": "mileage-calculator",
    "title": "Free Mileage Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Mileage Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "age"
  },
  {
    "id": "pet-age-calculator",
    "slug": "pet-age-calculator",
    "title": "Free Pet Age Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Pet Age Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "age"
  },
  {
    "id": "dog-age-calculator",
    "slug": "dog-age-calculator",
    "title": "Free Dog Age Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Dog Age Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "age"
  },
  {
    "id": "cat-age-calculator",
    "slug": "cat-age-calculator",
    "title": "Free Cat Age Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Cat Age Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "age"
  },
  {
    "id": "cooking-time-calculator",
    "slug": "cooking-time-calculator",
    "title": "Free Cooking Time Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Cooking Time Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "time"
  },
  {
    "id": "screen-size-calculator",
    "slug": "screen-size-calculator",
    "title": "Free Screen Size Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Screen Size Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "tv-distance-calculator",
    "slug": "tv-distance-calculator",
    "title": "Free Tv Distance Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Tv Distance Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "basic"
  },
  {
    "id": "shoe-size-converter",
    "slug": "shoe-size-converter",
    "title": "Free Shoe Size Converter 2026 - Instant Online Calculator",
    "description": "Use our free Shoe Size Converter to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "conversion"
  },
  {
    "id": "clothing-size-converter",
    "slug": "clothing-size-converter",
    "title": "Free Clothing Size Converter 2026 - Instant Online Calculator",
    "description": "Use our free Clothing Size Converter to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Daily Utility & Math",
    "componentName": "UniversalCalculator",
    "mode": "conversion"
  },
  {
    "id": "markup-calculator",
    "slug": "markup-calculator",
    "title": "Free Markup Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Markup Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Business & Marketing",
    "componentName": "MarginCalculator",
    "mode": "margin"
  },
  {
    "id": "profit-calculator",
    "slug": "profit-calculator",
    "title": "Free Profit Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Profit Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Business & Marketing",
    "componentName": "MarginCalculator",
    "mode": "margin"
  },
  {
    "id": "roi-calculator",
    "slug": "roi-calculator",
    "title": "Free ROI Calculator 2026 - Instant Online Calculator",
    "description": "Use our free ROI Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Business & Marketing",
    "componentName": "UniversalCalculator",
    "mode": "margin"
  },
  {
    "id": "roas-calculator",
    "slug": "roas-calculator",
    "title": "Free ROAS Calculator 2026 - Instant Online Calculator",
    "description": "Use our free ROAS Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Business & Marketing",
    "componentName": "UniversalCalculator",
    "mode": "margin"
  },
  {
    "id": "cpc-calculator",
    "slug": "cpc-calculator",
    "title": "Free CPC Calculator 2026 - Instant Online Calculator",
    "description": "Use our free CPC Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Business & Marketing",
    "componentName": "UniversalCalculator",
    "mode": "margin"
  },
  {
    "id": "cpm-calculator",
    "slug": "cpm-calculator",
    "title": "Free CPM Calculator 2026 - Instant Online Calculator",
    "description": "Use our free CPM Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Business & Marketing",
    "componentName": "UniversalCalculator",
    "mode": "margin"
  },
  {
    "id": "ctr-calculator",
    "slug": "ctr-calculator",
    "title": "Free CTR Calculator 2026 - Instant Online Calculator",
    "description": "Use our free CTR Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Business & Marketing",
    "componentName": "UniversalCalculator",
    "mode": "margin"
  },
  {
    "id": "conversion-rate-calculator",
    "slug": "conversion-rate-calculator",
    "title": "Free Conversion Rate Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Conversion Rate Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Business & Marketing",
    "componentName": "UniversalCalculator",
    "mode": "margin"
  },
  {
    "id": "customer-acquisition-cost-calculator",
    "slug": "customer-acquisition-cost-calculator",
    "title": "Free Customer Acquisition Cost Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Customer Acquisition Cost Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Business & Marketing",
    "componentName": "UniversalCalculator",
    "mode": "margin"
  },
  {
    "id": "customer-lifetime-value-calculator",
    "slug": "customer-lifetime-value-calculator",
    "title": "Free Customer Lifetime Value Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Customer Lifetime Value Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Business & Marketing",
    "componentName": "UniversalCalculator",
    "mode": "time"
  },
  {
    "id": "churn-rate-calculator",
    "slug": "churn-rate-calculator",
    "title": "Free Churn Rate Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Churn Rate Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Business & Marketing",
    "componentName": "UniversalCalculator",
    "mode": "margin"
  },
  {
    "id": "mrr-calculator",
    "slug": "mrr-calculator",
    "title": "Free MRR Calculator 2026 - Instant Online Calculator",
    "description": "Use our free MRR Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Business & Marketing",
    "componentName": "UniversalCalculator",
    "mode": "margin"
  },
  {
    "id": "arr-calculator",
    "slug": "arr-calculator",
    "title": "Free ARR Calculator 2026 - Instant Online Calculator",
    "description": "Use our free ARR Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Business & Marketing",
    "componentName": "UniversalCalculator",
    "mode": "margin"
  },
  {
    "id": "saas-metrics-calculator",
    "slug": "saas-metrics-calculator",
    "title": "Free SaaS Metrics Calculator 2026 - Instant Online Calculator",
    "description": "Use our free SaaS Metrics Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Business & Marketing",
    "componentName": "UniversalCalculator",
    "mode": "margin"
  },
  {
    "id": "inventory-turnover-calculator",
    "slug": "inventory-turnover-calculator",
    "title": "Free Inventory Turnover Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Inventory Turnover Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Business & Marketing",
    "componentName": "UniversalCalculator",
    "mode": "margin"
  },
  {
    "id": "gross-margin-calculator",
    "slug": "gross-margin-calculator",
    "title": "Free Gross Margin Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Gross Margin Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Business & Marketing",
    "componentName": "MarginCalculator",
    "mode": "margin"
  },
  {
    "id": "operating-margin-calculator",
    "slug": "operating-margin-calculator",
    "title": "Free Operating Margin Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Operating Margin Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Business & Marketing",
    "componentName": "MarginCalculator",
    "mode": "margin"
  },
  {
    "id": "payback-period-calculator",
    "slug": "payback-period-calculator",
    "title": "Free Payback Period Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Payback Period Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Business & Marketing",
    "componentName": "UniversalCalculator",
    "mode": "margin"
  },
  {
    "id": "freelance-rate-calculator",
    "slug": "freelance-rate-calculator",
    "title": "Free Freelance Rate Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Freelance Rate Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "UniversalCalculator",
    "mode": "salary"
  },
  {
    "id": "billable-hours-calculator",
    "slug": "billable-hours-calculator",
    "title": "Free Billable Hours Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Billable Hours Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Finance & Investment",
    "componentName": "UniversalCalculator",
    "mode": "time"
  },
  {
    "id": "ecommerce-profit-calculator",
    "slug": "ecommerce-profit-calculator",
    "title": "Free Ecommerce Profit Calculator 2026 - Instant Online Calculator",
    "description": "Use our free Ecommerce Profit Calculator to calculate instantly with accurate formulas, step-by-step guidance, and real-time results.",
    "category": "Business & Marketing",
    "componentName": "MarginCalculator",
    "mode": "margin"
  },
  {
    "id": "molarity-calculator",
    "slug": "molarity-calculator",
    "title": "Free Molarity Calculator 2026 - Moles, Volume & Concentration",
    "description": "Calculate solution molarity, moles of solute, or volume in liters easily using the M = n / V equation. Perfect for chemistry students and labs.",
    "category": "Science & Chemistry",
    "componentName": "UniversalCalculator",
    "mode": "chemistry"
  },
  {
    "id": "dilution-calculator",
    "slug": "dilution-calculator",
    "title": "Free Dilution Calculator (M1V1 = M2V2) - Solution Concentration",
    "description": "Calculate initial and final concentrations or volumes for chemical dilutions instantly using the universal M1V1 = M2V2 formula.",
    "category": "Science & Chemistry",
    "componentName": "UniversalCalculator",
    "mode": "dilution"
  },
  {
    "id": "ph-calculator",
    "slug": "ph-calculator",
    "title": "Free pH Calculator 2026 - Calculate pH and H+ Concentration",
    "description": "Calculate pH and hydronium ion concentration [H+] from acidity or basicity values. Instant chemical equilibrium outputs.",
    "category": "Science & Chemistry",
    "componentName": "UniversalCalculator",
    "mode": "ph"
  },
  {
    "id": "ideal-gas-law-calculator",
    "slug": "ideal-gas-law-calculator",
    "title": "Free Ideal Gas Law Calculator (PV = nRT) - Pressure, Volume, Temp",
    "description": "Solve for Pressure, Volume, Moles, or Temperature using the ideal gas equation PV = nRT with standard gas constant R.",
    "category": "Science & Chemistry",
    "componentName": "UniversalCalculator",
    "mode": "gas-law"
  },
  {
    "id": "density-calculator",
    "slug": "density-calculator",
    "title": "Free Density Calculator 2026 - Mass and Volume Calculator",
    "description": "Calculate the density, mass, or volume of any substance or liquid instantly. Includes g/cm³ and kg/m³ conversions.",
    "category": "Science & Chemistry",
    "componentName": "UniversalCalculator",
    "mode": "density"
  },
  {
    "id": "half-life-calculator",
    "slug": "half-life-calculator",
    "title": "Free Half-Life Calculator 2026 - Radioactive Decay & Chemistry",
    "description": "Calculate remaining quantity, initial quantity, half-life decay period, or elapsed time for any isotope or chemical reaction.",
    "category": "Science & Chemistry",
    "componentName": "UniversalCalculator",
    "mode": "half-life"
  },
  {
    "id": "ohms-law-calculator",
    "slug": "ohms-law-calculator",
    "title": "Free Ohm's Law Calculator 2026 - Voltage, Current, Resistance & Power",
    "description": "Calculate Voltage (V), Current (I), Resistance (R), and Power (Watts) in electric circuits using standard Ohm's law formulas.",
    "category": "Physics & Engineering",
    "componentName": "UniversalCalculator",
    "mode": "ohms-law"
  },
  {
    "id": "velocity-calculator",
    "slug": "velocity-calculator",
    "title": "Free Velocity & Speed Calculator (v = d / t) - Physics Tool",
    "description": "Calculate velocity, distance traveled, or elapsed time for linear motion in metric (m/s, km/h) and imperial units (mph).",
    "category": "Physics & Engineering",
    "componentName": "UniversalCalculator",
    "mode": "velocity"
  },
  {
    "id": "acceleration-calculator",
    "slug": "acceleration-calculator",
    "title": "Free Acceleration Calculator (a = Δv / t) - Physics Motion",
    "description": "Calculate average acceleration, initial velocity, final velocity, and time. Determine constant acceleration rates effortlessly.",
    "category": "Physics & Engineering",
    "componentName": "UniversalCalculator",
    "mode": "acceleration"
  },
  {
    "id": "force-calculator",
    "slug": "force-calculator",
    "title": "Free Force Calculator (F = m × a) - Newton's Second Law",
    "description": "Calculate Force in Newtons (N), mass in kg, or acceleration using Newton's classic formula F = ma.",
    "category": "Physics & Engineering",
    "componentName": "UniversalCalculator",
    "mode": "force"
  },
  {
    "id": "kinetic-energy-calculator",
    "slug": "kinetic-energy-calculator",
    "title": "Free Kinetic Energy Calculator (KE = ½mv²) - Work & Energy",
    "description": "Calculate the kinetic energy in Joules (J) of any moving object given its mass and velocity.",
    "category": "Physics & Engineering",
    "componentName": "UniversalCalculator",
    "mode": "kinetic-energy"
  },
  {
    "id": "pressure-calculator",
    "slug": "pressure-calculator",
    "title": "Free Pressure Calculator (P = F / A) - Pascal & PSI",
    "description": "Calculate pressure in Pascals, atmospheres, or PSI given applied force and surface contact area.",
    "category": "Physics & Engineering",
    "componentName": "UniversalCalculator",
    "mode": "pressure"
  },
  {
    "id": "brick-calculator",
    "slug": "brick-calculator",
    "title": "Free Brick Calculator 2026 - Estimate Bricks for Wall Construction",
    "description": "Estimate the exact number of standard bricks and mortar needed for single or double masonry walls including waste percentage.",
    "category": "Construction & Real Estate",
    "componentName": "UniversalCalculator",
    "mode": "brick"
  },
  {
    "id": "z-score-calculator",
    "slug": "z-score-calculator",
    "title": "Free Z-Score Calculator 2026 - Standard Normal Distribution",
    "description": "Calculate standard score (Z-Score) from raw score, population mean, and standard deviation. Essential for statistics homework.",
    "category": "Statistics & Probability",
    "componentName": "UniversalCalculator",
    "mode": "z-score"
  }
];

export function getCalculatorBySlug(slug: string): CalculatorMeta | undefined {
  return calculators.find((c) => c.slug === slug);
}

export function getCalculatorsByCategory(category: string): CalculatorMeta[] {
  const norm = category.toLowerCase().trim();
  return calculators.filter((c) => {
    const cCat = c.category.toLowerCase().trim();
    if (cCat === norm) return true;

    // Aliases
    if ((norm === "finance" || norm === "financial" || norm === "investment") && cCat.includes("finance")) return true;
    if ((norm === "health" || norm === "fitness") && cCat.includes("health")) return true;
    if ((norm === "academic" || norm === "students") && cCat.includes("academic")) return true;
    if ((norm === "math" || norm === "daily utility" || norm === "lifestyle") && cCat.includes("utility")) return true;
    if ((norm === "chemistry" || norm === "science") && cCat.includes("science")) return true;
    if ((norm === "physics" || norm === "engineering" || norm === "electrical") && cCat.includes("physics")) return true;
    if ((norm === "construction" || norm === "real estate" || norm === "home") && cCat.includes("construction")) return true;
    if ((norm === "statistics" || norm === "stats" || norm === "probability") && cCat.includes("statistics")) return true;
    if ((norm === "business" || norm === "marketing" || norm === "ecommerce") && cCat.includes("business")) return true;
    if ((norm === "text" || norm === "developer" || norm === "coding" || norm === "it" || norm === "text & data") && cCat.includes("developer")) return true;

    return false;
  });
}
