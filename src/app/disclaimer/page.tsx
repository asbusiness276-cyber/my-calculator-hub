import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ShieldAlert, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer & Calculation Limitations",
  description: "Read our calculation disclaimer, accuracy standards, and legal limitations regarding financial, medical, and academic calculations.",
  alternates: {
    canonical: "/disclaimer",
  },
  openGraph: {
    title: "Disclaimer & Calculation Limitations | My Calculator Hub",
    description: "Read our calculation disclaimer, accuracy standards, and legal limitations.",
    url: "https://mycalculatorhub.pro/disclaimer",
    type: "website",
  },
};

export default function Disclaimer() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Breadcrumb */}
        <nav className="flex text-sm text-gray-500 gap-2 items-center">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">Disclaimer</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full uppercase tracking-wider mb-4 border border-amber-200">
            <ShieldAlert className="w-3.5 h-3.5" /> Legal Notice & Limitations
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Disclaimer & Limitations
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Last updated: October 2, 2026. Important information regarding the mathematical and estimation nature of our online tools.
          </p>
        </div>

        <article className="bg-white p-8 md:p-14 rounded-3xl shadow-sm border border-gray-200 prose prose-lg prose-blue max-w-none text-gray-700">
          <h2>1. Educational & Planning Purposes Only</h2>
          <p>
            All calculation engines, mathematical guides, and articles provided on <strong>My Calculator Hub</strong> (accessible from <Link href="/">https://mycalculatorhub.pro</Link>) are engineered strictly for educational, informational, and personal planning orientation.
          </p>
          <p>
            The outputs produced by our calculation algorithms represent mathematical models based on standard computational equations and the specific parameters inputted by the user. They do not constitute legally binding statements, formal banking loan estimates, official university transcripts, or certified medical diagnoses.
          </p>
          
          <h2>2. No Financial, Investment, or Legal Advice</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 not-prose my-6 text-sm text-gray-700 leading-relaxed">
            <h3 className="font-bold text-blue-900 text-base mb-2">Financial Tools (SIP, EMI, PPF, Salary, APY, Margin)</h3>
            <p>
              Financial market projections, loan amortization schedules, tax estimates, and investment returns are illustrative models. Actual commercial banking rates, compound schedules, tax regulations, and investment returns will fluctuate due to market volatility, lender administrative fees, and regional legislative amendments. Always consult a certified financial planner (CFP), accountant, or your accredited financial institution prior to executing substantial monetary investments or loan agreements.
            </p>
          </div>

          <h2>3. No Medical or Healthcare Advice</h2>
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 not-prose my-6 text-sm text-gray-700 leading-relaxed">
            <h3 className="font-bold text-emerald-900 text-base mb-2">Health & Fitness Tools (BMI, Calories, BMR, Body Composition)</h3>
            <p>
              Health metrics provided on this site are population-level screening approximations based on the Mifflin-St Jeor equation and World Health Organization standards. They do not assess individual cardiovascular health, metabolic disease, muscle-to-fat ratios, or specific endocrine conditions. Always seek the direct guidance of a licensed medical physician or registered dietitian before embarking on significant dietary changes or strenuous exercise regimens.
            </p>
          </div>

          <h2>4. Academic & Grading Variations</h2>
          <p>
            Academic scoring models (including WAM, GPA, and CGPA converters) follow standard universal mathematical algorithms. However, specific faculties and universities retain independent discretionary authority regarding the inclusion of failed units, non-standard unit weights, and grade scaling curves. Cross-reference your results with your official faculty handbook and registrar office.
          </p>

          <h2>5. Accuracy and Continuous Verification</h2>
          <p>
            While our editorial and engineering team led by <strong>Saahil</strong> continuously audits and tests all 260+ calculation algorithms against current academic and financial benchmarks, My Calculator Hub makes no warranties or guarantees that all outputs are completely error-free or exhaustive.
          </p>
          <p>
            If you identify any discrepancy or wish to suggest a formula enhancement, please reach out directly through our <Link href="/contact">Contact Page</Link> or email our lead editor at <a href="mailto:asbusiness276@gmail.com">asbusiness276@gmail.com</a>.
          </p>

          <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500 not-prose">
            <span>&copy; 2026 My Calculator Hub. Founded by Saahil.</span>
            <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy & Cookies &rarr;</Link>
          </div>
        </article>
      </div>
    </div>
  );
}