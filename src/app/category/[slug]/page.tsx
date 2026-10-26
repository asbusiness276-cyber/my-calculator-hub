import { CATEGORIES, getCalculatorsByCategory } from "@/lib/calculators";
import { articles } from "@/lib/articles";
import { getCategoryTheme } from "@/lib/category-theme";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { 
  Calculator, 
  ArrowLeft, 
  BookOpen, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  Award
} from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

const CATEGORY_ALIASES: Record<string, string> = {
  // Finance & Investment
  "finance": "Finance & Investment",
  "financial": "Finance & Investment",
  "investment": "Finance & Investment",
  "finance-and-investment": "Finance & Investment",

  // Business & Marketing
  "business": "Business & Marketing",
  "marketing": "Business & Marketing",
  "business-and-marketing": "Business & Marketing",
  "ecommerce": "Business & Marketing",

  // Health & Fitness
  "health": "Health & Fitness",
  "fitness": "Health & Fitness",
  "health-and-fitness": "Health & Fitness",

  // Academic & Students
  "academic": "Academic & Students",
  "students": "Academic & Students",
  "academic-and-students": "Academic & Students",

  // Daily Utility & Math
  "math": "Daily Utility & Math",
  "daily-math": "Daily Utility & Math",
  "daily-utility": "Daily Utility & Math",
  "daily-utility-and-math": "Daily Utility & Math",
  "date-and-time": "Daily Utility & Math",
  "date-time": "Daily Utility & Math",
  "home-and-lifestyle": "Daily Utility & Math",
  "home-lifestyle": "Daily Utility & Math",
  "lifestyle": "Daily Utility & Math",

  // Science & Chemistry
  "chemistry": "Science & Chemistry",
  "science": "Science & Chemistry",
  "science-and-chemistry": "Science & Chemistry",

  // Physics & Engineering
  "physics": "Physics & Engineering",
  "engineering": "Physics & Engineering",
  "electrical": "Physics & Engineering",
  "physics-and-engineering": "Physics & Engineering",

  // Construction & Real Estate
  "construction": "Construction & Real Estate",
  "real-estate": "Construction & Real Estate",
  "construction-and-real-estate": "Construction & Real Estate",

  // Statistics & Probability
  "statistics": "Statistics & Probability",
  "stats": "Statistics & Probability",
  "probability": "Statistics & Probability",
  "statistics-and-probability": "Statistics & Probability",

  // Text & Developer Tools
  "text": "Text & Developer Tools",
  "developer": "Text & Developer Tools",
  "coding": "Text & Developer Tools",
  "text-and-data": "Text & Developer Tools",
  "text-data": "Text & Developer Tools",
  "text-and-developer-tools": "Text & Developer Tools",
};

function unslugifyCategory(slug: string): string | undefined {
  const normalized = slug.toLowerCase();
  if (CATEGORY_ALIASES[normalized]) {
    return CATEGORY_ALIASES[normalized];
  }
  return CATEGORIES.find(
    (cat) => cat.toLowerCase().replace(/ /g, "-").replace(/&/g, "and") === normalized
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = unslugifyCategory(slug) || "Online";

  return {
    title: `${categoryName} Calculators - Free Online Tools`,
    description: `Discover our free ${categoryName.toLowerCase()} calculators. Fast, accurate, and easy to use online tools with instant client-side results.`,
    authors: [{ name: "Saahil", url: "https://mycalculatorhub.pro/author" }],
    alternates: {
      canonical: `/category/${slug}`,
    },
    openGraph: {
      title: `${categoryName} Calculators - Free Online Tools`,
      description: `Discover our free ${categoryName.toLowerCase()} calculators. Fast, accurate, and easy to use online tools with instant client-side results.`,
      url: `https://mycalculatorhub.pro/category/${slug}`,
      type: "website",
      siteName: "My Calculator Hub",
      images: [
        {
          url: "https://mycalculatorhub.pro/icon.png",
          width: 512,
          height: 512,
          alt: `${categoryName} Calculators`,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: `${categoryName} Calculators - Free Online Tools`,
      description: `Discover our free ${categoryName.toLowerCase()} calculators with instant client-side results.`,
    },
  };
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  const added = new Set<string>();

  CATEGORIES.forEach((cat) => {
    const slug = cat.toLowerCase().replace(/ /g, "-").replace(/&/g, "and");
    if (!added.has(slug)) {
      params.push({ slug });
      added.add(slug);
    }
  });

  Object.keys(CATEGORY_ALIASES).forEach((alias) => {
    if (!added.has(alias)) {
      params.push({ slug: alias });
      added.add(alias);
    }
  });

  return params;
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const categoryName = unslugifyCategory(slug);

  if (!categoryName) {
    notFound();
  }

  const standardSlug = categoryName.toLowerCase().replace(/ /g, "-").replace(/&/g, "and");
  if (slug !== standardSlug && CATEGORY_ALIASES[slug.toLowerCase()] && !CATEGORY_ALIASES[slug.toLowerCase()].includes(slug)) {
    redirect(`/category/${standardSlug}`);
  }

  const categoryCalculators = getCalculatorsByCategory(categoryName);
  const theme = getCategoryTheme(categoryName);

  // Filter relevant educational guides for this category
  const relatedArticles = articles
    .filter((article) => {
      const artCat = article.category.toLowerCase();
      const cName = categoryName.toLowerCase();
      if (cName.includes("finance") || cName.includes("business")) {
        return artCat.includes("finance") || artCat.includes("wam planning");
      }
      if (cName.includes("health")) {
        return artCat.includes("health");
      }
      return artCat.includes("math") || artCat.includes("productivity");
    })
    .slice(0, 6);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `https://mycalculatorhub.pro/category/${slug}#webpage`,
        "name": `${categoryName} Calculators`,
        "description": `Free online calculators and verified tools for ${categoryName.toLowerCase()}.`,
        "url": `https://mycalculatorhub.pro/category/${slug}`,
        "about": {
          "@type": "Thing",
          "name": categoryName,
        },
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
            "name": categoryName,
            "item": `https://mycalculatorhub.pro/category/${slug}`,
          },
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

      {/* Dynamic Category Hero with bespoke colors */}
      <section className={`relative bg-gradient-to-br ${theme.heroGradient} text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden shadow-md`}>
        {/* Colorful ambient glowing spheres */}
        <div 
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-40 pointer-events-none"
          style={{ backgroundColor: theme.primaryHex }}
        />
        <div 
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{ backgroundColor: theme.secondaryHex }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex mb-8 text-xs font-semibold text-white/70 gap-2 items-center flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/category" className="hover:text-white transition-colors">Categories</Link>
            <span>/</span>
            <span className="text-white bg-white/10 px-2 py-0.5 rounded">{categoryName}</span>
          </nav>

          <div className="max-w-3xl">
            {/* Themed Category Badge */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5 bg-gradient-to-r ${theme.pillGradient} text-white shadow-md`}>
              <Sparkles className="w-3.5 h-3.5" /> {theme.badgeText} · {categoryCalculators.length} Verified Tools
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-5 leading-tight">
              {categoryName} <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-300">Calculators</span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal mb-8 max-w-2xl">
              {theme.shortDesc} Mathematically audited formulas, lightning-fast execution, and 100% in-browser client-side privacy.
            </p>

            {/* Quick Stats Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-semibold">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15 text-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Mathematically Audited
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15 text-white">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> 100% Client-Side Privacy
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15 text-white">
                <Award className="w-3.5 h-3.5 text-yellow-400" /> Reviewed by Saahil
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 pb-4 border-b border-gray-200 gap-4">
          <div>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
              <Layers className={`w-6 h-6 ${theme.textPrimary}`} />
              <span>Available {categoryName} Engines</span>
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Select any tool below to calculate instantly with real-time outputs and step-by-step mathematical explanations.
            </p>
          </div>
          <Link
            href="/category"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-600 hover:text-gray-900 self-start sm:self-auto px-4 py-2 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4" /> All Categories
          </Link>
        </div>

        {/* Calculator Cards Grid with Category Colors */}
        {categoryCalculators.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryCalculators.map((calc) => (
              <Link
                key={calc.id}
                href={`/${calc.slug}`}
                className={`bg-white p-7 rounded-3xl border border-gray-100 shadow-xs hover:shadow-xl ${theme.borderHover} ${theme.glowClass} hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden`}
              >
                {/* Subtle top corner gradient highlight */}
                <div 
                  className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 pointer-events-none transition-opacity group-hover:opacity-25"
                  style={{ backgroundColor: theme.primaryHex }}
                />

                <div>
                  {/* Category-themed Icon Box */}
                  <div className={`w-12 h-12 ${theme.iconBg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-xs`}>
                    <Calculator className={`w-6 h-6 ${theme.iconColor}`} />
                  </div>

                  <h3 className={`text-xl font-bold text-gray-900 mb-2.5 group-hover:${theme.textPrimary} transition-colors leading-snug`}>
                    {calc.title.split(" -")[0].replace("Free ", "").replace(" 2026", "")}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
                    {calc.description}
                  </p>
                </div>

                <div className={`pt-5 border-t border-gray-100 mt-6 flex items-center justify-between text-sm font-bold ${theme.textPrimary}`}>
                  <span>Open Calculator</span>
                  <span className="group-hover:translate-x-1.5 transition-transform duration-200">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 shadow-xs max-w-2xl mx-auto my-8">
            <div className={`w-16 h-16 ${theme.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
              <Calculator className={`w-8 h-8 ${theme.iconColor}`} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">More Tools Coming Soon</h3>
            <p className="text-gray-600 mb-8 text-sm">
              We are actively developing new calculation tools for {categoryName}. Check back soon or request a custom formula through our contact desk!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/category"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4" /> All Categories
              </Link>
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 px-6 py-3 ${theme.btnPrimary} font-semibold rounded-xl transition-all text-sm`}
              >
                Request a Calculator &rarr;
              </Link>
            </div>
          </div>
        )}

        {/* Featured Educational Guides cluster grid */}
        {relatedArticles.length > 0 && (
          <section className="mt-20 pt-12 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <div>
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 ${theme.badgeClass}`}>
                  <BookOpen className="w-3.5 h-3.5" /> Cluster Guides
                </div>
                <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                  Featured In-Depth Educational Guides
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Master the theoretical mathematical foundations and real-world calculation steps behind {categoryName.toLowerCase()} tools.
                </p>
              </div>
              <Link
                href="/articles"
                className={`inline-flex items-center gap-1 font-bold text-sm ${theme.textPrimary} hover:underline whitespace-nowrap`}
              >
                All 100+ Guides &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={article.featuredImage}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h4 className={`font-bold text-gray-900 group-hover:${theme.textPrimary} transition-colors line-clamp-2 mb-2 text-base leading-snug`}>
                        {article.title}
                      </h4>
                      <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                    <div className={`pt-4 border-t border-gray-50 mt-4 flex items-center justify-between text-xs font-bold ${theme.textPrimary}`}>
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* E-E-A-T Category Verification Banner */}
        <section className={`mt-16 bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-xs relative overflow-hidden`}>
          <div 
            className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-15 pointer-events-none"
            style={{ backgroundColor: theme.primaryHex }}
          />

          <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
            <div className="relative w-20 h-24 rounded-2xl overflow-hidden shadow-md flex-shrink-0 border-2 border-white ring-2 ring-gray-100">
              <Image
                src="/images/saahil.jpg"
                alt="Saahil - Lead Computational Reviewer"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="space-y-2 text-center sm:text-left flex-grow">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-50 text-yellow-800 text-xs font-bold rounded-full border border-yellow-200">
                <Award className="w-3.5 h-3.5 text-yellow-600" /> Category Verified by Saahil
              </div>
              <h4 className="text-lg font-bold text-gray-900">
                Peer-Reviewed Mathematical Precision for {categoryName}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                Every calculation engine in this {categoryName} collection has been audited by founder <strong>Saahil</strong> against formal academic standards, banking algorithms, and scientific formulas. All computations run 100% client-side in your browser.
              </p>
              <div className="pt-1">
                <Link
                  href="/author"
                  className={`text-xs font-bold ${theme.textPrimary} hover:underline inline-flex items-center gap-1`}
                >
                  Learn more about our editorial methodology &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
