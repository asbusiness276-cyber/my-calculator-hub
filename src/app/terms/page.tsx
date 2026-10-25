import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the terms of service, conditions of use, and legal limitations for My Calculator Hub.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider mb-4 border border-blue-100">
            <FileText className="w-3.5 h-3.5" /> Terms & Conditions
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Last updated: October 2, 2026. Please read these terms carefully before using our calculation tools.
          </p>
        </div>

        {/* Content Card */}
        <article className="bg-white p-8 md:p-14 rounded-3xl shadow-sm border border-gray-200 prose prose-lg prose-blue max-w-none text-gray-700">
          
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using <strong>My Calculator Hub</strong> (<Link href="/">https://mycalculatorhub.pro</Link>), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>

          <h2>2. Permitted Use & License</h2>
          <p>
            Permission is granted to access, use, and run calculations on My Calculator Hub for personal, educational, academic, and non-commercial business planning purposes. Under this license you may not:
          </p>
          <ul>
            <li>Modify, reverse engineer, or decompile any calculation algorithm or client-side script on the website;</li>
            <li>Use automated scrapers, bots, or data harvesting scripts to disrupt the availability of our tools;</li>
            <li>Remove any copyright or proprietary notations from the materials;</li>
            <li>Mirror or frame the website on any other server without prior written permission.</li>
          </ul>

          <h2>3. Nature of Online Tools & Mathematical Estimates</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 not-prose my-6 flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-amber-900 mb-1">Estimation & Educational Purpose Only</h3>
              <p className="text-amber-800 text-sm leading-relaxed">
                All calculators on My Calculator Hub are mathematical tools designed for orientation, estimation, and study planning. They do not constitute certified financial, medical, legal, or institutional grading advice. Always verify final figures with your bank, doctor, or academic registrar.
              </p>
            </div>
          </div>

          <h2>4. Disclaimer of Warranties</h2>
          <p>
            The tools, guides, and materials on My Calculator Hub are provided on an "as is" and "as available" basis. My Calculator Hub makes no warranties, expressed or implied, and hereby disclaims all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            In no event shall My Calculator Hub, its founder, or its contributors be liable for any damages (including, without limitation, damages for loss of data or profit, loan penalties, tax miscalculations, or business interruption) arising out of the use or inability to use the calculation tools on this website.
          </p>

          <h2>6. Third-Party Advertisements & External Links</h2>
          <p>
            My Calculator Hub may display third-party advertisements (such as Google AdSense) and links to external websites. We do not endorse, guarantee, or assume responsibility for the content, privacy practices, or products offered by third-party advertisers or external websites.
          </p>

          <h2>7. Modifications to Terms</h2>
          <p>
            My Calculator Hub may revise these Terms of Service at any time without prior notice. By using this website, you are agreeing to be bound by the then current version of these terms.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with standard international internet regulations and applicable local laws.
          </p>

          <h2>9. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please reach out to us at:
          </p>
          <p>
            <strong>My Calculator Hub</strong><br />
            Email: <a href="mailto:asbusiness276@gmail.com">asbusiness276@gmail.com</a><br />
            Contact Page: <Link href="/contact">https://mycalculatorhub.pro/contact</Link>
          </p>

        </article>
      </div>
    </div>
  );
}