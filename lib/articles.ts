export interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  publishedAt: string
  readTime: string
  image: string
  slug: string
  tags: string[]
  featured: boolean
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'Butterfly Roofs in NJ: Mid-Century Character That Plays Nice with Today\'s Codes',
    excerpt: 'A quick guide to achieving the mid-century look (rooflines, glazing, materials) while meeting NJ snow, wind, and energy requirements.',
    content: `# Coming Soon

This article is currently being developed and will be available soon.`,
    category: 'Modern Design',
    author: 'The Modern Estate Team',
    publishedAt: '2025-01-20',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    slug: 'butterfly-roofs-nj-mid-century-character-codes',
    tags: ['butterfly roofs', 'mid-century', 'building codes', 'new jersey'],
    featured: true
  },
  {
    id: '2',
    title: 'How to Pass NJ Real Estate Salesperson Exam within 3 Weeks',
    excerpt: 'Learn how to pass the real estate salesperson exam quickly and affordably. Practical 3-week timeline, costs, study strategy, and NJ example.',
    content: `# Coming Soon

This article is currently being developed and will be available soon.`,
    category: 'NJ/NY Real Estate',
    author: 'The Modern Estate Team',
    publishedAt: '2025-09-18',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    slug: 'pass-nj-real-estate-salesperson-exam-3-weeks',
    tags: ['real estate exam', 'study guide', 'new jersey', 'career'],
    featured: true
  },
  {
    id: '3',
    title: 'FHA vs. Single-Close CTP in New Jersey: Cost, Risk, and Timeline Compared',
    excerpt: 'Side-by-side on down payment, draws, rate locks, appraisals for new construction, and when each product makes sense for first-time builders.',
    content: `# Coming Soon

This article is currently being developed and will be available soon.`,
    category: 'Financing',
    author: 'The Modern Estate Team',
    publishedAt: '2025-01-16',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    slug: 'fha-vs-single-close-ctp-new-jersey-comparison',
    tags: ['FHA loans', 'construction loans', 'financing', 'new jersey'],
    featured: true
  }
]

export function getFeaturedArticles(): Article[] {
  return articles.filter(article => article.featured)
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter(article => article.category === category)
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug)
}

export function getAllArticles(): Article[] {
  return articles
}

export function getCategories(): string[] {
  return Array.from(new Set(articles.map(article => article.category)))
}

