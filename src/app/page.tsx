import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { 
  Calculator, 
  PiggyBank, 
  Activity, 
  FileSpreadsheet, 
  GraduationCap, 
  Banknote, 
  Percent, 
  Receipt, 
  Landmark, 
  TrendingUp, 
  ShieldCheck, 
  Flame, 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  User,
  Award
} from "lucide-react";
import HomeSearch from "@/components/ui/HomeSearch";
import { calculators } from "@/lib/calculators";

export const metadata: Metadata = {
  title: "My Calculator Hub - 260+ Free Online Calculators (Fast, Accurate & Private)",
  description: "Free online calculators for SIP, EMI, Salary, BMI, WAM, GPA, Age, Percentage, and 260+ tools. Instant client-side calculations with 100% privacy and zero sign-ups.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "My Calculator Hub - 260+ Free Online Calculators",
    description: "Instant client-side calculation engines for finance, health, academics, and daily utilities.",
    url: "https://mycalculatorhub.pro",
    type: "website",
    siteName: "My Calculator Hub",
    images: [{ url: "https://mycalculatorhub.pro/icon.png", width: 512, height: 512, alt: "My Calculator Hub" }],
  },
  twitter: {
    card: "summary",
    title: "My Calculator Hub - 260+ Free Online Calculators",
    description: "Instant client-side calculation engines for finance, health, academics, and daily utilities.",
  },
};

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://mycalculatorhub.pro/#website",
        "name": "My Calculator Hub",
        "url": "https://mycalculatorhub.pro",
        "description": "Free, accurate, and private online calculators for finance, health, academics, and everyday math.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://mycalculatorhub.pro/?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://mycalculatorhub.pro/#organization",
        "name": "My Calculator Hub",
        "url": "https://mycalculatorhub.pro",
        "logo": "https://mycalculatorhub.pro/icon.png",
        "founder": {
          "@type": "Person",
          "name": "Saahil",
          "url": "https://mycalculatorhub.pro/author",
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Are the financial calculations (SIP, EMI) accurate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We use standard banking and financial formulas (like compounding interest and standard amortization schedules) to ensure our calculators match what institutions use. However, these are estimates, and actual banking figures might vary slightly due to compounding frequencies or bank fees.",
            },
          },
          {
            "@type": "Question",
            "name": "Is my data safe when using these tools?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "All calculations execute locally in your web browser. Your calculation inputs are never transmitted, logged, or saved to our servers. Visiting the site itself still involves standard hosting log files and cookies, including Google AdSense advertising cookies - see Privacy Policy sections 3-6.",
            },
          },
          {
            "@type": "Question",
            "name": "Can I request a new calculator?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We constantly expand our computational catalog. If you need a specific tool, visit our Contact page to submit a formula request.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section with Vibrant Cosmic Gradients */}
      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden shadow-md">
        {/* Ambient Glowing Light Orbs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-rose-600/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 rounded-full bg-emerald-600/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-rose-500 text-white text-xs font-bold rounded-full uppercase tracking-wider mb-6 shadow-md">
            <Sparkles className="w-3.5 h-3.5" /> 260+ Verified Calculation Engines
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            The Ultimate Hub for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-pink-400">Free Online Calculators</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto font-normal leading-relaxed">
            Fast, mathematically verified, and 100% free calculators for finance, health, academics, and daily math. Zero registration, instant outputs, and absolute privacy.
          </p>
          
          {/* Interactive Live Search Bar */}
          <HomeSearch calculators={calculators} />
        </div>
      </section>

      {/* Categories Grid Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        
        {/* Finance & Investment */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-gray-200 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <PiggyBank className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-black text-gray-900">Finance & Investment</h2>
              </div>
              <p className="text-gray-600 max-w-2xl text-sm">Plan your financial future with our powerful investment and banking calculators. Calculate loan EMIs, track SIP returns, and analyze business margins.</p>
            </div>
            <Link href="/category/finance-and-investment" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-bold text-sm whitespace-nowrap">
              Explore All 47 Finance Tools &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/sip-calculator" className="block bg-white p-6 rounded-3xl shadow-xs border border-gray-100 hover:shadow-lg hover:border-emerald-300 hover:-translate-y-1 transition-all cursor-pointer group no-underline">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Calculator className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">SIP Calculator</h3>
              <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">Calculate the future value of your Systematic Investment Plan and plan your wealth creation journey.</p>
            </Link>

            <Link href="/emi-calculator" className="block bg-white p-6 rounded-3xl shadow-xs border border-gray-100 hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition-all cursor-pointer group no-underline">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <FileSpreadsheet className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">EMI Calculator</h3>
              <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">Easily calculate your Equated Monthly Installments for home loans, car loans, and personal loans.</p>
            </Link>

            <Link href="/ppf-calculator" className="block bg-white p-6 rounded-3xl shadow-xs border border-gray-100 hover:shadow-lg hover:border-indigo-300 hover:-translate-y-1 transition-all cursor-pointer group no-underline">
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">PPF Calculator</h3>
              <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">Calculate your Public Provident Fund maturity amount, interest earned, and tax-free corpus growth.</p>
            </Link>

            <Link href="/salary-calculator" className="block bg-white p-6 rounded-3xl shadow-xs border border-gray-100 hover:shadow-lg hover:border-emerald-300 hover:-translate-y-1 transition-all cursor-pointer group no-underline">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Banknote className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">Salary Calculator</h3>
              <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">Instantly calculate your in-hand monthly salary and tax deductions from your gross CTC.</p>
            </Link>

            <Link href="/apy-calculator" className="block bg-white p-6 rounded-3xl shadow-xs border border-gray-100 hover:shadow-lg hover:border-cyan-300 hover:-translate-y-1 transition-all cursor-pointer group no-underline">
              <div className="w-12 h-12 bg-cyan-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Percent className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors">APY Calculator</h3>
              <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">Calculate Annual Percentage Yield with compound frequency to discover real investment returns.</p>
            </Link>

            <Link href="/gst-calculator" className="block bg-white p-6 rounded-3xl shadow-xs border border-gray-100 hover:shadow-lg hover:border-amber-300 hover:-translate-y-1 transition-all cursor-pointer group no-underline">
              <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Receipt className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-500 transition-colors">GST Calculator</h3>
              <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">Easily add or remove GST from your product prices with CGST and SGST breakdowns.</p>
            </Link>

            <Link href="/fd-rd-calculator" className="block bg-white p-6 rounded-3xl shadow-xs border border-gray-100 hover:shadow-lg hover:border-teal-300 hover:-translate-y-1 transition-all cursor-pointer group no-underline">
              <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Landmark className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors">FD & RD Calculator</h3>
              <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">Calculate your maturity amount and interest earned on Fixed Deposits and Recurring Deposits.</p>
            </Link>

            <Link href="/margin-calculator" className="block bg-white p-6 rounded-3xl shadow-xs border border-gray-100 hover:shadow-lg hover:border-emerald-300 hover:-translate-y-1 transition-all cursor-pointer group no-underline">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-500 transition-colors">Margin & Markup</h3>
              <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">Calculate your Gross Profit, Profit Margin, and Markup instantly for your business.</p>
            </Link>
          </div>
        </section>

        {/* Health & Fitness */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-gray-200 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600">
                  <Activity className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-black text-gray-900">Health & Fitness</h2>
              </div>
              <p className="text-gray-600 max-w-2xl text-sm">Take control of your health journey. Monitor your Body Mass Index (BMI) and calculate your daily caloric needs for weight loss or muscle gain.</p>
            </div>
            <Link href="/category/health-and-fitness" className="inline-flex items-center text-rose-600 hover:text-rose-800 font-bold text-sm whitespace-nowrap">
              Explore All 24 Health Tools &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/bmi-calculator" className="block bg-white p-6 rounded-3xl shadow-xs border border-gray-100 hover:shadow-lg hover:border-rose-300 hover:-translate-y-1 transition-all cursor-pointer group no-underline">
              <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Activity className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-rose-500 transition-colors">BMI Calculator</h3>
              <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">Check your Body Mass Index to find out if you are at a healthy weight for your height.</p>
            </Link>

            <Link href="/calorie-calculator" className="block bg-white p-6 rounded-3xl shadow-xs border border-gray-100 hover:shadow-lg hover:border-orange-300 hover:-translate-y-1 transition-all cursor-pointer group no-underline">
              <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Flame className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors">Calorie Calculator</h3>
              <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">Calculate your daily calorie needs for weight loss, maintenance, or muscle gain.</p>
            </Link>

            <Link href="/category/health-and-fitness" className="block bg-gradient-to-br from-rose-500 to-pink-600 text-white p-6 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between">
              <div>
                <span className="text-xs font-black text-rose-200 uppercase tracking-wider block mb-2">Category Hub</span>
                <h3 className="text-2xl font-black text-white mb-2">24+ Health Tools</h3>
                <p className="text-rose-100 text-xs leading-relaxed">BMR, TDEE, Body Fat, Ideal Weight, Water Intake, and macro nutrition targets.</p>
              </div>
              <div className="pt-4 flex items-center gap-1.5 text-sm font-black text-white">
                <span>View All Health Tools</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          </div>
        </section>

        {/* Academic & Students */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-gray-200 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-black text-gray-900">Academic & Students</h2>
              </div>
              <p className="text-gray-600 max-w-2xl text-sm">Essential tools for school and university students. Convert grades, calculate your Weighted Average Mark (WAM), and project your final GPA.</p>
            </div>
            <Link href="/category/academic-and-students" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-bold text-sm whitespace-nowrap">
              Explore All 54 Academic Tools &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/wam-calculator" className="block bg-white p-6 rounded-3xl shadow-xs border border-gray-100 hover:shadow-lg hover:border-indigo-300 hover:-translate-y-1 transition-all cursor-pointer group no-underline">
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">WAM Calculator</h3>
              <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">Calculate your university Weighted Average Mark with credit point weighting for global graduate applications.</p>
            </Link>

            <Link href="/cgpa-calculator" className="block bg-white p-6 rounded-3xl shadow-xs border border-gray-100 hover:shadow-lg hover:border-purple-300 hover:-translate-y-1 transition-all cursor-pointer group no-underline">
              <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Percent className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">CGPA to Percentage</h3>
              <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">Convert your Cumulative Grade Point Average to an exact percentage using CBSE and university standards.</p>
            </Link>

            <Link href="/articles/uni-wam-projection-guide" className="block bg-gradient-to-br from-indigo-600 to-violet-700 text-white p-6 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between">
              <div>
                <span className="text-xs font-black text-indigo-200 uppercase tracking-wider block mb-2">Pillar Guide</span>
                <h3 className="text-2xl font-black text-white mb-2">University WAM Guide</h3>
                <p className="text-indigo-100 text-xs leading-relaxed">Reverse-engineer what exam marks you need this semester to hit your graduation targets.</p>
              </div>
              <div className="pt-4 flex items-center gap-1.5 text-sm font-black text-white">
                <span>Read Masterclass</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          </div>
        </section>

        {/* 10 Categories Full Directory Strip with Bespoke Category Colors */}
        <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl border border-indigo-900/40 relative overflow-hidden">
          {/* Ambient colored backdrop lights */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 pb-4 border-b border-white/10 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-300 bg-indigo-900/60 px-3 py-1 rounded-full border border-indigo-700/50">
                  Explore Directory
                </span>
                <h2 className="text-3xl font-black mt-2 tracking-tight">All 10 Premier Calculator Categories</h2>
                <p className="text-indigo-200/80 mt-1 max-w-2xl text-sm">
                  Over 260+ free, instant, and privacy-first calculation engines across engineering, science, business, finance, and daily life.
                </p>
              </div>
              <Link href="/category" className="inline-flex items-center text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 hover:opacity-90 font-bold text-sm px-5 py-2.5 rounded-xl transition-opacity whitespace-nowrap shadow-lg">
                Browse Complete Hub &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: "Finance & Investment", slug: "finance-and-investment", count: "47 tools", desc: "SIP, EMI, PPF & APY", dot: "bg-emerald-400", hover: "hover:border-emerald-400 hover:bg-emerald-950/40", text: "group-hover:text-emerald-300" },
                { name: "Science & Chemistry", slug: "science-and-chemistry", count: "7 tools", desc: "Molarity, pH & Gas Laws", dot: "bg-cyan-400", hover: "hover:border-cyan-400 hover:bg-cyan-950/40", text: "group-hover:text-cyan-300" },
                { name: "Physics & Engineering", slug: "physics-and-engineering", count: "7 tools", desc: "Ohm's Law, Velocity & Force", dot: "bg-purple-400", hover: "hover:border-purple-400 hover:bg-purple-950/40", text: "group-hover:text-purple-300" },
                { name: "Construction & Takeoff", slug: "construction-and-real-estate", count: "10 tools", desc: "Bricks, Concrete & Tile", dot: "bg-orange-400", hover: "hover:border-orange-400 hover:bg-orange-950/40", text: "group-hover:text-orange-300" },
                { name: "Statistics & Data", slug: "statistics-and-probability", count: "6 tools", desc: "Z-Score & Mean/Median", dot: "bg-blue-400", hover: "hover:border-blue-400 hover:bg-blue-950/40", text: "group-hover:text-blue-300" },
                { name: "Business & Marketing", slug: "business-and-marketing", count: "22 tools", desc: "CPC, CPM, CTR & MRR", dot: "bg-pink-400", hover: "hover:border-pink-400 hover:bg-pink-950/40", text: "group-hover:text-pink-300" },
                { name: "Academic & Students", slug: "academic-and-students", count: "54 tools", desc: "WAM, GPA & Grade Target", dot: "bg-indigo-400", hover: "hover:border-indigo-400 hover:bg-indigo-950/40", text: "group-hover:text-indigo-300" },
                { name: "Health & Fitness", slug: "health-and-fitness", count: "24 tools", desc: "BMI, BMR & Calorie Target", dot: "bg-rose-400", hover: "hover:border-rose-400 hover:bg-rose-950/40", text: "group-hover:text-rose-300" },
                { name: "Daily Utility & Math", slug: "daily-utility-and-math", count: "70 tools", desc: "Percentage, Age & Ratios", dot: "bg-amber-400", hover: "hover:border-amber-400 hover:bg-amber-950/40", text: "group-hover:text-amber-300" },
                { name: "Text & Developer Tools", slug: "text-and-developer-tools", count: "22 tools", desc: "Word Counter & JSON", dot: "bg-teal-400", hover: "hover:border-teal-400 hover:bg-teal-950/40", text: "group-hover:text-teal-300" },
              ].map((c) => (
                <Link
                  key={c.slug}
                  href={`/category/${c.slug}`}
                  className={`bg-white/5 ${c.hover} border border-white/10 p-4 rounded-2xl transition-all duration-300 group block hover:-translate-y-1 shadow-xs`}
                >
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                    <span className="text-[11px] font-semibold text-gray-300">{c.count}</span>
                  </div>
                  <h3 className={`font-bold text-white text-sm ${c.text} transition-colors leading-snug`}>{c.name}</h3>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-1">{c.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* E-E-A-T Author & Platform Trust Section */}
        <section className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-indigo-500/5 to-rose-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
            <div className="relative w-32 h-40 sm:w-36 sm:h-44 md:w-40 md:h-48 rounded-3xl overflow-hidden shadow-xl flex-shrink-0 border-4 border-white ring-4 ring-indigo-500/20">
              <Image
                src="/images/saahil.jpg"
                alt="Saahil - Founder of My Calculator Hub"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="space-y-4 text-center md:text-left flex-grow">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-wider border border-indigo-200 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" /> Founder & Lead Computational Editor
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
                Meet the Team Behind My Calculator Hub
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Founded and directed by <strong>Saahil</strong>, My Calculator Hub is committed to mathematical transparency, educational rigor, and uncompromising client-side privacy. Every formula is verified against official academic curricula, financial compounding standards, and peer-reviewed scientific specifications.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 not-prose">
                <div className="bg-indigo-50/60 p-4 rounded-2xl border border-indigo-100">
                  <div className="text-2xl font-black text-indigo-600">260+ Tools</div>
                  <div className="text-xs text-indigo-900/70 font-semibold mt-0.5">Mathematically Audited</div>
                </div>
                <div className="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-100">
                  <div className="text-2xl font-black text-emerald-600">100% In-Browser</div>
                  <div className="text-xs text-emerald-900/70 font-semibold mt-0.5">No Input Logging</div>
                </div>
                <div className="bg-purple-50/60 p-4 rounded-2xl border border-purple-100 col-span-2 sm:col-span-1">
                  <div className="text-2xl font-black text-purple-600">52 Guides</div>
                  <div className="text-xs text-purple-900/70 font-semibold mt-0.5">Worked Examples</div>
                </div>
              </div>
              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm font-semibold">
                <Link href="/author" className="text-indigo-600 hover:text-indigo-800 hover:underline inline-flex items-center gap-1 font-bold">
                  Read Full Author Profile & Verification Methodology &rarr;
                </Link>
                <span className="text-gray-300">·</span>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 hover:underline">
                  About Our Editorial Standards
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Article Section */}
        <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200">
          <div className="prose prose-blue lg:prose-lg max-w-none">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Why Choose MyCalculatorHub for Your Daily Calculations?</h2>
            <p>
              In today&apos;s digital environment, calculation precision and speed are critical. Whether determining investment compound interest, projecting semester academic grades, evaluating structural material requirements, or tracking daily health metrics, <strong>MyCalculatorHub</strong> provides instant, verified results without friction.
            </p>
            <p>
              Unlike bloated web calculators weighed down by intrusive advertising overlays, forced registration walls, and slow server round-trips, all 260+ engines on My Calculator Hub execute directly inside your browser.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 not-prose">
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-2">100% Free & Unlimited</h3>
                <p className="text-blue-800/80 text-sm">No paywalls, subscriptions, or hidden limits. All our calculation tools are completely free to use without restrictions.</p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                <h3 className="text-xl font-bold text-emerald-900 mb-2">Zero Registration Required</h3>
                <p className="text-emerald-800/80 text-sm">We prioritize your privacy. You never need to create an account or provide an email address to obtain results.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                <h3 className="text-xl font-bold text-purple-900 mb-2">Lightning Fast & Real-Time</h3>
                <p className="text-purple-800/80 text-sm">Engineered with client-side computation, our tools calculate outputs dynamically as you type without page reloads.</p>
              </div>
              <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                <h3 className="text-xl font-bold text-rose-900 mb-2">Mobile-First Design</h3>
                <p className="text-rose-800/80 text-sm">Every tool on MyCalculatorHub is optimized for mobile touchscreens, tablets, and desktop workstations alike.</p>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">Frequently Asked Questions (FAQs)</h2>
            
            <div className="space-y-4 not-prose">
              <details className="group bg-gray-50 rounded-2xl border border-gray-200 open:bg-white open:border-blue-200 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-900 text-lg md:text-xl list-none">
                  Are the financial calculations (SIP, EMI) accurate?
                  <span className="transition group-open:rotate-180 text-blue-500">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm md:text-base">
                  <p>Yes. We use standard banking and financial formulas (like compounding interest and standard amortization schedules) to ensure our calculators match what institutions use. However, these are estimates, and actual banking figures might vary slightly due to compounding frequencies or hidden bank fees.</p>
                </div>
              </details>

              <details className="group bg-gray-50 rounded-2xl border border-gray-200 open:bg-white open:border-blue-200 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-900 text-lg md:text-xl list-none">
                  Is my data safe when using these tools?
                  <span className="transition group-open:rotate-180 text-blue-500">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm md:text-base">
                  <p>All calculations execute locally in your web browser. Your calculation inputs are never transmitted, logged, or saved to our servers. Visiting the site itself still involves standard hosting log files and cookies, including Google AdSense advertising cookies - see Privacy Policy sections 3-6.</p>
                </div>
              </details>

              <details className="group bg-gray-50 rounded-2xl border border-gray-200 open:bg-white open:border-blue-200 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-900 text-lg md:text-xl list-none">
                  Can I request a new calculator?
                  <span className="transition group-open:rotate-180 text-blue-500">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm md:text-base">
                  <p>Yes. We constantly expand our computational catalog. If you need a specific tool, visit our Contact page to submit a formula request.</p>
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}