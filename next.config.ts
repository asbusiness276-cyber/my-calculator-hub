import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/about-author", destination: "/author", permanent: true },
      { source: "/author/saahil", destination: "/author", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/terms-and-conditions", destination: "/terms", permanent: true },
      { source: "/write-for-us", destination: "/contact", permanent: true },
      { source: "/calculators", destination: "/category", permanent: true },
      { source: "/articles/category/:slug*", destination: "/category", permanent: true },
      { source: "/word-counter-tool", destination: "/word-counter", permanent: true },
      { source: "/finance/sip-calculator", destination: "/sip-calculator", permanent: true },
      { source: "/finance/:slug*", destination: "/:slug*", permanent: true },
    ];
  },
};

export default nextConfig;
