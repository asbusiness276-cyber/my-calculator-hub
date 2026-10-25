import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, Eye, Cookie, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | My Calculator Hub",
  description: "Learn how My Calculator Hub protects your privacy, uses cookies, and complies with Google AdSense, GDPR, and CCPA guidelines.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider mb-4 border border-blue-100">
            <Shield className="w-3.5 h-3.5" /> Legal & Transparency
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Last updated: October 2, 2026. This policy outlines how My Calculator Hub handles data, cookies, and advertising partners.
          </p>
        </div>

        {/* Content Card */}
        <article className="bg-white p-8 md:p-14 rounded-3xl shadow-sm border border-gray-200 prose prose-lg prose-blue max-w-none text-gray-700">
          
          <h2>1. Overview & Our Commitment to Privacy</h2>
          <p>
            At <strong>My Calculator Hub</strong> (accessible from <Link href="/">https://mycalculatorhub.pro</Link>), one of our main priorities is the privacy of our visitors. This Privacy Policy document describes the types of information that is collected and recorded by My Calculator Hub and how we use it.
          </p>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <a href="mailto:asbusiness276@gmail.com">asbusiness276@gmail.com</a>.
          </p>

          <h2>2. Client-Side Tool Privacy (No Personal Input Storage)</h2>
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 not-prose my-6 flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-emerald-900 mb-1">100% In-Browser Execution</h3>
              <p className="text-emerald-800 text-sm leading-relaxed">
                All calculators on My Calculator Hub (including loan values, financial salaries, BMI, body measurements, age, and academic marks) execute entirely inside your device's web browser using JavaScript. We <strong>do not</strong> transmit, record, or store any numbers or personal calculation parameters on our web servers.
              </p>
            </div>
          </div>

          <h2>3. Log Files</h2>
          <p>
            My Calculator Hub follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
          </p>

          <h2>4. Cookies and Web Beacons</h2>
          <p>
            Like any other website, My Calculator Hub uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
          </p>

          <h2>5. Google DoubleClick DART Cookie & Google AdSense</h2>
          <p>
            Google is one of the third-party vendors on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to <Link href="/">mycalculatorhub.pro</Link> and other sites on the internet.
          </p>
          <ul>
            <li>
              Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.
            </li>
            <li>
              Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.
            </li>
            <li>
              Users may opt out of personalized advertising by visiting <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">www.aboutads.info</a>.
            </li>
          </ul>

          <h2>6. Third-Party Advertising Partners</h2>
          <p>
            Some of the advertisers on our site may use cookies and web beacons. Our advertising partners include:
          </p>
          <ul>
            <li><strong>Google AdSense</strong> (<a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">Google Privacy & Terms</a>)</li>
          </ul>
          <p>
            Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on My Calculator Hub, which are sent directly to users' browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
          </p>
          <p>
            Note that My Calculator Hub has no access to or control over these cookies that are used by third-party advertisers.
          </p>

          <h2>7. CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
          <p>
            Under the California Consumer Privacy Act (CCPA), among other rights, California consumers have the right to:
          </p>
          <ul>
            <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
            <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
            <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
          </ul>
          <p>
            If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
          </p>

          <h2>8. GDPR Data Protection Rights</h2>
          <p>
            We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
          </p>
          <ul>
            <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
            <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate.</li>
            <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
            <li><strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data.</li>
            <li><strong>The right to object to processing</strong> – You have the right to object to our processing of your personal data.</li>
          </ul>

          <h2>9. Children's Information</h2>
          <p>
            Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
          </p>
          <p>
            My Calculator Hub does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have questions, feedback, or inquiries regarding this Privacy Policy or cookie management, please reach out to:
          </p>
          <p>
            <strong>My Calculator Hub</strong><br />
            Email: <a href="mailto:asbusiness276@gmail.com">asbusiness276@gmail.com</a><br />
            Website: <Link href="/contact">https://mycalculatorhub.pro/contact</Link>
          </p>

        </article>
      </div>
    </div>
  );
}