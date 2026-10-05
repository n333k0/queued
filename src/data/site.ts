// All site copy, pricing, capacity and integration links live here.

export const brand = {
  name: 'Queued', // product name; shown lowercase with the accent dot
  parent: 'RemotoLabs', // logo: public/brand/remotolabs.png
  parentUrl: '#', // TODO: RemotoLabs website URL
  parentLine: 'A design subscription by',
  theme: 'ember' as 'ember' | 'void' | 'black' | 'green', // style: ember = Ember (default), void = Void, black = Graphite, green = Pine
  email: 'hello@queued.studio', // TODO: real inbox
  sibling: { name: 'Shipped', url: 'https://n333k0.github.io/shipped/', line: 'Just need a website? Fixed price, 10 days.' },
};

// ---------------------------------------------------------------------------
// Integrations. Paste real links here; everything works with the fallbacks.
// ---------------------------------------------------------------------------

export const links = {
  // Calendly event for the 15-min intro call, e.g. 'https://calendly.com/remotolabs/intro'.
  // Empty = the page shows a preview of the booking UI instead of the live embed.
  calendly: '',
  // Stripe Payment Link for the subscription ("Start today").
  checkout: '#pricing',
  // Stripe customer portal ("Login": manage, pause, cancel).
  portal: '#',
};

// Show the orange "Placeholder" tags on stand-in imagery and quotes.
export const showPlaceholderTags = false;

// ---------------------------------------------------------------------------
// Capacity: a limited roster keeps quality high. Edit `taken` as members join.
// ---------------------------------------------------------------------------

export const capacity = { total: 8, taken: 6 };
export const spotsOpen = Math.max(0, capacity.total - capacity.taken);

// ---------------------------------------------------------------------------
// Pricing
// ---------------------------------------------------------------------------

export const plan = {
  name: 'Membership',
  price: 3995,
  priceLabel: '$3,995',
  period: '/month',
  lanePrice: 2995, // each extra request running in parallel
  laneLabel: '+$2,995/mo',
  includes: [
    'One request at a time',
    'Average 48-hour delivery',
    'Unlimited requests & revisions',
    'Unlimited brands',
    'Framer development',
    'Senior creative direction',
    'Unlimited stock photos',
    'Up to 3 users',
    'Pause or cancel anytime',
  ],
};

export const guarantees = [
  { title: 'Pause anytime', body: 'Out of requests for now? Pause your membership. Unused days wait for you.' },
  { title: 'Try it for a week', body: 'Not loving it after a week? Get 75% back, no questions asked.' },
];

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------

export const steps = [
  { n: '01', title: 'Subscribe', body: 'Pick the membership and get your request board within the hour.', ui: 'subscribe' },
  { n: '02', title: 'Request', body: 'Add as many requests as you like: a landing page, a deck, a logo, a dashboard.', ui: 'request' },
  { n: '03', title: 'Receive', body: 'Get each design in about two business days. Revise until it’s right.', ui: 'receive' },
];

export const benefits = [
  { title: 'Design board', body: 'Manage your queue on a board. Add, reorder, comment. That’s the whole workflow.' },
  { title: 'Fixed monthly rate', body: 'Same price every month. No quotes, no hourly billing, no surprise invoices.' },
  { title: 'Fast delivery', body: 'One request at a time, delivered in about 48 hours on average.' },
  { title: 'Senior quality', body: 'Senior designers and creative direction on every single request.' },
  { title: 'Flexible & scalable', body: 'Add a second lane when it’s busy. Pause when it’s quiet. Cancel anytime.' },
  { title: 'Unique & all yours', body: 'Every design is made for you, and every file is 100% yours.' },
];

export const scope = [
  { title: 'Websites & landing pages', img: '/generated/halden-tablet.webp' },
  { title: 'Product UI/UX', img: '/placeholder/laptop-typing.webp' },
  { title: 'Framer development', img: '/work/tokni.webp' },
  { title: 'Brand & identity', img: '/placeholder/brand-packaging.webp' },
  { title: 'Social & ad creative', img: '/placeholder/phone-hands.webp' },
  { title: 'Decks & reports', img: '/placeholder/tablet-founder.webp' },
  { title: 'Merch & packaging', img: '/placeholder/merch-box.webp' },
];
export const scopeMore = ['Short motion', 'Logos', 'Email', 'Icons', 'Brand guides', 'Display ads', 'Social media', 'Mobile apps', 'Dashboards', 'Design systems', 'Print', 'Presentations', 'Illustrations'];

// Recent work. Real projects first; placeholder device shots fill the rest.
export const work = [
  { title: 'Content platform', industry: 'Media / SaaS', tag: 'Web + Framer', count: '14 requests', focus: 'Editorial homepage + CMS', img: '/placeholder/tablet-method.webp' },
  { title: 'Tokn1', industry: 'RWA exchange', tag: 'Web + brand', count: '11 requests', focus: 'Launch site + design system', img: '/work/tokni.webp' },
  { title: 'Bakery launch', industry: 'Food & beverage', tag: 'Social video', count: '6 requests', focus: 'Launch ads, 3 formats', img: '/placeholder/v-donuts.mp4' },
  { title: 'Perfect Body', industry: 'Nutrition course', tag: 'Landing + social', count: '9 requests', focus: 'Course launch + ad set', img: '/work/perfect-body.webp' },
  { title: 'Sublim', industry: 'Beverage brand', tag: 'Brand + packaging', count: '8 requests', focus: 'Identity + can design', img: '/placeholder/brand-packaging.webp' },
  { title: 'Spring campaign', industry: 'Home & lifestyle', tag: 'Motion', count: '5 requests', focus: 'Hero loop + social cuts', img: '/placeholder/v-sponge.mp4' },
  { title: '1RED', industry: 'AI sales & support', tag: 'Web + product', count: '12 requests', focus: 'SmartBot site + dashboard', img: '/work/1red.webp' },
  { title: 'Omakase bar', industry: 'Hospitality', tag: 'Social + menu', count: '7 requests', focus: 'Menu, posters, Instagram', img: '/placeholder/g-sushi.webp' },
  { title: 'Custom drop', industry: 'Sports brand', tag: 'Ad creative', count: '10 requests', focus: 'Product drop campaign', img: '/placeholder/v-ball.mp4' },
];

export const compare: { label: string; values: [string, string, string, string] }[] = [
  { label: 'Cost', values: ['$100k+ a year, plus benefits', '$15–40k per project', 'Varies, often hourly', '$3,995 a month'] },
  { label: 'Getting started', values: ['Weeks of hiring', 'Proposals and kickoffs', 'Interviews and trials', 'Same day'] },
  { label: 'Turnaround', values: ['Depends on their week', 'Weeks', 'Hit or miss', '~48 hours per request'] },
  { label: 'Range', values: ['One person’s skills', 'Broad, but slow', 'One specialty', 'Web, product, brand, decks'] },
  { label: 'Flexibility', values: ['Salary every month', 'Locked into scope', 'Availability varies', 'Pause or cancel anytime'] },
];
export const compareHeads = ['Full-time designer', 'Agency', 'Freelancer'];

// PLACEHOLDER quotes. Replace with real member quotes before launch.
export const testimonials = [
  { quote: 'It’s like having a senior design team on Slack. Except it’s a board, and it’s faster.', who: '[Client name]', role: '[Role], [Company]', meta: 'Member · 6 months' },
  { quote: 'We cancelled two freelancers and a retainer. Nobody misses them.', who: '[Client name]', role: '[Role], [Company]', meta: 'Member · 4 months' },
  { quote: 'Requested a deck on Monday, pitched it on Thursday.', who: '[Client name]', role: '[Role], [Company]', meta: 'Member · 3 months' },
  { quote: 'Pausing in slow months is the feature I didn’t know I needed.', who: '[Client name]', role: '[Role], [Company]', meta: 'Member · 9 months' },
  { quote: 'The quality is agency. The process is a to-do list.', who: '[Client name]', role: '[Role], [Company]', meta: 'Member · 5 months' },
];

// Request board mock (the "how you'll work with us" section).
export const board = [
  { col: 'Requested', cards: [{ t: 'Pricing page redesign', tag: 'Web' }, { t: 'Q4 investor deck', tag: 'Deck' }, { t: 'Instagram set × 6', tag: 'Social' }] },
  { col: 'In progress', cards: [{ t: 'Onboarding flow, 5 screens', tag: 'Product' }] },
  { col: 'Review', cards: [{ t: 'Logo refresh, round 2', tag: 'Brand' }] },
  { col: 'Done', cards: [{ t: 'Landing page hero', tag: 'Web' }, { t: 'Email template', tag: 'Email' }, { t: 'Ad set × 4', tag: 'Ads' }] },
];

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

export const faq: { group: string; items: { q: string; a: string }[] }[] = [
  {
    group: 'How it works',
    items: [
      { q: 'How fast will I receive my designs?', a: 'Most requests are delivered in about two business days. Bigger requests take longer and are split into pieces you receive every 24–48 hours.' },
      { q: 'How does onboarding work?', a: 'Subscribe and you’ll get your own request board within the hour. Accept the invite and add your first request. Instructions live on the board itself.' },
      { q: 'How do I request designs?', a: 'Add a card to your board. Write a brief, link a doc or a Figma file, sketch a wireframe or record a quick Loom. If you can link it, it works.' },
      { q: 'Is there a limit to how many requests I can make?', a: 'No. Add as many as you like. They’re delivered one at a time, in the order you set. Need two at once? Add a second lane.' },
      { q: 'How do you handle larger requests?', a: 'We break them down. A full website or app is delivered in chunks every 24–48 hours until it’s done, so you’re always reviewing something.' },
      { q: 'What if I don’t like the design?', a: 'We revise it until you’re happy. Unlimited revisions, no extra cost.' },
    ],
  },
  {
    group: 'The work',
    items: [
      { q: 'Who are the designers?', a: 'A small senior team at RemotoLabs. Every request goes through senior creative direction. We don’t outsource, and we cap the number of members so quality stays high.' },
      { q: 'What programs do you design in?', a: 'Figma for design, Framer for websites. Your files and source are always shared with you.' },
      { q: 'How does website development work?', a: 'Framer development is included and treated like any other request. When the site is done it moves to your account, and it’s yours. You don’t need a membership to keep it running. Webflow on request.' },
      { q: 'Are there requests you don’t support?', a: 'Yes: 3D modelling, long-form video production, complex packaging engineering, long print (books, magazines) and InDesign documents. Short motion for ads and social is in.' },
      { q: 'Do I own the work?', a: 'Yes. Everything we design for you is 100% yours, including source files.' },
    ],
  },
  {
    group: 'Billing',
    items: [
      { q: 'How does pausing work?', a: 'Billing runs in 31-day cycles. Use 21 days and pause, and you keep 10 days to use whenever you come back. No design work this month? Don’t pay for it.' },
      { q: 'What if I only have a single request?', a: 'That’s fine. Pause when it’s done and come back when you need more.' },
      { q: 'Can I use it for just a month?', a: 'Of course. A month or a year, it’s up to you.' },
      { q: 'Are there refunds?', a: 'Not loving it after the first week? You get 75% back. After that there are no refunds, and completed work isn’t refunded.' },
      { q: 'Do I need a website first?', a: 'No. If you just need one website, Shipped (our fixed-price website product) may be the better fit. Members can use their membership for websites too.' },
    ],
  },
];
