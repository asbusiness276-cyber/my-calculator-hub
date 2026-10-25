import { notFound } from "next/navigation";
import { calculators } from "@/lib/calculators";
import dynamic from "next/dynamic";
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { calculatorSeoContent, calculatorFaqs } from "@/lib/calculator-seo";
import CalculatorSeoGuide from "@/components/calculators/CalculatorSeoGuide";
import { getCategoryTheme } from "@/lib/category-theme";
import { Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";

const CalculatorComponents: Record<string, React.ComponentType<any>> = {
  SalaryCalculator: dynamic(() => import("@/components/calculators/SalaryCalculator")),
  WamCalculator: dynamic(() => import("@/components/calculators/WamCalculator")),
  ApyCalculator: dynamic(() => import("@/components/calculators/ApyCalculator")),
  AreaCalculator: dynamic(() => import("@/components/calculators/AreaCalculator")),
  PpfCalculator: dynamic(() => import("@/components/calculators/PpfCalculator")),
  WordCounter: dynamic(() => import("@/components/calculators/WordCounter")),
  SentenceCounter: dynamic(() => import("@/components/calculators/SentenceCounter")),
  MarginCalculator: dynamic(() => import("@/components/calculators/MarginCalculator")),
  CgpaCalculator: dynamic(() => import("@/components/calculators/CgpaCalculator")),
  CalorieCalculator: dynamic(() => import("@/components/calculators/CalorieCalculator")),
  DiscountCalculator: dynamic(() => import("@/components/calculators/DiscountCalculator")),
  FdRdCalculator: dynamic(() => import("@/components/calculators/FdRdCalculator")),
  GstCalculator: dynamic(() => import("@/components/calculators/GstCalculator")),
  PercentageCalculator: dynamic(() => import("@/components/calculators/PercentageCalculator")),
  AgeCalculator: dynamic(() => import("@/components/calculators/AgeCalculator")),
  BmiCalculator: dynamic(() => import("@/components/calculators/BmiCalculator")),
  EmiCalculator: dynamic(() => import("@/components/calculators/EmiCalculator")),
  SipCalculator: dynamic(() => import("@/components/calculators/SipCalculator")),
  UniversalCalculator: dynamic(() => import("@/components/calculators/UniversalCalculator")),
};

export async function generateStaticParams() {
  return calculators.map((calc) => ({
    slug: calc.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> | { slug: string } }): Promise<Metadata> {
  const params = await props.params;
  const calc = calculators.find((c) => c.slug === params.slug);

  if (!calc) {
    return { title: "Calculator Not Found | My Calculator Hub" };
  }

  const cleanTitle = calc.title.split(" -")[0].replace("Free ", "").replace(" 2026", "");

  return {
    title: calc.title,
    description: calc.description,
    authors: [{ name: "Saahil", url: "https://mycalculatorhub.pro/author" }],
    alternates: {
      canonical: `/${calc.slug}`,
    },
    openGraph: {
      title: calc.title,
      description: calc.description,
      url: `https://mycalculatorhub.pro/${calc.slug}`,
      type: "website",
      siteName: "My Calculator Hub",
      images: [
        {
          url: "https://mycalculatorhub.pro/icon.png",
          width: 512,
          height: 512,
          alt: cleanTitle,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: calc.title,
      description: calc.description,
    },
  };
}

export default async function CalculatorPage(props: { params: Promise<{ slug: string }> | { slug: string } }) {
  const params = await props.params;
  const calc = calculators.find((c) => c.slug === params.slug);

  if (!calc) {
    notFound();
  }

  const Component = CalculatorComponents[calc.componentName] || CalculatorComponents.UniversalCalculator;

  if (!Component) {
    notFound();
  }

  const cleanTitle = calc.title.split(" -")[0].replace("Free ", "").replace(" 2026", "");
  const categorySlug = calc.category.toLowerCase().replace(/ /g, "-").replace(/&/g, "and");

  const faqs = calculatorFaqs[calc.slug] || [
    {
      question: `Is the ${cleanTitle} free to use?`,
      answer: "Yes, our calculation tools are 100% free with unlimited calculations, no hidden fees, and no sign-up or registration required."
    },
    {
      question: "Is my personal calculation data safe and private?",
      answer: "All calculations are processed locally inside your web browser. None of your data, financial inputs, or personal figures are stored or sent to remote servers."
    },
    {
      question: "How accurate are the results provided by this tool?",
      answer: "Our calculators use standard, mathematically verified formulas to provide real-time outputs. For formal or legally binding contracts, always consult with your certified advisor or institution."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `https://mycalculatorhub.pro/${calc.slug}#app`,
        "name": calc.title,
        "description": calc.description,
        "url": `https://mycalculatorhub.pro/${calc.slug}`,
        "applicationCategory": calc.category.includes("Finance")
          ? "FinanceApplication"
          : calc.category.includes("Health")
          ? "HealthApplication"
          : "UtilityApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript. Requires HTML5.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
        },
        "author": {
          "@type": "Person",
          "name": "Saahil",
          "url": "https://mycalculatorhub.pro/author",
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://mycalculatorhub.pro/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Categories",
            "item": "https://mycalculatorhub.pro/category",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": calc.category,
            "item": `https://mycalculatorhub.pro/category/${categorySlug}`,
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": cleanTitle,
            "item": `https://mycalculatorhub.pro/${calc.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
    ],
  };

  const theme = getCategoryTheme(calc.category);

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Subtle ambient colored glow based on category */}
      <div
        className="absolute top-0 inset-x-0 h-[420px] pointer-events-none opacity-20 blur-3xl"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${theme.primaryHex} 0%, ${theme.secondaryHex} 40%, transparent 75%)`
        }}
      />

      {/* Breadcrumb Navigation */}
      <div className="max-w-4xl mx-auto mb-6 relative z-10">
        <nav className="flex text-xs font-semibold text-gray-500 gap-2 items-center flex-wrap">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/category" className="hover:text-indigo-600 transition-colors">Categories</Link>
          <span>/</span>
          <Link href={`/category/${categorySlug}`} className={`hover:${theme.textPrimary} transition-colors font-medium`}>
            {calc.category}
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-bold truncate max-w-xs">{cleanTitle}</span>
        </nav>
      </div>

      <div className="max-w-4xl mx-auto mb-8 text-center relative z-10">
        {/* Dynamic Category Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs border bg-white" style={{ borderColor: `${theme.primaryHex}40`, color: theme.primaryHex }}>
          <span className={`w-2 h-2 rounded-full ${theme.pillGradient} bg-gradient-to-r`} />
          <span>{calc.category}</span>
          <span className="text-gray-300">·</span>
          <span className="text-gray-600">{theme.badgeText}</span>
        </div>

        <h1 className="text-3xl font-black text-gray-900 tracking-tight sm:text-4xl md:text-5xl leading-tight">
          {calc.title}
        </h1>
        <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {calc.description}
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-xs font-semibold">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5" /> 100% In-Browser Privacy
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
            <CheckCircle2 className="w-3.5 h-3.5" /> Mathematically Audited
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5" /> Instant Live Output
          </span>
        </div>
      </div>

      <div className="relative z-10">
        <Component calc={calc} slug={calc.slug} mode={calc.mode} title={calc.title} />
      </div>

      {/* Custom deep-dive SEO article content if available */}
      {calculatorSeoContent[calc.slug] && (
        <div className="max-w-4xl mx-auto mt-12 bg-white p-8 md:p-12 rounded-3xl shadow-xs border border-gray-100 prose prose-lg prose-indigo max-w-none relative z-10">
          {calculatorSeoContent[calc.slug]}
        </div>
      )}

      {/* Comprehensive E-E-A-T Authority SEO Guide, Formula Walkthrough, Verification Table, FAQs & Internal Links */}
      <div className="max-w-4xl mx-auto relative z-10">
        <CalculatorSeoGuide calc={calc} faqs={faqs} />
      </div>
    </div>
  );
}
