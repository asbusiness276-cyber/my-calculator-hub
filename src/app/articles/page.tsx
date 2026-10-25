import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Sparkles, TrendingUp, Calculator, ShieldCheck, HeartPulse, DollarSign, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { articles, articleCategories } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles & Expert Guides - MyCalculatorHub",
  description: "Explore 100+ in-depth calculation guides, formulas, and tutorials across university grading, finance, health, and daily mathematics. Master complex calculations easily.",
  alternates: {
    canonical: "/articles",
  },
};

export default function ArticlesHub() {
  const featuredSlugs = [
    "how-to-calculate-a-weighted-average",
    "uni-wam-projection-guide",
    "area-and-volume-formulas",
    "gpa-scales-explained",
    "probability-basics",
    "how-compound-interest-works",
  ];

  const featuredArticles = articles.filter((a) => featuredSlugs.includes(a.slug));

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://mycalculatorhub.pro/articles#webpage",
        "name": "Articles & Educational Guides",
        "description": "In-depth calculation guides, formulas, and tutorials across university grading, finance, health, and daily mathematics.",
        "url": "https://mycalculatorhub.pro/articles",
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
          { "@type": "ListItem", position: 2, name: "Articles", item: "https://mycalculatorhub.pro/articles" },
        ],
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex mb-8 text-sm text-gray-500 gap-2 items-center">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">Articles</span>
        </nav>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider mb-4 border border-blue-100">
            <BookOpen className="w-3.5 h-3.5" /> Curated In-Depth Formula Guides
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
            Expert <span className="text-blue-600">Guides & Tutorials</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Deep-dive articles, mathematical formulas, and step-by-step tutorials to help you master university GPA/WAM, personal finance, health metrics, and everyday calculations.
          </p>
        </div>

        {/* Featured Guides Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-blue-600" /> Featured Reference Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Link 
                key={article.slug} 
                href={`/articles/${article.slug}`}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                  <Image 
                    src={article.featuredImage} 
                    alt={article.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider border border-blue-100">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-grow line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs font-medium text-gray-400 pt-4 border-t border-gray-100 mt-auto">
                    <span>{article.updated}</span>
                    <span className="text-blue-600 font-bold group-hover:underline flex items-center gap-1">
                      Read Guide <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Complete Library By Category */}
        <section className="space-y-16">
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">
              Browse All Articles by Category ({articles.length} Guides)
            </h2>
            <p className="text-gray-500 mt-1">Explore our entire verified knowledge base across all academic, finance, health, and math topics.</p>
          </div>

          {articleCategories.map((category) => {
            const catArticles = articles.filter((a) => a.category === category);
            if (catArticles.length === 0) return null;

            return (
              <div key={category} className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600" /> {category}
                  </h3>
                  <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {catArticles.length} {catArticles.length === 1 ? "Guide" : "Guides"}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {catArticles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/articles/${article.slug}`}
                      className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group block"
                    >
                      <h4 className="font-bold text-gray-900 group-hover:text-blue-600 text-sm leading-snug mb-2">
                        {article.title}
                      </h4>
                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="pt-3 mt-3 border-t border-gray-50 flex items-center justify-between text-xs text-blue-600 font-semibold">
                        <span>Read Guide</span>
                        <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

      </div>
    </div>
  );
}