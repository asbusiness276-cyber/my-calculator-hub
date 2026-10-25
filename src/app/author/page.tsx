import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { 
  CheckCircle2, 
  Mail, 
  ShieldCheck, 
  Award, 
  BookOpen, 
  Calculator, 
  Sparkles, 
  GraduationCap, 
  TrendingUp, 
  ExternalLink 
} from "lucide-react";
import { articles } from "@/lib/articles";
import { CATEGORIES } from "@/lib/calculators";

export const metadata: Metadata = {
  title: "Saahil - Founder, Computational Specialist & Lead Editor | My Calculator Hub",
  description: "Meet Saahil, the founder and lead computational editor behind My Calculator Hub. Learn about his mathematical verification standards, background, and published guides.",
  alternates: {
    canonical: "/author",
  },
};

export default function AuthorPage() {
  const authorArticles = articles.slice(0, 12);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Saahil",
    "alternateName": "Saahil Sharma",
    "url": "https://mycalculatorhub.pro/author",
    "image": "https://mycalculatorhub.pro/images/saahil.jpg",
    "jobTitle": "Founder & Lead Computational Editor",
    "worksFor": {
      "@type": "Organization",
      "name": "My Calculator Hub",
      "url": "https://mycalculatorhub.pro",
    },
    "sameAs": [
      "https://www.linkedin.com/in/sahildigitalmarketing",
      "https://www.instagram.com/realsaahilmusic",
    ],
    "description": "Founder and lead computational editor of My Calculator Hub, specializing in educational mathematics, applied finance algorithms, and client-side web tool development.",
    "knowsAbout": [
      "Applied Mathematics",
      "Financial Modeling & Compounding",
      "University Grading Systems (WAM & GPA)",
      "Web Architecture & Computational Privacy",
      "Data Analytics & Statistical Distributions",
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Breadcrumb */}
        <nav className="flex text-sm text-gray-500 gap-2 items-center">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">Author Profile: Saahil</span>
        </nav>

        {/* Hero Profile Card */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14">
            
            {/* Portrait Image */}
            <div className="relative w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 flex-shrink-0 rounded-3xl overflow-hidden shadow-xl border-4 border-white ring-8 ring-blue-50/80">
              <Image
                src="/images/saahil.jpg"
                alt="Saahil - Founder of My Calculator Hub"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 224px, 256px"
              />
            </div>

            {/* Profile Bio */}
            <div className="space-y-6 flex-grow text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider border border-blue-100">
                <Sparkles className="w-3.5 h-3.5" /> Founder & Lead Computational Editor
              </div>

              <div>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                  Saahil
                </h1>
                <p className="text-lg font-semibold text-blue-600 mt-2">
                  Building transparent mathematical engines and accessible calculation guides for everyone.
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Hello! I am <strong>Saahil</strong>, the creator and primary editor behind <strong>My Calculator Hub</strong>. I launched this platform with a clear objective: to replace cluttered, ad-heavy, and confusing calculation sites with lightning-fast, privacy-first tools that give you verified numerical clarity in real time.
              </p>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                With a deep background in computational web development, financial logic, and educational modeling, I design every algorithm to execute locally in your web browser. That means you get instantaneous results with no calculation-input tracking on our servers and total peace of mind.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4">
                <a
                  href="mailto:asbusiness276@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 hover:opacity-90 text-white font-bold rounded-xl shadow-md transition-opacity text-sm"
                >
                  <Mail className="w-4 h-4" /> Get in Touch
                </a>

                <a
                  href="https://www.linkedin.com/in/sahildigitalmarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold rounded-xl border border-indigo-200 transition-colors text-sm"
                >
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-indigo-500" />
                </a>

                <a
                  href="https://www.instagram.com/realsaahilmusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold rounded-xl border border-rose-200 transition-colors text-sm"
                >
                  <span>Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5 text-rose-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Quick Stats Grid with Distinct Category Colors */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-gray-100">
            <div className="p-5 bg-blue-50/70 border border-blue-100 rounded-2xl text-center">
              <span className="block text-2xl md:text-3xl font-black text-blue-600">260+</span>
              <span className="text-xs font-bold text-blue-900/70 uppercase tracking-wide">Calculators Built</span>
            </div>
            <div className="p-5 bg-emerald-50/70 border border-emerald-100 rounded-2xl text-center">
              <span className="block text-2xl md:text-3xl font-black text-emerald-600">49</span>
              <span className="text-xs font-bold text-emerald-900/70 uppercase tracking-wide">Guides Authored</span>
            </div>
            <div className="p-5 bg-purple-50/70 border border-purple-100 rounded-2xl text-center">
              <span className="block text-2xl md:text-3xl font-black text-purple-600">10</span>
              <span className="text-xs font-bold text-purple-900/70 uppercase tracking-wide">Specialist Domains</span>
            </div>
            <div className="p-5 bg-rose-50/70 border border-rose-100 rounded-2xl text-center">
              <span className="block text-2xl md:text-3xl font-black text-rose-600">100%</span>
              <span className="text-xs font-bold text-rose-900/70 uppercase tracking-wide">Client-Side Privacy</span>
            </div>
          </div>
        </section>

        {/* Editorial Standards & Verification Methodology */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-200">
              Quality Assurance
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mt-3">
              Saahil's Editorial & Mathematical Verification Standards
            </h2>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Every calculator, formula breakdown, and worked example published on My Calculator Hub follows a rigorous 4-step verification protocol overseen by Saahil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50/40 rounded-3xl border border-blue-100 space-y-2">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold mb-3 shadow-xs">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900">Deterministic Mathematical Proofs</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Formulas are cross-referenced with accredited academic handbooks, ISO measurement standards, and institutional frameworks (e.g. Australian Higher Education grading policies, APY compounding conventions, and standard normal distribution tables).
              </p>
            </div>

            <div className="p-6 bg-emerald-50/40 rounded-3xl border border-emerald-100 space-y-2">
              <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-bold mb-3 shadow-xs">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900">Boundary & Edge-Case Stress Testing</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Prior to deployment, every computational model is evaluated against boundary values (such as zero denominators, negative inputs, extreme loan durations, and leap years) to ensure mathematical continuity and eliminate runtime failures.
              </p>
            </div>

            <div className="p-6 bg-purple-50/40 rounded-3xl border border-purple-100 space-y-2">
              <div className="w-10 h-10 bg-purple-600 text-white rounded-xl flex items-center justify-center font-bold mb-3 shadow-xs">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900">Uncompromising Data Privacy</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Unlike traditional tools that transmit user numbers to remote servers, Saahil mandates that all computations remain entirely on the user's device via client-side JavaScript. Your salary, loans, and grades are never saved or logged on our servers as calculation inputs. Visiting the site itself still involves standard hosting log files and cookies - see Privacy Policy sections 3-6.
              </p>
            </div>

            <div className="p-6 bg-rose-50/40 rounded-3xl border border-rose-100 space-y-2">
              <div className="w-10 h-10 bg-rose-600 text-white rounded-xl flex items-center justify-center font-bold mb-3 shadow-xs">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900">Regular Policy & Rate Audits</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Tax rates, HECS indexation percentages, and statutory credit thresholds are re-evaluated cyclically to reflect current regulations and real-world conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Selected Published Works by Saahil */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
                Featured Guides & Works by Saahil
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Explore in-depth articles authored and verified by Saahil.
              </p>
            </div>
            <Link
              href="/articles"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm whitespace-nowrap"
            >
              Browse All 49 Guides &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {authorArticles.map((art) => (
              <Link
                key={art.slug}
                href={`/articles/${art.slug}`}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">
                    {art.category}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug mb-2">
                    {art.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-50 mt-4 flex items-center justify-between text-xs text-blue-600 font-semibold">
                  <span>Read Guide</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
