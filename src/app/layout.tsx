import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "@/components/Header";
import BrandLogo from "@/components/ui/BrandLogo";
import { ShieldCheck, HeartHandshake, Mail, Sparkles, Award } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://mycalculatorhub.pro'),
  title: {
    default: "My Calculator Hub - 260+ Free Online Calculators",
    template: "%s | My Calculator Hub",
  },
  description: "Free online calculators for SIP, EMI, BMI, Salary, and 260+ tools. Fast, accurate, and private client-side calculation engines.",
  keywords: [
    "online calculators", 
    "free calculators", 
    "SIP calculator", 
    "EMI calculator", 
    "Salary calculator", 
    "WAM calculator", 
    "BMI calculator", 
    "PPF calculator", 
    "percentage calculator",
    "math tools"
  ],
  authors: [{ name: "Saahil", url: "https://mycalculatorhub.pro/author" }],
  creator: "Saahil",
  publisher: "My Calculator Hub",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png" },
    ],
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "My Calculator Hub - 260+ Free Online Calculators",
    description: "Free online calculators for SIP, EMI, BMI, Salary, and 260+ tools. Fast, accurate, and private calculation engines.",
    url: "https://mycalculatorhub.pro",
    siteName: "My Calculator Hub",
    type: "website",
    images: [{ url: "https://mycalculatorhub.pro/icon.png", width: 512, height: 512, alt: "My Calculator Hub" }],
  },
  twitter: {
    card: "summary",
    title: "My Calculator Hub - 260+ Free Online Calculators",
    description: "Free online calculators for SIP, EMI, BMI, Salary, and 260+ tools.",
  },
  verification: {
    google: "RlnHjIv3J9jKEJPDCVAnfo-_F2VMm6JLK2nAm7RMs4k",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5825245351059712"
          crossOrigin="anonymous"
        ></script>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.className} antialiased flex flex-col min-h-screen bg-gray-50 text-gray-900 selection:bg-indigo-500 selection:text-white`}>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* Rich Footer with Colorful Accents */}
        <footer className="bg-slate-950 text-gray-400 py-16 mt-auto border-t border-slate-800 relative overflow-hidden">
          {/* Subtle colorful ambient backdrop lights */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
              
              {/* Brand Column */}
              <div className="space-y-4 md:col-span-1">
                <BrandLogo variant="dark" size="md" />
                <p className="text-sm text-gray-400 leading-relaxed pt-2">
                  Your trusted suite of 260+ free online calculators. Engineered for mathematical precision, instant responsiveness, and zero server tracking.
                </p>
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Client-Side Privacy</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-blue-900/60 to-indigo-900/60 text-blue-300 text-xs font-bold rounded-full border border-blue-700/50">
                  <Award className="w-3.5 h-3.5 text-yellow-400" /> Lead Reviewer: Saahil
                </div>
              </div>

              {/* Calculator Categories */}
              <div>
                <h3 className="text-xs font-bold text-gray-200 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" /> Calculator Hubs
                </h3>
                <ul className="space-y-2.5 text-sm">
                  <li><Link href="/category/finance-and-investment" className="hover:text-emerald-400 transition-colors flex items-center justify-between"><span>Finance & Investment</span><span className="text-[11px] text-emerald-500/80 font-mono">47 tools</span></Link></li>
                  <li><Link href="/category/health-and-fitness" className="hover:text-rose-400 transition-colors flex items-center justify-between"><span>Health & Fitness</span><span className="text-[11px] text-rose-500/80 font-mono">24 tools</span></Link></li>
                  <li><Link href="/category/academic-and-students" className="hover:text-indigo-400 transition-colors flex items-center justify-between"><span>Academic & Students</span><span className="text-[11px] text-indigo-500/80 font-mono">54 tools</span></Link></li>
                  <li><Link href="/category/daily-utility-and-math" className="hover:text-amber-400 transition-colors flex items-center justify-between"><span>Daily Utility & Math</span><span className="text-[11px] text-amber-500/80 font-mono">70 tools</span></Link></li>
                  <li><Link href="/category/science-and-chemistry" className="hover:text-cyan-400 transition-colors flex items-center justify-between"><span>Science & Chemistry</span><span className="text-[11px] text-cyan-500/80 font-mono">7 tools</span></Link></li>
                  <li><Link href="/category" className="text-blue-400 hover:text-blue-300 font-semibold pt-1 block">View All 10 Categories &rarr;</Link></li>
                </ul>
              </div>

              {/* Popular Tools */}
              <div>
                <h3 className="text-xs font-bold text-gray-200 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" /> Popular Engines
                </h3>
                <ul className="space-y-2.5 text-sm">
                  <li><Link href="/sip-calculator" className="hover:text-white transition-colors">Free SIP Calculator</Link></li>
                  <li><Link href="/emi-calculator" className="hover:text-white transition-colors">Home & Car Loan EMI</Link></li>
                  <li><Link href="/bmi-calculator" className="hover:text-white transition-colors">BMI & Health Planner</Link></li>
                  <li><Link href="/salary-calculator" className="hover:text-white transition-colors">Salary & Tax Breakdown</Link></li>
                  <li><Link href="/wam-calculator" className="hover:text-white transition-colors">University WAM Calculator</Link></li>
                  <li><Link href="/percentage-calculator" className="hover:text-white transition-colors">Percentage Calculator</Link></li>
                </ul>
              </div>

              {/* Trust & Legal */}
              <div>
                <h3 className="text-xs font-bold text-gray-200 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-400" /> Transparency & Trust
                </h3>
                <ul className="space-y-2.5 text-sm">
                  <li><Link href="/author" className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5" /> Founder & Author (Saahil)</Link></li>
                  <li><Link href="/about" className="hover:text-white transition-colors">About Us & Methodology</Link></li>
                  <li><Link href="/articles" className="hover:text-white transition-colors">Educational Guides</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
                  <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy & Cookies</Link></li>
                  <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                  <li><Link href="/disclaimer" className="hover:text-white transition-colors">Legal & Financial Disclaimer</Link></li>
                </ul>
              </div>

            </div>

            {/* Bottom Row */}
            <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
              <div>
                &copy; {new Date().getFullYear()} My Calculator Hub. Founded & Directed by <Link href="/author" className="text-gray-300 hover:text-white font-medium underline underline-offset-2">Saahil</Link>. All calculations are verified.
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <a href="mailto:asbusiness276@gmail.com" className="hover:text-gray-300 transition-colors flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-blue-400" /> asbusiness276@gmail.com
                </a>
                <span>·</span>
                <Link href="/sitemap.xml" className="hover:text-gray-300 transition-colors">Sitemap</Link>
                <span>·</span>
                <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Ad Choices</Link>
              </div>
            </div>

          </div>
        </footer>
      </body>
    </html>
  );
}