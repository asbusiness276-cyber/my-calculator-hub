const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Update Hero Section
const newHero = \
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <svg className="absolute -top-24 -left-24 w-96 h-96 text-white" fill="currentColor" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" /></svg>
          <svg className="absolute top-1/2 -right-24 w-72 h-72 text-white" fill="currentColor" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" /></svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            The Ultimate Hub for <span className="text-blue-200">Free Online Calculators</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Fast, accurate, and 100% free calculators for finance, health, academics, and daily math. No sign-ups required. Get instant results now.
          </p>
          
          {/* Search Bar */}
          <div className="relative w-full max-w-2xl mx-auto shadow-2xl rounded-full">
            <input
              type="text"
              className="w-full px-8 py-5 pl-14 rounded-full border-0 focus:outline-none focus:ring-4 focus:ring-blue-300 text-gray-900 text-lg font-medium"
              placeholder="Search calculators (e.g., SIP, BMI, Margin)..."
            />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-blue-500 w-6 h-6" />
          </div>
        </div>
      </section>\;
content = content.replace(/\{\/\* Hero Section \*\/\}[\\s\\S]*?<\/section>/, newHero.trim());

// 2. Add description to Finance & Investment
content = content.replace(
  /<div className="flex items-center gap-3 mb-8">\\s*<PiggyBank className="w-8 h-8 text-green-600" \/>\\s*<h2 className="text-2xl font-bold text-gray-900">Finance & Investment<\/h2>\\s*<\/div>/,
  \<div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <PiggyBank className="w-8 h-8 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Finance & Investment</h2>
            </div>
            <p className="text-gray-600 max-w-2xl">Plan your financial future with our powerful investment and banking calculators. Calculate loan EMIs, track SIP returns, and analyze business margins.</p>
          </div>\
);

// 3. Add description to Health & Fitness
content = content.replace(
  /<div className="flex items-center gap-3 mb-8">\\s*<Activity className="w-8 h-8 text-red-500" \/>\\s*<h2 className="text-2xl font-bold text-gray-900">Health & Fitness<\/h2>\\s*<\/div>/,
  \<div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Activity className="w-8 h-8 text-red-500" />
              <h2 className="text-2xl font-bold text-gray-900">Health & Fitness</h2>
            </div>
            <p className="text-gray-600 max-w-2xl">Take control of your health journey. Monitor your Body Mass Index (BMI) and calculate your daily caloric needs for weight loss or muscle gain.</p>
          </div>\
);

// 4. Add description to Academic & Students
content = content.replace(
  /<div className="flex items-center gap-3 mb-8">\\s*<GraduationCap className="w-8 h-8 text-indigo-600" \/>\\s*<h2 className="text-2xl font-bold text-gray-900">Academic & Students<\/h2>\\s*<\/div>/,
  \<div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="w-8 h-8 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-900">Academic & Students</h2>
            </div>
            <p className="text-gray-600 max-w-2xl">Essential tools for school and university students. Convert grades, calculate your Weighted Average Mark (WAM), and project your final GPA.</p>
          </div>\
);

// 5. Add description to Daily Utility & Math
content = content.replace(
  /<div className="flex items-center gap-3 mb-8">\\s*<Calculator className="w-8 h-8 text-purple-600" \/>\\s*<h2 className="text-2xl font-bold text-gray-900">Daily Utility & Math<\/h2>\\s*<\/div>/,
  \<div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Calculator className="w-8 h-8 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">Daily Utility & Math</h2>
            </div>
            <p className="text-gray-600 max-w-2xl">Everyday math made simple. Calculate percentages, track exact ages, figure out discounts, and count words for your essays.</p>
          </div>\
);

// 6. Add SEO Sections at the bottom of main
const seoSections = \
        {/* SEO Article Section */}
        <section className="mt-24 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200">
          <div className="prose prose-blue lg:prose-lg max-w-none">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Why Choose MyCalculatorHub for Your Daily Calculations?</h2>
            <p>
              In today's fast-paced digital world, accuracy and speed are everything. Whether you are a business owner trying to figure out the perfect profit margin, a student calculating your final CGPA, or a fitness enthusiast tracking daily calories, <strong>MyCalculatorHub</strong> is designed to provide instant, precise, and visually appealing results.
            </p>
            <p>
              We noticed that many online calculators are cluttered with intrusive ads, require mandatory email sign-ups, or simply do not work well on mobile devices. We set out to change that.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 not-prose">
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-2">100% Free & Unlimited</h3>
                <p className="text-blue-800/80">No paywalls, no premium subscriptions, and no hidden fees. All our tools are completely free to use, as many times as you need.</p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                <h3 className="text-xl font-bold text-emerald-900 mb-2">Zero Registration Required</h3>
                <p className="text-emerald-800/80">We value your privacy. You don't need to create an account or hand over your email address to get your results.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                <h3 className="text-xl font-bold text-purple-900 mb-2">Lightning Fast & Real-Time</h3>
                <p className="text-purple-800/80">Built with modern web technologies, our calculators process complex formulas instantly as you type. No waiting for page reloads.</p>
              </div>
              <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                <h3 className="text-xl font-bold text-rose-900 mb-2">Mobile-First Design</h3>
                <p className="text-rose-800/80">Every tool on MyCalculatorHub is meticulously optimized for smartphones and tablets, ensuring a flawless experience on the go.</p>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">Frequently Asked Questions (FAQs)</h2>
            
            <div className="space-y-6 not-prose">
              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Are the financial calculations (SIP, EMI) accurate?</h4>
                <p className="text-gray-600">Yes. We use standard banking and financial formulas (like compounding interest and standard amortization schedules) to ensure our calculators match what institutions use. However, these are estimates, and actual banking figures might vary slightly due to compounding frequencies or hidden bank fees.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Is my data safe when using these tools?</h4>
                <p className="text-gray-600">Absolutely. All calculations (including the Word Counter and Margin Calculator) happen locally in your browser. Your data is never sent to our servers, ensuring complete privacy.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Can I request a new calculator?</h4>
                <p className="text-gray-600">Yes! We are constantly expanding our catalog. If you need a specific tool, visit our Contact page and send us a feature request.</p>
              </div>
            </div>
          </div>
        </section>
\;

content = content.replace(/<\\/main>/, seoSections + '\\n      </main>');

fs.writeFileSync('src/app/page.tsx', content);
console.log("Updated page.tsx successfully.");