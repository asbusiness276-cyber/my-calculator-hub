import React from "react";
import Link from "next/link";
import type { Article } from "@/lib/articles";
import type { CalculatorMeta } from "@/lib/calculators";
import { customArticles, type CustomArticleData } from "@/lib/custom-articles";
import { 
  CheckCircle2, 
  AlertTriangle, 
  BookOpen, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  HelpCircle, 
  ArrowRight,
  Calculator,
  Info,
  Lightbulb
} from "lucide-react";

export function getArticleToc(article: Article): [string, string][] {
  const custom = customArticles[article.slug];
  if (custom) {
    const list: [string, string][] = [["summary", "Executive Summary"]];
    custom.sections.forEach((sec, idx) => {
      list.push([sec.id, sec.heading]);
    });
    list.push(["tools", "Interactive Tools"]);
    list.push(["faq", "Questions & Answers"]);
    list.push(["editorial", "Editorial Standards"]);
    return list;
  }

  return [
    ["summary", "01. Key Takeaways"],
    ["definition", "02. Core Definition"],
    ["why-it-matters", "03. Strategic Significance"],
    ["framework", "04. Step-by-Step Framework"],
    ["formula", "05. Formula & Variables"],
    ["example", "06. Worked Numerical Example"],
    ["interpretation", "07. Result Interpretation"],
    ["tools", "08. Recommended Calculators"],
    ["faq", "09. Frequently Asked Questions"],
    ["editorial", "10. Editorial Methodology"],
  ];
}

export function ArticleBody({
  article,
  relatedCalculators,
}: {
  article: Article;
  relatedCalculators: CalculatorMeta[];
}) {
  const custom = customArticles[article.slug];
  const primaryTool = relatedCalculators[0];

  // If this article has custom bespoke content, render the premier masterclass layout
  if (custom) {
    return (
      <div className="space-y-12 text-slate-800 leading-relaxed">
        
        {/* 01. Executive Summary & Key Takeaways */}
        <section id="summary" className="bg-gradient-to-br from-blue-50/80 via-indigo-50/50 to-white border border-blue-100/80 rounded-3xl p-8 md:p-10 space-y-5 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/80 px-3 py-1 rounded-full w-fit border border-blue-200/50">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Executive Summary &amp; Key Highlights
          </div>
          
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Key Takeaways &amp; Core Takeaways
          </h2>

          <p className="text-slate-700 text-base md:text-lg leading-relaxed font-normal">
            {custom.leadParagraph}
          </p>

          <div className="pt-2">
            <ul className="space-y-3.5 text-slate-700">
              {custom.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Dynamic Custom Sections */}
        {custom.sections.map((sec) => (
          <section
            key={sec.id}
            id={sec.id}
            className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 space-y-6 shadow-xs"
          >
            {sec.badge && (
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-3 py-1 rounded-full w-fit">
                <BookOpen className="w-3.5 h-3.5 text-indigo-600" /> {sec.badge}
              </div>
            )}

            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              {sec.heading}
            </h2>

            {sec.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-slate-600 text-base md:text-lg leading-relaxed">
                {p}
              </p>
            ))}

            {/* Formula Box Component */}
            {sec.formulaBox && (
              <div className="bg-slate-900 text-white p-7 md:p-8 rounded-2xl border border-slate-800 my-6 shadow-md not-prose">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3">
                  <Calculator className="w-4 h-4" /> {sec.formulaBox.title}
                </div>
                
                <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-center font-mono text-lg sm:text-xl md:text-2xl font-bold text-indigo-300 overflow-x-auto my-3 tracking-wide">
                  {sec.formulaBox.formula}
                </div>

                <div className="pt-4 border-t border-slate-800 mt-4 space-y-2 text-xs sm:text-sm text-slate-300">
                  <span className="font-semibold text-slate-400 block mb-1">Variable Breakdown:</span>
                  {sec.formulaBox.variables.map((v, vIdx) => (
                    <div key={vIdx} className="flex items-start gap-2">
                      <code className="text-indigo-400 font-bold bg-slate-800 px-2 py-0.5 rounded text-xs">{v.symbol}</code>
                      <span className="text-slate-300">&mdash; {v.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Worked Numerical Example Card */}
            {sec.workedExample && (
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 md:p-8 space-y-5 my-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full w-fit">
                  <Sparkles className="w-3.5 h-3.5" /> Worked Case Study: {sec.workedExample.scenarioTitle}
                </div>

                <p className="text-slate-700 font-medium text-sm sm:text-base">
                  {sec.workedExample.scenarioText}
                </p>

                <div className="space-y-4 pt-1">
                  {sec.workedExample.steps.map((st, stIdx) => (
                    <div key={stIdx} className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-2xs space-y-1.5">
                      <h4 className="font-bold text-slate-900 text-sm">{st.stepTitle}</h4>
                      <div className="font-mono text-sm sm:text-base font-bold text-blue-700 bg-blue-50/50 p-2.5 rounded-lg border border-blue-100">
                        {st.math}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600">{st.explanation}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 font-bold text-sm sm:text-base">
                  {sec.workedExample.finalResult}
                </div>
              </div>
            )}

            {/* Data Table Component */}
            {sec.table && (
              <div className="my-6 overflow-hidden rounded-2xl border border-slate-200 shadow-2xs">
                <div className="bg-slate-100 px-5 py-3 border-b border-slate-200 font-bold text-slate-800 text-sm">
                  {sec.table.title}
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                      <tr>
                        {sec.table.headers.map((h, hIdx) => (
                          <th key={hIdx} className="px-5 py-3.5 whitespace-nowrap">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {sec.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="px-5 py-3.5 text-slate-700 font-medium whitespace-nowrap">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Callout Box */}
            {sec.callout && (
              <div className={`p-6 rounded-2xl border flex items-start gap-4 my-6 ${
                sec.callout.type === "warning"
                  ? "bg-amber-50 border-amber-200 text-amber-950"
                  : sec.callout.type === "success"
                  ? "bg-emerald-50 border-emerald-200 text-emerald-950"
                  : "bg-blue-50 border-blue-200 text-blue-950"
              }`}>
                {sec.callout.type === "warning" ? (
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                ) : sec.callout.type === "success" ? (
                  <Sparkles className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <h4 className="font-bold text-sm sm:text-base mb-1">{sec.callout.title}</h4>
                  <p className="text-xs sm:text-sm leading-relaxed opacity-90">{sec.callout.text}</p>
                </div>
              </div>
            )}
          </section>
        ))}

        {/* Interactive Tools Recommendation */}
        {relatedCalculators.length > 0 && (
          <section id="tools" className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 md:p-10 space-y-6 shadow-xl border border-indigo-900/50">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block mb-1">
                  Verified Computational Tools
                </span>
                <h3 className="text-2xl font-black tracking-tight">
                  Calculate Instantly in Real Time
                </h3>
              </div>
              <Link
                href="/category"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-300 hover:text-white transition-colors"
              >
                <span>Browse All 260+ Tools</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
              Don't calculate by hand. Every calculator below executes locally on your device with 100% mathematical precision and no calculation-input tracking on our servers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
              {relatedCalculators.slice(0, 3).map((calc) => (
                <Link
                  key={calc.slug}
                  href={`/${calc.slug}`}
                  className="p-5 bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl transition-all group block backdrop-blur-xs"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
                      {calc.category}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-bold text-white text-base group-hover:text-indigo-200 transition-colors leading-snug">
                    {calc.title.split(" -")[0].replace("Free ", "").replace(" 2026", "")}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-2 mt-2 leading-relaxed">
                    {calc.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Frequently Asked Questions */}
        <section id="faq" className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 space-y-6 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Common Inquiries &amp; Expert Answers
          </h2>
          <div className="space-y-4 pt-2">
            {custom.faqs.map((faq, fIdx) => (
              <div key={fIdx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-2">
                <h3 className="text-base font-bold text-slate-900">{faq.question}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial Transparency Footer */}
        <section id="editorial" className="bg-slate-50 border border-slate-200 rounded-3xl p-8 text-xs text-slate-500 space-y-2">
          <h3 className="font-bold text-slate-700 text-sm">Editorial Standards &amp; Verification Protocol</h3>
          <p>
            Authored and verified by Saahil, Founder &amp; Lead Computational Editor of My Calculator Hub. All mathematical formulations are derived from peer-reviewed literature, statutory guidelines, and accredited educational frameworks. Computations run client-side in your web browser with no calculation-input collection on our servers.
          </p>
        </section>

      </div>
    );
  }

  // Fallback for general articles
  return (
    <div className="space-y-12 text-slate-800 leading-relaxed">
      
      {/* 01. Key takeaways */}
      <section id="summary" className="bg-blue-50/70 border border-blue-100 rounded-3xl p-8 md:p-10 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full w-fit">
          <Sparkles className="w-3.5 h-3.5" /> 01. Key Takeaways
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
          Executive Summary &amp; Highlights
        </h2>
        <ul className="space-y-3 text-slate-700">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
            <span><strong>Mathematical precision:</strong> Transparent step-by-step formula breakdown, source equations, and variable units.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
            <span><strong>Client-side security:</strong> Numerical inputs remain strictly on your local device without external tracking.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
            <span><strong>Peer-reviewed benchmarks:</strong> Formulas verified against accredited institutional and industrial standards.</span>
          </li>
        </ul>
        <p className="text-slate-600 text-sm pt-2">
          This comprehensive masterclass explains <strong>{article.title}</strong> with complete analytical clarity.
        </p>
      </section>

      {/* 02. Definition & scope */}
      <section id="definition" className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit">
          <BookOpen className="w-3.5 h-3.5" /> 02. Core Definition
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
          {article.title}: Scope &amp; Framework
        </h2>
        <p className="text-slate-600 text-base leading-relaxed">
          Before applying any formula or quoting standard benchmarks, defining the scope of your calculation is essential. A robust computational model clearly specifies what is being evaluated, the source time window, units of measurement, and all boundary conditions.
        </p>
      </section>

      {/* Tools */}
      {relatedCalculators.length > 0 && (
        <section id="tools" className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 space-y-6 shadow-xs">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-slate-900">Recommended Interactive Calculators</h2>
            <Link href="/category" className="text-xs font-bold text-blue-600 hover:text-blue-800">
              Browse All &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {relatedCalculators.slice(0, 3).map((calc) => (
              <Link
                key={calc.slug}
                href={`/${calc.slug}`}
                className="p-5 bg-slate-50 hover:bg-blue-50/70 border border-slate-100 hover:border-blue-200 rounded-2xl transition-all group block"
              >
                <span className="text-xs font-bold text-blue-600 uppercase mb-1 block">
                  {calc.category}
                </span>
                <h4 className="font-bold text-slate-900 group-hover:text-blue-700 text-sm leading-snug">
                  {calc.title.split(" -")[0].replace("Free ", "").replace(" 2026", "")}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2 mt-2">
                  {calc.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section id="faq" className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 space-y-4 shadow-xs">
        <h2 className="text-2xl font-black text-slate-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <h3 className="text-base font-bold text-slate-900 mb-2">How accurate are these formulas?</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every formula published on My Calculator Hub conforms to standardized mathematical, statistical, and statutory benchmarks overseen by founder Saahil.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial */}
      <section id="editorial" className="bg-slate-50 border border-slate-200 rounded-3xl p-8 text-xs text-slate-500 space-y-2">
        <h3 className="font-bold text-slate-700 text-sm">Editorial Transparency &amp; Methodology</h3>
        <p>
          This guide is maintained by the editorial and computational engineering team at My Calculator Hub. Content is grounded in formal mathematical conventions, peer-reviewed educational literature, and verified financial guidelines.
        </p>
      </section>

    </div>
  );
}
