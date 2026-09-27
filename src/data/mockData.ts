import { ServiceItem, PortfolioProject, PricingPackage, FAQItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-design',
    number: '01',
    name: 'Website Design',
    startingPrice: 800,
    priceDisplay: 'Starting from $800',
    priceRange: '$800 – $1,500',
    description: 'Custom websites designed around your brand, audience, and business goals.',
    ctaText: 'Explore Service',
    category: 'design',
    turnaroundTime: '7–14 Days',
    features: [
      'Tailored UI/UX design architecture',
      'Mobile-first responsive structure',
      'High-conversion layouts and clear typography',
      'Clean modern visual aesthetics'
    ],
    deliverables: ['Custom design mockup', 'Responsive development', 'Content styling', 'Contact integrations']
  },
  {
    id: 'web-redesign',
    number: '02',
    name: 'Website Redesign',
    startingPrice: 500,
    priceDisplay: 'Starting from $500',
    priceRange: '$500 – $1,200',
    description: 'Transform an outdated website into a modern, responsive, professional experience.',
    ctaText: 'Explore Service',
    category: 'redesign',
    turnaroundTime: '5–10 Days',
    features: [
      'Visual hierarchy overhaul',
      'Elimination of mobile layout bugs',
      'Cleaner navigation and modern typography',
      'Zero downtime content migration'
    ],
    deliverables: ['Audit of existing site', 'Modernized interface', 'Mobile responsiveness fix', 'Speed checks']
  },
  {
    id: 'web-audit',
    number: '03',
    name: 'Website Audit & Diagnostic',
    startingPrice: 150,
    priceDisplay: 'Starting from $150',
    priceRange: '$150 – $350',
    description: 'Comprehensive forensic analysis of UX, mobile viewport, speed, and conversion bottlenecks on your website or online store.',
    ctaText: 'Get an Audit',
    category: 'audit',
    turnaroundTime: '2–3 Days',
    features: [
      'Conversion barrier diagnostic',
      'Mobile usability & viewport inspection',
      'Page speed & Core Web Vitals check',
      'Prioritized remediation action plan'
    ],
    deliverables: ['Itemized findings report', 'UX review', 'Conversion recommendations', 'Speed guidance']
  },
  {
    id: 'ecommerce',
    number: '04',
    name: 'Shopify & E-commerce Store Design',
    startingPrice: 800,
    priceDisplay: 'Starting from $800',
    priceRange: '$800 – $1,500',
    description: 'Full custom Shopify & e-commerce store design engineered for browsing simplicity, trust, product merchandising, and high checkout conversion.',
    ctaText: 'Build My Store',
    category: 'ecommerce',
    turnaroundTime: '10–18 Days',
    features: [
      'Custom Shopify theme & collection architecture',
      'Frictionless checkout experience & cart drawer',
      'Multi-currency payment integration (Paystack, Flutterwave, Stripe, PayPal)',
      'Inventory, shipping rules & transactional notifications'
    ],
    deliverables: ['Full store architecture', 'Product & collection templates', 'Payment gateway setup', 'Testing & launch']
  },
  {
    id: 'landing-pages',
    number: '05',
    name: 'Landing Pages',
    startingPrice: 100,
    priceDisplay: 'Starting from $100',
    priceRange: '$100 – $250',
    description: 'High-impact landing pages designed to communicate your offer and drive action.',
    ctaText: 'Build a Landing Page',
    category: 'landing',
    turnaroundTime: '3–5 Days',
    features: [
      'Laser-focused value proposition layout',
      'High-contrast primary call-to-action buttons',
      'Lead capture form integration',
      'Ultra-fast lightweight loading'
    ],
    deliverables: ['Above-the-fold wireframe', 'High-conversion design', 'Form integration', 'Mobile QA']
  },
  {
    id: 'web-optimization',
    number: '06',
    name: 'Website Optimization',
    startingPrice: 300,
    priceDisplay: 'Starting from $300',
    priceRange: '$300 – $600',
    description: 'Improve an existing website without necessarily rebuilding it from scratch.',
    ctaText: 'Optimize My Website',
    category: 'optimization',
    turnaroundTime: '2–5 Days',
    features: [
      'Image asset compression & modern WebP formatting',
      'Render-blocking script cleanup',
      'CTA placement and clarity adjustments',
      'Technical on-page SEO improvements'
    ],
    deliverables: ['Speed optimization', 'Responsive layout tweaks', 'SEO meta setup', 'Verification audit']
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'nordic-living',
    name: 'AURA INTERIORS',
    category: 'E-commerce',
    isConcept: true,
    shortDescription: 'Modern furniture and lighting store focused on clean visual merchandising and streamlined mobile checkout.',
    fullDescription: 'A bespoke e-commerce concept crafted with a warm minimalist aesthetic, generous spacing, high-resolution product galleries, and a frictionless 2-step checkout flow.',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#2563EB',
    deliverables: ['Store Concept', 'Mobile Cart UX', 'Design System'],
    year: '2026'
  },
  {
    id: 'strata-capital',
    name: 'STRATA VENTURE LABS',
    category: 'Business',
    isConcept: true,
    shortDescription: 'Corporate platform for an emerging tech investment firm requiring institutional credibility and clean typography.',
    fullDescription: 'Editorial digital experience showcasing portfolio companies, investment thesis, and partner bios with deep navy tones and authoritative sans-serif typography.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#22D3EE',
    deliverables: ['Brand Architecture', 'Web Platform', 'Responsive System'],
    year: '2026'
  },
  {
    id: 'hyper-saas',
    name: 'PULSE ANALYTICS',
    category: 'Landing Page',
    isConcept: true,
    shortDescription: 'High-converting SaaS product landing page designed to communicate value quickly and drive trial sign-ups.',
    fullDescription: 'Engineered for clear hierarchy: an uncluttered split hero, interactive feature breakdown, social proof placement, and sticky navigation with zero distraction.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#2563EB',
    deliverables: ['Conversion Copy Flow', 'UI Mockups', 'Landing Page Build'],
    year: '2026'
  },
  {
    id: 'meridian-law',
    name: 'VANGUARD LEGAL PARTNERS',
    category: 'Redesign',
    isConcept: true,
    shortDescription: 'Complete redesign of a legacy professional services firm website into an accessible, mobile-ready experience.',
    fullDescription: 'Replaced a dated, cluttered 2014 layout with clear practice area navigation, attorney directories, and simple consultation booking triggers.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#08111F',
    deliverables: ['UX Redesign', 'Information Architecture', 'Mobile Optimization'],
    year: '2026'
  },
  {
    id: 'apex-roastery',
    name: 'ORBIT ROASTERS',
    category: 'E-commerce',
    isConcept: true,
    shortDescription: 'Artisanal coffee subscription brand experience featuring custom roast selector and recurring billing UI.',
    fullDescription: 'Rich tactile imagery paired with an easy coffee quiz, subscription tier selections, and seamless mobile pay options.',
    imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#2563EB',
    deliverables: ['Subscription UX', 'Storefront Concept', 'Checkout Flow'],
    year: '2026'
  },
  {
    id: 'zenith-architecture',
    name: 'KRONOS STUDIO',
    category: 'Concept',
    isConcept: true,
    shortDescription: 'Minimalist portfolio showcase for an architecture practice emphasizing large-scale photography and quiet navigation.',
    fullDescription: 'Built with generous negative space, grid-aligned project indexes, and smooth project transitions to let architectural photography take center stage.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#22D3EE',
    deliverables: ['Portfolio Grid', 'Editorial Layout', 'Visual System'],
    year: '2026'
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'pkg-audit',
    name: 'Website Audit & Diagnostic',
    startingPrice: 150,
    priceDisplay: 'Starting from $150',
    priceRange: '$150 – $350',
    description: 'Detailed forensic analysis of your current website or Shopify store to uncover UX, design, mobile layout, speed, and conversion friction.',
    features: [
      'Comprehensive UX & visual hierarchy audit',
      'Mobile responsiveness & tap-target diagnostics',
      'Speed, page weight & Core Web Vitals audit',
      'Prioritized remediation action plan',
      'Delivered in 48–72 hours'
    ],
    ctaText: 'Get an Audit'
  },
  {
    id: 'pkg-landing',
    name: 'Landing Page',
    startingPrice: 100,
    priceDisplay: 'Starting from $100',
    priceRange: '$100 – $250',
    description: 'High-impact, single-page website structured to present your offer with maximum clarity and drive lead action.',
    features: [
      'Strategic value proposition structure',
      'Mobile-first responsive layout',
      'Lead capture form integration',
      'Fast loading performance & clean styling',
      'Standard turnaround 3–5 days'
    ],
    ctaText: 'Build a Landing Page'
  },
  {
    id: 'pkg-business',
    name: 'Business Website',
    startingPrice: 800,
    priceDisplay: 'Starting from $800',
    priceRange: '$800 – $1,500',
    description: 'Custom multi-page website tailored to establish market authority, communicate your business value, and generate qualified leads.',
    features: [
      'Custom bespoke UI/UX architecture',
      'Up to 5 strategic pages (Home, About, Services, etc.)',
      'Contact & booking inquiry form integrations',
      'Search engine friendly semantic structure',
      'Full cross-device viewport testing'
    ],
    isPopular: true,
    ctaText: 'Start Business Website'
  },
  {
    id: 'pkg-redesign',
    name: 'Website Redesign',
    startingPrice: 500,
    priceDisplay: 'Starting from $500',
    priceRange: '$500 – $1,200',
    description: 'Transform an outdated website into a modern, responsive, and higher-converting digital home without losing brand equity.',
    features: [
      'Visual hierarchy and typography overhaul',
      'Mobile layout cleanup & modern UX',
      'Content migration & image reformatting',
      'Speed tuning & broken links remediation',
      'Preserve existing domain & SEO indexation'
    ],
    ctaText: 'Redesign My Website'
  },
  {
    id: 'pkg-ecommerce',
    name: 'Shopify & E-commerce Store',
    startingPrice: 800,
    priceDisplay: 'Starting from $800',
    priceRange: '$800 – $1,500',
    description: 'Full custom Shopify or e-commerce store configured to make product discovery, browsing, and purchasing seamless.',
    features: [
      'Custom Shopify theme & catalog configuration',
      'Secure multi-currency payment gateway integration',
      'Mobile shopping cart, drawer & checkout optimization',
      'Automated transactional emails & policy templates',
      'Inventory management & app conflict resolution'
    ],
    isPopular: true,
    ctaText: 'Build My Store'
  },
  {
    id: 'pkg-custom',
    name: 'Custom Architecture',
    startingPrice: 400,
    priceDisplay: 'Starting from $400',
    priceRange: 'Starting from $400+',
    description: 'Custom requirements, tailored web features, specialized integrations, or personalized digital architectures.',
    features: [
      'Tailored scope document and milestone delivery plan',
      'Dedicated UI/UX wireframing & interactive prototypes',
      'Custom integrations & component design',
      'Staging environment testing & launch readiness',
      'Post-launch support & ongoing maintenance options'
    ],
    ctaText: 'Request a Quote'
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'Understand your business, audience, goals, and current website.'
  },
  {
    number: '02',
    title: 'AUDIT',
    description: 'Identify design, UX, mobile, content, and conversion opportunities.'
  },
  {
    number: '03',
    title: 'DESIGN',
    description: 'Create the visual direction and user experience.'
  },
  {
    number: '04',
    title: 'BUILD',
    description: 'Develop a responsive, fast, professional website.'
  },
  {
    number: '05',
    title: 'LAUNCH',
    description: 'Test, optimize, and prepare the website for launch.'
  }
];

export const WEBSITE_PROBLEMS = [
  {
    title: 'Outdated design',
    description: 'A dated look causes visitors to question your credibility before reading a single sentence.'
  },
  {
    title: 'Poor mobile experience',
    description: 'Over 60% of web traffic is mobile. Tiny buttons and horizontal overflow instantly lose customers.'
  },
  {
    title: 'Confusing navigation',
    description: 'When visitors cannot easily find what they are looking for, they leave to visit a competitor.'
  },
  {
    title: 'Weak calls-to-action',
    description: 'Vague or buried action buttons leave interested prospects unsure of how to get started.'
  },
  {
    title: 'Slow or inefficient pages',
    description: 'Unoptimized assets and bloated scripts drive bounce rates up and Google search rankings down.'
  },
  {
    title: 'Low visitor trust',
    description: 'Lack of clear value messaging, contact clarity, and cohesive branding weakens conversions.'
  }
];

export const WHY_US_ITEMS = [
  {
    title: 'CUSTOM DESIGN',
    description: 'Your website should reflect your business rather than look like a generic template.'
  },
  {
    title: 'MOBILE FIRST',
    description: 'Your website should work beautifully across phones, tablets, and desktops.'
  },
  {
    title: 'STRATEGIC UX',
    description: 'Design decisions should make it easier for visitors to understand your offer.'
  },
  {
    title: 'CONVERSION FOCUSED',
    description: 'Clear structure and calls-to-action help visitors know what to do next.'
  },
  {
    title: 'RESPONSIVE SUPPORT',
    description: 'Provide clear communication throughout the project.'
  }
];

export const FAQS: FAQItem[] = [
  {
    q: 'Do you redesign existing websites?',
    a: 'Yes. We regularly transform outdated, sluggish, or cluttered websites into modern, responsive, and conversion-focused experiences while preserving your existing domain and brand assets.'
  },
  {
    q: 'Can you build or redesign a Shopify store or e-commerce website?',
    a: 'Yes. We design and build high-converting Shopify stores and e-commerce websites ($800–$1,500) and perform complete Shopify store redesigns (starting from $500) with clean product merchandising, custom theme styling, cart drawer optimization, and multi-currency gateway integrations (Paystack, Flutterwave, Stripe, PayPal).'
  },
  {
    q: 'Can you audit my current website or Shopify store?',
    a: 'Yes. We offer both a free initial website evaluation and comprehensive forensic website audits ($150–$350) that inspect UX design, mobile responsiveness, page speed, content hierarchy, and conversion bottlenecks.'
  },
  {
    q: 'Do you work with existing websites?',
    a: 'Yes. If you do not need a complete rebuild, we can optimize your existing website layout, fix mobile styling issues, improve loading times, and clarify your calls-to-action.'
  },
  {
    q: 'Will my website be mobile responsive?',
    a: 'Every website we build or redesign is designed mobile-first and tested rigorously across standard mobile viewports (320px, 375px, 390px, 430px) as well as tablets and desktops.'
  },
  {
    q: 'How long does a website project take?',
    a: 'Most standard landing pages and audits take 2 to 5 days. Full custom business websites and redesigns typically take 7 to 14 days, depending on project scope and content readiness.'
  },
  {
    q: 'Can I request a custom website?',
    a: 'Yes. For businesses with unique requirements, custom workflows, or complex architectures, we provide custom scope planning and transparent milestone quotes.'
  },
  {
    q: 'Do you provide website maintenance?',
    a: 'Yes. We provide scheduled updates, performance health checks, and ongoing content adjustments on a scope-based arrangement after launch.'
  },
  {
    q: 'How do I start a project?',
    a: 'You can request a free website audit, submit a project request form on our contact section, or use our project start form. We review your details and reply with clear next steps within 24 hours.'
  }
];
