import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Sparkles, Award, Mail, ExternalLink, Calculator, BookOpen, Users } from "lucide-react";
import { calculators } from "@/lib/calculators";

export const metadata: Metadata = {
  title: "About Us | My Calculator Hub",
  description: "Learn about My Calculator Hub, our founder Saahil Sharma, our mission, and our verified mathematical calculation methodology.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "My Calculator Hub",
      "url": "https://mycalculatorhub.pro",
      "logo": "https://mycalculatorhub.pro/icon.png",
      "founder": {
        "@type": "Person",
        "name": "Saahil Sharma",
        "jobTitle": "Founder & Lead Editor",
        "sameAs": [
          "https://www.linkedin.com/in/sahildigitalmarketing",
          "https://www.instagram.com/realsaahilmusic"
        ],
        "email": "mailto:asbusiness276@gmail.com"
      },
      "description": "Free, accurate, and private online calculators for finance, health, academics, and daily mathematics."
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider mb-4 border border-blue-100">
            <Sparkles className="w-3.5 h-3.5" /> E-E-A-T & Transparency
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
            About <span className="text-blue-600">My Calculator Hub</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Empowering students, professionals, and everyday individuals with verified, instant, and private calculation tools.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
            <div className="text-3xl font-black text-blue-600 mb-1">{calculators.length}+</div>
            <div className="text-xs uppercase font-bold text-gray-500 tracking-wider">Free Calculators</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
            <div className="text-3xl font-black text-emerald-600 mb-1">100%</div>
            <div className="text-xs uppercase font-bold text-gray-500 tracking-wider">In-Browser Privacy</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
            <div className="text-3xl font-black text-purple-600 mb-1">10 Premier</div>
            <div className="text-xs uppercase font-bold text-gray-500 tracking-wider">Core Categories</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
            <div className="text-3xl font-black text-amber-600 mb-1">2026</div>
            <div className="text-xs uppercase font-bold text-gray-500 tracking-wider">Updated Standards</div>
          </div>
        </div>

        {/* Main Story & Mission */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200 prose prose-lg prose-blue max-w-none text-gray-700">
          <h2>Our Mission</h2>
          <p>
            The internet is crowded with calculation tools that are bloated with heavy pop-ups, slow server reloads, outdated formulas, and invasive data-tracking cookies. 
          </p>
          <p>
            <strong>My Calculator Hub</strong> was created to deliver the exact opposite: clean, lightning-fast, and verified calculation tools that execute 100% locally in your browser. Whether you are computing loan amortization schedules, calculating compound growth, projecting university marks (WAM/CGPA), or tracking health metrics, our tools give you instant certainty without compromising your privacy.
          </p>

          <h2>Who We Are (Founder & Editorial Team)</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 not-prose my-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden shadow-md flex-shrink-0 border-2 border-white ring-4 ring-blue-50">
              <Image
                src="/images/saahil.jpg"
                alt="Saahil Sharma - Founder & Lead Editor"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="space-y-3 text-center sm:text-left">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Saahil Sharma</h3>
                <p className="text-sm font-semibold text-blue-600">Founder & Lead Technical Editor</p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Saahil Sharma is a digital software professional and calculation enthusiast with an extensive background in web tools, mathematical algorithms, and university academic evaluation standards. Saahil founded My Calculator Hub to provide accessible, transparent mathematical calculators with clear worked examples, source formulas, and zero user data harvesting.
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2 text-sm">
                <Link 
                  href="/author"
                  className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-semibold"
                >
                  View Full Author Profile &rarr;
                </Link>
                <span className="text-gray-300">·</span>
                <a 
                  href="https://www.linkedin.com/in/sahildigitalmarketing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gray-600 hover:text-blue-600 font-semibold"
                >
                  LinkedIn Profile <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-gray-300">·</span>
                <a 
                  href="mailto:asbusiness276@gmail.com" 
                  className="inline-flex items-center gap-1.5 text-gray-600 hover:text-gray-900 font-semibold"
                >
                  <Mail className="w-3.5 h-3.5" /> asbusiness276@gmail.com
                </a>
              </div>
            </div>
          </div>

          <h2>How We Verify Accuracy & Formulas</h2>
          <p>
            Every calculation engine on our site follows rigorous mathematical checks before publishing:
          </p>
          <ul>
            <li>
              <strong>Financial Engines (SIP, EMI, PPF, GST, APY):</strong> Checked against standard financial compounding algorithms and banking formulas used by RBI, Federal Reserve guidelines, and leading commercial banks.
            </li>
            <li>
              <strong>Health & Fitness Metrics (BMI, Calories, BMR):</strong> Grounded in the Mifflin-St Jeor equation and World Health Organization (WHO) adult BMI classification scales.
            </li>
            <li>
              <strong>Academic Tools (WAM, CGPA, GPA):</strong> Derived from standardized university credit-weighting formulas used across major international universities.
            </li>
          </ul>

          <h2>Editorial Independence & Transparency</h2>
          <p>
            My Calculator Hub is an independent computational resource. We do not accept sponsored bias, and our calculators are never skewed to recommend specific banks, loan providers, or commercial services. Our tools are completely free to use for educational, planning, and estimation purposes.
          </p>

          <h2>Need Help or Have a Suggestion?</h2>
          <p>
            We love hearing from our community. If you notice a formula variation or would like us to build a custom calculator for your industry or school, please contact us anytime through our <Link href="/contact">Contact Page</Link> or email our editorial desk directly at <a href="mailto:asbusiness276@gmail.com">asbusiness276@gmail.com</a>.
          </p>
        </div>

      </div>
    </div>
  );
}