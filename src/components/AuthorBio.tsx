import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Mail, ExternalLink, ShieldCheck, Sparkles, BookOpen } from "lucide-react";

interface AuthorBioProps {
  compact?: boolean;
}

export default function AuthorBio({ compact = false }: AuthorBioProps) {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50/40 rounded-3xl p-8 md:p-10 border border-blue-100 shadow-sm not-prose my-12">
      <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start sm:items-center">
        
        {/* Author Avatar */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex-shrink-0 rounded-2xl overflow-hidden shadow-md border-2 border-white ring-4 ring-blue-100/60">
          <Image
            src="/images/saahil.jpg"
            alt="Saahil - Founder & Lead Editor at My Calculator Hub"
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
            priority
          />
        </div>

        {/* Author Details */}
        <div className="space-y-3 flex-grow">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" /> Author & Verified Specialist
            </span>
            <span className="text-xs text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Fact Checked
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
              <Link href="/author" className="hover:text-blue-600 transition-colors">
                Saahil
              </Link>
            </h3>
            <p className="text-sm font-semibold text-blue-700">
              Founder, Computational Math Specialist & Lead Editor
            </p>
          </div>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl">
            Saahil is the founder and lead editor of <strong>My Calculator Hub</strong>. With a background in computational tool engineering and applied financial arithmetic, he develops high-precision calculation engines and educational masterclasses designed to bring mathematical clarity to students, professionals, and everyday decision-makers. Every tool and formula published under his direction is rigorously verified for unit accuracy, standard deviations, and 100% client-side privacy.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold">
            <Link
              href="/author"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-sm transition-colors"
            >
              <span>View Full Author Profile & Articles</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <a
              href="mailto:asbusiness276@gmail.com"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-gray-100 text-gray-700 rounded-xl border border-gray-200 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span>Contact Saahil</span>
            </a>

            <a
              href="https://www.linkedin.com/in/sahildigitalmarketing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-2 text-gray-500 hover:text-blue-600 transition-colors"
            >
              <span>LinkedIn</span>
            </a>

            <a
              href="https://www.instagram.com/realsaahilmusic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-2 text-gray-500 hover:text-rose-600 transition-colors"
            >
              <span>Instagram</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
