import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  Mail, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2, 
  HelpCircle, 
  Calculator, 
  BookOpen, 
  MessageSquare,
  ArrowRight,
  Send,
  GraduationCap,
  Layers,
  FileText
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - Direct Support & Editorial Desk",
  description: "Get in touch directly with Saahil and the editorial computational team at My Calculator Hub. Fast 24-48h support for formula checks, custom calculator requests, and academic inquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact My Calculator Hub",
    "description": "Direct communication channels with the editorial, mathematical verification, and development desk of My Calculator Hub.",
    "url": "https://mycalculatorhub.pro/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "My Calculator Hub",
      "email": "asbusiness276@gmail.com",
      "url": "https://mycalculatorhub.pro",
      "founder": {
        "@type": "Person",
        "name": "Saahil",
        "url": "https://mycalculatorhub.pro/author",
        "sameAs": [
          "https://www.linkedin.com/in/sahildigitalmarketing",
          "https://www.instagram.com/realsaahilmusic"
        ]
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "Editorial & Computational Support",
          "email": "asbusiness276@gmail.com",
          "availableLanguage": ["English", "Hindi"]
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is there no contact form on this page?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We intentionally do not use automated contact forms. Web forms frequently suffer from delivery drop-offs, trigger spam filters, and force users into detached ticket queues. By contacting us directly via email (asbusiness276@gmail.com), you retain a full timestamped copy in your own inbox and connect directly with our human computational specialists."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly does the team respond to emails?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our typical turnaround time is between 24 and 48 business hours. Urgent notifications regarding potential mathematical formula discrepancies or broken calculator logic are flagged with highest priority and typically reviewed within 12 hours."
        }
      },
      {
        "@type": "Question",
        "name": "Can I request a custom calculator that is not yet on the website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Community requests drive our roadmap. If you are a student, educator, or financial professional needing a specific calculation engine, email us the formula or desired inputs. We build and launch community-requested tools free of charge in our weekly deployment cycle."
        }
      },
      {
        "@type": "Question",
        "name": "Does My Calculator Hub store or collect the numbers I enter into tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Never. All 260+ calculation engines on My Calculator Hub run 100% locally in your web browser via client-side JavaScript. Your salary, loans, health metrics, and academic grades never leave your device or touch our servers."
        }
      },
      {
        "@type": "Question",
        "name": "Can teachers and university professors use these calculators in classrooms?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, absolutely. All calculators, formula breakdowns, and educational guides on My Calculator Hub are 100% free and open for public educational use. Educators are welcome to link directly to any tool or worked example in their syllabi and coursework."
        }
      },
      {
        "@type": "Question",
        "name": "How do I report a mathematical error or formula discrepancy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Please email asbusiness276@gmail.com with the subject 'Formula Review'. Include the specific calculator URL, the test inputs you entered, the observed result versus your expected result, and a citation to the textbook, standard, or regulatory handbook."
        }
      }
    ]
  };

  const channels = [
    {
      title: "Formula & Math Discrepancy",
      badge: "Accuracy Desk",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      description: "Spot a rounding variance, compounding discrepancy, or university grading policy variation? Our editorial team reviews peer feedback rigorously.",
      actionText: "Report Formula Issue",
      mailtoSubject: "Formula Review: [Calculator Name]",
      icon: Calculator,
      color: "from-blue-600 to-indigo-600",
      bgLight: "bg-blue-50/50 hover:bg-blue-50/80 border-blue-100",
    },
    {
      title: "Request a New Calculator",
      badge: "Feature Pipeline",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      description: "Need a specialized tool for your curriculum, workplace, or regional tax scheme? Tell us what inputs and outputs you need, and we will build it.",
      actionText: "Request New Calculator",
      mailtoSubject: "New Calculator Request: [Tool Name]",
      icon: Sparkles,
      color: "from-emerald-600 to-teal-600",
      bgLight: "bg-emerald-50/50 hover:bg-emerald-50/80 border-emerald-100",
    },
    {
      title: "Academic & University Syllabi",
      badge: "Education Desk",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      description: "University departments, high schools, and educators wishing to reference or verify computational models for course syllabi.",
      actionText: "Academic Collaboration",
      mailtoSubject: "Academic Inquiry: [Institution / Subject]",
      icon: GraduationCap,
      color: "from-purple-600 to-violet-600",
      bgLight: "bg-purple-50/50 hover:bg-purple-50/80 border-purple-100",
    },
    {
      title: "Press, Citations & Partnerships",
      badge: "Editorial & Media",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
      description: "Media inquiries, research citations, or technical syndication inquiries regarding our computational methodologies and datasets.",
      actionText: "Media & Press Inquiry",
      mailtoSubject: "Media / Partnership Inquiry: My Calculator Hub",
      icon: FileText,
      color: "from-rose-600 to-pink-600",
      bgLight: "bg-rose-50/50 hover:bg-rose-50/80 border-rose-100",
    },
  ];

  const faqs = [
    {
      q: "Why is there no contact form on this page?",
      a: "We intentionally do not use automated contact forms. Web forms frequently suffer from delivery drop-offs, trigger spam filters, and force users into detached ticket queues. By contacting us directly via email, you retain a full timestamped copy in your own inbox and connect directly with our human computational specialists without any automated bot middleman."
    },
    {
      q: "How quickly does the team respond to emails?",
      a: "Our typical turnaround time is between 24 and 48 business hours. Urgent notifications regarding potential mathematical formula discrepancies or broken calculator logic are flagged with highest priority and typically reviewed within 12 hours."
    },
    {
      q: "Can I request a custom calculator that is not yet on the website?",
      a: "Yes! Community requests drive our roadmap. If you are a student, educator, or financial professional needing a specific calculation engine, email us the formula or desired inputs. We build and launch community-requested tools free of charge in our weekly deployment cycle."
    },
    {
      q: "Does My Calculator Hub store or collect the numbers I enter into tools?",
      a: "Never. All 260+ calculation engines on My Calculator Hub run 100% locally in your web browser via client-side JavaScript. Your salary, loans, health metrics, and academic grades never leave your device or touch our servers."
    },
    {
      q: "Can teachers and university professors use these calculators in classrooms?",
      a: "Yes, absolutely. All calculators, formula breakdowns, and educational guides on My Calculator Hub are 100% free and open for public educational use. Educators are welcome to link directly to any tool or worked example in their syllabi and coursework."
    },
    {
      q: "How do you verify the accuracy of your formulas?",
      a: "Every tool undergoes a four-tier verification protocol: formal academic derivation, boundary & edge-case stress tests (e.g. zero values, leap years), ISO/statutory alignment, and peer review overseen by founder Saahil. You can read our complete editorial standards on the author page."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-5xl mx-auto space-y-14">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex text-sm text-gray-500 gap-2 items-center">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">Contact Us</span>
        </nav>

        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 md:p-14 shadow-xl border border-indigo-900/50">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-gradient-to-tr from-emerald-500/15 to-indigo-500/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded-full uppercase tracking-wider border border-indigo-400/30 backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
              Direct Support & Editorial Desk
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Get in Touch with Our{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Editorial & Math Team
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We believe in direct, transparent communication. Instead of hiding behind ticket queues or automated bots, you can reach out directly to our computational researchers, lead editor, and founder.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Form Hassle</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>24–48h Human Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Direct Mathematical Review</span>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Direct Contact Channels (3 Modern Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Direct Email */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                Primary Channel
              </span>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Direct Editorial Email
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Send queries, formula suggestions, or technical questions straight to our team inbox:
              </p>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 font-mono text-xs sm:text-sm text-slate-800 break-all select-all font-semibold">
                asbusiness276@gmail.com
              </div>
            </div>

            <div className="pt-6">
              <a
                href="mailto:asbusiness276@gmail.com"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xs transition-colors text-sm"
              >
                <Send className="w-4 h-4" />
                <span>Compose Email</span>
              </a>
            </div>
          </div>

          {/* Card 2: Response SLA */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                Response Guarantee
              </span>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                24 – 48 Hours SLA
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Every inquiry is handled by an actual team member. Calculation error reports are fast-tracked within 12 hours.
              </p>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Working Days:</span>
                  <span className="font-semibold text-slate-900">Monday – Saturday</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Active Desk:</span>
                  <span className="font-semibold text-slate-900">9:00 AM – 7:00 PM IST</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-slate-500">Priority:</span>
                  <span className="font-semibold text-emerald-700">Math Corrections</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-200/80 w-full justify-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Desk Active & Monitoring</span>
              </div>
            </div>
          </div>

          {/* Card 3: Founder & Lead Editor */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 block mb-1">
                Founder Desk
              </span>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Connect with Saahil
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Founder and Lead Computational Editor overseeing mathematical modeling and site integrity.
              </p>
              
              <div className="space-y-2">
                <a
                  href="https://www.linkedin.com/in/sahildigitalmarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 bg-slate-50 hover:bg-indigo-50/70 border border-slate-100 rounded-xl text-xs font-semibold text-slate-800 hover:text-indigo-700 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-bold text-indigo-600">in</span>
                    <span>LinkedIn Profile</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://www.instagram.com/realsaahilmusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 bg-slate-50 hover:bg-rose-50/70 border border-slate-100 rounded-xl text-xs font-semibold text-slate-800 hover:text-rose-700 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-bold text-rose-600">ig</span>
                    <span>Instagram Profile</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/author"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold rounded-xl border border-purple-200 transition-colors text-sm"
              >
                <span>Read Editorial Bio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* How We Can Help You - 4 Structured Guidance Blocks */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Inquiry Categories
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              What Can We Help You With?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To expedite your inquiry, select the relevant category below and include key details in your email.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {channels.map((ch, idx) => {
              const IconComp = ch.icon;
              return (
                <div
                  key={idx}
                  className={`p-7 rounded-3xl border transition-all ${ch.bgLight} flex flex-col justify-between`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${ch.color} text-white flex items-center justify-center shadow-xs`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${ch.badgeColor}`}>
                        {ch.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                        {ch.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {ch.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <a
                      href={`mailto:asbusiness276@gmail.com?subject=${encodeURIComponent(ch.mailtoSubject)}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors group"
                    >
                      <span>{ch.actionText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Step-by-Step Reporting Guide */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-200">
              Fast Resolution Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2">
              How to Report a Calculation Variance
            </h2>
            <p className="text-slate-600 text-sm mt-1 leading-relaxed">
              When reporting a mathematical discrepancy, including these 4 points helps our verification desk test and deploy fixes within hours:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                1
              </span>
              <h4 className="font-bold text-slate-900 text-sm">Tool URL</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                The exact calculator link (e.g. <code>/wam-calculator</code> or <code>/cagr-calculator</code>).
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">
                2
              </span>
              <h4 className="font-bold text-slate-900 text-sm">Input Numbers</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                The specific parameters, principal, tenure, or credits you entered into the inputs.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <span className="w-7 h-7 rounded-lg bg-purple-600 text-white font-bold text-xs flex items-center justify-center">
                3
              </span>
              <h4 className="font-bold text-slate-900 text-sm">Expected Output</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                What the calculator yielded versus what you expected according to your calculation.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                4
              </span>
              <h4 className="font-bold text-slate-900 text-sm">Source / Reference</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                The university handbook, regulatory standard, or formula textbook reference.
              </p>
            </div>
          </div>
        </section>

        {/* Founder's Privacy & Integrity Statement */}
        <section className="bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/70 rounded-3xl p-8 sm:p-10 border border-indigo-100 shadow-sm relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden shadow-lg border-4 border-white flex-shrink-0">
              <Image
                src="/images/saahil.jpg"
                alt="Saahil - Founder of My Calculator Hub"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 128px, 160px"
              />
            </div>

            <div className="space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-indigo-700 text-xs font-bold rounded-full border border-indigo-200 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                Founder's Editorial Guarantee
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                &ldquo;Zero Data Tracking, Total Human Support&rdquo;
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                When you use My Calculator Hub, your computations run 100% locally on your computer or phone. And when you reach out to us with questions or suggestions, you are conversing directly with the people who write and verify the mathematical models. We treat every email with prompt attention and respect your privacy.
              </p>

              <div className="pt-1 flex flex-wrap items-center justify-center md:justify-start gap-4">
                <span className="text-sm font-bold text-slate-900">
                  Saahil &mdash; <span className="text-slate-500 font-normal">Founder & Lead Computational Editor</span>
                </span>
                <Link
                  href="/author"
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-4"
                >
                  View Author Credentials &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Common questions about contacting our team, requesting tools, and our privacy policy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs hover:border-indigo-200 transition-colors space-y-2.5"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <h3 className="font-bold text-slate-900 text-base leading-snug">
                    {faq.q}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left max-w-xl">
            <h3 className="text-2xl font-bold tracking-tight">
              Have an Idea or Need Computational Support?
            </h3>
            <p className="text-indigo-100 text-sm leading-relaxed">
              We respond to every constructive inquiry within 24 to 48 hours. Let us know how we can make our calculators even better for you.
            </p>
          </div>

          <a
            href="mailto:asbusiness276@gmail.com"
            className="flex-shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-indigo-700 hover:bg-indigo-50 font-bold rounded-2xl shadow-lg transition-colors text-sm"
          >
            <Mail className="w-4 h-4 text-indigo-600" />
            <span>Email asbusiness276@gmail.com</span>
          </a>
        </div>

      </div>
    </div>
  );
}