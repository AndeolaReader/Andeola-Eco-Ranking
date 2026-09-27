import { ServiceItem, DigitalProduct, Review, VideoReview, ServicePaymentRequest, BankAccount, WithdrawalRecord, BrandConfig } from '../types';

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'web-design',
    name: 'Website Design',
    startingPrice: 800,
    priceRange: '$800–$1,500',
    description: 'Professional websites designed around your business, brand and customers.',
    ctaText: 'Request Website',
    category: 'design',
    turnaroundTime: '7–14 Days',
    features: [
      'Custom bespoke UI/UX architecture',
      'Mobile-first responsive design',
      'High-conversion wireframes & prototypes',
      'Brand guideline integration',
      'Fast loading & SEO-ready structure'
    ],
    recommendedFor: 'Businesses needing a fresh, high-impact online presence'
  },
  {
    id: 'web-redesign',
    name: 'Website Redesign',
    startingPrice: 600,
    priceRange: '$600–$1,200',
    description: 'Modernize your outdated site with improved user experience, speed, and elevated aesthetics.',
    ctaText: 'Request Redesign',
    category: 'design',
    turnaroundTime: '5–10 Days',
    features: [
      'UX architecture overhaul',
      'Modern visual refresh',
      'Mobile navigation rework',
      'Information architecture cleanup',
      'Zero content downtime migration'
    ],
    recommendedFor: 'Established brands with declining conversions or dated layouts'
  },
  {
    id: 'web-audit',
    name: 'Website Audit',
    startingPrice: 100,
    priceRange: '$100–$250',
    description: 'In-depth forensic audit covering performance, conversion bottlenecks, accessibility, and code quality.',
    ctaText: 'Request Audit',
    category: 'support',
    turnaroundTime: '2–3 Days',
    features: [
      'Core Web Vitals diagnostic',
      'UX friction point analysis',
      'Mobile responsiveness breakdown',
      'Security header inspection',
      'Prioritized remediation action plan'
    ],
    recommendedFor: 'Sites facing traffic drops or unexplainable bounce rates'
  },
  {
    id: 'error-fix',
    name: 'Website Error Fix',
    startingPrice: 100,
    priceRange: '$100–$500',
    description: 'Rapid diagnostic and technical resolution for broken pages, console errors, and critical script bugs.',
    ctaText: 'Fix My Website',
    category: 'development',
    turnaroundTime: '24–48 Hours',
    features: [
      'Critical bug triage & root cause analysis',
      'JavaScript / PHP / CSS repairs',
      'Form submission & gateway debugging',
      'Cross-browser rendering fixes',
      'Post-fix regression testing'
    ],
    recommendedFor: 'Websites with broken checkout, crashing scripts, or layout errors'
  },
  {
    id: 'shopify-support',
    name: 'Shopify Support',
    startingPrice: 150,
    priceRange: '$150–$600',
    description: 'Dedicated Shopify technical assistance for Liquid customization, app conflicts, and checkout tweaks.',
    ctaText: 'Get Shopify Support',
    category: 'support',
    turnaroundTime: '24–72 Hours',
    features: [
      'Theme code & Liquid logic customization',
      'Third-party app conflict resolution',
      'Checkout & cart drawer fixes',
      'Inventory feed & webhook setup',
      'Speed tuning for Shopify themes'
    ],
    recommendedFor: 'Shopify merchants needing dependable technical problem solving'
  },
  {
    id: 'ecommerce-opt',
    name: 'E-commerce Optimization',
    startingPrice: 300,
    priceRange: '$300–$900',
    description: 'Data-informed optimization of user flows, product pages, and checkout paths to lift average order value.',
    ctaText: 'Optimize Store',
    category: 'optimization',
    turnaroundTime: '5–7 Days',
    features: [
      'Cart abandonment reduction flows',
      'Product page conversion layout',
      'Trust badges & checkout friction removal',
      'Mobile checkout simplification',
      'Search & filtering improvements'
    ],
    recommendedFor: 'Online stores ready to convert existing traffic into higher revenue'
  },
  {
    id: 'speed-opt',
    name: 'Website Speed Optimization',
    startingPrice: 150,
    priceRange: '$150–$500',
    description: 'Comprehensive speed acceleration: asset compression, caching headers, script deferral, and green hosting.',
    ctaText: 'Accelerate Website',
    category: 'optimization',
    turnaroundTime: '2–4 Days',
    features: [
      'Sub-1.8s page load benchmark target',
      'Image & WebP lossless compression',
      'Unused JS/CSS stripping & deferral',
      'CDN & browser caching configuration',
      'Reduced server carbon footprint'
    ],
    recommendedFor: 'Slow websites losing visitors and organic Google rankings'
  },
  {
    id: 'seo-opt',
    name: 'SEO & Website Optimization',
    startingPrice: 200,
    priceRange: '$200–$700',
    description: 'Technical on-page SEO, metadata architecture, schema markup, and crawlability optimization.',
    ctaText: 'Optimize SEO',
    category: 'optimization',
    turnaroundTime: '3–6 Days',
    features: [
      'Schema.org structured data injection',
      'Robots.txt & XML sitemap alignment',
      'Heading hierarchy & canonicals audit',
      'Internal linking & redirect loops fix',
      'Search Console error remediation'
    ],
    recommendedFor: 'Websites looking to improve indexation and organic search visibility'
  }
];

export const INITIAL_DIGITAL_PRODUCTS: DigitalProduct[] = [
  {
    id: 'shopify-checkout-guide',
    title: 'SHOPIFY CHECKOUT TROUBLESHOOTING GUIDE',
    problem: 'Checkout/payment problems, payment gateway errors, and dropped customer transactions at checkout.',
    solution: 'Step-by-step diagnostic documentation to identify failing scripts, fix webhook timeouts, and restore payments.',
    includes: [
      'Diagnostic checklist for Shopify checkout',
      'Top 12 common payment gateway failure causes',
      'Step-by-step troubleshooting & sandbox testing process',
      'Post-fix verification testing checklist',
      'Recommended code fixes for Liquid & scripts'
    ],
    format: 'PDF Guide + Diagnostic Checklist',
    price: 19,
    difficulty: 'Intermediate',
    compatibility: ['Shopify', 'Shopify Plus', 'Stripe', 'PayPal'],
    rating: 4.9,
    reviewCount: 38,
    category: 'Shopify',
    isDemo: true,
    demoNote: 'Demo Product — Document template provided for simulation & evaluation.',
    tags: ['Shopify', 'Checkout', 'Payments', 'Troubleshooting'],
    downloadContentSample: `ANDEOLA DIGITAL SOLUTIONS - SHOPIFY CHECKOUT TROUBLESHOOTING GUIDE
Version 2.4 | USD Reference Copy

SECTION 1: SYSTEMATIC CHECKOUT DIAGNOSIS
1. Inspect the browser console during test checkout: Look for CORS errors or blocked third-party analytics scripts interfering with checkout redirection.
2. Check Shopify Settings > Payments: Verify webhook endpoint responses and currency conversion rules.
3. Test with incognito mode to rule out cached session tokens or duplicate draft orders.

SECTION 2: TOP ROOT CAUSES
• App script injection conflicts (disabling unneeded apps)
• Unsynced taxes/shipping zone calculation timeouts
• Payment gateway API key mismatch or invalid sandbox credentials

SECTION 3: IMMEDIATE REMEDIATION CHECKLIST
[x] Run transaction simulator in test mode
[x] Clear store cache and check Liquid checkout assets
[x] Confirm customer contact requirements (email vs phone)
[x] Verify 3D-Secure configuration with your bank/provider

Need professional hands-on help? Contact ANDEOLA for dedicated Shopify Support.`
  },
  {
    id: 'speed-optimization-checklist',
    title: 'WEBSITE SPEED OPTIMIZATION CHECKLIST',
    problem: 'Slow loading times (>3.5s), poor Core Web Vitals, high bounce rate, and dropping search engine rankings.',
    solution: 'A systematic 28-point technical checklist to reduce TTFB, optimize asset payloads, and pass Google Core Web Vitals.',
    includes: [
      'Server response & TTFB reduction tactics',
      'Lossless WebP/AVIF image pipeline setup',
      'Critical CSS extraction & JS deferral guide',
      'Browser caching & Gzip/Brotli configuration',
      'Resource hints (preconnect, dns-prefetch) template'
    ],
    format: 'PDF Guide + Interactive Sheet',
    price: 15,
    difficulty: 'Beginner',
    compatibility: ['Any CMS', 'WordPress', 'Shopify', 'Custom React/HTML'],
    rating: 4.8,
    reviewCount: 52,
    category: 'Speed',
    isDemo: true,
    demoNote: 'Demo Product — Document template provided for simulation & evaluation.',
    tags: ['Speed', 'Core Web Vitals', 'Performance', 'Cache'],
    downloadContentSample: `ANDEOLA DIGITAL SOLUTIONS - WEBSITE SPEED OPTIMIZATION CHECKLIST
Version 1.8 | Practical Action Checklist

1. ASSET OPTIMIZATION
- Convert all hero background images to WebP/AVIF with responsive srcset attributes.
- Ensure all SVG graphics are minified via SVGO.
- Lazy-load below-the-fold iframes and images.

2. JAVASCRIPT & CSS
- Eliminate render-blocking stylesheets using critical inline CSS.
- Add 'defer' or 'async' to non-critical tracking scripts (GTM, Meta Pixel).
- Purge unused CSS rules from build output.

3. SERVER & CACHING
- Enable HTTP/2 or HTTP/3 multiplexing.
- Implement Cache-Control max-age=31536000 for immutable static assets.
- Route international traffic through Cloudflare or Fastly edge caches.`
  },
  {
    id: 'shopify-theme-error-guide',
    title: 'SHOPIFY THEME ERROR TROUBLESHOOTING GUIDE',
    problem: 'Broken theme layouts, Liquid syntax errors, missing variant selectors, and app code remnants causing white screens.',
    solution: 'Comprehensive guide to debugging Liquid templates, resolving theme app extensions, and restoring store aesthetics.',
    includes: [
      'Liquid syntax error decoding table',
      'Safe theme rollback and versioning steps',
      'Orphaned app script detection & removal script',
      'Variant selector & AJAX cart drawer debugging guide',
      'Theme inspection cheat-sheet'
    ],
    format: 'PDF Guide + Code Snippets',
    price: 25,
    difficulty: 'Intermediate',
    compatibility: ['Shopify Dawn', 'Custom Liquid Themes', 'OS 2.0'],
    rating: 4.9,
    reviewCount: 29,
    category: 'Shopify',
    isDemo: true,
    demoNote: 'Demo Product — Document template provided for simulation & evaluation.',
    tags: ['Shopify', 'Liquid', 'Theme Errors', 'Code'],
    downloadContentSample: `ANDEOLA DIGITAL SOLUTIONS - SHOPIFY THEME ERROR TROUBLESHOOTING GUIDE
Diagnostics for Online Store 2.0 & Legacy Themes.

Key Steps:
1. Identifying Liquid Syntax Errors: Trace line numbers reported in the theme editor.
2. Cleaning Orphaned App Assets: How to remove lingering snippet references in theme.liquid.
3. Restoring Broken Variant Callbacks: Inspecting product-form.js dispatch events.`
  },
  {
    id: 'wordpress-error-guide',
    title: 'WORDPRESS ERROR TROUBLESHOOTING GUIDE',
    problem: 'WordPress White Screen of Death (WSOD), 500 Internal Server Errors, plugin collision loops, and failed updates.',
    solution: 'Diagnostic flowcharts and WP-CLI/FTP recovery commands to quickly restore broken WordPress and WooCommerce sites.',
    includes: [
      'WSOD recovery protocol via SFTP/cPanel',
      'Plugin conflict isolation methodology',
      'wp-config.php debug mode configuration guide',
      'Database repair & corrupted table fixes',
      '.htaccess reset & memory limit increase snippets'
    ],
    format: 'PDF Guide + Emergency Snippets',
    price: 19,
    difficulty: 'Intermediate',
    compatibility: ['WordPress 6.x', 'WooCommerce', 'Elementor', 'Divi'],
    rating: 4.7,
    reviewCount: 44,
    category: 'WordPress',
    isDemo: true,
    demoNote: 'Demo Product — Document template provided for simulation & evaluation.',
    tags: ['WordPress', 'PHP', 'WSOD', 'Plugins'],
    downloadContentSample: `ANDEOLA DIGITAL SOLUTIONS - WORDPRESS ERROR RESOLUTION GUIDE
Emergency recovery steps for critical WordPress site crashes.

Protocol:
1. Enable WP_DEBUG in wp-config.php:
   define('WP_DEBUG', true);
   define('WP_DEBUG_LOG', true);
   define('WP_DEBUG_DISPLAY', false);
2. Rename /wp-content/plugins to deactivate all plugins temporarily.
3. Check memory_limit in php.ini / wp-config (set to 256M or 512M).`
  },
  {
    id: '404-error-fix-guide',
    title: '404 ERROR FIX GUIDE',
    problem: 'Broken internal links, dead URLs, dropped page ranks after migration, and confused visitors landing on 404 pages.',
    solution: 'Complete mapping guide to identify all 404 links, configure regex 301 redirects, and build high-retaining custom error pages.',
    includes: [
      '404 discovery audit methodology using free tools',
      '301 redirect configuration templates for Apache/Nginx/.htaccess',
      'High-converting 404 page wireframe and copy template',
      'Google Search Console crawl error remediation steps',
      'Broken link monitoring automation'
    ],
    format: 'PDF Guide + Nginx/Apache Templates',
    price: 9,
    difficulty: 'Beginner',
    compatibility: ['All Platforms', 'WordPress', 'Shopify', 'Webflow', 'Static Sites'],
    rating: 4.8,
    reviewCount: 67,
    category: 'Errors',
    isDemo: true,
    demoNote: 'Demo Product — Document template provided for simulation & evaluation.',
    tags: ['404', 'Redirects', 'SEO', 'Broken Links'],
    downloadContentSample: `ANDEOLA DIGITAL SOLUTIONS - 404 ERROR FIX GUIDE
Fix broken links and protect your domain equity.

Core Directives:
- Never redirect all 404s blindly to the homepage; redirect to the closest thematic category.
- Apache .htaccess syntax: Redirect 301 /old-product /new-product
- Nginx syntax: rewrite ^/old-slug$ /new-slug permanent;`
  },
  {
    id: 'mobile-responsiveness-checklist',
    title: 'MOBILE RESPONSIVENESS CHECKLIST',
    problem: 'Text overlapping on phone screens, horizontal scrolling bugs, tap targets too close, and failing Mobile-Friendly audits.',
    solution: 'A practical 32-point inspection manual to detect and fix viewport breaks, responsive tables, modals, and sticky headers.',
    includes: [
      'Viewport meta tag verification criteria',
      'Elimination of unintended horizontal scrolling (overflow-x)',
      'Touch target sizing standards (minimum 48x48px)',
      'Responsive typography fluid clamp() calculations',
      'Cross-device mobile inspection testing protocol'
    ],
    format: 'PDF Checklist + CSS Cheat Sheet',
    price: 12,
    difficulty: 'Beginner',
    compatibility: ['HTML/CSS', 'Tailwind', 'Bootstrap', 'All CMS'],
    rating: 4.9,
    reviewCount: 31,
    category: 'UI/UX',
    isDemo: true,
    demoNote: 'Demo Product — Document template provided for simulation & evaluation.',
    tags: ['Mobile', 'Responsive', 'CSS', 'UI/UX'],
    downloadContentSample: `ANDEOLA DIGITAL SOLUTIONS - MOBILE RESPONSIVENESS CHECKLIST
Ensure seamless viewing across all smartphones and tablets.

Key Checks:
1. Viewport: <meta name="viewport" content="width=device-width, initial-scale=1.0">
2. Find accidental overflow: * { outline: 1px solid red; } to track elements exceeding screen width.
3. Tap Targets: Minimum 44px spacing between interactive touch zones.`
  },
  {
    id: 'seo-audit-checklist',
    title: 'WEBSITE SEO AUDIT CHECKLIST',
    problem: 'Invisible in search rankings, unindexed pages, duplicate title tags, and missing OpenGraph/rich snippets.',
    solution: 'Systematic technical SEO workbook to audit your site architecture, schema data, headings, canonicals, and sitemaps.',
    includes: [
      'Indexability and robots.txt health check',
      'Structured data (JSON-LD) validation steps',
      'Title, meta description, and H1-H6 hierarchy rules',
      'Image alt attributes & multimedia SEO audit',
      'Canonicalization and duplicate content resolution'
    ],
    format: 'PDF Guide + Audit Workbook',
    price: 15,
    difficulty: 'Intermediate',
    compatibility: ['Google Search Console', 'All CMS', 'React/Next.js'],
    rating: 4.8,
    reviewCount: 41,
    category: 'SEO',
    isDemo: true,
    demoNote: 'Demo Product — Document template provided for simulation & evaluation.',
    tags: ['SEO', 'Audit', 'Rankings', 'Metadata'],
    downloadContentSample: `ANDEOLA DIGITAL SOLUTIONS - WEBSITE SEO AUDIT CHECKLIST
A forensic framework to elevate organic search performance.

Audit Pillars:
1. Crawlability: Inspect sitemap.xml for 200 OK responses only.
2. Metadata: Unique titles < 60 chars, compelling meta descriptions < 155 chars.
3. Structured Data: Organization, WebSite, and Product JSON-LD schemas.`
  },
  {
    id: 'ecommerce-conversion-guide',
    title: 'ECOMMERCE CONVERSION OPTIMIZATION GUIDE',
    problem: 'Traffic arrives but customers bounce without purchasing; abandoned cart rates exceeding 75%.',
    solution: 'Actionable CRO playbook covering value propositions, frictionless cart experiences, urgency triggers, and trust signals.',
    includes: [
      'High-converting product page layout blueprint',
      'Checkout step reduction audit',
      'Trust badge & payment security presentation',
      'Mobile cart drawer optimization strategies',
      'Exit-intent recovery sequence framework'
    ],
    format: 'PDF Guide + Wireframe Blueprints',
    price: 25,
    difficulty: 'Intermediate',
    compatibility: ['Shopify', 'WooCommerce', 'BigCommerce', 'Magento'],
    rating: 5.0,
    reviewCount: 39,
    category: 'Shopify',
    isDemo: true,
    demoNote: 'Demo Product — Document template provided for simulation & evaluation.',
    tags: ['Ecommerce', 'CRO', 'Conversion', 'Sales'],
    downloadContentSample: `ANDEOLA DIGITAL SOLUTIONS - ECOMMERCE CONVERSION OPTIMIZATION GUIDE
Systematic methodology to turn visitors into buyers.

Playbook Pillars:
1. Above the fold: Clear value proposition, pricing clarity, dynamic buy buttons.
2. Friction reduction: Guest checkout enabled, one-click Apple Pay/Google Pay.
3. Social proof: Placement of verified buyer reviews immediately below the ATC button.`
  },
  {
    id: 'security-checklist',
    title: 'WEBSITE SECURITY CHECKLIST',
    problem: 'Vulnerabilities, suspicious login attempts, malware warnings, and missing security headers.',
    solution: 'Fortification handbook to configure Content Security Policies (CSP), secure authentication, and prevent injection attacks.',
    includes: [
      'Essential HTTP security headers configuration (HSTS, CSP, X-Frame)',
      'Admin access protection & 2FA enforcement',
      'SSL/TLS certificate verification & HTTPS redirects',
      'Database sanitization & input validation guidelines',
      'Automated daily backup and recovery protocol'
    ],
    format: 'PDF Checklist + Header Configs',
    price: 15,
    difficulty: 'Intermediate',
    compatibility: ['All Web Servers', 'Apache', 'Nginx', 'Cloudflare', 'WordPress'],
    rating: 4.9,
    reviewCount: 28,
    category: 'Security',
    isDemo: true,
    demoNote: 'Demo Product — Document template provided for simulation & evaluation.',
    tags: ['Security', 'SSL', 'Headers', 'Protection'],
    downloadContentSample: `ANDEOLA DIGITAL SOLUTIONS - WEBSITE SECURITY CHECKLIST
Security hardening protocol for production web applications.

1. Security Headers:
   Strict-Transport-Security: max-age=31536000; includeSubDomains
   X-Content-Type-Options: nosniff
   X-Frame-Options: SAMEORIGIN
2. Access Control: Enable rate limiting on all login endpoints.`
  },
  {
    id: 'product-page-optimization-guide',
    title: 'PRODUCT PAGE OPTIMIZATION GUIDE',
    problem: 'Low add-to-cart rates, slow loading media, unclear product variations, and unconvincing product descriptions.',
    solution: 'Detailed guide to structuring high-converting product pages, interactive variant pickers, and persuasive visual merchandising.',
    includes: [
      'Visual hierarchy for product imagery and video loops',
      'Copywriting formula for benefit-driven descriptions',
      'Variant selector UX patterns for size/color combinations',
      'Shipping, returns, and guarantee placement tactics',
      'Cross-sell & upsell section architecture'
    ],
    format: 'PDF Guide + Visual Layout Templates',
    price: 19,
    difficulty: 'Beginner',
    compatibility: ['Shopify', 'WooCommerce', 'Custom Stores'],
    rating: 4.8,
    reviewCount: 35,
    category: 'UI/UX',
    isDemo: true,
    demoNote: 'Demo Product — Document template provided for simulation & evaluation.',
    tags: ['Product Page', 'UI/UX', 'Ecommerce', 'Sales'],
    downloadContentSample: `ANDEOLA DIGITAL SOLUTIONS - PRODUCT PAGE OPTIMIZATION GUIDE
Structure every product page for maximum clarity and sales.

Key Elements:
- Primary CTA always visible without excessive scrolling on mobile.
- High-res zoomable product photography with instant variant switching.
- Transparent shipping calculation before customer reaches checkout.`
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    customerName: 'Marcus Vance',
    roleOrCompany: 'Founder, Vance Audio & Tech',
    productOrService: 'Website Speed Optimization',
    category: 'service',
    rating: 5,
    comment: 'Our load times dropped from 4.8s to 1.3s on mobile. The team identified unoptimized render-blocking scripts that had plagued our shop for months. Truly professional work.',
    date: 'March 14, 2026',
    isVerifiedPurchase: true
  },
  {
    id: 'rev-2',
    customerName: 'Elena Rostova',
    roleOrCompany: 'Ops Lead, Bloom Botanicals',
    productOrService: 'Shopify Checkout Troubleshooting Guide',
    category: 'digital_solution',
    rating: 5,
    comment: 'The diagnostic checklist pinpointed a webhook timeout on our payment gateway within 20 minutes. Saved us hundreds in emergency developer fees.',
    date: 'February 28, 2026',
    isVerifiedPurchase: true
  },
  {
    id: 'rev-3',
    customerName: 'David K. Mensah',
    roleOrCompany: 'Director, Accra Logistics & Supply',
    productOrService: 'Website Redesign',
    category: 'service',
    rating: 5,
    comment: 'ANDEOLA delivered our corporate website redesign ahead of schedule. Modern, responsive, and cleanly coded without bloat. Their communication was top-tier.',
    date: 'January 19, 2026',
    isVerifiedPurchase: true
  },
  {
    id: 'rev-4',
    customerName: 'Sarah Jenkins',
    roleOrCompany: 'Store Owner, Pureform Studio',
    productOrService: 'Website Speed Optimization Checklist',
    category: 'digital_solution',
    rating: 5,
    comment: 'Clear, concise, and no fluff. Following the image pipeline and cache directives brought our mobile Core Web Vitals score from red (46) to green (94).',
    date: 'March 02, 2026',
    isVerifiedPurchase: true
  },
  {
    id: 'rev-5',
    customerName: 'Tariq Al-Mansoor',
    roleOrCompany: 'CEO, Horizon Media Labs',
    productOrService: 'Website Error Fix',
    category: 'service',
    rating: 5,
    comment: 'Our checkout was throwing unhandled JS errors after a theme update. ANDEOLA resolved the root conflict within 18 hours. Highly recommended.',
    date: 'March 22, 2026',
    isVerifiedPurchase: true
  },
  {
    id: 'rev-6',
    customerName: 'Chloe Bennett',
    roleOrCompany: 'Merchandise Manager, Apex Style',
    productOrService: 'Ecommerce Conversion Optimization Guide',
    category: 'digital_solution',
    rating: 5,
    comment: 'Implementing the product page layout suggestions alone boosted our add-to-cart rate by 18% in the first two weeks.',
    date: 'February 10, 2026',
    isVerifiedPurchase: true
  }
];

export const INITIAL_VIDEO_REVIEWS: VideoReview[] = [
  {
    id: 'vid-1',
    customerName: 'Jordan Reed',
    company: 'Nexus Creative Studio',
    productOrService: 'Website Redesign & Speed Optimization',
    category: 'service',
    rating: 5,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-businessman-talking-on-video-call-with-laptop-42999-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    summary: 'How ANDEOLA rebuilt our portfolio site and solved our sluggish mobile loading issues in under two weeks.',
    duration: '1:42',
    isVerified: true
  },
  {
    id: 'vid-2',
    customerName: 'Nadia Thorne',
    company: 'Luxe Home Decor',
    productOrService: 'Shopify Checkout Troubleshooting Guide',
    category: 'digital_solution',
    rating: 5,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-working-with-her-laptop-in-a-coffee-shop-42998-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    summary: 'The digital guide walked our in-house team directly to the broken payment webhook and resolved it before Black Friday.',
    duration: '2:15',
    isVerified: true
  },
  {
    id: 'vid-3',
    customerName: 'Samuel Osei',
    company: 'Osei & Partners Law',
    productOrService: 'Website Error Fix & Audit',
    category: 'service',
    rating: 5,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-working-remotely-on-his-laptop-at-home-42994-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    summary: 'Rapid response when our lead capture form stopped submitting. Clear communication and honest pricing.',
    duration: '1:20',
    isVerified: true
  }
];

export const INITIAL_PAYMENT_REQUESTS: ServicePaymentRequest[] = [
  {
    id: 'inv-req-101',
    clientName: 'Julian Sterling',
    clientEmail: 'sterling@vanguardtech.io',
    serviceTitle: 'Website Redesign',
    amount: 1200,
    currency: 'USD',
    description: 'Complete website redesign and responsive optimization with custom UI architecture.',
    dueDate: '2026-10-15',
    status: 'PAID',
    createdAt: '2026-09-20',
    paidAt: '2026-09-22',
    reference: 'AND-PRQ-892101'
  },
  {
    id: 'inv-req-102',
    clientName: 'Miriam Gallagher',
    clientEmail: 'miriam@gallagherboutique.com',
    serviceTitle: 'Shopify Support & Error Fix',
    amount: 450,
    currency: 'USD',
    description: 'Diagnosis and repair of checkout gateway timeouts and Liquid variant selector debugging.',
    dueDate: '2026-10-05',
    status: 'PENDING',
    createdAt: '2026-09-25',
    reference: 'AND-PRQ-892102'
  }
];

export const INITIAL_BANK_ACCOUNT: BankAccount = {
  id: 'bank-1',
  country: 'United States / International USD Payout',
  bankName: 'JPMorgan Chase (USD Wire)',
  accountName: 'ANDEOLA DIGITAL SOLUTIONS LLC',
  accountNumberMasked: '•••• •••• •••• 6824',
  isVerified: true,
  createdAt: '2026-01-10'
};

export const INITIAL_WITHDRAWALS: WithdrawalRecord[] = [
  {
    id: 'wdr-101',
    reference: 'WDR-2026-0901',
    date: '2026-09-15',
    amount: 1500,
    currency: 'USD',
    destinationBank: 'JPMorgan Chase',
    destinationAccount: '•••• 6824',
    status: 'Successful',
    notes: 'Settled funds processed via Paystack/Flutterwave treasury transfer'
  },
  {
    id: 'wdr-102',
    reference: 'WDR-2026-0922',
    date: '2026-09-22',
    amount: 850,
    currency: 'USD',
    destinationBank: 'JPMorgan Chase',
    destinationAccount: '•••• 6824',
    status: 'Successful',
    notes: 'Digital solution revenue batch payout'
  }
];

export const DEFAULT_BRAND_CONFIG: BrandConfig = {
  brandName: 'ANDEOLA',
  secondaryBrand: 'ECO RANKING',
  tagline: 'WEBSITE PROBLEMS? FIND THE RIGHT SOLUTION.',
  heroHeadline: 'WEBSITE PROBLEMS? FIND THE RIGHT SOLUTION.',
  heroSupportingText: 'ANDEOLA helps businesses build, improve and fix their websites — with professional services and ready-to-use digital solutions for common website problems.',
  primaryCta: 'Get Professional Help',
  secondaryCta: 'Find a Digital Solution',
  whatsappNumber: '+2348124349094',
  whatsappDisplay: '+234 812 434 9094',
  email: 'webhubtech299@gmail.com',
  defaultCurrency: 'USD',
  primaryColor: '#111827',
  electricBlue: '#2563EB',
  purple: '#7C3AED'
};
