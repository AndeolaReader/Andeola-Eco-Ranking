import {
  ServiceItem,
  DigitalProduct,
  Review,
  VideoReview,
  ServicePaymentRequest,
  BankAccount,
  WithdrawalRecord,
  FinanceSummary,
  BrandConfig,
  FAQItem
} from '../types';

export const BRAND_CONFIG: BrandConfig = {
  brandName: 'ANDEOLA',
  descriptor: 'ECO RANKING',
  whatsappNumber: '+2348124349094',
  whatsappDisplay: '+234 812 434 9094',
  supportEmail: 'webhubtech299@gmail.com',
  currency: 'USD'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-design',
    name: 'Website Design',
    startingPrice: 800,
    priceDisplay: 'Starting at $800',
    priceRange: '$800–$1,500',
    description: 'Professional responsive websites designed around your business, brand and goals.',
    ctaText: 'Request Website',
    category: 'design',
    turnaroundTime: '7–14 Days',
    features: [
      'Tailored UI/UX architecture designed for your market',
      'Mobile-first responsive layout tested across devices',
      'Conversion-focused visual hierarchy and CTA placement',
      'Modern speed, security and on-page SEO best practices'
    ],
    deliverables: ['Custom design mockup', 'Full frontend build', 'Forms & integrations', 'Testing & launch']
  },
  {
    id: 'web-redesign',
    name: 'Website Redesign',
    startingPrice: 600,
    priceDisplay: 'Starting at $600',
    priceRange: '$600–$1,200',
    description: 'Transform an outdated website into a modern, responsive and conversion-focused experience.',
    ctaText: 'Request Redesign',
    category: 'redesign',
    turnaroundTime: '5–10 Days',
    features: [
      'Full visual overhaul replacing dated templates',
      'Elimination of mobile layout and tap-target bugs',
      'Streamlined navigation and refined typography',
      'Preservation of existing domain authority and SEO structure'
    ],
    deliverables: ['Current site audit', 'Redesign blueprint', 'Responsive build', 'Zero-downtime migration']
  },
  {
    id: 'web-audit',
    name: 'Website Audit',
    startingPrice: 100,
    priceDisplay: 'Starting at $100',
    priceRange: '$100–$250',
    description: 'Identify design, UX, performance, SEO and technical issues affecting your website.',
    ctaText: 'Request Audit',
    category: 'audit',
    turnaroundTime: '2–3 Days',
    features: [
      'UX design and visual clarity inspection',
      'Mobile responsiveness and viewport testing',
      'Core Web Vitals & speed diagnostic',
      'Actionable prioritized remediation roadmap'
    ],
    deliverables: ['Detailed audit report PDF', 'Diagnostic breakdown', 'Step-by-step fix checklist', 'Consultation notes']
  },
  {
    id: 'web-error-fix',
    name: 'Website Error Fix',
    startingPrice: 100,
    priceDisplay: 'Starting at $100',
    priceRange: '$100–$500',
    description: 'Get help identifying and fixing website errors, broken pages and technical problems.',
    ctaText: 'Fix My Website',
    category: 'error-fix',
    turnaroundTime: '24–48 Hours',
    features: [
      'Resolution of broken JavaScript, CSS or styling errors',
      'Fixing 404 broken links, redirects and routing failures',
      'Database connection and CMS plugin conflict resolution',
      'Form submission and checkout gateway bug fixes'
    ],
    deliverables: ['Error log inspection', 'Direct code fix', 'Browser verification', 'Post-fix sanity report']
  },
  {
    id: 'shopify-support',
    name: 'Shopify Support',
    startingPrice: 150,
    priceDisplay: 'Starting at $150',
    priceRange: '$150–$600',
    description: 'Shopify troubleshooting, customization, store setup and optimization.',
    ctaText: 'Get Shopify Help',
    category: 'shopify',
    turnaroundTime: '2–5 Days',
    features: [
      'Theme customization (Liquid, JSON templates, styling)',
      'App conflict resolution and checkout troubleshooting',
      'Payment gateway setup (Paystack, Flutterwave, Stripe, PayPal)',
      'Product catalog, navigation and filter configuration'
    ],
    deliverables: ['Direct store troubleshooting', 'Theme code updates', 'Payment verification', 'Admin walkthrough']
  },
  {
    id: 'ecommerce-optimization',
    name: 'Ecommerce Optimization',
    startingPrice: 300,
    priceDisplay: 'Starting at $300',
    priceRange: '$300–$900',
    description: 'Improve product pages, store experience, navigation, trust and conversion flow.',
    ctaText: 'Optimize My Store',
    category: 'ecommerce',
    turnaroundTime: '4–7 Days',
    features: [
      'Product detail page layout & CTA optimization',
      'Frictionless cart drawer and checkout flow improvements',
      'Customer trust signals, badge styling and policy integration',
      'Mobile buying experience & speed improvements'
    ],
    deliverables: ['Conversion bottleneck audit', 'High-impact design tweaks', 'Checkout QA', 'Analytics validation']
  },
  {
    id: 'speed-optimization',
    name: 'Website Speed Optimization',
    startingPrice: 150,
    priceDisplay: 'Starting at $150',
    priceRange: '$150–$500',
    description: 'Identify and improve the technical factors affecting website loading performance.',
    ctaText: 'Improve My Website',
    category: 'speed',
    turnaroundTime: '2–4 Days',
    features: [
      'Image asset compression and modern format migration',
      'Render-blocking script deferral and CSS optimization',
      'Browser caching and CDN configuration',
      'Core Web Vitals remediation (LCP, FID/INP, CLS)'
    ],
    deliverables: ['Before/after speed reports', 'Optimized assets', 'Cleaned script configuration', 'Load verification']
  },
  {
    id: 'seo-optimization',
    name: 'SEO & Website Optimization',
    startingPrice: 200,
    priceDisplay: 'Starting at $200',
    priceRange: '$200–$700',
    description: 'Improve website structure, technical SEO, content organization and discoverability.',
    ctaText: 'Request Optimization',
    category: 'seo',
    turnaroundTime: '3–6 Days',
    features: [
      'Semantic HTML structure & heading hierarchy fix',
      'Meta tags, OpenGraph and Twitter card configuration',
      'XML sitemap generation and indexing verification',
      'Internal linking structure and URL readability improvements'
    ],
    deliverables: ['Technical SEO audit', 'Meta tags implementation', 'Sitemap setup', 'Search Console guidance']
  }
];

export const DIGITAL_PRODUCTS: DigitalProduct[] = [
  {
    id: 'sol-01',
    name: 'Shopify Checkout Troubleshooting Guide',
    price: 19,
    category: 'Shopify',
    problem: 'Checkout or payment problems affecting a Shopify store.',
    description: 'Follow a structured troubleshooting process to identify common checkout issues, check configuration problems and work through practical diagnostic steps before hiring a developer.',
    whoThisIsFor: 'Shopify store owners, dropshippers, and e-commerce managers facing checkout errors or abandoned payments.',
    whatYouWillReceive: 'Comprehensive PDF troubleshooting guide + interactive digital checklist and verification workbook.',
    whatsIncluded: [
      'Checkout troubleshooting checklist',
      'Common issue categories',
      'Payment configuration checks',
      'Shipping configuration checks',
      'Theme and app conflict checks',
      'Testing checklist',
      'Troubleshooting workflow',
      'Final verification checklist'
    ],
    format: 'PDF + Digital Documentation',
    difficulty: 'Intermediate',
    compatiblePlatforms: ['Shopify', 'Shopify Plus'],
    problemCategory: 'Checkout',
    ctaText: 'View Solution',
    purchaseCtaText: 'Buy & Download',
    rating: 4.9,
    reviewCount: 38,
    salesCount: 142,
    isPopular: true,
    version: 'v2.4',
    downloadSize: '4.8 MB',
    importantNotice: 'This guide outlines proven diagnostic steps to resolve configuration, app, and payment setting issues. It does not replace code repairs for broken custom apps.',
    relatedServiceId: 'shopify-support'
  },
  {
    id: 'sol-02',
    name: 'Website Speed Optimization Checklist',
    price: 15,
    category: 'Website Performance',
    problem: 'Website loads slowly.',
    description: 'A practical checklist for identifying common causes of slow website performance and improving the areas you can control.',
    whoThisIsFor: 'Website owners, bloggers, and store founders wanting faster page loads and better Core Web Vitals.',
    whatYouWillReceive: 'Actionable step-by-step PDF speed checklist with asset optimization tools and testing benchmarks.',
    whatsIncluded: [
      'Speed audit checklist',
      'Image optimization checklist',
      'Large file checklist',
      'Script review checklist',
      'Plugin/app review',
      'Caching checklist',
      'Mobile performance checklist',
      'Final testing checklist'
    ],
    format: 'PDF',
    difficulty: 'Beginner–Intermediate',
    compatiblePlatforms: ['WordPress', 'Shopify', 'Webflow', 'Wix', 'General Website'],
    problemCategory: 'Speed',
    ctaText: 'View Solution',
    purchaseCtaText: 'Buy & Download',
    rating: 4.8,
    reviewCount: 44,
    salesCount: 198,
    isPopular: true,
    version: 'v3.1',
    downloadSize: '2.6 MB',
    relatedServiceId: 'speed-optimization'
  },
  {
    id: 'sol-03',
    name: 'Shopify Theme Error Troubleshooting Guide',
    price: 25,
    category: 'Shopify',
    problem: 'Theme errors, broken sections or unexpected storefront behavior.',
    description: 'A structured blueprint to identify Liquid template errors, broken section JSON, and app script conflicts safely.',
    whoThisIsFor: 'Shopify merchants experiencing visual bugs after updating apps, themes, or custom sections.',
    whatYouWillReceive: 'PDF troubleshooting manual + Liquid debugging checklist and safe rollback procedures.',
    whatsIncluded: [
      'Theme troubleshooting workflow',
      'Theme section checklist',
      'App conflict checklist',
      'Browser testing',
      'Mobile testing',
      'Basic theme diagnostic steps',
      'Backup checklist',
      'Final testing procedure'
    ],
    format: 'PDF + Documentation',
    difficulty: 'Intermediate',
    compatiblePlatforms: ['Shopify', 'Shopify Plus'],
    problemCategory: 'Errors',
    ctaText: 'View Solution',
    purchaseCtaText: 'Buy & Download',
    rating: 4.9,
    reviewCount: 29,
    salesCount: 87,
    version: 'v2.0',
    downloadSize: '5.2 MB',
    relatedServiceId: 'shopify-support'
  },
  {
    id: 'sol-04',
    name: 'WordPress Website Error Troubleshooting Guide',
    price: 19,
    category: 'WordPress',
    problem: 'Common WordPress errors and broken website functionality.',
    description: 'Step-by-step diagnostic workflow to isolate plugin conflicts, 500 internal server errors, white screen of death, and theme crashes.',
    whoThisIsFor: 'WordPress and WooCommerce administrators who need to restore site functionality without breaking live data.',
    whatYouWillReceive: 'Complete WordPress recovery & troubleshooting PDF document with emergency checklist.',
    whatsIncluded: [
      'Error identification checklist',
      'Plugin troubleshooting',
      'Theme troubleshooting',
      'Update checks',
      'Cache checks',
      'Conflict testing',
      'Backup checklist',
      'Recovery workflow'
    ],
    format: 'PDF',
    difficulty: 'Intermediate',
    compatiblePlatforms: ['WordPress', 'WooCommerce'],
    problemCategory: 'Errors',
    ctaText: 'View Solution',
    purchaseCtaText: 'Buy & Download',
    rating: 4.7,
    reviewCount: 31,
    salesCount: 114,
    version: 'v2.2',
    downloadSize: '3.9 MB',
    relatedServiceId: 'web-error-fix'
  },
  {
    id: 'sol-05',
    name: '404 Error Fix Guide',
    price: 9,
    category: 'Website Errors',
    problem: 'Broken links and 404 pages.',
    description: 'Learn how to detect dead links, set up clean 301 redirects, and keep visitors from dropping off when a URL changes.',
    whoThisIsFor: 'Site managers restructuring pages, updating blogs, or noticing high 404 traffic spikes.',
    whatYouWillReceive: 'Concise, practical PDF guide with redirect templates and link audit workflows.',
    whatsIncluded: [
      'Finding broken URLs',
      'Checking internal links',
      'Redirect checklist',
      'Navigation checks',
      'Search engine considerations',
      'Testing checklist'
    ],
    format: 'PDF',
    difficulty: 'Beginner',
    compatiblePlatforms: ['WordPress', 'Shopify', 'Webflow', 'Squarespace', 'Wix', 'General Website'],
    problemCategory: 'Errors',
    ctaText: 'View Solution',
    purchaseCtaText: 'Buy & Download',
    rating: 4.8,
    reviewCount: 22,
    salesCount: 165,
    version: 'v1.5',
    downloadSize: '1.8 MB',
    relatedServiceId: 'web-error-fix'
  },
  {
    id: 'sol-06',
    name: 'Mobile Responsiveness Fix Checklist',
    price: 12,
    category: 'Mobile',
    problem: 'Website looks broken or difficult to use on phones.',
    description: 'Pinpoint mobile viewport clipping, horizontal scrolling errors, illegible text sizes, and cramped touch targets.',
    whoThisIsFor: 'Designers, entrepreneurs, and developers auditing mobile usability before launch.',
    whatYouWillReceive: 'Comprehensive mobile QA checklist covering iOS, Android viewports and tablet breakpoints.',
    whatsIncluded: [
      'Mobile layout checklist',
      'Text sizing checklist',
      'Button sizing',
      'Navigation checks',
      'Image scaling',
      'Horizontal overflow checks',
      'Tablet testing',
      'Final mobile QA checklist'
    ],
    format: 'PDF',
    difficulty: 'Beginner',
    compatiblePlatforms: ['Shopify', 'WordPress', 'Webflow', 'Squarespace', 'Wix', 'General Website'],
    problemCategory: 'Mobile',
    ctaText: 'View Solution',
    purchaseCtaText: 'Buy & Download',
    rating: 4.9,
    reviewCount: 36,
    salesCount: 178,
    isPopular: true,
    version: 'v2.1',
    downloadSize: '2.4 MB',
    relatedServiceId: 'web-redesign'
  },
  {
    id: 'sol-07',
    name: 'Website SEO Audit Checklist',
    price: 15,
    category: 'SEO',
    problem: 'Website needs a basic SEO review.',
    description: 'Ensure search engines can crawl, understand, and index your website pages effectively with structured on-page checkpoints.',
    whoThisIsFor: 'Website owners seeking higher search visibility without paying thousands for initial agency audits.',
    whatYouWillReceive: 'Step-by-step PDF checklist covering technical, on-page, and meta tag optimization.',
    whatsIncluded: [
      'Title tag checklist',
      'Meta description checklist',
      'Heading structure',
      'Image alt text',
      'Internal links',
      'URL structure',
      'Sitemap checklist',
      'Indexing checklist',
      'Mobile checklist'
    ],
    format: 'PDF',
    difficulty: 'Beginner–Intermediate',
    compatiblePlatforms: ['Shopify', 'WordPress', 'Webflow', 'Squarespace', 'General Website'],
    problemCategory: 'SEO',
    ctaText: 'View Solution',
    purchaseCtaText: 'Buy & Download',
    rating: 4.8,
    reviewCount: 42,
    salesCount: 156,
    version: 'v2.0',
    downloadSize: '3.1 MB',
    relatedServiceId: 'seo-optimization'
  },
  {
    id: 'sol-08',
    name: 'E-commerce Conversion Optimization Guide',
    price: 25,
    category: 'E-commerce',
    problem: 'Visitors are reaching your store but not converting.',
    description: 'A conversion engineering document identifying UX barriers across the cart, product pages, trust signals, and checkout.',
    whoThisIsFor: 'E-commerce store founders experiencing traffic with low sales conversion rates.',
    whatYouWillReceive: 'High-converting e-commerce UX roadmap PDF with before/after structural diagrams.',
    whatsIncluded: [
      'Homepage checklist',
      'Product page checklist',
      'CTA checklist',
      'Trust signals',
      'Product information',
      'Navigation',
      'Cart experience',
      'Checkout experience',
      'Mobile conversion checklist'
    ],
    format: 'PDF',
    difficulty: 'Intermediate',
    compatiblePlatforms: ['Shopify', 'WooCommerce', 'E-commerce'],
    problemCategory: 'Conversion',
    ctaText: 'View Solution',
    purchaseCtaText: 'Buy & Download',
    rating: 4.9,
    reviewCount: 50,
    salesCount: 210,
    isPopular: true,
    version: 'v3.0',
    downloadSize: '6.4 MB',
    relatedServiceId: 'ecommerce-optimization'
  },
  {
    id: 'sol-09',
    name: 'Website Security Checklist',
    price: 15,
    category: 'Security',
    problem: 'Website owners want a basic security review.',
    description: 'A practical baseline checklist to secure login credentials, manage admin access, verify SSL, and schedule automated backups.',
    whoThisIsFor: 'Small business owners and webmasters wanting essential digital hygiene and protection against common vulnerabilities.',
    whatYouWillReceive: 'Essential security audit PDF checklist and maintenance routine.',
    whatsIncluded: [
      'Password security',
      'Account access review',
      'Plugin/app review',
      'Backup checklist',
      'SSL/HTTPS check',
      'Admin access checklist',
      'Update checklist'
    ],
    format: 'PDF',
    difficulty: 'Beginner',
    compatiblePlatforms: ['WordPress', 'Shopify', 'Webflow', 'General Website'],
    problemCategory: 'Security',
    ctaText: 'View Solution',
    purchaseCtaText: 'Buy & Download',
    rating: 4.7,
    reviewCount: 19,
    salesCount: 92,
    version: 'v1.8',
    downloadSize: '2.1 MB',
    importantNotice: 'This guide outlines fundamental security hygiene and configuration safeguards. It is not an enterprise penetration test or cybersecurity audit.',
    relatedServiceId: 'web-error-fix'
  },
  {
    id: 'sol-10',
    name: 'Product Page Optimization Guide',
    price: 19,
    category: 'E-commerce',
    problem: 'Product pages are not communicating value clearly.',
    description: 'Learn how to structure compelling descriptions, place high-visibility buy buttons, add social proof, and eliminate hesitation.',
    whoThisIsFor: 'Store founders wanting to boost product add-to-cart rates and customer confidence.',
    whatYouWillReceive: 'Product page conversion framework PDF with copy structures and layout checklists.',
    whatsIncluded: [
      'Product title checklist',
      'Product description structure',
      'Product image checklist',
      'Benefits vs features',
      'CTA placement',
      'Trust elements',
      'Reviews',
      'FAQ',
      'Mobile product-page checklist'
    ],
    format: 'PDF',
    difficulty: 'Beginner–Intermediate',
    compatiblePlatforms: ['Shopify', 'WooCommerce', 'E-commerce'],
    problemCategory: 'Product Pages',
    ctaText: 'View Solution',
    purchaseCtaText: 'Buy & Download',
    rating: 4.8,
    reviewCount: 35,
    salesCount: 130,
    version: 'v2.3',
    downloadSize: '4.2 MB',
    relatedServiceId: 'ecommerce-optimization'
  },
  {
    id: 'sol-11',
    name: 'Shopify Store Launch Checklist',
    price: 19,
    category: 'Shopify',
    problem: 'Shopify store owner is preparing to launch.',
    description: 'Ensure zero embarrassing launch-day mistakes with an itemized checklist covering taxes, shipping zones, domain SSL, and test orders.',
    whoThisIsFor: 'New store founders launching a brand on Shopify and seeking total peace of mind.',
    whatYouWillReceive: 'Complete pre-launch and go-live PDF checklist with interactive verification marks.',
    whatsIncluded: [
      'Domain checklist',
      'Theme checklist',
      'Product checklist',
      'Navigation checklist',
      'Payment checklist',
      'Shipping checklist',
      'Mobile checklist',
      'SEO checklist',
      'Analytics checklist',
      'Final launch checklist'
    ],
    format: 'PDF',
    difficulty: 'Beginner–Intermediate',
    compatiblePlatforms: ['Shopify', 'Shopify Plus'],
    problemCategory: 'Store Setup',
    ctaText: 'View Solution',
    purchaseCtaText: 'Buy & Download',
    rating: 5.0,
    reviewCount: 48,
    salesCount: 224,
    isPopular: true,
    version: 'v3.2',
    downloadSize: '3.8 MB',
    relatedServiceId: 'shopify-support'
  },
  {
    id: 'sol-12',
    name: 'Website Redesign Planning Document',
    price: 15,
    category: 'Website Design',
    problem: 'Business owner wants to redesign a website but doesn\'t know where to start.',
    description: 'Avoid redesign paralysis. Plan page architectures, gather asset requirements, define user personas, and establish scope before writing code.',
    whoThisIsFor: 'Founders preparing for a redesign who want to articulate requirements clearly to a designer or handle it internally.',
    whatYouWillReceive: 'Editable planning workbook + PDF redesign roadmap with wireframe worksheets.',
    whatsIncluded: [
      'Website goals worksheet',
      'Audience worksheet',
      'Page planning',
      'Content checklist',
      'Design direction',
      'Mobile planning',
      'Conversion planning',
      'Launch checklist'
    ],
    format: 'PDF + Editable Document',
    difficulty: 'Beginner',
    compatiblePlatforms: ['General Website', 'Shopify', 'WordPress', 'Webflow', 'Squarespace'],
    problemCategory: 'Design',
    ctaText: 'View Solution',
    purchaseCtaText: 'Buy & Download',
    rating: 4.9,
    reviewCount: 28,
    salesCount: 105,
    version: 'v2.0',
    downloadSize: '5.0 MB',
    relatedServiceId: 'web-redesign'
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-01',
    author: 'Daniel K.',
    company: 'Veritas Retail',
    rating: 5,
    date: 'March 14, 2026',
    content: 'The Shopify Checkout Troubleshooting Guide saved us several days of trial and error. We had a shipping rule conflict that was hiding payment options on mobile. Followed the step-by-step diagnostic and solved it in 45 minutes.',
    type: 'digital-solution',
    targetName: 'Shopify Checkout Troubleshooting Guide',
    verifiedPurchase: true
  },
  {
    id: 'rev-02',
    author: 'Sarah Jenkins',
    company: 'Oak & Stone Studio',
    rating: 5,
    date: 'February 28, 2026',
    content: 'ANDEOLA completely redesigned our firm website from an outdated 2017 layout into a crisp, responsive brand showcase. Our contact form inquiries doubled within the first month. Transparent milestones and clean communication throughout.',
    type: 'service',
    targetName: 'Website Redesign',
    verifiedPurchase: true
  },
  {
    id: 'rev-03',
    author: 'Marcus Vance',
    company: 'Aura Athletics',
    rating: 5,
    date: 'March 8, 2026',
    content: 'Bought the Speed Optimization Checklist. Downsized render-blocking scripts and configured WebP image compression following the instructions. Our mobile load time dropped from 4.8s to 1.3s.',
    type: 'digital-solution',
    targetName: 'Website Speed Optimization Checklist',
    verifiedPurchase: true
  },
  {
    id: 'rev-04',
    author: 'Evelyn Brooks',
    company: 'Apex Logistics',
    rating: 5,
    date: 'January 19, 2026',
    content: 'We hired ANDEOLA for an in-depth Website Audit. The report was granular, objective, and pointed out exact viewport overflow bugs on newer iPhones that our previous developer missed. Worth every dollar.',
    type: 'service',
    targetName: 'Website Audit',
    verifiedPurchase: true
  },
  {
    id: 'rev-05',
    author: 'Tariq Al-Mansoor',
    company: 'Global Craft Hub',
    rating: 5,
    date: 'March 2, 2026',
    content: 'The Shopify Store Launch Checklist is indispensable. We checked off every payment gateway, tax zone, and test order item before turning off password protection. Flawless launch day.',
    type: 'digital-solution',
    targetName: 'Shopify Store Launch Checklist',
    verifiedPurchase: true
  },
  {
    id: 'rev-06',
    author: 'Chinedu Eze',
    company: 'Kora Tech Solutions',
    rating: 5,
    date: 'February 12, 2026',
    content: 'We experienced recurring 500 server errors on WordPress after an update. The ANDEOLA team diagnosed the plugin namespace collision within two hours and had everything back online safely.',
    type: 'service',
    targetName: 'Website Error Fix',
    verifiedPurchase: true
  }
];

export const VIDEO_REVIEWS: VideoReview[] = [
  {
    id: 'vid-01',
    author: 'Hannah M.',
    role: 'Co-Founder',
    company: 'Kinsley Modern Goods',
    quote: 'ANDEOLA helped us work through a frustrating mobile checkout issue and gave us a clear way to troubleshoot it.',
    targetName: 'Shopify Checkout Troubleshooting Guide',
    type: 'digital-solution',
    rating: 5,
    verifiedCustomer: true,
    summary: 'How we solved a mobile checkout abandonment issue ourselves in under an hour without waiting on a developer.',
    videoThumbnail: '/videos/hannah-thumb.jpg',
    videoDuration: '0:30',
    videoUrl: '/videos/hannah-review.mp4',
    spokenScript: "I was having this really frustrating issue with our Shopify checkout, especially on mobile. Everything looked fine on the store, but when customers actually tried to check out, we were running into problems. I found the ANDEOLA Shopify Checkout Troubleshooting Guide, and honestly, it made the whole process much easier to understand. Instead of randomly changing things and hoping something worked, I could actually go through the problem step by step. What I really appreciated was how clear everything was. It helped me understand what I was looking at and what I needed to check. Once we worked through the issue, I felt a huge sense of relief because checkout was one less thing I had to worry about. The experience with ANDEOLA was really straightforward, and I would definitely recommend it to another Shopify store owner who is stuck trying to figure out a technical issue.",
    voiceGender: 'female',
    voicePitch: 1.05,
    voiceRate: 0.98,
    captions: [
      { time: 0, text: "I was having this really frustrating issue with our Shopify checkout, especially on mobile." },
      { time: 5, text: "Everything looked fine on the store, but when customers actually tried to check out, we were running into problems." },
      { time: 10, text: "I found the ANDEOLA Shopify Checkout Troubleshooting Guide, and honestly, it made the process much easier." },
      { time: 15, text: "Instead of randomly changing things, I could actually go through the problem step by step." },
      { time: 20, text: "What I appreciated was how clear everything was. It helped me understand what I needed to check." },
      { time: 25, text: "Once we worked through it, checkout was one less thing to worry about. I'd definitely recommend ANDEOLA." }
    ]
  },
  {
    id: 'vid-02',
    author: 'David Adeyemi',
    role: 'Managing Director',
    company: 'Stratum Ventures',
    quote: "The focus wasn't just on making the website look better. There was real attention to how the website actually performed.",
    targetName: 'Corporate Website Redesign + Core Web Vitals Optimization',
    type: 'service',
    rating: 5,
    verifiedCustomer: true,
    summary: 'Our experience hiring ANDEOLA for a complete corporate website rebuild and mobile optimization.',
    videoThumbnail: '/videos/david-thumb.jpg',
    videoDuration: '0:30',
    videoUrl: '/videos/david-review.mp4',
    spokenScript: "Our website had reached a point where it didn't really represent the company the way we wanted it to. It needed a more modern structure, a better user experience, and we also had performance issues that we needed to address. Working with ANDEOLA was a very straightforward process. We were able to discuss what wasn't working, identify the areas that needed improvement, and then work through the redesign and Core Web Vitals optimization. What stood out to me was that the focus wasn't just on making the website look better. There was also attention to how the website actually performed. By the end of the project, the site felt much more professional and much more aligned with the company. For us, that was important because our website is often one of the first places people interact with the business. I'm very happy with how the project came together and with the experience of working with ANDEOLA.",
    voiceGender: 'male',
    voicePitch: 0.92,
    voiceRate: 0.95,
    captions: [
      { time: 0, text: "Our website had reached a point where it didn't really represent the company the way we wanted it to." },
      { time: 5, text: "It needed a modern structure, a better user experience, and performance issues that needed addressing." },
      { time: 10, text: "Working with ANDEOLA was a very straightforward process from start to finish." },
      { time: 15, text: "We identified areas for improvement, then worked through the redesign and Core Web Vitals optimization." },
      { time: 20, text: "The focus wasn't just on looks — there was real attention to how the website actually performed." },
      { time: 25, text: "The site feels much more professional and aligned with our company. Very happy with the experience." }
    ]
  },
  {
    id: 'vid-03',
    author: 'Elena Rostova',
    role: 'Growth Lead',
    company: 'Verve Botanicals',
    quote: 'The guide gave our team a practical framework. Our add-to-cart rate increased by 34% across key store pages.',
    targetName: 'E-commerce Conversion Optimization Guide',
    type: 'digital-solution',
    rating: 5,
    verifiedCustomer: true,
    summary: 'The specific product page checklists that increased our store add-to-cart rate by 34%.',
    videoThumbnail: '/videos/elena-thumb.jpg',
    videoDuration: '0:30',
    videoUrl: '/videos/elena-review.mp4',
    spokenScript: "We knew there was something we could improve with our store, but we weren't completely sure where the biggest conversion problems were. The ANDEOLA E-commerce Conversion Optimization Guide gave us a much clearer way to look at the customer journey. Instead of making random changes, we could actually focus on specific areas of the store and understand why those areas mattered. We implemented the recommendations across some of our key pages, and the results were really encouraging. Our add-to-cart rate increased by 34%, which was a result we were genuinely excited about. But beyond the number itself, what I liked was having a much better understanding of why customers were behaving the way they were. The guide gave our team a practical framework that we could actually use. I'd definitely recommend ANDEOLA to an e-commerce team that wants to understand what's holding their website back and make more intentional improvements.",
    voiceGender: 'female',
    voicePitch: 1.05,
    voiceRate: 0.98,
    captions: [
      { time: 0, text: "We knew there was something we could improve with our store, but weren't sure where the conversion issues were." },
      { time: 5, text: "The ANDEOLA E-commerce Conversion Optimization Guide gave us a clearer way to look at the customer journey." },
      { time: 11, text: "Instead of making random changes, we could focus on specific areas and understand why they mattered." },
      { time: 16, text: "We implemented the recommendations across key pages, and our add-to-cart rate increased by 34%." },
      { time: 22, text: "What I loved was having a practical framework and understanding why customers behaved that way." },
      { time: 26, text: "I'd definitely recommend ANDEOLA to any e-commerce team wanting intentional improvements." }
    ]
  }
];

export const INITIAL_PAYMENT_REQUESTS: ServicePaymentRequest[] = [
  {
    id: 'req-01',
    clientName: 'Rachel Adams',
    email: 'rachel@radamsdesigns.com',
    service: 'Website Redesign',
    projectDescription: 'Complete website redesign based on approved scope: modern responsive design, 5 core pages, mobile layout cleanup, and speed tuning.',
    amount: 1200,
    dueDate: '2026-10-15',
    notes: 'Approved scope milestone 1. Payment secures development kickoff.',
    status: 'pending'
  },
  {
    id: 'req-02',
    clientName: 'Michael Chen',
    email: 'mchen@vortexhardware.com',
    service: 'Shopify Support & Theme Customization',
    projectDescription: 'Custom Liquid cart drawer modifications, app conflict debugging, and Paystack/Flutterwave gateway configuration.',
    amount: 450,
    dueDate: '2026-10-05',
    notes: 'Approved project scope.',
    status: 'pending'
  }
];

export const INITIAL_BANK_ACCOUNTS: BankAccount[] = [
  {
    id: 'bnk-01',
    country: 'Nigeria',
    bankName: 'Access Bank',
    accountName: 'ANDEOLA ECO RANKING',
    accountNumberMasked: '******4909',
    isDefault: true,
    addedAt: '2026-01-15'
  }
];

export const INITIAL_WITHDRAWALS: WithdrawalRecord[] = [
  {
    id: 'wd-101',
    reference: 'WDR-2026-0901',
    amount: 850,
    bankAccountId: 'bnk-01',
    bankDetails: 'Access Bank (******4909)',
    status: 'Successful',
    requestedAt: '2026-09-01T14:32:00Z',
    settledAt: '2026-09-02T10:15:00Z'
  },
  {
    id: 'wd-102',
    reference: 'WDR-2026-0918',
    amount: 1200,
    bankAccountId: 'bnk-01',
    bankDetails: 'Access Bank (******4909)',
    status: 'Successful',
    requestedAt: '2026-09-18T09:10:00Z',
    settledAt: '2026-09-19T11:40:00Z'
  }
];

export const INITIAL_FINANCE: FinanceSummary = {
  totalRevenue: 8450,
  digitalSolutionRevenue: 2850,
  serviceRevenue: 5600,
  pendingPayments: 1650,
  settledBalance: 6400,
  availableBalance: 4350,
  withdrawnAmount: 2050
};

export const FAQS: FAQItem[] = [
  {
    q: 'What is the difference between hiring ANDEOLA and buying a Digital Solution?',
    a: 'We offer two clear pathways: If you want our engineering team to handle the work directly, you choose a Professional Service (such as Website Redesign, Shopify Support, or Error Fixing). If you prefer to diagnose and solve the problem yourself, you can purchase an instant Digital Solution (a structured guide, checklist, or troubleshooting document) for a small one-time fee.',
    category: 'general'
  },
  {
    q: 'How do I download a Digital Solution after purchase?',
    a: 'Instantly after your payment is confirmed, your download is unlocked directly on screen. You can also view and download all your past purchases at any time by clicking "Account" or "My Downloads" in the top navigation.',
    category: 'digital-solutions'
  },
  {
    q: 'What formats do Digital Solutions come in?',
    a: 'Most solutions come as formatted high-resolution PDFs accompanied by interactive digital checklists and editable planning workbooks where applicable. They are optimized for reading on desktops, tablets, and phones.',
    category: 'digital-solutions'
  },
  {
    q: 'Can I start with a Digital Solution and hire ANDEOLA later if I need help?',
    a: 'Yes! Many clients start by reading a troubleshooting guide or checklist. If you decide you would rather have our team take over the implementation, we can credit part of your digital solution purchase toward your custom service project.',
    category: 'services'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'All pricing is in USD ($). We accept secure online payments via Paystack (our primary gateway for Nigeria and international cards), Flutterwave, Stripe, and PayPal. Card details are processed directly through 256-bit SSL encrypted gateway endpoints.',
    category: 'payments'
  },
  {
    q: 'How does custom service pricing and payment work?',
    a: 'Services feature transparent starting rates and expected typical ranges. Once we review your website requirements, we provide an agreed milestone scope and generate a secure custom Payment Request. You can review the deliverables and pay securely online to initiate the project.',
    category: 'services'
  },
  {
    q: 'Do you offer a free website audit?',
    a: 'Yes. You can submit your website URL, platform, and main challenge through our "Not Sure What\'s Wrong?" audit form. Our team performs an initial diagnostic and shares actionable feedback on what is holding your site back.',
    category: 'services'
  }
];
