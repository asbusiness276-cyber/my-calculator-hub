import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { ArticleBody, getArticleToc } from "@/components/ArticleBody";
import AuthorBio from "@/components/AuthorBio";
import { articles, getArticle, getRelatedArticles, articleRedirects } from "@/lib/articles";
import { calculators } from "@/lib/calculators";
import { BookOpen, Calendar, Clock, User, ArrowLeft } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (articleRedirects[slug]) {
    return { title: "Redirecting..." };
  }
  const article = getArticle(slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} - Expert Guide`,
    description: article.excerpt,
    authors: [{ name: "Saahil Sharma", url: "https://mycalculatorhub.pro/author" }],
    alternates: {
      canonical: `/articles/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      url: `https://mycalculatorhub.pro/articles/${article.slug}`,
      publishedTime: article.published,
      modifiedTime: article.updated,
      authors: ["https://mycalculatorhub.pro/author"],
      images: [
        {
          url: article.featuredImage,
          width: 1280,
          height: 720,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  if (articleRedirects[slug]) {
    redirect(articleRedirects[slug]);
  }

  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const articleToc = getArticleToc(article);

  // Find relevant calculators
  // Explicit overrides for titles where generic keyword matching picks the
  // wrong tools. Example: the WAM guide title drops "wam" (3 letters) in the
  // filter below, so SIP came first and WAM was cut out of the tools box.
  const relatedOverrides: Record<string, string[]> = {
    "how-to-calculate-wam": ["wam-calculator", "semester-wam-calculator", "wam-to-gpa-calculator"],
    "how-to-calculate-sip": ["sip-calculator", "compound-interest-calculator", "ppf-calculator"],
    "how-to-calculate-ppf": ["ppf-calculator", "sip-calculator", "compound-interest-calculator"],
    "how-to-calculate-gst": ["gst-calculator", "tax-calculator", "sales-tax-calculator"],
  };
  const terms = article.title.toLowerCase().split(/\s+/).filter((t) => t.length > 3);
  let relatedCalculators = relatedOverrides[slug]
    ? calculators.filter((tool) => relatedOverrides[slug].includes(tool.slug))
    : calculators
        .filter((tool) => terms.some((term) => tool.title.toLowerCase().includes(term) || tool.slug.includes(term)))
        .slice(0, 6);

  if (relatedCalculators.length < 3) {
    const fallbackCategory = article.category.includes("Finance")
      ? "Finance & Investment"
      : article.category.includes("Health")
      ? "Health & Fitness"
      : article.category.includes("Math")
      ? "Daily Utility & Math"
      : article.category.includes("Productivity")
      ? "Text & Developer Tools"
      : "Academic & Students";

    relatedCalculators = [
      ...relatedCalculators,
      ...calculators.filter((tool) => tool.category === fallbackCategory && !relatedCalculators.includes(tool)),
    ].slice(0, 6);
  }

  const relatedArticles = getRelatedArticles(article, 4);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://mycalculatorhub.pro/articles/${article.slug}#article`,
        headline: article.title,
        description: article.excerpt,
        image: `https://mycalculatorhub.pro${article.featuredImage}`,
        datePublished: article.published,
        dateModified: article.updated,
        author: {
          "@type": "Person",
          name: "Saahil Sharma",
          url: "https://mycalculatorhub.pro/author",
        },
        publisher: {
          "@type": "Organization",
          name: "My Calculator Hub",
          url: "https://mycalculatorhub.pro",
          logo: {
            "@type": "ImageObject",
            url: "https://mycalculatorhub.pro/images/my-calculator-hub-mark.webp",
          },
        },
        mainEntityOfPage: `https://mycalculatorhub.pro/articles/${article.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://mycalculatorhub.pro/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Articles",
            item: "https://mycalculatorhub.pro/articles",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: `https://mycalculatorhub.pro/articles/${article.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `What is the core focus of ${article.title}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "This guide breaks down key mathematical definitions, calculation frameworks, worked numerical examples, and common mistakes to help you make defensible decisions.",
            },
          },
          {
            "@type": "Question",
            name: "Can I use this calculation for official submissions?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our guides provide evidence-based planning frameworks. For formal legal, academic, or financial submissions, always verify against controlling institutional statements.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-5xl mx-auto">
        
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm text-gray-500 gap-2 items-center flex-wrap">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-600 transition-colors">Articles</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold truncate max-w-xs">{article.title}</span>
        </nav>

        {/* Article Header Card */}
        <header className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider border border-blue-100">
              {article.category}
            </span>
            <span className="text-xs text-gray-400 font-medium">· Comprehensive 3,000+ Word Guide</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
            {article.title}
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-gray-100 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-blue-600" />
              <Link href="/author" className="hover:text-blue-600 transition-colors">By <strong>Saahil</strong></Link>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-600" />
              <span>Updated {article.updated}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-600" />
              <span>15–20 min read</span>
            </div>
          </div>
        </header>

        {/* Featured Image (16:9) */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-sm mb-12 border border-slate-200">
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Sticky Table of Contents Sidebar */}
          <aside className="lg:col-span-4 order-2 lg:order-1 space-y-6">
            <div className="sticky top-24 bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-5">
              
              {/* Mini Author Card in Sidebar */}
              <div className="flex items-center gap-3.5 pb-4 border-b border-gray-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-blue-500 shadow-sm">
                  <Image
                    src="/images/saahil.jpg"
                    alt="Saahil"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <Link href="/author" className="font-bold text-gray-900 text-sm hover:text-blue-600 transition-colors block">
                    Written by Saahil
                  </Link>
                  <span className="text-xs text-gray-500">Founder & Lead Editor</span>
                </div>
              </div>

              <div className="flex items-center gap-2 font-bold text-gray-900 text-sm border-b pb-3">
                <BookOpen className="w-4 h-4 text-blue-600" /> Table of Contents
              </div>
              <nav className="space-y-1 text-xs">
                {articleToc.map(([id, label]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="block py-1.5 px-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                <Link
                  href="/articles"
                  className="inline-flex items-center gap-1.5 font-semibold text-blue-600 hover:text-blue-800"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> All Articles
                </Link>
                <Link
                  href="/author"
                  className="font-semibold text-gray-500 hover:text-blue-600"
                >
                  About Author &rarr;
                </Link>
              </div>
            </div>
          </aside>

          {/* Article Body Content */}
          <main className="lg:col-span-8 order-1 lg:order-2 space-y-12">
            <ArticleBody article={article} relatedCalculators={relatedCalculators} />

            {/* Author Profile Card */}
            <AuthorBio />

            {/* Related Articles Card */}
            {relatedArticles.length > 0 && (
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Recommended Next Reads</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {relatedArticles.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/articles/${rel.slug}`}
                      className="p-4 bg-gray-50 hover:bg-blue-50/60 rounded-2xl border border-gray-100 hover:border-blue-200 transition-all group block"
                    >
                      <span className="text-xs text-blue-600 font-bold block mb-1">{rel.category}</span>
                      <h4 className="font-bold text-gray-900 group-hover:text-blue-700 text-sm leading-snug">
                        {rel.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </main>

        </div>

      </div>
    </div>
  );
}
