export interface CustomArticleSection {
  id: string;
  heading: string;
  badge?: string;
  paragraphs: string[];
  formulaBox?: {
    title: string;
    formula: string;
    variables: { symbol: string; meaning: string }[];
  };
  workedExample?: {
    scenarioTitle: string;
    scenarioText: string;
    steps: { stepTitle: string; math: string; explanation: string }[];
    finalResult: string;
  };
  table?: {
    title: string;
    headers: string[];
    rows: (string | number)[][];
  };
  callout?: {
    type: "info" | "warning" | "success";
    title: string;
    text: string;
  };
  pitfalls?: { mistake: string; fix: string }[];
}

export interface CustomArticleData {
  slug: string;
  leadParagraph: string;
  keyTakeaways: string[];
  sections: CustomArticleSection[];
  faqs: { question: string; answer: string }[];
}

export const customArticles: Record<string, CustomArticleData> = {
  "how-compound-interest-works": {
    "slug": "how-compound-interest-works",
    "leadParagraph": "Compound interest is widely regarded as the most powerful force in personal finance and wealth creation. Unlike simple interest, which only pays returns on your original deposit, compound interest earns interest on your interest. Over long investment horizons, this exponential mathematical dynamic turns modest regular contributions into life-changing wealth.",
    "keyTakeaways": [
      "Interest on interest accelerates returns exponentially, creating a hockey-stick curve after 10–15 years.",
      "The compounding frequency (annual, monthly, daily) directly increases your Annual Percentage Yield (APY).",
      "Time is the single most critical variable: starting 10 years earlier can more than double your final portfolio.",
      "The Rule of 72 provides an instantaneous mental calculation of how long it takes to double your money at any return rate."
    ],
    "sections": [
      {
        "id": "core-concept",
        "heading": "1. The Fundamental Mathematical Mechanics of Compounding",
        "badge": "Core Principles",
        "paragraphs": [
          "To truly grasp compounding, consider what happens when you invest $10,000 at an 8% annual return. In Year 1, you earn $800, bringing your total to $10,800. In Year 2, you do not just earn 8% on the initial $10,000—you also earn 8% on the $800 of interest you gained last year ($64 additional), yielding $864.",
          "While $64 seems modest in Year 2, this compounding effect snowballs relentlessly. By Year 20, that exact same initial $10,000 generates over $3,450 in interest in a single year—more than a third of the original capital—without you ever adding another dollar."
        ],
        "formulaBox": {
          "title": "The Universal Compound Interest Formula",
          "formula": "A = P × (1 + r / n)^(n × t)",
          "variables": [
            {
              "symbol": "A",
              "meaning": "Final future account balance (Principal + Accumulated Interest)"
            },
            {
              "symbol": "P",
              "meaning": "Initial principal investment amount"
            },
            {
              "symbol": "r",
              "meaning": "Annual nominal interest rate (expressed as a decimal, e.g. 0.08 for 8%)"
            },
            {
              "symbol": "n",
              "meaning": "Compounding frequency per year (1 = annual, 12 = monthly, 365 = daily)"
            },
            {
              "symbol": "t",
              "meaning": "Investment duration in total years"
            }
          ]
        }
      },
      {
        "id": "worked-example",
        "heading": "2. Worked Step-by-Step Numerical Example",
        "badge": "Case Study",
        "paragraphs": [
          "Let's trace a realistic wealth-building scenario: An investor deposits $10,000 into a diversified index fund yielding 8% nominal annual return, compounded monthly (n = 12), held for 25 years."
        ],
        "workedExample": {
          "scenarioTitle": "Investing $10,000 for 25 Years at 8% Compounded Monthly",
          "scenarioText": "Principal P = $10,000, r = 0.08, n = 12 compounding cycles per year, t = 25 years.",
          "steps": [
            {
              "stepTitle": "Step 1: Calculate Periodic Interest Rate",
              "math": "r / n = 0.08 / 12 = 0.0066667 (0.667% per month)",
              "explanation": "Each month, your account balance is credited with 0.667% interest."
            },
            {
              "stepTitle": "Step 2: Calculate Total Compounding Periods",
              "math": "n × t = 12 × 25 = 300 months",
              "explanation": "Your investment compounds through 300 sequential cycles."
            },
            {
              "stepTitle": "Step 3: Apply the Growth Multiplier",
              "math": "(1 + 0.0066667)^300 = (1.0066667)^300 ≈ 7.340176",
              "explanation": "The compounding exponent multiplies your capital by over 7.34 times."
            },
            {
              "stepTitle": "Step 4: Multiply by Principal",
              "math": "A = $10,000 × 7.340176 = $73,401.76",
              "explanation": "Your initial $10,000 has generated $63,401.76 in pure interest earnings."
            }
          ],
          "finalResult": "Final Balance: $73,401.76 ($10,000 Principal + $63,401.76 Interest)"
        }
      },
      {
        "id": "frequency-comparison",
        "heading": "3. How Compounding Frequency Affects Returns (APY)",
        "badge": "Yield Analysis",
        "paragraphs": [
          "The more frequently interest is calculated and added back to your balance, the faster your money grows. While the difference between monthly and daily compounding is subtle, the difference between annual and daily compounding over decades is substantial."
        ],
        "table": {
          "title": "Growth of $10,000 at 8% Over 30 Years by Compounding Frequency",
          "headers": [
            "Frequency",
            "Periods/Yr (n)",
            "Effective Annual Yield (APY)",
            "Final 30-Yr Balance"
          ],
          "rows": [
            [
              "Annually",
              "1",
              "8.000%",
              "$100,626.57"
            ],
            [
              "Quarterly",
              "4",
              "8.243%",
              "$107,351.48"
            ],
            [
              "Monthly",
              "12",
              "8.300%",
              "$109,357.30"
            ],
            [
              "Daily",
              "365",
              "8.328%",
              "$110,341.25"
            ],
            [
              "Continuous",
              "∞",
              "8.329%",
              "$110,231.76"
            ]
          ]
        }
      },
      {
        "id": "rule-of-72",
        "heading": "4. The Rule of 72: Doubling Your Money Instantly",
        "badge": "Mental Math",
        "paragraphs": [
          "The Rule of 72 is an indispensable mental shortcut used by investors to determine approximately how many years it will take an investment to double at a given annual interest rate.",
          "Formula: Years to Double ≈ 72 / Interest Rate (%). For instance, at a 6% return, your money doubles in approximately 72 / 6 = 12 years. At a 9% return, it doubles in 72 / 9 = 8 years. At a 12% return, it doubles in just 6 years."
        ],
        "callout": {
          "type": "success",
          "title": "The Cost of Waiting 10 Years",
          "text": "If Person A invests $5,000/year from age 25 to 35 (total $50,000) at 8% and never adds another dollar, they will have $615,000 at age 65. If Person B starts at age 35 and invests $5,000/year for 30 consecutive years from age 35 to 65 (total $150,000), they will have $566,000. Person A contributed 3x less money but ended up with more wealth simply due to an earlier 10-year compounding runway."
        }
      }
    ],
    "faqs": [
      {
        "question": "What is the difference between simple interest and compound interest?",
        "answer": "Simple interest only calculates returns based on the original deposit (P x r x t). Compound interest calculates returns on the original deposit plus all previously accumulated interest, leading to exponential rather than linear growth."
      },
      {
        "question": "How does inflation affect compound interest?",
        "answer": "Inflation reduces the purchasing power of your future dollars. To find your 'real rate of return', subtract the inflation rate from your nominal return. For example, if your investment yields 8% but inflation is 3%, your real purchasing-power growth rate is approximately 5%."
      },
      {
        "question": "Can compound interest work against you?",
        "answer": "Yes, compounding works equally aggressively against borrowers. On credit cards with 20–24% interest compounded daily, unpaid balances balloon rapidly, which is why paying off high-interest debt must always precede investing."
      }
    ]
  },
  "simple-interest-vs-compound-interest": {
    "slug": "simple-interest-vs-compound-interest",
    "leadParagraph": "The choice between simple interest and compound interest is the fundamental fork in financial mathematics. While simple interest grows in a straight linear line, compound interest grows exponentially. Knowing which model applies to your auto loan, bond, certificate of deposit, or savings account can save—or earn—you thousands of dollars.",
    "keyTakeaways": [
      "Simple interest is calculated solely on the principal amount: I = P × r × t.",
      "Compound interest recalculates interest on both the principal and all accumulated interest: A = P × (1 + r/n)^(nt).",
      "Borrowers prefer simple interest (lower total financing costs); investors demand compound interest (accelerating returns).",
      "Over short durations (under 1 year), the difference is negligible; over 10+ years, compound returns outstrip simple interest by 200–500%."
    ],
    "sections": [
      {
        "id": "comparison-table",
        "heading": "1. Direct Side-by-Side Mathematical Comparison",
        "badge": "Core Differences",
        "paragraphs": [
          "Let's observe how $10,000 invested at 7% per year diverges over a 30-year timeframe under simple interest versus monthly compounded interest:"
        ],
        "table": {
          "title": "Growth of $10,000 at 7% (Simple vs Monthly Compound)",
          "headers": [
            "Year Milestone",
            "Simple Interest Balance",
            "Compound Interest Balance",
            "The Compounding Advantage"
          ],
          "rows": [
            [
              "Year 1",
              "$10,700",
              "$10,723",
              "+$23 (+0.2%)"
            ],
            [
              "Year 5",
              "$13,500",
              "$14,176",
              "+$676 (+5.0%)"
            ],
            [
              "Year 10",
              "$17,000",
              "$20,097",
              "+$3,097 (+18.2%)"
            ],
            [
              "Year 20",
              "$24,000",
              "$40,387",
              "+$16,387 (+68.3%)"
            ],
            [
              "Year 30",
              "$31,000",
              "$81,165",
              "+$50,165 (+161.8%)"
            ]
          ]
        }
      },
      {
        "id": "formulas-compared",
        "heading": "2. The Mathematical Formulas & Variables",
        "badge": "Equations",
        "paragraphs": [
          "Notice how time (t) behaves differently: In simple interest, time is a linear multiplier. In compound interest, time sits in the exponent!"
        ],
        "formulaBox": {
          "title": "Linear vs Exponential Equations",
          "formula": "Simple: Total = P + (P × r × t)  |  Compound: Total = P × (1 + r / n)^(n × t)",
          "variables": [
            {
              "symbol": "P",
              "meaning": "Initial capital or borrowed amount"
            },
            {
              "symbol": "r",
              "meaning": "Annual interest rate (e.g. 0.07)"
            },
            {
              "symbol": "t",
              "meaning": "Time in years"
            },
            {
              "symbol": "n",
              "meaning": "Compounding frequency per year"
            }
          ]
        }
      },
      {
        "id": "practical-applications",
        "heading": "3. Where You Encounter Each in Real Life",
        "badge": "Applications",
        "paragraphs": [
          "• Simple Interest Products: Auto loans, short-term personal promissory notes, treasury bills (T-bills), and conventional retail installment credit.",
          "• Compound Interest Products: Mortgages, high-yield savings accounts (HYSAs), certificates of deposit (CDs), mutual funds, 401(k) / Superannuation accounts, and revolving credit card debt."
        ],
        "callout": {
          "type": "warning",
          "title": "Borrower Rule of Thumb",
          "text": "When borrowing money, always seek loans calculated using simple daily interest rather than compounding monthly balances. When investing, insist on monthly or daily compounding accounts!"
        }
      }
    ],
    "faqs": [
      {
        "question": "Why do car loans use simple interest while mortgages use compound interest?",
        "answer": "Auto loans are shorter-term (3 to 7 years) and standardly utilize simple interest amortization based on daily balance. Mortgages are 25 to 30-year commitments where banks compound interest monthly against the outstanding principal."
      },
      {
        "question": "Can simple interest ever exceed compound interest?",
        "answer": "Mathematically no, provided the interest rates and time horizons are equal. For periods under 1 year, simple and compound interest are nearly identical; beyond 1 year, compound interest strictly exceeds simple interest."
      }
    ]
  },
  "how-to-calculate-bmi": {
    "slug": "how-to-calculate-bmi",
    "leadParagraph": "Body Mass Index (BMI) is the globally recognized screening metric established by the World Health Organization (WHO) and healthcare providers to classify body weight relative to height. By evaluating weight-to-height proportions, BMI helps identify potential cardiovascular, metabolic, and health risks across populations.",
    "keyTakeaways": [
      "BMI is calculated as weight in kilograms divided by height in meters squared (kg/m²).",
      "The standard healthy BMI range for adults is 18.5 to 24.9.",
      "BMI serves as an initial statistical screening tool, not a direct measurement of body fat percentage.",
      "Athletes with high muscle density may register as overweight or obese despite having very low body fat."
    ],
    "sections": [
      {
        "id": "bmi-formula",
        "heading": "1. The Official BMI Mathematical Formulas",
        "badge": "Formulas",
        "paragraphs": [
          "Depending on whether you use the Metric System (kilograms and centimeters) or the Imperial System (pounds and inches), the mathematical formula utilizes a conversion constant."
        ],
        "formulaBox": {
          "title": "Metric & Imperial BMI Formulas",
          "formula": "Metric: BMI = weight (kg) / [height (m)]²  |  Imperial: BMI = 703 × weight (lbs) / [height (in)]²",
          "variables": [
            {
              "symbol": "weight (kg)",
              "meaning": "Body mass in kilograms"
            },
            {
              "symbol": "height (m)",
              "meaning": "Stature in meters (e.g. 175 cm = 1.75 m)"
            },
            {
              "symbol": "703",
              "meaning": "Imperial conversion factor converting lbs/in² to kg/m²"
            }
          ]
        }
      },
      {
        "id": "bmi-categories",
        "heading": "2. WHO Adult BMI Classifications & Health Risk Bands",
        "badge": "Benchmarks",
        "paragraphs": [
          "The World Health Organization categorizes adult BMI values into standardized clinical brackets:"
        ],
        "table": {
          "title": "WHO Adult Body Mass Index Classifications",
          "headers": [
            "BMI Range (kg/m²)",
            "Classification",
            "Associated Metabolic Health Risk"
          ],
          "rows": [
            [
              "Less than 18.5",
              "Underweight",
              "Increased risk of nutritional deficiency & osteoporosis"
            ],
            [
              "18.5 – 24.9",
              "Normal / Healthy Weight",
              "Lowest statistical risk of chronic metabolic diseases"
            ],
            [
              "25.0 – 29.9",
              "Overweight (Pre-obese)",
              "Moderate risk of cardiovascular disease & hypertension"
            ],
            [
              "30.0 – 34.9",
              "Obese Class I",
              "High risk of type 2 diabetes, stroke, and joint stress"
            ],
            [
              "35.0 – 39.9",
              "Obese Class II (Severe)",
              "Very high risk of metabolic and cardiac events"
            ],
            [
              "40.0 and above",
              "Obese Class III (Morbid)",
              "Extremely high risk requiring clinical management"
            ]
          ]
        }
      },
      {
        "id": "worked-example",
        "heading": "3. Step-by-Step Manual Calculation Examples",
        "badge": "Calculation Steps",
        "paragraphs": [
          "Let's calculate BMI for a person who is 178 cm tall (1.78 meters) and weighs 74 kilograms."
        ],
        "workedExample": {
          "scenarioTitle": "Calculating BMI for a 74 kg, 178 cm Individual",
          "scenarioText": "Weight = 74 kg, Height = 178 cm = 1.78 m.",
          "steps": [
            {
              "stepTitle": "Step 1: Square the Height in Meters",
              "math": "1.78 × 1.78 = 3.1684 m²",
              "explanation": "Always multiply the height in meters by itself first."
            },
            {
              "stepTitle": "Step 2: Divide Weight by Squared Height",
              "math": "74 / 3.1684 ≈ 23.355 kg/m²",
              "explanation": "Divide total kilograms by the square of height."
            },
            {
              "stepTitle": "Step 3: Round to One Decimal Place",
              "math": "BMI ≈ 23.4",
              "explanation": "Clinical BMI is standardly rounded to a single decimal."
            }
          ],
          "finalResult": "Result: BMI = 23.4 (Classified as Normal / Healthy Weight, well within the 18.5–24.9 bracket)."
        }
      },
      {
        "id": "limitations",
        "heading": "4. Clinical Limitations: When BMI Can Be Misleading",
        "badge": "Important Context",
        "paragraphs": [
          "While BMI is an excellent epidemiological metric, it has notable limitations when applied to individuals without context:",
          "1. Muscle vs Fat: Muscle tissue is approximately 18% denser than fat tissue. Bodybuilders and strength athletes frequently register as 'Overweight' (BMI 26–29) despite maintaining under 10% body fat.",
          "2. Visceral Fat: BMI cannot differentiate where fat is distributed. Abdominal (visceral) fat carries significantly higher cardiovascular risk than subcutaneous fat.",
          "3. Age & Sarcopenia: Elderly individuals may lose muscle mass and bone density, displaying a 'normal' BMI while carrying excessive visceral body fat."
        ],
        "callout": {
          "type": "warning",
          "title": "Comprehensive Health Assessment",
          "text": "For a complete health assessment, pair your BMI measurement with Waist-to-Hip Ratio (WHR), Body Fat Percentage (via DEXA scan or bioimpedance), and routine blood lipid/glucose panels."
        }
      }
    ],
    "faqs": [
      {
        "question": "What is an ideal BMI for an adult?",
        "answer": "A BMI between 18.5 and 24.9 kg/m² is classified as healthy by the World Health Organization and CDC, correlating with the lowest statistical incidence of chronic lifestyle diseases."
      },
      {
        "question": "Does BMI apply the same way to children and teenagers?",
        "answer": "No. Children and teens (ages 2 to 19) must be evaluated using BMI-for-Age Percentiles, which account for continuous biological growth, age, and sex differences."
      },
      {
        "question": "How do I convert pounds and inches for BMI calculation?",
        "answer": "Multiply your weight in pounds by 703, then divide by your height in inches, and divide again by your height in inches. Formula: (Weight in lbs × 703) / (Height in inches)². Example for 160 lbs and 5'9\" (69 inches): (160 × 703) / (69 × 69) = 112,480 / 4,761 = 23.6."
      }
    ]
  },
  "bmr-vs-tdee-explained": {
    "slug": "bmr-vs-tdee-explained",
    "leadParagraph": "If you want to lose weight, gain lean muscle, or maintain your physique, understanding the physiological difference between Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) is non-negotiable. Eating below your BMR can trigger metabolic adaptation and muscle loss, while eating below your TDEE produces healthy, steady fat loss.",
    "keyTakeaways": [
      "BMR is the baseline calories your body burns in 24 hours just to stay alive (brain, organs, respiration).",
      "TDEE is your BMR multiplied by your physical activity factor, representing your true maintenance calories.",
      "Never consume fewer calories than your BMR for extended periods to protect thyroid and hormonal health.",
      "A healthy fat loss deficit is 300–500 calories below your TDEE, resulting in roughly 0.5–1 lb (0.25–0.5 kg) of fat loss per week."
    ],
    "sections": [
      {
        "id": "bmr-definition",
        "heading": "1. Basal Metabolic Rate (BMR): Your Biological Baseline",
        "badge": "Cellular Energy",
        "paragraphs": [
          "Imagine spending 24 continuous hours lying completely still in bed in a temperature-controlled room without eating. The energy your lungs require to expand, your heart to pump 100,000 times, and your liver to filter toxins is your Basal Metabolic Rate.",
          "For most non-athlete adults, BMR accounts for roughly 60% to 75% of all calories burned in a day."
        ],
        "formulaBox": {
          "title": "The Gold-Standard Mifflin-St Jeor BMR Equation",
          "formula": "Men: BMR = (10 × wt in kg) + (6.25 × ht in cm) - (5 × age) + 5\nWomen: BMR = (10 × wt in kg) + (6.25 × ht in cm) - (5 × age) - 161",
          "variables": [
            {
              "symbol": "wt in kg",
              "meaning": "Current body weight in kilograms"
            },
            {
              "symbol": "ht in cm",
              "meaning": "Standing height in centimeters"
            },
            {
              "symbol": "age",
              "meaning": "Age in completed years"
            }
          ]
        }
      },
      {
        "id": "tdee-multipliers",
        "heading": "2. Total Daily Energy Expenditure (TDEE) & Physical Activity Multipliers",
        "badge": "Activity Factors",
        "paragraphs": [
          "To find how many calories you actually burn in a day (TDEE), your BMR is multiplied by your Physical Activity Level (PAL):"
        ],
        "table": {
          "title": "Physical Activity Level (PAL) Multipliers",
          "headers": [
            "Activity Classification",
            "PAL Multiplier",
            "Description of Typical Lifestyle"
          ],
          "rows": [
            [
              "Sedentary",
              "1.200",
              "Desk job, little to no structured exercise, minimal walking"
            ],
            [
              "Lightly Active",
              "1.375",
              "Desk job plus light exercise/sports 1–3 days per week"
            ],
            [
              "Moderately Active",
              "1.550",
              "Moderate exercise/sports 3–5 days per week or active job"
            ],
            [
              "Very Active",
              "1.725",
              "Hard exercise/sports 6–7 days per week or manual labor job"
            ],
            [
              "Extremely Active",
              "1.900",
              "Endurance athlete, double daily training sessions, or intense construction labor"
            ]
          ]
        }
      },
      {
        "id": "deficit-math",
        "heading": "3. Creating an Actionable Deficit or Surplus",
        "badge": "Caloric Targets",
        "paragraphs": [
          "Once you know your TDEE, achieving your body composition goal is a matter of consistent thermodynamic management:",
          "• Fat Loss (Deficit): TDEE minus 500 kcal/day = ~3,500 kcal weekly deficit (roughly 1 lb or 0.45 kg of fat loss per week).",
          "• Lean Bulk (Surplus): TDEE plus 250–350 kcal/day = gradual muscle growth with minimal fat accumulation.",
          "• Weight Maintenance: Consume calories matching your TDEE exactly."
        ],
        "callout": {
          "type": "warning",
          "title": "The Danger of Starvation Diets",
          "text": "If your BMR is 1,600 kcal and your TDEE is 2,400 kcal, eating 1,200 kcal puts you 400 kcal below your biological organ maintenance requirements. Your body responds by downregulating NEAT (fidgeting), lowering thyroid hormones (T3), and breaking down muscle tissue for glucose."
        }
      }
    ],
    "faqs": [
      {
        "question": "Why do calorie trackers often overestimate TDEE?",
        "answer": "Smartwatches and fitness apps frequently double-count active calories on top of your baseline BMR, or overestimate the metabolic cost of cardiovascular exercise by 20–40%. Treat smartwatches as trends rather than exact calorie counters."
      },
      {
        "question": "Does lifting weights increase BMR?",
        "answer": "Yes! Every pound of skeletal muscle burns approximately 6–7 calories per day at rest, compared to 2 calories per pound of adipose fat tissue. Over time, increasing lean muscle mass permanently elevates your baseline metabolism."
      }
    ]
  },
  "how-to-calculate-loan-repayments": {
    "slug": "how-to-calculate-loan-repayments",
    "leadParagraph": "Calculating your loan repayments accurately is the single most important step before signing any mortgage, auto loan, or personal borrowing agreement. Understanding how monthly payments (EMI), amortization curves, and compounding interest operate empowers you to minimize total interest paid and eliminate debt years ahead of schedule.",
    "keyTakeaways": [
      "Fixed monthly payments (Equated Monthly Installments, or EMI) consist of two dynamic components: principal reduction and interest charges.",
      "In the early years of any long-term loan, the majority of every monthly payment goes toward interest, not principal.",
      "Extra repayments directly reduce the outstanding principal, shortening your loan tenure and saving thousands in interest.",
      "Loan comparison should always be based on Total Interest Payable and Comparison Rate (APR), rather than monthly payment alone."
    ],
    "sections": [
      {
        "id": "emi-formula",
        "heading": "1. The Universal Amortization Formula (EMI)",
        "badge": "Mathematical Formula",
        "paragraphs": [
          "Financial institutions worldwide calculate standard fixed-rate amortizing loan payments using the annuity equation:"
        ],
        "formulaBox": {
          "title": "Standard Loan Amortization Formula",
          "formula": "EMI = [P × r × (1 + r)^n] / [(1 + r)^n - 1]",
          "variables": [
            {
              "symbol": "EMI",
              "meaning": "Equated Monthly Installment (Fixed monthly repayment amount)"
            },
            {
              "symbol": "P",
              "meaning": "Loan Principal (The total borrowed amount)"
            },
            {
              "symbol": "r",
              "meaning": "Monthly interest rate (Annual rate divided by 12, expressed as a decimal)"
            },
            {
              "symbol": "n",
              "meaning": "Total number of monthly repayment periods (Loan term in years × 12)"
            }
          ]
        }
      },
      {
        "id": "worked-example",
        "heading": "2. Worked Numerical Example: $30,000 Auto Loan",
        "badge": "Step-by-Step",
        "paragraphs": [
          "Suppose you borrow $30,000 for a car loan at an annual interest rate of 6.0% with a 5-year repayment term (60 months)."
        ],
        "workedExample": {
          "scenarioTitle": "Calculating Monthly Payment on $30,000 at 6% over 5 Years",
          "scenarioText": "Principal P = $30,000, Annual Rate = 6.0%, Term = 5 years (60 months).",
          "steps": [
            {
              "stepTitle": "Step 1: Compute Monthly Interest Rate (r)",
              "math": "r = 0.06 / 12 = 0.005 (0.50% per month)",
              "explanation": "Divide the nominal annual rate by 12 months."
            },
            {
              "stepTitle": "Step 2: Calculate Compounding Factor (1 + r)^n",
              "math": "(1 + 0.005)^60 = (1.005)^60 ≈ 1.348850",
              "explanation": "Compound the monthly rate across 60 repayment cycles."
            },
            {
              "stepTitle": "Step 3: Calculate the Numerator",
              "math": "P × r × (1 + r)^n = $30,000 × 0.005 × 1.348850 = $202.3275",
              "explanation": "Multiply principal by monthly rate and compounding factor."
            },
            {
              "stepTitle": "Step 4: Calculate the Denominator and Final EMI",
              "math": "EMI = $202.3275 / (1.348850 - 1) = $202.3275 / 0.348850 ≈ $579.98",
              "explanation": "Divide numerator by the denominator to obtain the exact monthly payment."
            }
          ],
          "finalResult": "Monthly Repayment: $579.98. Over 60 months, Total Repaid = $34,799.04. Total Interest = $4,799.04."
        }
      },
      {
        "id": "amortization-table",
        "heading": "3. Understanding the Amortization Breakdown Over Time",
        "badge": "Payment Structure",
        "paragraphs": [
          "A common surprise for borrowers is why early payments barely reduce the loan balance. Because interest is charged on the outstanding balance, the initial payments are interest-heavy. As the principal diminishes, interest charges decrease, accelerating principal payoff."
        ],
        "table": {
          "title": "Sample Amortization Schedule on $30,000 Loan (Yearly Progression)",
          "headers": [
            "Year",
            "Total Paid That Year",
            "Principal Paid",
            "Interest Paid",
            "Remaining Balance"
          ],
          "rows": [
            [
              "Year 1",
              "$6,959.81",
              "$5,263.14",
              "$1,696.67",
              "$24,736.86"
            ],
            [
              "Year 2",
              "$6,959.81",
              "$5,587.64",
              "$1,372.17",
              "$19,149.22"
            ],
            [
              "Year 3",
              "$6,959.81",
              "$5,932.33",
              "$1,027.48",
              "$13,216.89"
            ],
            [
              "Year 4",
              "$6,959.81",
              "$6,298.31",
              "$661.50",
              "$6,918.58"
            ],
            [
              "Year 5",
              "$6,959.81",
              "$6,918.58",
              "$272.72",
              "$0.00"
            ]
          ]
        }
      },
      {
        "id": "extra-payments",
        "heading": "4. The Impact of Additional Repayments",
        "badge": "Debt Freedom Hack",
        "paragraphs": [
          "Paying just an extra $50 to $100 per month directly reduces the principal balance, bypassing future interest accumulation entirely."
        ],
        "callout": {
          "type": "success",
          "title": "Extra Payment Power",
          "text": "On a $400,000 30-year home loan at 6.5%, adding just $200 extra per month to your repayment shaves over 4.5 years off your mortgage and saves over $82,000 in total interest charges!"
        }
      }
    ],
    "faqs": [
      {
        "question": "What is the difference between nominal interest rate and comparison rate (APR)?",
        "answer": "The nominal rate is the base interest rate charged on borrowing. The comparison rate (APR) bundles the base rate with mandatory upfront fees, establishment charges, and ongoing monthly service fees, giving you the true total borrowing cost."
      },
      {
        "question": "Can I make bi-weekly payments instead of monthly?",
        "answer": "Yes! Paying half of your monthly payment every two weeks results in 26 half-payments per year, which equals 13 full monthly payments instead of 12. That single extra monthly payment per year accelerates mortgage payoff by several years without noticeable strain."
      }
    ]
  },
  "how-to-calculate-percentage": {
    "slug": "how-to-calculate-percentage",
    "leadParagraph": "Percentages are the universal language of finance, statistics, discounts, and real-world mathematics. The word percentage originates from the Latin 'per centum', meaning 'by the hundred'. Whether you are calculating shopping discounts, tips, tax rates, test scores, or financial growth, mastering these 3 fundamental formulas ensures mathematical confidence.",
    "keyTakeaways": [
      "Any percentage can be expressed interchangeably as a fraction (X/100) or a decimal (X ÷ 100).",
      "The 3 universal questions: What is X% of Y? X is what percent of Y? What is the percent change from X to Y?",
      "To find a percentage of any number mentally: 10% is moving the decimal left by one place; 1% is moving it left by two places.",
      "Percentage increase and percentage decrease are asymmetrical: a 50% drop requires a 100% gain to break even."
    ],
    "sections": [
      {
        "id": "three-formulas",
        "heading": "1. The Three Universal Percentage Formulas",
        "badge": "Core Formulas",
        "paragraphs": [
          "Virtually every percentage problem encountered in daily life falls into one of three distinct mathematical structures:"
        ],
        "formulaBox": {
          "title": "The 3 Core Percentage Equations",
          "formula": "1) Part = (Percentage / 100) × Total  |  2) Percentage = (Part / Total) × 100%  |  3) % Change = [(New - Old) / Old] × 100%",
          "variables": [
            {
              "symbol": "Formula 1",
              "meaning": "Finding the value: 'What is 15% of $80?' -> 0.15 × 80 = $12"
            },
            {
              "symbol": "Formula 2",
              "meaning": "Finding the percentage: 'You scored 42 out of 50' -> (42/50) × 100 = 84%"
            },
            {
              "symbol": "Formula 3",
              "meaning": "Finding growth/loss: 'Price rose from $40 to $50' -> [(50-40)/40] × 100 = +25%"
            }
          ]
        }
      },
      {
        "id": "worked-examples",
        "heading": "2. Worked Step-by-Step Practical Examples",
        "badge": "Real-World Scenarios",
        "paragraphs": [
          "Let's solve three practical real-world problems step by step:"
        ],
        "workedExample": {
          "scenarioTitle": "Scenario: Calculating a 30% Clearance Discount on a $120 Jacket",
          "scenarioText": "Original price = $120. Store offers a 30% discount. What is the discount amount and final price?",
          "steps": [
            {
              "stepTitle": "Step 1: Convert Percentage to Decimal",
              "math": "30% = 30 / 100 = 0.30",
              "explanation": "Always divide the percentage value by 100."
            },
            {
              "stepTitle": "Step 2: Multiply by Original Total",
              "math": "0.30 × $120 = $36.00 Discount Amount",
              "explanation": "You save $36.00 on the purchase."
            },
            {
              "stepTitle": "Step 3: Subtract from Original Price",
              "math": "$120.00 - $36.00 = $84.00 Final Price",
              "explanation": "Alternatively, multiply original price directly by (100% - 30% = 70%): $120 × 0.70 = $84.00."
            }
          ],
          "finalResult": "Final Discounted Price: $84.00 (Total Savings: $36.00)."
        }
      },
      {
        "id": "mental-math",
        "heading": "3. Mental Math Shortcuts for Instant Percentage Calculations",
        "badge": "Speed Math",
        "paragraphs": [
          "You do not need a calculator for common daily percentages like restaurant tips or quick store discounts. Use the building block method:",
          "• 10% Shortcut: Move the decimal point one position to the left. 10% of $65.00 is $6.50.",
          "• 5% Shortcut: Find 10% and divide by 2. 5% of $65.00 is $3.25.",
          "• 20% Shortcut: Find 10% and multiply by 2. 20% of $65.00 is $13.00.",
          "• 15% Tip Shortcut: Combine 10% + 5%. On $65.00: $6.50 + $3.25 = $9.75.",
          "• Reversibility Trick: X% of Y is always equal to Y% of X! For example, 16% of 50 sounds difficult, but 50% of 16 is instantly 8!"
        ],
        "callout": {
          "type": "info",
          "title": "The Reversibility Rule",
          "text": "Formula: x% × y = (x / 100) × y = (x × y) / 100 = (y / 100) × x = y% × x. If a percentage looks hard, flip it! Calculating 8% of 25 is mathematically identical to 25% of 8 = 2!"
        }
      }
    ],
    "faqs": [
      {
        "question": "How do I calculate percentage increase or decrease?",
        "answer": "Subtract the original number from the new number, divide that difference by the original number, and multiply by 100. Formula: [(New - Old) / Old] × 100%. If positive, it is an increase; if negative, it is a decrease."
      },
      {
        "question": "Why does a 50% drop require a 100% gain to recover?",
        "answer": "Because the base changes. If a $100 stock drops 50%, it becomes $50. To return from $50 back to $100, it must gain $50 on a $50 base, which is a 100% increase ($50 / $50 × 100%)."
      }
    ]
  },
  "how-to-calculate-wam": {
    "slug": "how-to-calculate-wam",
    "leadParagraph": "Weighted Average Mark (WAM) is the standard academic grading metric utilized by leading Australian universities—including the University of Sydney, UNSW, University of Melbourne, and Monash University. Unlike a simple average, WAM weights every numerical score by the credit point value of the unit, providing a fair and accurate measure of academic performance.",
    "keyTakeaways": [
      "WAM reflects actual numerical marks (0–100), unlike GPA which collapses marks into letter grades or grade points.",
      "Every subject contributes in proportion to its credit point weighting: a 12-credit capstone unit impacts your WAM twice as much as a 6-credit elective.",
      "Some universities apply year-level multipliers (e.g., Year 1 units weighted at 0.5x, Year 3 units weighted at 2.0x).",
      "Most honours admissions, scholarships, and graduate employment screening programs set cutoffs based strictly on WAM."
    ],
    "sections": [
      {
        "id": "wam-formula",
        "heading": "1. The Standard Australian WAM Mathematical Formula",
        "badge": "Official Formula",
        "paragraphs": [
          "The universal formula for calculating Weighted Average Mark across completed subjects is:"
        ],
        "formulaBox": {
          "title": "Official Weighted Average Mark Formula",
          "formula": "WAM = [ Σ (Mark × Credit Points) ] / [ Σ (Credit Points) ]",
          "variables": [
            {
              "symbol": "Mark",
              "meaning": "The actual percentage score achieved in the subject (0 to 100)"
            },
            {
              "symbol": "Credit Points (CP)",
              "meaning": "The academic weight assigned to that course unit (typically 6 CP in Australia)"
            },
            {
              "symbol": "Σ",
              "meaning": "Sum of all enrolled and graded course units"
            }
          ]
        }
      },
      {
        "id": "worked-transcript",
        "heading": "2. Worked Step-by-Step Example (Semester Transcript)",
        "badge": "Transcript Case Study",
        "paragraphs": [
          "Let's calculate the semester WAM for an undergraduate student completing 4 units:"
        ],
        "workedExample": {
          "scenarioTitle": "Calculating WAM Across 4 University Units",
          "scenarioText": "Unit 1: MATH1001 (6 CP) - 82% | Unit 2: ECON1010 (6 CP) - 76% | Unit 3: ACCT1002 (6 CP) - 68% | Unit 4: DATA1001 (6 CP) - 88%.",
          "steps": [
            {
              "stepTitle": "Step 1: Calculate Weighted Product for Each Unit",
              "math": "(82 × 6) + (76 × 6) + (68 × 6) + (88 × 6) = 492 + 456 + 408 + 528 = 1,884",
              "explanation": "Multiply each numerical mark by its credit points, then sum them up."
            },
            {
              "stepTitle": "Step 2: Calculate Total Completed Credit Points",
              "math": "6 + 6 + 6 + 6 = 24 Credit Points",
              "explanation": "Sum the credit points across all completed units."
            },
            {
              "stepTitle": "Step 3: Divide Total Products by Total Credit Points",
              "math": "WAM = 1,884 / 24 = 78.50",
              "explanation": "Divide total weighted marks by total credits."
            }
          ],
          "finalResult": "Final Semester WAM: 78.50 (Classified as a Distinction Average)."
        }
      },
      {
        "id": "grading-tiers",
        "heading": "3. Australian University Grade & WAM Classifications",
        "badge": "Academic Tiers",
        "paragraphs": [
          "Australian universities standardize academic classifications into five distinct performance tiers:"
        ],
        "table": {
          "title": "Standard Australian Higher Education Grade Bands",
          "headers": [
            "Mark Range (%)",
            "Grade Code",
            "Classification Name",
            "Honours & Career Implications"
          ],
          "rows": [
            [
              "85 – 100",
              "HD",
              "High Distinction",
              "Top ~5% of cohort; eligible for University Medal & Tier-1 consulting/law"
            ],
            [
              "75 – 84",
              "D",
              "Distinction",
              "Strong performance; competitive for First Class Honours & top graduate programs"
            ],
            [
              "65 – 74",
              "C",
              "Credit",
              "Solid benchmark; meets entry thresholds for most postgraduate Master's degrees"
            ],
            [
              "50 – 64",
              "P",
              "Pass",
              "Satisfactory completion of curriculum; meets graduation requirements"
            ],
            [
              "0 – 49",
              "F / FL",
              "Fail",
              "Course must be repeated or replaced; significantly depresses cumulative WAM"
            ]
          ]
        }
      },
      {
        "id": "common-mistakes",
        "heading": "4. Common WAM Calculation Mistakes to Avoid",
        "badge": "Pitfalls",
        "paragraphs": [
          "1. Treating All Units Equally: Forgetting that a 12 CP dissertation is weighted twice as much as a 6 CP unit.",
          "2. Misinterpreting Pass/Fail Units: Ungraded Pass (Satisfactory/Unsatisfactory) units award credit points toward your degree but are mathematically EXCLUDED from WAM calculations.",
          "3. Ignoring Failed Unit Impact: If you score a 35 in a failed unit, that 35 remains permanently in your WAM calculation, dragging down your average unless formal academic concession is granted."
        ],
        "callout": {
          "type": "warning",
          "title": "Year-Level Weighting Check",
          "text": "Always check your university faculty handbook. Some faculties (e.g. Engineering at USYD or UNSW) apply Weighted Level Formula: WAM = Σ(Level × CP × Mark) / Σ(Level × CP), meaning 4th-year thesis units have 4x the weight of 1st-year introductory units!"
        }
      }
    ],
    "faqs": [
      {
        "question": "What is a good WAM at university?",
        "answer": "A WAM of 65–74 (Credit) is considered solid and respectable. A WAM of 75+ (Distinction) is considered strong and puts you in the top 15–20% of your faculty. An 85+ (High Distinction) places you in the top 2–5% of graduates."
      },
      {
        "question": "Can I convert my WAM to a 4.0 or 7.0 GPA?",
        "answer": "Yes, though formulas vary by institution. In general: 85+ WAM translates to a 4.0/4.0 US GPA (7.0 on an Australian 7.0 scale); 75–84 WAM translates to 3.5–3.8 GPA (6.0 on 7.0 scale); 65–74 translates to 3.0 GPA (5.0 on 7.0 scale)."
      }
    ]
  },
  "what-is-a-good-wam": {
    "slug": "what-is-a-good-wam",
    "leadParagraph": "Whether your goal is landing a prestigious graduate job at an investment bank or management consultancy, qualifying for Honours, or securing a competitive Master's placement, knowing where your Weighted Average Mark (WAM) stands in the national Australian distribution is essential for career strategy.",
    "keyTakeaways": [
      "A Pass WAM (50–64) satisfies graduation but limits competitive graduate schemes.",
      "A Credit WAM (65–74) is the benchmark standard for most Australian university cohorts and qualifies for standard postgraduate entry.",
      "A Distinction WAM (75–84) opens doors to Tier-1 employers (Big 4, top law firms, tech leaders) and First Class Honours programs.",
      "A High Distinction WAM (85+) places you in the top 2–5% of university graduates nationwide."
    ],
    "sections": [
      {
        "id": "cohort-distribution",
        "heading": "1. The Australian University WAM Bell Curve",
        "badge": "Statistical Distribution",
        "paragraphs": [
          "Unlike American universities where grade inflation has shifted median GPAs above 3.3, Australian higher education continues to employ strict criterion and norm-referenced marking. The median WAM across Go8 universities (such as USYD, UNSW, and Melbourne) typically hovers between 67 and 71."
        ],
        "table": {
          "title": "Cohort Distribution Across Australian Universities",
          "headers": [
            "WAM Band",
            "Academic Classification",
            "Approximate Cohort %",
            "Typical Graduate Pathways"
          ],
          "rows": [
            [
              "85.0 – 100.0",
              "High Distinction (HD)",
              "~3% – 5%",
              "University Medal, elite investment banking, Supreme Court associateships, Rhodes/Fulbright scholarships"
            ],
            [
              "75.0 – 84.9",
              "Distinction (D)",
              "~15% – 20%",
              "First Class Honours, Tier-1 consulting (MBB), Big 4 graduate fast-tracks, Commonwealth postgraduate awards"
            ],
            [
              "65.0 – 74.9",
              "Credit (C)",
              "~45% – 55%",
              "Standard corporate graduate schemes, general Master's programs, professional accreditation"
            ],
            [
              "50.0 – 64.9",
              "Pass (P)",
              "~20% – 25%",
              "Satisfies degree completion; hiring focus shifts heavily to work experience, internships, and portfolio projects"
            ]
          ]
        }
      },
      {
        "id": "industry-cutoffs",
        "heading": "2. Industry Hiring Thresholds by Sector",
        "badge": "Career Screening",
        "paragraphs": [
          "Different commercial sectors enforce distinct initial screening filters for automated resume parsing:",
          "• Management Consulting (McKinsey, BCG, Bain): Strictly require a Distinction WAM (75+), with successful candidates frequently possessing 80+ WAMs accompanied by strong leadership extracurriculars.",
          "• Commercial Law & Investment Banking: Hard cutoffs typically set at 75.0 WAM for summer clerkships and analyst programs.",
          "• Big 4 Accounting & Advisory (PwC, Deloitte, EY, KPMG): Benchmark cutoff is typically a 65.0 WAM (Credit average).",
          "• Tech & Software Engineering (Google, Atlassian, Canva): Prioritize coding assessments, GitHub repositories, and algorithmic interviews; a 65+ WAM is generally sufficient to pass HR filters."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can I get a good job with a 65 WAM?",
        "answer": "Yes, absolutely! The majority of Australian graduates possess WAMs between 65 and 72. In tech, marketing, small-to-medium enterprise, and public sector roles, practical internship experience, communication skills, and personal projects outweigh GPA/WAM numbers."
      },
      {
        "question": "Does First Year WAM matter?",
        "answer": "It depends on your degree and institution. Some universities exclude or downweight first-year marks from Honours and faculty WAM calculations. However, first-year marks are permanently visible on your official transcript and heavily impact penultimate-year internship screening."
      }
    ]
  },
  "gpa-scales-explained": {
    "slug": "gpa-scales-explained",
    "leadParagraph": "Grade Point Average (GPA) is the primary quantitative assessment metric utilized by universities and graduate admissions worldwide. However, grading systems differ radically across borders: while the United States standardly utilizes a 4.0 scale, Australian universities operate on both 7.0 and 4.0 scales, and Indian universities use a 10.0 CGPA system. Understanding these conversion mechanics prevents severe misrepresentation on academic CVs.",
    "keyTakeaways": [
      "The US 4.0 scale assigns 4.0 for A, 3.0 for B, 2.0 for C, 1.0 for D, and 0.0 for F.",
      "The Australian 7.0 scale assigns 7.0 for High Distinction (HD), 6.0 for Distinction (D), 5.0 for Credit (C), and 4.0 for Pass (P).",
      "Direct mathematical ratio conversion (e.g. dividing by 7 and multiplying by 4) is flawed because passing thresholds differ (50% in Australia vs 60–70% in the US).",
      "World Education Services (WES) evaluates foreign transcripts course-by-course based on country-specific grading benchmarks."
    ],
    "sections": [
      {
        "id": "scales-matrix",
        "heading": "1. International Grade Conversion Matrix",
        "badge": "Comparative Standards",
        "paragraphs": [
          "The table below aligns standard Australian university grades with equivalent US 4.0 GPA points and Indian 10.0 CGPA bands:"
        ],
        "table": {
          "title": "Comprehensive International Grade Conversion Table",
          "headers": [
            "Percentage Band (%)",
            "Australian Grade",
            "US 4.0 GPA",
            "Australian 7.0 GPA",
            "Indian 10.0 CGPA"
          ],
          "rows": [
            [
              "85 – 100%",
              "High Distinction (HD)",
              "4.00 (A+ / A)",
              "7.00",
              "9.50 – 10.0"
            ],
            [
              "80 – 84%",
              "Distinction (D)",
              "3.80 (A-)",
              "6.50",
              "8.75 – 9.49"
            ],
            [
              "75 – 79%",
              "Distinction (D)",
              "3.50 (B+)",
              "6.00",
              "8.00 – 8.74"
            ],
            [
              "70 – 74%",
              "Credit (C)",
              "3.20 (B)",
              "5.50",
              "7.25 – 7.99"
            ],
            [
              "65 – 69%",
              "Credit (C)",
              "3.00 (B)",
              "5.00",
              "6.50 – 7.24"
            ],
            [
              "50 – 64%",
              "Pass (P)",
              "2.00 (C)",
              "4.00",
              "5.00 – 6.49"
            ],
            [
              "0 – 49%",
              "Fail (F)",
              "0.00 (F)",
              "0.00",
              "0.00 – 4.99"
            ]
          ]
        }
      },
      {
        "id": "conversion-rules",
        "heading": "2. Why Simple Proportional Conversion Fails",
        "badge": "Common Trap",
        "paragraphs": [
          "A frequent mistake made by international applicants is performing linear math: taking an Australian 5.6 / 7.0 GPA and computing (5.6 / 7.0) × 4.0 = 3.20.",
          "This is mathematically incorrect because the bottom of the scale does not align: on a 7.0 scale, 4.0 is a Pass (50%), whereas on a 4.0 scale, 2.0 is a Pass. Everything below 4.0 on an Australian scale is failing credit. Accurate conversion requires mapping each subject grade individually to quality points before averaging."
        ],
        "callout": {
          "type": "warning",
          "title": "Official Admissions Advice",
          "text": "Never self-convert your GPA on formal postgraduate applications unless explicitly instructed. Quote your exact institutional WAM or GPA as printed on your certified transcript, accompanied by the university's official grading key."
        }
      }
    ],
    "faqs": [
      {
        "question": "What is a 3.0 GPA in percentage?",
        "answer": "On a standard US scale, a 3.0 GPA represents a 'B' average, typically corresponding to 83–86% in the US curriculum, but equivalent to roughly a 65–70% Credit average in the Australian or UK university system."
      },
      {
        "question": "How does WES calculate GPA for international students?",
        "answer": "WES (World Education Services) evaluates each individual course grade against their proprietary country database, assigning semester-hour weights and standardized quality points (4.0 scale) to recompute a unified cumulative US GPA."
      }
    ]
  },
  "how-to-calculate-sip": {
    "slug": "how-to-calculate-sip",
    "leadParagraph": "A Systematic Investment Plan (SIP) lets you invest a fixed amount in a mutual fund at regular intervals, usually every month, instead of investing a large lump sum at once. SIP returns are not fixed interest: they depend on market performance, so a SIP calculator estimates a maturity value for an assumed annual return, it does not guarantee that return.",
    "keyTakeaways": [
      "SIP maturity value is calculated with monthly compounding: divide the assumed annual return by 12 to get the monthly rate.",
      "Payments made at the beginning of each month earn one extra month of compounding compared with end-of-month payments, so always state which timing you used.",
      "Time matters more than timing the market: the same monthly amount over 20 years can produce a far larger maturity value than over 10 years at the same assumed return.",
      "A SIP return is an estimate, not a promise. Actual mutual fund returns vary with the market and can be lower, or even negative, in some periods."
    ],
    "sections": [
      {
        "id": "sip-formula",
        "heading": "1. The SIP Formula",
        "badge": "Core Formula",
        "paragraphs": [
          "For a fixed monthly investment P, a monthly rate i and n monthly instalments, the maturity value for end-of-month payments is P x [((1 + i)^n - 1) / i]. For beginning-of-month payments, multiply that result by (1 + i). This site's SIP calculator uses beginning-of-month payments, so its results follow the second version."
        ],
        "formulaBox": {
          "title": "SIP Maturity Value Formula",
          "formula": "FV = P x [((1 + i)^n - 1) / i] x (1 + i)  [beginning-of-month]",
          "variables": [
            { "symbol": "P", "meaning": "Monthly SIP instalment" },
            { "symbol": "i", "meaning": "Monthly rate, equal to assumed annual return divided by 12" },
            { "symbol": "n", "meaning": "Total number of monthly instalments" },
            { "symbol": "FV", "meaning": "Estimated maturity value at the end of the SIP" }
          ]
        }
      },
      {
        "id": "sip-worked-example",
        "heading": "2. Worked Example: Rs 10,000 per Month for 10 Years",
        "badge": "Worked Example",
        "paragraphs": [
          "Take a SIP of Rs 10,000 per month at an assumed 12% annual return for 10 years, with payments at the beginning of each month."
        ],
        "workedExample": {
          "scenarioTitle": "Rs 10,000 per Month, 12% Assumed Return, 10 Years",
          "scenarioText": "Monthly investment Rs 10,000 | Assumed annual return 12% | Duration 10 years (120 months) | Beginning-of-month payments.",
          "steps": [
            { "stepTitle": "Step 1: Find the monthly rate and number of instalments", "math": "i = 0.12 / 12 = 0.01; n = 10 x 12 = 120", "explanation": "The annual return is converted to a monthly rate, and years are converted to months." },
            { "stepTitle": "Step 2: Total invested", "math": "Rs 10,000 x 120 = Rs 12,00,000", "explanation": "This is the principal you actually paid in, before any returns." },
            { "stepTitle": "Step 3: Estimated maturity value", "math": "FV = 10,000 x [((1.01)^120 - 1) / 0.01] x 1.01 = Rs 23,23,391", "explanation": "The (1.01) factor at the end is the beginning-of-month adjustment. Without it, the end-of-month value would be Rs 23,00,387." }
          ],
          "finalResult": "Estimated maturity value: Rs 23,23,391 (invested Rs 12,00,000; estimated returns Rs 11,23,391). This is an illustration at an assumed 12% return, not a guaranteed outcome."
        }
      },
      {
        "id": "sip-vs-lump-sum",
        "heading": "3. SIP vs Lump Sum, and Why Timing Must Be Stated",
        "badge": "Comparison",
        "paragraphs": [
          "A lump sum invested at once earns returns on the full amount from day one, while a SIP earns returns gradually as each instalment is invested. That is why the same annual return gives different results for the two methods, and why two SIP calculators can differ by a small amount if one assumes beginning-of-month payments and the other assumes end-of-month payments. Always check the timing assumption before comparing two results."
        ],
        "table": {
          "title": "Same Monthly Amount, Different Durations (12% assumed, beginning-of-month)",
          "headers": ["Monthly SIP", "Duration", "Invested", "Estimated Maturity Value"],
          "rows": [
            ["Rs 5,000", "5 years", "Rs 3,00,000", "Rs 4,12,432"],
            ["Rs 10,000", "10 years", "Rs 12,00,000", "Rs 23,23,391"],
            ["Rs 5,000", "20 years", "Rs 12,00,000", "Rs 49,95,740"]
          ]
        },
        "callout": { "type": "warning", "title": "Returns are not guaranteed", "text": "Mutual fund SIP returns depend on market performance. An assumed 12% return is used here only to show the maths. Check the fund's actual past performance, fees and risk level before investing, and remember past performance does not guarantee future returns." },
        "pitfalls": [
          { "mistake": "Comparing SIP results without checking payment timing", "fix": "State beginning-of-month or end-of-month in every example, as this guide does." },
          { "mistake": "Treating an assumed return as a fixed interest rate", "fix": "Use the assumed return only as a scenario. Test lower returns too, for example 8% and 10%, before making a decision." },
          { "mistake": "Stopping a SIP after a market fall", "fix": "A fall means new instalments buy more units at lower prices. Whether to continue depends on your goals and risk tolerance, not on a single month's return." }
        ]
      }
    ],
    "faqs": [
      { "question": "How do I calculate SIP returns by hand?", "answer": "Use FV = P x [((1 + i)^n - 1) / i], multiplied by (1 + i) for beginning-of-month payments, where i is the assumed annual return divided by 12 and n is the number of months. For Rs 10,000 per month at 12% for 10 years, beginning-of-month, the estimated maturity value is Rs 23,23,391." },
      { "question": "Why do two SIP calculators give different results for the same inputs?", "answer": "The most common reason is payment timing: beginning-of-month versus end-of-month. Other reasons include monthly versus annual compounding, and rounding. Check the timing and compounding assumptions before comparing results." },
      { "question": "Is a SIP return guaranteed?", "answer": "No. SIPs invest in mutual funds, whose returns vary with the market. A SIP calculator shows an estimate for an assumed return. It is not a promise of future returns." }
    ]
  },
  "how-to-calculate-ppf": {
    "slug": "how-to-calculate-ppf",
    "leadParagraph": "The Public Provident Fund (PPF) is a long-term, government-backed savings scheme in India with a 15-year lock-in. You can deposit between Rs 500 and Rs 1,50,000 per financial year. Interest is compounded annually and credited once a year, and the rate is declared quarterly, so it can change during the 15 years. A PPF calculator therefore shows an estimate for an assumed rate, not a guaranteed maturity value.",
    "keyTakeaways": [
      "PPF has a 15-year lock-in, with deposits from Rs 500 to Rs 1,50,000 per financial year.",
      "Interest is compounded annually. Deposits made before 5 April earn interest for the full financial year, which is why April deposits give the highest maturity value in the illustration below.",
      "The worked example below uses 7.1% as an assumed rate throughout. If the declared rate changes, the maturity value will change too.",
      "PPF interest and maturity are tax-exempt under the current EEE treatment in India, subject to tax law at the time of withdrawal. This guide is an illustration, not tax advice."
    ],
    "sections": [
      {
        "id": "ppf-formula",
        "heading": "1. The PPF Formula",
        "badge": "Core Formula",
        "paragraphs": [
          "For a fixed annual deposit A, an annual rate r and n years, with deposits at the start of each year (April deposits), the maturity value is A x [((1 + r)^n - 1) / r] x (1 + r). Without the final (1 + r) factor, the same formula gives the value for end-of-year deposits."
        ],
        "formulaBox": {
          "title": "PPF Maturity Value Formula",
          "formula": "FV = A x [((1 + r)^n - 1) / r] x (1 + r)  [April deposits]",
          "variables": [
            { "symbol": "A", "meaning": "Annual PPF deposit, between Rs 500 and Rs 1,50,000" },
            { "symbol": "r", "meaning": "Assumed annual interest rate, declared quarterly" },
            { "symbol": "n", "meaning": "Number of years, 15 for the initial lock-in" },
            { "symbol": "FV", "meaning": "Estimated maturity value at the end of the term" }
          ]
        }
      },
      {
        "id": "ppf-worked-example",
        "heading": "2. Worked Example: Rs 1,50,000 per Year for 15 Years",
        "badge": "Worked Example",
        "paragraphs": [
          "Take the maximum annual deposit of Rs 1,50,000, deposited each April, at an assumed 7.1% annual rate for the full 15-year lock-in."
        ],
        "workedExample": {
          "scenarioTitle": "Rs 1,50,000 per Year, 7.1% Assumed Rate, 15 Years",
          "scenarioText": "Annual deposit Rs 1,50,000 | Assumed annual rate 7.1% | Duration 15 years | April deposits, annual compounding.",
          "steps": [
            { "stepTitle": "Step 1: Total deposited", "math": "Rs 1,50,000 x 15 = Rs 22,50,000", "explanation": "This is the principal you actually paid in over 15 years." },
            { "stepTitle": "Step 2: Apply the PPF formula", "math": "FV = 1,50,000 x [((1.071)^15 - 1) / 0.071] x 1.071 = Rs 40,68,209", "explanation": "The final (1.071) factor is the April-deposit adjustment. Deposits made later in the year would earn less." },
            { "stepTitle": "Step 3: Interest earned", "math": "Rs 40,68,209 - Rs 22,50,000 = Rs 18,18,209", "explanation": "Interest is almost as large as the principal over 15 years, because compounding has time to work." }
          ],
          "finalResult": "Estimated maturity value: Rs 40,68,209 (deposited Rs 22,50,000; estimated interest Rs 18,18,209). This assumes 7.1% throughout and April deposits; a different declared rate or deposit timing will change the result."
        }
      },
      {
        "id": "ppf-comparison",
        "heading": "3. Different Annual Deposits, Same 15 Years and Assumed Rate",
        "badge": "Comparison",
        "paragraphs": [
          "Because PPF interest compounds annually, a larger annual deposit does not just add principal, it also adds interest on every earlier deposit. The table below keeps the same 7.1% assumed rate and April deposits for all rows."
        ],
        "table": {
          "title": "PPF Maturity by Annual Deposit (7.1% assumed, 15 years, April deposits)",
          "headers": ["Annual Deposit", "Total Deposited", "Estimated Maturity Value"],
          "rows": [
            ["Rs 50,000", "Rs 7,50,000", "Rs 13,56,070"],
            ["Rs 1,00,000", "Rs 15,00,000", "Rs 27,12,139"],
            ["Rs 1,50,000", "Rs 22,50,000", "Rs 40,68,209"]
          ]
        },
        "callout": { "type": "info", "title": "Deposit timing matters", "text": "PPF interest for a month is calculated on the lowest balance between the 5th and the last day of that month. Depositing before 5 April therefore earns interest for the full financial year, while a deposit at the end of March earns almost no interest for that year." },
        "pitfalls": [
          { "mistake": "Assuming the current rate stays fixed for 15 years", "fix": "Treat any PPF result as a scenario at an assumed rate. Re-run it at a lower rate, for example 6.5%, to see the range." },
          { "mistake": "Depositing late in the financial year and expecting full-year interest", "fix": "Deposit before 5 April if you want the deposit to earn interest for that full year." },
          { "mistake": "Forgetting the Rs 1,50,000 annual limit", "fix": "Deposits above Rs 1,50,000 in a year do not earn interest on the excess, so split large amounts across years instead." }
        ]
      }
    ],
    "faqs": [
      { "question": "How do I calculate PPF maturity by hand?", "answer": "Use FV = A x [((1 + r)^n - 1) / r] x (1 + r) for April deposits, where A is the annual deposit, r is the assumed annual rate and n is 15 years. For Rs 1,50,000 per year at 7.1% for 15 years, the estimated maturity value is Rs 40,68,209." },
      { "question": "What is the minimum and maximum PPF deposit?", "answer": "You must deposit at least Rs 500 per financial year to keep the account active, and you can deposit at most Rs 1,50,000 per financial year. The account has a 15-year lock-in, with extension in blocks of 5 years after that." },
      { "question": "Is PPF maturity guaranteed?", "answer": "PPF is government-backed, but the interest rate is declared quarterly and can change. A calculator result at 7.1% is therefore an estimate, not a guaranteed maturity value." }
    ]
  },
  "how-to-calculate-gst": {
    "slug": "how-to-calculate-gst",
    "leadParagraph": "Goods and Services Tax (GST) is a consumption tax added to the price of most goods and services in India. GST rates are commonly 0%, 5%, 12%, 18% or 28%, depending on the item. The maths is simple, but the common mistake is mixing up the two directions: adding GST to a tax-exclusive price, and removing GST from a tax-inclusive price, which need different formulas.",
    "keyTakeaways": [
      "To add GST: GST amount = base price x GST rate, and total price = base price + GST amount.",
      "To remove GST from an inclusive price: base price = total price / (1 + GST rate), not total price minus the rate percentage.",
      "For intra-state sales, GST is split equally into CGST and SGST. For inter-state sales, it is charged as IGST at the full rate.",
      "GST rates depend on the goods or services category. Always check the applicable rate for the item, do not assume 18%."
    ],
    "sections": [
      {
        "id": "gst-formula",
        "heading": "1. The GST Formulas",
        "badge": "Core Formula",
        "paragraphs": [
          "If the price shown is exclusive of GST, multiply the base price by the rate to get the GST amount, then add it. If the price shown already includes GST, divide by (1 + rate) to recover the base price first, then subtract it from the total to get the GST amount."
        ],
        "formulaBox": {
          "title": "GST Formulas",
          "formula": "Adding GST: Total = Base x (1 + r). Removing GST: Base = Total / (1 + r); GST = Total - Base.",
          "variables": [
            { "symbol": "Base", "meaning": "Price before GST" },
            { "symbol": "Total", "meaning": "Price including GST" },
            { "symbol": "r", "meaning": "GST rate as a decimal, for example 0.18 for 18%" },
            { "symbol": "GST", "meaning": "Tax amount included in, or added to, the price" }
          ]
        }
      },
      {
        "id": "gst-worked-example",
        "heading": "2. Worked Example: Rs 10,000 at 18% GST",
        "badge": "Worked Example",
        "paragraphs": [
          "Take a product with a base price of Rs 10,000 and a GST rate of 18%."
        ],
        "workedExample": {
          "scenarioTitle": "Rs 10,000 Base Price, 18% GST",
          "scenarioText": "Base price Rs 10,000 | GST rate 18% | Intra-state sale, so CGST and SGST split equally.",
          "steps": [
            { "stepTitle": "Step 1: GST amount", "math": "Rs 10,000 x 0.18 = Rs 1,800", "explanation": "The GST amount is 18% of the base price." },
            { "stepTitle": "Step 2: Total price", "math": "Rs 10,000 + Rs 1,800 = Rs 11,800", "explanation": "The customer pays Rs 11,800 in total." },
            { "stepTitle": "Step 3: Split for an intra-state sale", "math": "CGST = Rs 1,800 / 2 = Rs 900; SGST = Rs 900", "explanation": "For an inter-state sale, the same Rs 1,800 would instead be charged as IGST, with no CGST or SGST split." },
            { "stepTitle": "Step 4: Check the reverse direction", "math": "Rs 11,800 / 1.18 = Rs 10,000; GST = Rs 11,800 - Rs 10,000 = Rs 1,800", "explanation": "Dividing by 1.18 recovers the same base price. Subtracting 18% of Rs 11,800 would wrongly give Rs 9,676, which is why the division method must be used." }
          ],
          "finalResult": "Total price Rs 11,800, of which GST is Rs 1,800 (CGST Rs 900 + SGST Rs 900 for an intra-state sale, or IGST Rs 1,800 for an inter-state sale)."
        }
      },
      {
        "id": "gst-rates",
        "heading": "3. GST at Different Rates on the Same Base Price",
        "badge": "Comparison",
        "paragraphs": [
          "The table below keeps the same Rs 10,000 base price and shows how the total changes with the rate. It also shows why a small rate change matters on a large purchase."
        ],
        "table": {
          "title": "GST on a Rs 10,000 Base Price by Rate",
          "headers": ["GST Rate", "GST Amount", "Total Price"],
          "rows": [
            ["0%", "Rs 0", "Rs 10,000"],
            ["5%", "Rs 500", "Rs 10,500"],
            ["12%", "Rs 1,200", "Rs 11,200"],
            ["18%", "Rs 1,800", "Rs 11,800"],
            ["28%", "Rs 2,800", "Rs 12,800"]
          ]
        },
        "callout": { "type": "warning", "title": "Check the rate for the item", "text": "GST rates are set by category, and some items are exempt or taxed at a different rate. This guide shows the maths once the rate is known; it does not decide which rate applies to a specific product or service." },
        "pitfalls": [
          { "mistake": "Removing GST by subtracting the rate percentage from the inclusive price", "fix": "Divide the inclusive price by (1 + rate) instead, as shown in the worked example." },
          { "mistake": "Assuming 18% applies to everything", "fix": "Check the rate for the specific category, which may be 0%, 5%, 12% or 28%." },
          { "mistake": "Splitting IGST into CGST and SGST", "fix": "IGST applies to inter-state sales at the full rate. The CGST/SGST split applies only to intra-state sales." }
        ]
      }
    ],
    "faqs": [
      { "question": "How do I calculate GST on a price?", "answer": "Multiply the base price by the GST rate to get the GST amount, then add it to the base price. For Rs 10,000 at 18%, GST is Rs 1,800 and the total is Rs 11,800." },
      { "question": "How do I remove GST from a price that already includes it?", "answer": "Divide the inclusive price by (1 + rate). For Rs 11,800 inclusive of 18% GST, the base price is Rs 11,800 / 1.18 = Rs 10,000, so GST is Rs 1,800." },
      { "question": "What is the difference between CGST, SGST and IGST?", "answer": "CGST and SGST are the equal halves of GST on intra-state sales, going to the central and state governments. IGST is the full GST on inter-state sales, collected centrally and shared." }
    ]
  },
  "mortgage-repayment-guide": {
    "slug": "mortgage-repayment-guide",
    "leadParagraph": "A mortgage repayment is a fixed monthly payment that covers both interest and principal over the life of the loan. Early payments are mostly interest, and only slowly shift toward principal, which is why the total interest on a long mortgage can exceed the amount originally borrowed.",
    "keyTakeaways": [
      "Monthly mortgage payment is calculated with the standard amortization formula: M = P x [r(1 + r)^n] / [(1 + r)^n - 1], where r is the monthly rate and n is the number of monthly payments.",
      "A longer term lowers the monthly payment but sharply increases total interest, so the monthly payment alone does not show the full cost of the loan.",
      "Extra principal payments, even small ones, reduce the balance that future interest is charged on and can shorten the loan.",
      "The quoted rate, term, down payment and fees all change the result, so always check them before comparing two loan offers."
    ],
    "sections": [
      {
        "id": "mortgage-formula",
        "heading": "1. The Mortgage Payment Formula",
        "badge": "Core Formula",
        "paragraphs": [
          "For a loan principal P, a monthly interest rate r and n monthly payments, the fixed monthly payment M is given by the amortization formula. The monthly rate is the annual rate divided by 12, and n is years multiplied by 12. This formula assumes a fixed rate and equal monthly payments with no extra fees, taxes or insurance in the payment itself."
        ],
        "formulaBox": {
          "title": "Mortgage Monthly Payment Formula",
          "formula": "M = P x [r(1 + r)^n] / [(1 + r)^n - 1]",
          "variables": [
            { "symbol": "P", "meaning": "Loan principal (amount borrowed after any down payment)" },
            { "symbol": "r", "meaning": "Monthly interest rate, equal to annual rate divided by 12" },
            { "symbol": "n", "meaning": "Total number of monthly payments (years x 12)" },
            { "symbol": "M", "meaning": "Fixed monthly payment for principal and interest" }
          ]
        }
      },
      {
        "id": "mortgage-worked-example",
        "heading": "2. Worked Example: $400,000 at 6.5% for 30 Years",
        "badge": "Worked Example",
        "paragraphs": [
          "Take a mortgage of $400,000 at a fixed annual rate of 6.5% for 30 years, repaid in equal monthly instalments with no extra payments."
        ],
        "workedExample": {
          "scenarioTitle": "$400,000, 6.5% Annual Rate, 30 Years",
          "scenarioText": "Loan principal $400,000 | Annual rate 6.5% | Term 30 years (360 months) | Fixed rate, equal monthly payments.",
          "steps": [
            { "stepTitle": "Step 1: Find the monthly rate and number of payments", "math": "r = 0.065 / 12 = 0.0054167; n = 30 x 12 = 360", "explanation": "The annual rate is converted to a monthly rate, and years are converted to months." },
            { "stepTitle": "Step 2: Apply the amortization formula", "math": "M = 400,000 x [0.0054167 x (1.0054167)^360] / [(1.0054167)^360 - 1] = $2,528", "explanation": "The payment is rounded to the nearest dollar; the unrounded value is $2,528.27." },
            { "stepTitle": "Step 3: Total paid and total interest", "math": "Total paid = $2,528.27 x 360 = $910,178; Interest = $910,178 - $400,000 = $510,178", "explanation": "Total interest exceeds the original loan amount because the loan runs for 30 years." },
            { "stepTitle": "Step 4: Why the first payment is mostly interest", "math": "Month 1 interest = $400,000 x 0.0054167 = $2,167; Principal in month 1 = $2,528 - $2,167 = $362", "explanation": "In the first year, about $25,868 goes to interest and only about $4,471 to principal, leaving a balance of about $395,529 after 12 payments." }
          ],
          "finalResult": "Monthly payment: $2,528 (principal and interest only). Total paid over 30 years: $910,178, of which $510,178 is interest. Taxes, insurance and fees, if any, are extra."
        }
      },
      {
        "id": "mortgage-amortization",
        "heading": "3. How Amortization Works, and Why Term Matters",
        "badge": "Amortization",
        "paragraphs": [
          "Amortization is the schedule by which each payment is split between interest and principal. Interest is always charged on the outstanding balance, so when the balance is high at the start, most of the payment is interest. As the balance falls, the interest portion falls and the principal portion rises, even though the total payment stays the same.",
          "That is why shortening the term has such a large effect: a shorter term means the balance falls faster, so less interest accumulates. A longer term feels cheaper month to month, but it keeps a high balance outstanding for longer. Always compare total interest, not just the monthly payment, when choosing a term."
        ],
        "table": {
          "title": "Same $400,000 Loan at 6.5%, by Term (Principal and Interest Only)",
          "headers": ["Term", "Monthly Payment", "Total Paid", "Total Interest"],
          "rows": [
            ["15 years", "$3,484", "$627,197", "$227,197"],
            ["20 years", "$2,982", "$715,750", "$315,750"],
            ["30 years", "$2,528", "$910,178", "$510,178"]
          ]
        },
        "callout": { "type": "warning", "title": "Monthly payment is not the full housing cost", "text": "This guide calculates principal and interest only. Property taxes, home insurance, private mortgage insurance and homeowner association fees, where applicable, are usually paid separately or added to the monthly bill and are not in the $2,528 figure." },
        "pitfalls": [
          { "mistake": "Choosing a loan on the monthly payment alone", "fix": "Compare total interest over the full term as well as the monthly payment." },
          { "mistake": "Assuming early payments reduce the balance quickly", "fix": "Check the amortization schedule: early payments are mostly interest, especially on long terms." },
          { "mistake": "Ignoring rate type", "fix": "A variable rate can change the payment later, while the formula above assumes a fixed rate for the whole term." }
        ]
      }
    ],
    "faqs": [
      { "question": "How do I calculate a mortgage monthly payment?", "answer": "Use M = P x [r(1 + r)^n] / [(1 + r)^n - 1], where r is the annual rate divided by 12 and n is years multiplied by 12. For $400,000 at 6.5% for 30 years, the payment is $2,528 per month for principal and interest." },
      { "question": "Why is total interest so high on a 30-year mortgage?", "answer": "Because the balance stays high for many years, interest keeps being charged on a large amount. On a $400,000 loan at 6.5% for 30 years, total interest is $510,178, more than the amount borrowed." },
      { "question": "Does paying extra principal help?", "answer": "Yes. Extra principal directly reduces the outstanding balance, so future interest is charged on a smaller amount. Even regular small extra payments can reduce total interest and shorten the loan, but check for any prepayment terms first." }
    ]
  },
  "how-much-emergency-fund": {
    "slug": "how-much-emergency-fund",
    "leadParagraph": "An emergency fund is cash set aside for unexpected expenses, such as a job loss, a medical bill or a major home repair, so that you do not have to borrow at high interest or sell investments at a bad time. The common rule is 3 to 6 months of essential expenses, but the right number depends on how stable your income is and how many people depend on it.",
    "keyTakeaways": [
      "Start with essential monthly expenses, not total income: housing, food, utilities, transport, insurance and minimum debt payments.",
      "The standard target is 3 months of essential expenses for stable dual incomes, and 6 months or more for a single income, freelance income or a single-earner household.",
      "Build it in a separate, easily accessible account, not in investments that can fall in value or take days to sell.",
      "A starter fund of $1,000 is better than no fund at all, but it is a first step, not the full target for most households."
    ],
    "sections": [
      {
        "id": "emergency-fund-formula",
        "heading": "1. How to Calculate Your Emergency Fund Target",
        "badge": "Core Formula",
        "paragraphs": [
          "List only expenses you must pay even in a crisis, then multiply by the number of months that fits your situation. Discretionary spending, such as eating out, subscriptions you can cancel and holidays, is not counted in the essential total, which keeps the target realistic instead of inflated."
        ],
        "formulaBox": {
          "title": "Emergency Fund Target Formula",
          "formula": "Target = Essential Monthly Expenses x Months of Cover",
          "variables": [
            { "symbol": "Essential Monthly Expenses", "meaning": "Housing, food, utilities, transport, insurance and minimum debt payments" },
            { "symbol": "Months of Cover", "meaning": "3 for stable income, 6 or more for single, freelance or variable income" },
            { "symbol": "Target", "meaning": "Cash to hold in an accessible account for emergencies" }
          ]
        }
      },
      {
        "id": "emergency-fund-worked-example",
        "heading": "2. Worked Example: $5,000 of Essential Expenses per Month",
        "badge": "Worked Example",
        "paragraphs": [
          "Take a household whose essential monthly expenses total $5,000, made up of housing, food, utilities, transport, insurance and minimum debt payments."
        ],
        "workedExample": {
          "scenarioTitle": "$5,000 Essential Expenses, 3 Months and 6 Months of Cover",
          "scenarioText": "Essential monthly expenses $5,000 | Cover options 3 months and 6 months | Cash in an accessible account.",
          "steps": [
            { "stepTitle": "Step 1: 3-month target", "math": "$5,000 x 3 = $15,000", "explanation": "This fits a household with two stable incomes and no dependents relying on a single job." },
            { "stepTitle": "Step 2: 6-month target", "math": "$5,000 x 6 = $30,000", "explanation": "This fits a single income, freelance or variable income, or a household where one job supports everyone." },
            { "stepTitle": "Step 3: Build it in stages", "math": "$1,000 starter, then $15,000, then $30,000", "explanation": "Save a $1,000 starter fund first, then build to the 3-month target, then to the 6-month target if that fits your situation." }
          ],
          "finalResult": "For $5,000 of essential expenses: 3-month target $15,000, 6-month target $30,000. The right target is the one that matches your income stability, not the largest number in this guide."
        },
        "table": {
          "title": "Emergency Fund Targets by Essential Monthly Expenses",
          "headers": ["Essential Expenses / Month", "3-Month Target", "6-Month Target"],
          "rows": [
            ["$2,000", "$6,000", "$12,000"],
            ["$3,500", "$10,500", "$21,000"],
            ["$5,000", "$15,000", "$30,000"],
            ["$7,500", "$22,500", "$45,000"]
          ]
        }
      },
      {
        "id": "emergency-fund-where-and-pitfalls",
        "heading": "3. Where to Keep It, and Mistakes to Avoid",
        "badge": "Practical Guide",
        "paragraphs": [
          "Keep the fund in a separate savings account that you can access within a day or two, but that you do not use for everyday spending. That separation is what stops it from being spent on non-emergencies. Do not keep it in stocks or other investments that can fall in value exactly when you need the money, and do not keep it in a fixed deposit you cannot break without a penalty if that would delay access in a real emergency.",
          "Replenish the fund after you use it, and recalculate it when your essential expenses change, for example after moving house, having a child or changing jobs. An emergency fund is not a one-time calculation."
        ],
        "callout": { "type": "warning", "title": "An emergency fund is not an investment", "text": "Its job is availability and stability, not high returns. A low return on emergency cash is acceptable because the fund exists to prevent borrowing at high interest in a crisis." },
        "pitfalls": [
          { "mistake": "Counting total income instead of essential expenses", "fix": "Use essential expenses only, so the target is based on what you must pay, not what you earn." },
          { "mistake": "Investing the emergency fund in stocks", "fix": "Keep it in accessible cash, because investments can fall when you most need the money." },
          { "mistake": "Stopping at the starter fund", "fix": "Treat $1,000 as a first step, then build to 3 months, then to 6 months if your income situation requires it." }
        ]
      }
    ],
    "faqs": [
      { "question": "How much emergency fund do I need?", "answer": "Multiply your essential monthly expenses by 3 to 6. For $5,000 of essential expenses, that is $15,000 for 3 months or $30,000 for 6 months. Use 6 months or more if you have a single or variable income." },
      { "question": "Is $1,000 enough for an emergency fund?", "answer": "It is a useful starter fund, but for most households it is not the full target. It covers a small unexpected bill, not several months without income." },
      { "question": "Where should I keep my emergency fund?", "answer": "In a separate, easily accessible savings account, not in investments that can fall in value or in everyday spending money." }
    ]
  },
  "salary-to-hourly-rate-guide": {
    "slug": "salary-to-hourly-rate-guide",
    "leadParagraph": "Converting a salary to an hourly rate means dividing annual pay by the number of hours actually worked in a year. The usual shortcut is 40 hours a week for 52 weeks, or 2,080 hours a year, but that shortcut is wrong if you work different hours, take unpaid leave, or are paid for overtime separately.",
    "keyTakeaways": [
      "Hourly rate = Annual salary / (Hours worked per week x Weeks worked per year). For 40 hours a week for 52 weeks, the divisor is 2,080 hours.",
      "Use hours actually worked, not hours in a calendar year, and adjust for unpaid leave, part-time hours or overtime rules.",
      "Overtime is usually paid at a higher rate, commonly 1.5 times the regular hourly rate, and must not be averaged into the base rate.",
      "Comparing two jobs by salary alone is misleading if their weekly hours differ: a lower salary with fewer hours can be a higher hourly rate."
    ],
    "sections": [
      {
        "id": "salary-formula",
        "heading": "1. The Salary to Hourly Rate Formula",
        "badge": "Core Formula",
        "paragraphs": [
          "Start with gross annual salary, then divide by total hours worked in the year. If you are paid weekly, you can also divide weekly pay by weekly hours. Do not use 8,760 hours (the number of hours in a year) as the divisor, because that includes nights, weekends and holidays when you are not working."
        ],
        "formulaBox": {
          "title": "Salary to Hourly Rate Formula",
          "formula": "Hourly Rate = Annual Salary / (Hours per Week x Weeks per Year)",
          "variables": [
            { "symbol": "Annual Salary", "meaning": "Gross annual pay before tax and deductions" },
            { "symbol": "Hours per Week", "meaning": "Hours actually worked each week" },
            { "symbol": "Weeks per Year", "meaning": "Weeks worked in the year, after unpaid leave" },
            { "symbol": "Hourly Rate", "meaning": "Pay per hour worked, before tax" }
          ]
        }
      },
      {
        "id": "salary-worked-example",
        "heading": "2. Worked Example: $80,000 Salary at 40 Hours per Week",
        "badge": "Worked Example",
        "paragraphs": [
          "Take an annual salary of $80,000, working 40 hours per week for 52 weeks, with no unpaid leave and no overtime in the base calculation."
        ],
        "workedExample": {
          "scenarioTitle": "$80,000 per Year, 40 Hours per Week, 52 Weeks",
          "scenarioText": "Annual salary $80,000 | Hours 40 per week | Weeks 52 per year | No unpaid leave in this example.",
          "steps": [
            { "stepTitle": "Step 1: Total hours worked in the year", "math": "40 x 52 = 2,080 hours", "explanation": "This is the standard full-time divisor used in many salary conversions." },
            { "stepTitle": "Step 2: Hourly rate", "math": "$80,000 / 2,080 = $38.46 per hour", "explanation": "Rounded to the nearest cent; the unrounded value is $38.4615 per hour." },
            { "stepTitle": "Step 3: Weekly, monthly and daily equivalents", "math": "Weekly $80,000 / 52 = $1,538.46; Monthly $80,000 / 12 = $6,666.67; Daily (5 days) $80,000 / 260 = $307.69", "explanation": "These are gross figures before tax, using 260 working days in a 5-day week year." },
            { "stepTitle": "Step 4: Overtime rate at 1.5 times", "math": "$38.46 x 1.5 = $57.69 per hour", "explanation": "Overtime rates vary by contract and law; 1.5 times is a common example, not a universal rule." }
          ],
          "finalResult": "Hourly rate: $38.46 per hour for $80,000 at 40 hours per week. Weekly $1,538.46, monthly $6,666.67, daily $307.69, overtime at 1.5 times $57.69 per hour."
        },
        "table": {
          "title": "Hourly Rates at 40 Hours per Week, 52 Weeks",
          "headers": ["Annual Salary", "Hourly Rate", "Weekly Pay"],
          "rows": [
            ["$50,000", "$24.04", "$961.54"],
            ["$60,000", "$28.85", "$1,153.85"],
            ["$80,000", "$38.46", "$1,538.46"],
            ["$100,000", "$48.08", "$1,923.08"]
          ]
        }
      },
      {
        "id": "salary-comparison-pitfalls",
        "heading": "3. Comparing Jobs Fairly, and Mistakes to Avoid",
        "badge": "Comparison",
        "paragraphs": [
          "Two jobs with different weekly hours cannot be compared by salary alone. A $90,000 job at 50 hours a week is $34.62 per hour (90,000 / 2,600), which is less per hour than an $80,000 job at 40 hours a week ($38.46 per hour). Hours, leave, bonuses, overtime and benefits all change the real comparison, so convert to hourly rate first, then add those factors back in.",
          "Also check whether salary includes bonuses or allowances, whether overtime is paid or unpaid, and whether weeks worked includes paid leave. If leave is paid, it is already in the salary and 52 weeks is correct; if leave is unpaid, subtract those weeks from the divisor."
        ],
        "callout": { "type": "warning", "title": "Gross, not take-home, pay", "text": "This guide converts gross salary. Tax, retirement contributions and other deductions reduce take-home pay, so the hourly rate here is not the amount received in hand per hour." },
        "pitfalls": [
          { "mistake": "Dividing by 8,760 hours in a year", "fix": "Divide by hours actually worked, commonly 2,080 for full-time work." },
          { "mistake": "Ignoring unpaid leave", "fix": "Subtract unpaid weeks from weeks worked, which raises the hourly rate and reflects real hours." },
          { "mistake": "Averaging overtime into the base rate", "fix": "Keep overtime separate at its own rate, commonly 1.5 times, instead of blending it into the base hourly rate." }
        ]
      }
    ],
    "faqs": [
      { "question": "How do I convert salary to hourly rate?", "answer": "Divide annual salary by hours worked in the year. For $80,000 at 40 hours per week for 52 weeks, that is $80,000 / 2,080 = $38.46 per hour." },
      { "question": "What is the standard divisor for full-time work?", "answer": "2,080 hours, which is 40 hours per week multiplied by 52 weeks. Adjust it if you work different hours or take unpaid leave." },
      { "question": "How is overtime calculated from an hourly rate?", "answer": "Multiply the regular hourly rate by the overtime multiplier in your contract or law. At 1.5 times, a $38.46 rate becomes $57.69 per hour for overtime." }
    ]
  },
  "apr-vs-apy-explained": {
    "slug": "apr-vs-apy-explained",
    "leadParagraph": "APR and APY both describe interest rates, but they are not the same number. APR is the simple annual rate without compounding, while APY includes compounding, so APY is higher whenever interest is compounded more than once a year. Comparing a loan by APR and a savings account by APY without converting them is comparing two different things.",
    "keyTakeaways": [
      "APR = nominal annual rate, without compounding. APY = effective annual rate, with compounding included.",
      "APY formula: APY = (1 + r / n)^n - 1, where r is the nominal annual rate and n is the number of compounding periods per year.",
      "If interest compounds once a year, APR equals APY. If it compounds monthly, quarterly or daily, APY is higher than APR.",
      "For borrowing, a lower APR usually means lower cost, but fees must also be checked. For saving, a higher APY usually means higher return, for the same nominal rate and compounding."
    ],
    "sections": [
      {
        "id": "apr-apy-formula",
        "heading": "1. The APY Formula",
        "badge": "Core Formula",
        "paragraphs": [
          "APR is quoted as a simple annual rate: a 12% APR means 1% per month if compounded monthly, before compounding is counted. APY answers a different question: if you start with $100 and interest compounds as stated, how much will you actually have after one year, as a percentage? That is why APY is the effective rate, and APR is the nominal rate."
        ],
        "formulaBox": {
          "title": "APY from APR Formula",
          "formula": "APY = (1 + r / n)^n - 1",
          "variables": [
            { "symbol": "r", "meaning": "Nominal annual rate (APR), as a decimal" },
            { "symbol": "n", "meaning": "Number of compounding periods per year (12 for monthly, 4 for quarterly, 1 for annual)" },
            { "symbol": "APY", "meaning": "Effective annual yield, including compounding" }
          ]
        }
      },
      {
        "id": "apr-apy-worked-example",
        "heading": "2. Worked Example: 12% APR Compounded Monthly",
        "badge": "Worked Example",
        "paragraphs": [
          "Take a nominal rate of 12% per year, compounded monthly, and compare it with the same rate compounded annually."
        ],
        "workedExample": {
          "scenarioTitle": "12% APR, Monthly Compounding vs Annual Compounding",
          "scenarioText": "Nominal rate 12% | Monthly compounding n = 12 | Annual compounding n = 1 | One year.",
          "steps": [
            { "stepTitle": "Step 1: Monthly rate", "math": "r / n = 0.12 / 12 = 0.01", "explanation": "The annual rate is split into 12 equal monthly periods." },
            { "stepTitle": "Step 2: APY with monthly compounding", "math": "APY = (1.01)^12 - 1 = 0.1268 = 12.68%", "explanation": "Interest earned in earlier months itself earns interest in later months, adding 0.68 percentage points." },
            { "stepTitle": "Step 3: APY with annual compounding", "math": "APY = (1.12)^1 - 1 = 12.00%", "explanation": "With only one compounding period, there is no extra compounding effect, so APY equals APR." },
            { "stepTitle": "Step 4: What this means on $10,000", "math": "$10,000 at 12.68% APY = $11,268 after one year; at 12.00% = $11,200", "explanation": "The difference is $68 in one year on $10,000, purely from monthly compounding." }
          ],
          "finalResult": "12% APR compounded monthly equals 12.68% APY. The same 12% compounded annually equals 12.00% APY."
        },
        "table": {
          "title": "APY for Different APRs, Compounded Monthly",
          "headers": ["APR", "Monthly Rate", "APY (Monthly Compounding)"],
          "rows": [
            ["6%", "0.50%", "6.17%"],
            ["12%", "1.00%", "12.68%"],
            ["18%", "1.50%", "19.56%"],
            ["24%", "2.00%", "26.82%"]
          ]
        }
      },
      {
        "id": "apr-apy-borrow-save",
        "heading": "3. Borrowing vs Saving: Which Number to Compare",
        "badge": "Practical Guide",
        "paragraphs": [
          "When borrowing, lenders usually quote APR, because it is the simple cost rate before compounding, and it makes loans look cheaper when compounding is frequent. When saving, banks usually quote APY, because it includes compounding and makes returns look higher. That is not necessarily misleading, but it means you must convert both offers to the same basis before comparing them.",
          "Also check fees separately: APR for some loans includes certain fees, while for others it does not, depending on the product and jurisdiction. The formula in this guide covers interest compounding only, not fees, taxes or charges, which must be checked in the product terms."
        ],
        "callout": { "type": "warning", "title": "Do not compare APR directly with APY", "text": "A 12% APR loan and a 12% APY savings account are not equal and opposite. Convert both to APY, or both to APR with the same compounding frequency, before comparing cost and return." },
        "pitfalls": [
          { "mistake": "Assuming APR and APY are interchangeable", "fix": "Convert with APY = (1 + r / n)^n - 1 before comparing any two rates." },
          { "mistake": "Ignoring compounding frequency", "fix": "Monthly, quarterly and daily compounding give different APYs for the same APR, so always note n." },
          { "mistake": "Ignoring fees", "fix": "Check product terms for fees separately, because this formula covers interest compounding only." }
        ]
      }
    ],
    "faqs": [
      { "question": "What is the difference between APR and APY?", "answer": "APR is the nominal annual rate without compounding. APY is the effective annual rate with compounding included, calculated as (1 + r / n)^n - 1." },
      { "question": "What is the APY for 12% APR compounded monthly?", "answer": "12.68%, because (1.01)^12 - 1 = 0.1268. The same 12% compounded annually is 12.00% APY." },
      { "question": "Which is better for saving, APR or APY?", "answer": "Compare APY to APY. For the same nominal rate, more frequent compounding gives a higher APY, so a higher APY means a higher effective return, before fees." }
    ]
  },
  "hecs-help-debt-explained": {
    "slug": "hecs-help-debt-explained",
    "leadParagraph": "HECS-HELP is an Australian Government loan that lets eligible students pay for higher education fees later, through the tax system, instead of upfront. The debt is indexed each year, which means it grows with inflation, but it does not carry a commercial interest rate, and repayments only start once income reaches a threshold that changes over time.",
    "keyTakeaways": [
      "HECS-HELP debt is indexed annually, not charged commercial interest: New debt = Old debt x (1 + indexation rate).",
      "Repayments are collected through the tax system once income reaches the repayment threshold, and the repayment rate rises with income.",
      "Indexation rates and repayment thresholds change from year to year, so always check the current official figures before relying on a number in any example.",
      "Extra voluntary repayments reduce the balance that future indexation is applied to, which can reduce the total amount repaid over time."
    ],
    "sections": [
      {
        "id": "hecs-indexation-formula",
        "heading": "1. How Indexation Works",
        "badge": "Core Formula",
        "paragraphs": [
          "Indexation adjusts a HECS-HELP debt for inflation, usually once a year. It is not the same as interest on a bank loan: the rate is set by an inflation measure, and it applies to the outstanding balance. If the indexation rate is higher, the balance grows faster even if no new study fees are added. This guide uses example rates only, to show the maths, because the actual rate for a given year must be checked from official sources."
        ],
        "formulaBox": {
          "title": "HECS-HELP Indexation Formula",
          "formula": "New Debt = Old Debt x (1 + Indexation Rate)",
          "variables": [
            { "symbol": "Old Debt", "meaning": "Outstanding HECS-HELP balance before indexation" },
            { "symbol": "Indexation Rate", "meaning": "Annual indexation rate for that year, as a decimal (example only in this guide)" },
            { "symbol": "New Debt", "meaning": "Balance after indexation is applied" }
          ]
        }
      },
      {
        "id": "hecs-worked-example",
        "heading": "2. Worked Example: $40,000 Debt at an Example 4.0% Indexation Rate",
        "badge": "Worked Example",
        "paragraphs": [
          "Take an outstanding HECS-HELP debt of $40,000, with an example indexation rate of 4.0% for one year. This rate is an example only to show the calculation, not a claim about the current official rate for any year."
        ],
        "workedExample": {
          "scenarioTitle": "$40,000 Debt, 4.0% Example Indexation, One Year",
          "scenarioText": "Outstanding debt $40,000 | Example indexation rate 4.0% | One year | No new fees or repayments in this example.",
          "steps": [
            { "stepTitle": "Step 1: Indexation amount", "math": "$40,000 x 0.04 = $1,600", "explanation": "Indexation adds $1,600 to the balance for that year at the example rate." },
            { "stepTitle": "Step 2: New balance", "math": "$40,000 + $1,600 = $41,600", "explanation": "The new balance is $41,600, which is the amount future indexation and repayments will be based on." },
            { "stepTitle": "Step 3: Why voluntary repayments matter", "math": "If $5,000 is repaid before indexation, balance is $35,000; indexation is $35,000 x 0.04 = $1,400, not $1,600", "explanation": "Repaying before indexation reduces the balance that indexation is applied to, saving $200 in this example." }
          ],
          "finalResult": "Example result: $40,000 at 4.0% example indexation becomes $41,600 after one year. The actual rate for a given year must be checked from official sources, as it changes annually."
        },
        "table": {
          "title": "Indexation on Different Balances at the 4.0% Example Rate",
          "headers": ["Starting Debt", "Indexation at 4.0%", "New Balance"],
          "rows": [
            ["$10,000", "$400", "$10,400"],
            ["$20,000", "$800", "$20,800"],
            ["$30,000", "$1,200", "$31,200"],
            ["$40,000", "$1,600", "$41,600"]
          ]
        }
      },
      {
        "id": "hecs-repayments",
        "heading": "3. How Repayments Work, and Mistakes to Avoid",
        "badge": "Repayments",
        "paragraphs": [
          "Repayments are not a fixed monthly bill like a bank loan. They are collected through the tax system, based on repayment income, once that income reaches the threshold for the year. The repayment rate increases in steps as income rises, so higher income means a higher percentage is collected, up to a maximum rate. Because thresholds and rates change, the exact repayment for a given income in a given year must be checked from official sources, not from an old table.",
          "A common misunderstanding is that HECS-HELP works like a credit card or personal loan with a fixed interest rate and a due date. It does not: there is no commercial interest rate, no fixed monthly payment, and the debt is not collected by a bank. What grows the balance is indexation, and what reduces it is repayments through tax, voluntary repayments, or both."
        ],
        "callout": { "type": "warning", "title": "Example rates are not official rates", "text": "The 4.0% rate in this guide is an example only, used to show the maths. Indexation rates and repayment thresholds change each year, so check the current official figures before making a decision based on them." },
        "pitfalls": [
          { "mistake": "Treating indexation as bank interest", "fix": "Indexation adjusts for inflation on the outstanding balance; it is not a commercial interest rate with a fixed monthly charge." },
          { "mistake": "Using an old threshold or rate", "fix": "Check the current year's official threshold and indexation rate, because both change annually." },
          { "mistake": "Ignoring the timing of voluntary repayments", "fix": "A voluntary repayment before indexation is applied reduces the balance that indexation is charged on." }
        ]
      }
    ],
    "faqs": [
      { "question": "How is HECS-HELP debt indexed?", "answer": "Each year, the outstanding balance is multiplied by (1 + indexation rate). For example, $40,000 at a 4.0% example rate becomes $41,600. The actual rate changes each year and must be checked from official sources." },
      { "question": "When do HECS-HELP repayments start?", "answer": "Repayments are collected through the tax system once repayment income reaches the threshold for that year, and the rate rises with income. Thresholds and rates change annually." },
      { "question": "Does paying extra reduce HECS-HELP debt faster?", "answer": "Yes. A voluntary repayment reduces the outstanding balance, so future indexation is applied to a smaller amount, which can reduce the total repaid over time." }
    ]
  },
  "credit-card-payoff-strategies": {
    "slug": "credit-card-payoff-strategies",
    "leadParagraph": "Paying off credit card debt is a choice between two strategies: snowball and avalanche. Snowball pays the smallest balance first for quick wins, while avalanche pays the highest interest rate first to save the most interest. Neither strategy works unless the monthly payment is higher than the interest added each month, because otherwise the balance grows instead of shrinking.",
    "keyTakeaways": [
      "Snowball: pay the smallest balance first, then roll that payment into the next smallest balance. It gives quick wins that help people stay on track.",
      "Avalanche: pay the highest APR first, then the next highest. It usually saves the most interest over time, because expensive debt is cleared first.",
      "Monthly interest = Balance x (APR / 12). If the monthly payment is less than this, the balance will grow even while paying.",
      "Paying more than the minimum, even a little more, can cut both the payoff time and the total interest by a large amount."
    ],
    "sections": [
      {
        "id": "credit-card-formula",
        "heading": "1. How Credit Card Interest Is Calculated Each Month",
        "badge": "Core Formula",
        "paragraphs": [
          "Credit card interest is usually charged monthly on the outstanding balance, using the annual percentage rate (APR) divided by 12. That monthly interest is added to the balance, and the next month's interest is charged on the new balance, which is why minimum-only payments take so long to clear a debt."
        ],
        "formulaBox": {
          "title": "Monthly Credit Card Interest Formula",
          "formula": "Monthly Interest = Balance x (APR / 12)",
          "variables": [
            { "symbol": "Balance", "meaning": "Outstanding credit card balance at the start of the month" },
            { "symbol": "APR", "meaning": "Annual percentage rate, as a decimal" },
            { "symbol": "Monthly Interest", "meaning": "Interest added that month, before any payment is applied" }
          ]
        }
      },
      {
        "id": "credit-card-worked-example",
        "heading": "2. Worked Example: $5,000 at 20% APR",
        "badge": "Worked Example",
        "paragraphs": [
          "Take a single credit card balance of $5,000 at 20% APR, with a fixed monthly payment and no new spending on the card. This isolates the effect of the payment size, without mixing in other cards or fees."
        ],
        "workedExample": {
          "scenarioTitle": "$5,000 Balance, 20% APR, Fixed Monthly Payments, No New Spending",
          "scenarioText": "Balance $5,000 | APR 20% | Monthly rate 20% / 12 = 1.6667% | No new charges or fees in this example.",
          "steps": [
            { "stepTitle": "Step 1: First month interest", "math": "$5,000 x (0.20 / 12) = $83.33 interest in month 1", "explanation": "Interest alone is $83.33 in the first month, before any payment." },
            { "stepTitle": "Step 2: First month with a $200 payment", "math": "Principal paid = $200 - $83.33 = $116.67; New balance = $5,000 - $116.67 = $4,883.33", "explanation": "More than half the $200 payment goes to principal in month 1, but the share falls if the balance stays high." },
            { "stepTitle": "Step 3: Total payoff at $200 per month", "math": "About 33 months, total paid about $6,522, total interest about $1,522", "explanation": "Calculated with a fixed $200 payment each month until the balance reaches zero, with no new spending." },
            { "stepTitle": "Step 4: Total payoff at $300 per month", "math": "About 20 months, total paid about $5,906, total interest about $906", "explanation": "Paying $100 more per month saves about $616 in interest and about 13 months of payments in this example." }
          ],
          "finalResult": "At $200 per month: about 33 months and $1,522 interest. At $300 per month: about 20 months and $906 interest. The extra $100 per month saves about $616 and 13 months."
        },
        "table": {
          "title": "Payoff Comparison: $5,000 at 20% APR, No New Spending",
          "headers": ["Monthly Payment", "Payoff Time", "Total Paid", "Total Interest"],
          "rows": [
            ["$200", "About 33 months", "About $6,522", "About $1,522"],
            ["$300", "About 20 months", "About $5,906", "About $906"]
          ]
        }
      },
      {
        "id": "credit-card-snowball-avalanche",
        "heading": "3. Snowball vs Avalanche: Which One to Choose",
        "badge": "Comparison",
        "paragraphs": [
          "With snowball, list debts from smallest balance to largest, pay minimums on all of them, and put every extra dollar toward the smallest balance. When that card is cleared, roll its payment into the next smallest card. The advantage is psychological: clearing a card quickly gives a visible win, which helps many people keep going.",
          "With avalanche, list debts from highest APR to lowest, pay minimums on all of them, and put every extra dollar toward the highest APR card first. The advantage is mathematical: expensive debt is cleared first, so less interest accumulates overall. In practice, avalanche usually saves more interest, but snowball usually feels easier to stick with, and the best strategy is the one that will actually be followed to the end.",
          "Whichever strategy is chosen, stop adding new spending to the cards being paid off, if possible, because new charges undo the progress of the extra payments. Also check for fees, penalty rates and promotional rates that end, because those change the effective APR used in the calculation."
        ],
        "callout": { "type": "warning", "title": "Minimum payments alone take a very long time", "text": "A payment that only just covers monthly interest barely reduces the balance. Paying more than the minimum, and stopping new spending, is what actually shortens the payoff." },
        "pitfalls": [
          { "mistake": "Paying only the minimum and expecting quick progress", "fix": "Pay a fixed amount above the minimum each month, and calculate the payoff time for that amount." },
          { "mistake": "Choosing avalanche but quitting early", "fix": "If quick wins are needed to stay on track, snowball may be better in practice, even if avalanche saves more interest on paper." },
          { "mistake": "Adding new spending while paying off", "fix": "New charges increase the balance and the interest, and can cancel out extra payments." }
        ]
      }
    ],
    "faqs": [
      { "question": "What is the difference between snowball and avalanche?", "answer": "Snowball pays the smallest balance first for quick wins. Avalanche pays the highest APR first to save the most interest. Avalanche usually saves more interest, snowball usually feels easier to stick with." },
      { "question": "How long does it take to pay off $5,000 at 20% APR?", "answer": "At $200 per month with no new spending, about 33 months with about $1,522 interest. At $300 per month, about 20 months with about $906 interest." },
      { "question": "Why does paying more than the minimum help so much?", "answer": "Because monthly interest is charged on the balance, a larger payment reduces the balance faster, so future interest is charged on a smaller amount, which shortens the payoff and reduces total interest." }
    ]
  },
};
