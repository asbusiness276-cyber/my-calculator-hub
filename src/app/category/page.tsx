import Link from "next/link";
import { Metadata } from "next";
import { CATEGORIES, getCalculatorsByCategory } from "@/lib/calculators";
import { getCategoryTheme } from "@/lib/category-theme";
import { 
  Calculator, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  Activity,
  GraduationCap,
  Percent,
  FlaskConical,
  Zap,
  HardHat,
  BarChart3,
  Briefcase,
  Code2,
  ShieldCheck,
  Award
} from "lucide-react";

export const metadata: Metadata = {
  title: "All Calculator Categories - Free Online Tools | My Calculator Hub",
  description: "Browse all 10 calculation categories including Finance & Investment, Health & Fitness, Academic & Students, and Daily Utility & Math. 100% free and accurate online tools.",
  alternates: {
    canonical: "/category",
  },
};

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "finance-and-investment": TrendingUp,
  "health-and-fitness": Activity,
  "academic-and-students": GraduationCap,
  "daily-utility-and-math": Percent,
  "science-and-chemistry": FlaskConical,
  "physics-and-engineering": Zap,
  "construction-and-real-estate": HardHat,
  "statistics-and-probability": BarChart3,
  "business-and-marketing": Briefcase,
  "text-and-developer-tools": Code2,
};

export default function AllCategoriesPage() {
  const categoriesWithCounts = CATEGORIES.map((category) => {
    const slug = category.toLowerCase().replace(/ /g, "-").replace(/&/g, "and");
    const calcs = getCalculatorsByCategory(category);
    const theme = getCategoryTheme(slug);
    const IconComponent = CATEGORY_ICONS[slug] || Calculator;

    return {
      name: category,
      slug,
      count: calcs.length,
      theme,
      Icon: IconComponent,
    };
  });

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://mycalculatorhub.pro/category#webpage",
        "name": "All Calculator Categories Directory",
        "description": "Browse all 10 calculation categories across finance, health, academics, and daily utilities.",
        "url": "https://mycalculatorhub.pro/category",
        "publisher": {
          "@type": "Organization",
          "name": "My Calculator Hub",
          "url": "https://mycalculatorhub.pro",
          "logo": {
            "@type": "ImageObject",
            "url": "https://mycalculatorhub.pro/icon.png",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://mycalculatorhub.pro/" },
          { "@type": "ListItem", position: 2, name: "Categories", item: "https://mycalculatorhub.pro/category" },
        ],
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Colorful Gradient Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden shadow-md">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          {/* Breadcrumb */}
          <nav className="flex justify-center mb-6 text-xs font-semibold text-white/70 gap-2 items-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white bg-white/10 px-2.5 py-0.5 rounded-full">Categories Directory</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5 bg-gradient-to-r from-blue-500 via-indigo-500 to-rose-500 text-white shadow-md">
            <Sparkles className="w-3.5 h-3.5" /> 10 Premier Hubs · 260+ Verified Calculation Engines
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-5 leading-tight">
            Explore All <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-pink-400">Calculator Categories</span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal max-w-2xl mx-auto">
            Choose your desired domain below to access specialized calculation engines, step-by-step mathematical formulas, and peer-reviewed educational guides.
          </p>
        </div>
      </section>

      {/* Categories Grid with Individual Bespoke Color Themes */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {categoriesWithCounts.map((cat) => {
            const Icon = cat.Icon;
            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className={`bg-white p-8 rounded-3xl border border-gray-100 shadow-xs hover:shadow-xl ${cat.theme.borderHover} ${cat.theme.glowClass} hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden`}
              >
                {/* Subtle colorful corner glow */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 pointer-events-none transition-opacity group-hover:opacity-25"
                  style={{ backgroundColor: cat.theme.primaryHex }}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Themed Icon Container */}
                    <div className={`w-14 h-14 ${cat.theme.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs`}>
                      <Icon className={`w-7 h-7 ${cat.theme.iconColor}`} />
                    </div>

                    {/* Count Badge */}
                    <span className={`text-xs font-black px-3 py-1 rounded-full ${cat.theme.badgeClass}`}>
                      {cat.count} {cat.count === 1 ? "Tool" : "Tools"}
                    </span>
                  </div>

                  <h2 className={`text-2xl font-black text-gray-900 mb-2.5 group-hover:${cat.theme.textPrimary} transition-colors tracking-tight`}>
                    {cat.name}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {cat.theme.shortDesc}
                  </p>
                </div>

                <div className={`pt-5 border-t border-gray-100 flex items-center justify-between text-sm font-black ${cat.theme.textPrimary}`}>
                  <span>Browse Hub</span>
                  <div className="flex items-center gap-1 group-hover:translate-x-1.5 transition-transform duration-200">
                    <span className="text-xs uppercase tracking-wider">{cat.theme.badgeText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Directory Trust Banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-gray-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Looking for a Specialized Formula?</h3>
              <p className="text-gray-500 text-sm">We are continuously expanding our computational library. Request any formula or engineering model.</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors whitespace-nowrap shadow-md"
          >
            Request New Calculator &rarr;
          </Link>
        </div>
      </main>
    </div>
  );
}
