import type { SlideInfo, ProjectItem, BrandCollab, ExperienceItem, SocialStat } from '../types/portfolio'

export const SLIDES: SlideInfo[] = [
  { id: 'hero', number: 1, title: 'Portfolio', subtitle: 'Halenella — Visual Storyteller', theme: 'dark' },
  { id: 'about', number: 2, title: 'About Me', subtitle: 'Creative Vision & Storytelling', theme: 'light' },
  { id: 'education', number: 3, title: 'Education', subtitle: 'Harvard & Master Degree', theme: 'dark' },
  { id: 'skills', number: 4, title: 'Skills & Tools', subtitle: 'Design & Social Strategy', theme: 'light' },
  { id: 'projects', number: 5, title: 'Velora Beauty', subtitle: 'Previous Projects & Grid', theme: 'dark' },
  { id: 'socials', number: 6, title: 'Social Accounts', subtitle: 'Audience Reach & Analytics', theme: 'light' },
  { id: 'brands', number: 7, title: 'Brands', subtitle: 'Campaigns & Partnerships', theme: 'dark' },
  { id: 'experience', number: 8, title: 'Working Experience', subtitle: '2025 – 2027 Journey', theme: 'light' },
  { id: 'passion', number: 9, title: 'Passion Project', subtitle: 'Lumière Beauty Concept', theme: 'dark' },
  { id: 'contact', number: 10, title: 'Contact', subtitle: "Let's Work Together", theme: 'light' },
]

export const VELORA_PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Hydra-Glow Botanical Serum',
    category: 'Product Photography & Art Direction',
    image: 'https://images.unsplash.com/photo-1608248597359-009772186835?auto=format&fit=crop&w=700&q=80',
    tag: 'Skincare',
    description: 'Visual direction and macro product campaign focusing on natural hydrating ingredients and light refraction.',
    metrics: '+420% Save Rate',
    client: 'Velora Beauty'
  },
  {
    id: 'p2',
    title: 'Spring Editorial Lookbook',
    category: 'Fashion & Moodboard',
    image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=700&q=80',
    tag: 'Editorial',
    description: 'High-concept print and digital layout pairing minimalist typography with avant-garde studio silhouettes.',
    metrics: '1.2M Impressions',
    client: 'Velora Beauty'
  },
  {
    id: 'p3',
    title: 'Velvet Cloud Cream Launch',
    category: 'Packaging & Social Promo',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80',
    tag: 'Cosmetics',
    description: 'Pastel monochrome creative campaign introducing the new whipped moisturiser formulation.',
    metrics: '85K Shares',
    client: 'Velora Beauty'
  },
  {
    id: 'p4',
    title: 'Golden Hour Sunglasses',
    category: 'Street Style & UGC',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80',
    tag: 'Accessories',
    description: 'Warm cinematic portrait series combining retro 90s aesthetic shades with modern sun-kissed lighting.',
    metrics: '2.1M Views',
    client: 'Velora Eyewear'
  },
  {
    id: 'p5',
    title: 'Glass Gloss Lip Oil',
    category: 'Close-Up Beauty & Texture',
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=700&q=80',
    tag: 'Macro Beauty',
    description: 'Ultra-crisp macro photography highlighting light bounce and mirror glaze finish on lips.',
    metrics: '+310% Click-Through',
    client: 'Velora Beauty'
  },
  {
    id: 'p6',
    title: 'Pastel Pop Stickers Campaign',
    category: 'Gen-Z Aesthetic & Stickers',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80',
    tag: 'Creative Direction',
    description: 'Doodle-infused beauty campaign showcasing cheek stamps, star freckles, and playful color blocking.',
    metrics: '94K Saves',
    client: 'Velora Studio'
  },
  {
    id: 'p7',
    title: 'Day In The Life Studio Vlog',
    category: 'Video Reels & BTS',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=700&q=80',
    tag: 'BTS Vlog',
    description: 'Behind-the-scenes episodic content capturing set preparation, lighting rigs, and creative brainstorms.',
    metrics: '3.4M Reel Plays',
    client: 'Velora Socials'
  },
  {
    id: 'p8',
    title: 'Neon Aura Graphic Makeup',
    category: 'Artistic Expression',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=700&q=80',
    tag: 'Experimental',
    description: 'High-contrast graphic liner looks engineered specifically for viral short-form platform retention.',
    metrics: '1.9M Reach',
    client: 'Velora Lab'
  },
  {
    id: 'p9',
    title: 'Clean Minimalist Routine',
    category: 'Lifestyle Storytelling',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
    tag: 'Lifestyle',
    description: 'Soft daylight storytelling demonstrating effortless 3-step morning skincare for the modern creative.',
    metrics: '88% Retention',
    client: 'Velora Daily'
  }
]

export const SOCIAL_STATS: SocialStat[] = [
  {
    platform: 'Instagram',
    handle: '@HALENELLA',
    followers: '2.4M',
    count: 2400000,
    growth: '+65K / mo',
    engagement: '8.4%',
    previewImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
    tagline: 'Curated aesthetic feeds, high-production reels, fashion week BTS & beauty drops.'
  },
  {
    platform: 'TikTok',
    handle: '@HALENELLA',
    followers: '3.8M',
    count: 3800000,
    growth: '+140K / mo',
    engagement: '14.2%',
    previewImage: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80',
    tagline: 'Viral pacing, dynamic sound transitions, day-in-the-life mini-vlogs & styling hacks.'
  },
  {
    platform: 'YouTube',
    handle: 'HALENELLA VIBES',
    followers: '850K',
    count: 850000,
    growth: '+28K / mo',
    engagement: '11.6%',
    previewImage: 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=600&q=80',
    tagline: 'Long-form travel diaries, studio masterclasses, gear breakdowns & lifestyle series.'
  }
]

export const BRANDS_LIST: BrandCollab[] = [
  {
    name: 'maslostudio',
    logoText: 'maslostudio',
    campaign: 'Fall Capsule Film',
    videoThumbnail: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=500&q=80',
    views: '1.8M views',
    role: 'Creative Director & Model',
    color: '#E06D53'
  },
  {
    name: 'fuse',
    logoText: 'fuse',
    campaign: 'Spatial Audio Campaign',
    videoThumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80',
    views: '2.4M views',
    role: 'Sound Designer & Host',
    color: '#8A56E2'
  },
  {
    name: 'florica',
    logoText: 'florica',
    campaign: 'Dewy Skin Ritual',
    videoThumbnail: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80',
    views: '3.1M views',
    role: 'Lead UGC Creator',
    color: '#49A078'
  },
  {
    name: 'unearth',
    logoText: 'unearth',
    campaign: 'Sustainable Linen Edit',
    videoThumbnail: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=500&q=80',
    views: '1.2M views',
    role: 'Photographer & Stylist',
    color: '#C29B38'
  },
  {
    name: 'luluzzi',
    logoText: 'LULIZZI',
    campaign: 'Venice Film Festival Drop',
    videoThumbnail: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=500&q=80',
    views: '2.9M views',
    role: 'Global Brand Ambassador',
    color: '#348AA7'
  }
]

export const EXPERIENCES: ExperienceItem[] = [
  {
    year: '2026',
    role: 'CONTENT CREATION PHOTOGRAPHY',
    category: 'Lead Visual Producer',
    description: 'Created engaging lifestyle, beauty, and fashion content for social media platforms. Developed creative concepts, planned shoots, and produced visually appealing posts and short-form videos to drive audience reach.',
    achievements: [
      'Executed 45+ branded photo campaigns with over 20M collective reach',
      'Engineered proprietary color grading presets adopted across client portfolios',
      'Directed studio lighting and set styling for multi-channel product rollouts'
    ]
  },
  {
    year: '2025',
    role: 'VIDEO EDITOR & CREATIVE',
    category: 'Motion & Pacing Specialist',
    description: 'Edited short-form videos, reels, and promotional content with a focus on storytelling and visual appeal. Experimented with transitions, music pacing, and creative concepts to create engaging social media content.',
    achievements: [
      'Authored 120+ viral reels averaging 850k+ views each on TikTok & IG',
      'Pioneered speed-ramp transition templates and dynamic kinetic typography',
      'Streamlined post-production workflow cutting edit turnarounds by 40%'
    ]
  },
  {
    year: '2027-PRESENT',
    role: 'BRAND AMBASSADOR & COLLABORATIONS',
    category: 'Global Creative Partnerships',
    description: 'Collaborated with brands and agencies to develop authentic social media content that resonates with audiences. Created promotional posts, product-focused videos, and lifestyle content while maintaining a consistent visual identity.',
    achievements: [
      'Signed multi-year ambassador contracts with Velora Beauty & Maslo Studio',
      'Keynote speaker at Digital Creator Summit on authentic Gen-Z marketing',
      'Generated over $4.2M in tracked affiliate and direct partner revenue'
    ]
  }
]
