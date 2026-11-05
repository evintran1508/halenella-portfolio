export interface SlideInfo {
  id: string
  number: number
  title: string
  subtitle: string
  theme: 'dark' | 'light'
}

export interface ProjectItem {
  id: string
  title: string
  category: string
  image: string
  tag: string
  description: string
  metrics?: string
  client?: string
}

export interface BrandCollab {
  name: string
  logoText: string
  campaign: string
  videoThumbnail: string
  views: string
  role: string
  color: string
}

export interface ExperienceItem {
  year: string
  role: string
  category: string
  description: string
  achievements: string[]
}

export interface SocialStat {
  platform: 'Instagram' | 'TikTok' | 'YouTube'
  handle: string
  followers: string
  count: number
  growth: string
  engagement: string
  previewImage: string
  tagline: string
}

