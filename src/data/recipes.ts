import type { Recipe } from '../types/recipe';

export const recipes: Recipe[] = [
  {
    id: 'revenue-sear',
    category: 'Signature Dish',
    subtitle: 'A classic that proves execution',
    focus: 'Enterprise Sales & Account Management',
    title: 'The $60M Revenue Sear',
    dish: 'Pan-Seared Fortune 500 Deal with Compound Growth Butter',
    image: '/images/revenue-sear.jpg',
    serves: 'Global enterprises',
    cookTime: '6-12 month sales cycles',
    ingredients: [
      'First of its kind SaaS platform (PMs historically in spreadsheets)',
      'No sales playbook (first sales hire)',
      'Consultative sales approach (deep discovery, ROI modeling)',
    ],
    keyTechnique: 'High heat (quota pressure), patient timing (complex negotiations)',
    inflectionPoint: 'When the sear locks in, it catalyzes the flavor (and clients want more)',
    personalStory: `Wizeline was founded to help product managers build products people love with an API-driven portfolio management SaaS product. I was brought on as Wizeline's first Account Executive (employee #15) about 6 months after the company was founded. The product was nascent and there was no sales playbook. So I learned how to think like a product manager.

I acquired my first major account, a Fortune 500 media company, and took a consultative sales approach: extensive discovery, stakeholder mapping, relationship building, internal champion enablement, and ROI modeling. I didn't just sell software. I listened to where they were most challenged in building products and relayed that feedback to our product and executive teams.

This included learning that they had two main challenges that were slowing down their software development lifecycles: 1) war for engineering talent, and 2) redundant software builds across their global businesses which were wasting resources.

This eventually led to them asking if we could build products for them, which became the catalyst for Wizeline's transformation into one of the fastest-growing offshore development firms in the last decade.`,
    result: '$60M revenue, 62% average YoY growth',
    hook: 'When the sear locks in, it catalyzes the flavor — and clients want more',
  },
  {
    id: 'wize-services-souffle',
    category: 'Zero-to-One Creation',
    subtitle: "Creating something you've never done before",
    focus: '0-to-1 Business Building',
    title: 'The Services Soufflé',
    dish: 'The Impossible Rise',
    image: '/images/services-souffle.jpg',
    whyDish: "Notoriously difficult, can't fake it (either rises or falls)",
    cookTime: '16 months',
    ingredients: [
      "Client's business problem (war for engineering talent)",
      'Proof of market opportunity (community event)',
      'Visionaries (willingness to imagine things that could be)',
    ],
    keyTechnique: [
      'Create the conditions for the rise',
      'Add heat at exactly the right moments',
      "Don't open the oven early",
    ],
    inflectionPoint: 'When the soufflé rises — from zero to 80% of business revenue',
    personalStory: `My Fortune 500 client was using our platform to get a centralized view into their global roadmaps. Upon confirming that redundant software builds were occurring across their business units, they inquired about our engineering operations in Mexico.

In partnership with my CTO, we put on a community event that drew 500 engineers, proving to the client that Mexico's tech talent was real.

That event led the client to ask: "Would you hire engineers on our behalf and help us accelerate our software development lifecycles?"

Four months later, I became a founding member of a spin-off consulting business (Wize Services). We hired nearly 100 engineers in the first year, proved we could deliver through quick wins and case studies, and built the business case that drove global adoption of centralized platforms.

It was acquired back by Wizeline less than a year later, and I grew it to represent over 80% of company revenue within 16 months.`,
    result: '80% of company revenue in 16 months',
    whyItWorked: [
      'Proved value through quick wins',
      'Business case showed ROI (lower cost, decreased time to production)',
      'Hired aggressively (nearly 100 technical talent in 12 months)',
      'Unique delivery model (pod structure)',
      'Accountability from top to bottom',
    ],
    hook: "Notoriously difficult, can't fake it — either rises or falls",
  },
  {
    id: 'hackathon-tasting',
    category: 'The Transformation Menu',
    subtitle: 'Where raw ingredients become unforgettable experiences',
    focus: 'POC Design & Execution',
    title: 'The Hackathon Tasting Experience',
    dish: 'Chatbot Melting Pot',
    image: '/images/hackathon-tasting.jpg',
    serves: '15 Global Executives (C-Suite and Technology Leaders)',
    prepTime: '8 months of building trust through project delivery',
    cookTime: '2 immersive days',
    ingredients: [
      '15 Global Executives (C-Suite and Technology Leaders) — skeptical, high-stakes',
      'Engineering teams — skilled, ready to collaborate',
      'Application framework (existing best-of-breed platforms) + NLP chatbot framework — the base',
      'Real business problems — the challenge',
    ],
    keyTechnique: 'Co-creation over demonstration — let them cook',
    inflectionPoint: 'The moment the build comes to life',
    personalStory: `The mandate from my Fortune 500 client was to identify and build best-of-breed platforms that could be leveraged by their global businesses so they did not have to reinvent the wheel every time they wanted to build a new application. This in turn could accelerate their time to market and reallocate resources to work on more innovative products, enabling their business for growth.

After 8 months of building trust with their US business by building with and supporting their global platforms, we could move forward on proving to their global business that they could benefit from adopting centralized platforms.

We built an application framework that included best-of-breed platforms, and made that available to leverage in co-building natural language processing chatbot proofs of concepts customized for their specific businesses.

This single event resulted in the global business units rebuilding their roadmaps to utilize centralized platforms.`,
    techniqueNotes: [
      "Don't just demo, let them cook (co-create)",
      'Pair technical expertise with business context',
      'Time the "taste" moment perfectly (wow them once you\'ve garnered their attention)',
    ],
    result: "Tens of millions of client budget reallocated; directly contributed to Wizeline's PE-backed acquisition",
    hook: 'The moment skeptics become champions — through co-creation',
  },
  {
    id: 'yield-optimization',
    category: 'The Transformation Menu',
    subtitle: 'Where raw ingredients become unforgettable experiences',
    focus: 'Operational Transformation',
    title: 'The Yield Optimization',
    dish: 'From Blind Kitchen to Precision Engine',
    image: '/images/yield-optimization.jpg',
    serves: "Entire company (improving net operating margin for company's path to profitability)",
    prepTime: '5 months',
    cookTime: '12 months',
    problem: 'Operating blind leads to poor margins and poor team health',
    ingredients: [
      'Cross-functional org (Professional Services, Solutions Engineering, Technical Support Engineering)',
      'Clear metrics aligned to business health (gross margin = reinvestment capacity)',
      'Visibility, accountability, and control',
    ],
    keyTechnique: [
      'Track what matters (gross margin = health of the business)',
      'Install the instrumentation (utilization formula, time tracking methodology, real-time reporting)',
      "There's no such thing as a free meal (monetize custom builds)",
      'Balance local + global (regional needs + consistent operations)',
    ],
    inflectionPoint: "Instrumentation before optimization — can't manage what you can't measure",
    personalStory: `I took over the Customer Solutions team in September 2023, a cross-functional organization of 41 professionals globally comprised of both revenue-generating (Professional Services) and non-revenue generating (Solutions Engineering, Technical Support Engineering) teams. Our True North was team health and breaking even. Our Magnetic North was achieving positive gross margin, because gross margin represents the health of the business and our ability to reinvest in customers and the team.

At the time, we did not have a target utilization formula and our time tracking methodology was basic. The team was operating blind, reacting to whatever customers or internal teams asked.

Here's what I implemented:

A utilization formula to ensure team health. New time tracking methodology to ensure each team member allocated the right amount of time to billable work, non-billable work, and non-utilization. Real-time reporting to course-correct quickly in fast-moving services cycles. Monetized Solutions Engineering: transitioned from free custom builds to a revenue stream that satisfied specific customer needs. Balanced regional customer needs while operating consistently as a global team.`,
    result: [
      'Stage 1: Achieved 14% increase in positive gross margin for Professional Services',
      'Stage 2: Achieved net zero operating margin across all of Customer Solutions',
    ],
    hook: "Operating blind leads to poor margins — instrumentation before optimization",
  },
  {
    id: 'rescue-kitchen',
    category: 'Operational Excellence',
    subtitle: 'Achieving cross-functional alignment',
    focus: 'Customer Experience Optimization',
    title: 'The Rescue Kitchen',
    dish: 'Tiger Team to the Rescue',
    image: '/images/rescue-kitchen.jpg',
    crisis: 'Time-to-resolution above market standards, poor customer sentiment',
    serves: 'Enterprise customers demanding quick resolutions',
    cookTime: 'Annual OKR',
    team: [
      'Product Engineering',
      'Customer Success',
      'Technical Support',
      'Product Operations (me — owned the outcome)',
    ],
    ingredients: [
      'Executive sponsorship (CPO greenlit and championed)',
      'Data (support ticket analysis, bottleneck identification)',
      'Onsite workshop (process mapping session)',
      'Quarterly goals (measurable progress checkpoints)',
    ],
    keyTechnique: [
      'Sound the alarm — identify the crisis',
      'Assemble the team — cross-functional leaders',
      'Map the kitchen — process mapping workshop',
      'Follow the data — analyze bottlenecks',
      'Drive targeted fixes — workflows, protocols, training, tools',
      'Train others — enable team-wide on new processes',
      'Measure results (quarterly goals, track progress)',
    ],
    inflectionPoint: 'When the data proves it\'s working — TTR reduction, sentiment increasing (NPS, CSAT, real-time monitoring of support interactions)',
    personalStory: `At mParticle, we identified that our time-to-resolution was above market standards and leading to poor customer sentiment. I assembled a cross-functional tiger team: leads from Product, Engineering, Customer Success, and Technical Support, plus myself from Product Operations.

The CPO gave us the green light to present our plan to the exec team and became our executive sponsor.

We started with an onsite workshop where we did process mapping together. Then we dove into the data, analyzing support tickets to identify where the biggest bottlenecks existed.

From there, we drove targeted initiatives: new workflows, better handoff protocols, clearer escalation criteria, team training, tool changes. We enabled every team on the new processes. And we set quarterly goals to keep ourselves accountable.

The data proved when it was working. By the end of the year, we'd achieved a 50% reduction in time-to-resolution and a 35% increase in positive customer sentiment scores.

But here's what we also discovered: while TTR improved dramatically and customers were happy, we'd created a new problem. Escalations to Engineering had increased.

That's what led us to eventually adopt Pact's agentic AI in 2024 and solve the coordination problem systemically, not just symptomatically.`,
    result: [
      '50% reduction in time-to-resolution over one year',
      '35% increase in positive customer sentiment scores',
      'G2 Badge for "Best Support: Fall 2023"',
    ],
    hook: 'Time-to-resolution above market standards — until the tiger team assembled',
  },
  {
    id: 'ai-native-ops',
    category: 'Operational Excellence',
    subtitle: 'Empowering others to do their best work',
    focus: 'Getting the Fundamentals Perfect',
    title: 'The Mise en Place System',
    dish: 'Agentic Orchestration (Everything in its Place)',
    image: '/images/mise-en-place.jpg',
    serves: 'Internal teams who need systems not based on heroics',
    ingredients: [
      'Support tickets (business critical)',
      'Cross-functional teams (all need alignment)',
      'Enterprise customers (demanding quick resolutions)',
    ],
    keyTechnique: 'Fix the coordination problem to make velocity sustainable',
    inflectionPoint: 'Average ticket resolution time dropped by 50%, but was resulting in expensive escalations',
    personalStory: `Former colleagues of mine were building Pact, an agentic AI project manager that listens to unstructured and structured data sources to figure out what needs to be done to achieve business-critical outcomes.

At mParticle, we were facing challenges in resolving support tickets because our existing (and well documented) internal processes involved multiple handoffs between teams, which led to unnecessary confusion and inefficiency. So while we achieved a 50% average reduction in resolution time the year prior and increased customer positive sentiment scores by 35%, we were creating too many expensive escalations.

Under my direction and budget approval, we adopted Pact to replace our inconsistent ticket handling processes with an agentic project manager to ensure accountability, identify risks, and track decision making and achievement of outcomes.

This resulted in 95% of all tickets being resolved without an escalation. Additionally, Pact improved productivity of the Technical Support Engineers, increased confidence in the Customer Success team, and saved engineering's time because they had less escalations to resolve.`,
    result: '95% of customer support tickets resolved without an escalation',
    hook: 'Too many cooks in the kitchen — until everything found its place',
  },
  {
    id: 'ai-native-cost-reduction',
    category: 'Business Model Innovation',
    subtitle: 'Changing the recipe entirely',
    focus: 'Strategy Meets Execution',
    title: 'The Great AI Reduction',
    dish: 'Concentrated Value Through Elimination',
    image: '/images/great-ai-reduction.jpg',
    whyDish: "A great reduction isn't about adding more ingredients, it's about removing everything that dilutes the essence.",
    serves: 'Software development clients that require enterprise-grade results',
    cookTime: '2 weeks per engagement',
    ingredients: [
      'Agentic AI platform (work management coordination)',
      'Traditional services model (bloated cost and slow delivery)',
      'Market inflection point (agentic workflow adoption)',
      'Outcome-based pricing (aligned incentives)',
    ],
    keyTechnique: 'Remove every layer that dilutes value; concentrate what remains',
    inflectionPoint: 'When the reduction concentrates — 3x revenue growth in 6 months',
    personalStory: `After I transitioned out of mParticle upon completion of Rokt's acquisition, I decided to join Pact because I realized that agentic AI could fundamentally reshape professional services delivery. The Pact founders were seeing that agentic AI was increasing the product development lifecycle by 10x for customers when combining Pact's AI agents with AI-assisted coding.

So we asked ourselves: What else would be required to break the traditional services model to actually deliver software at a fraction of the cost for customers?

The answer: Remove every layer of management overhead that made traditional services expensive and slow. Account managers. Delivery managers. All the operators.

I architected an AI-native operating system and outcome-based pricing model to do exactly that. I developed scalable operational frameworks integrating agentic AI systems into service delivery, transforming our go-to-market approach and handling our back office entirely myself.

It was a reduction in the truest sense: removing everything that diluted value, simmering down to the essential, and watching what remained become more concentrated and powerful than the bloated original.`,
    result: 'Drove 3x revenue in the first 6 months as a single-person operated business unit',
    whyItWorked: [
      'Single operator meant complete accountability and no overhead',
      '2-week engagement cycles proved the model worked fast',
    ],
    hook: "A great reduction isn't about adding more — it's about removing everything that dilutes the essence",
  },
];

export const categories = [
  'All',
  'Signature Dish',
  'Zero-to-One Creation',
  'The Transformation Menu',
  'Operational Excellence',
  'Business Model Innovation',
] as const;
