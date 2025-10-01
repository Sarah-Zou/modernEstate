import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ArticleCard from '@/components/ArticleCard'
import { getArticlesByCategory, getCategories } from '@/lib/articles'
import { Building2, DollarSign, Cpu, TrendingUp } from 'lucide-react'

interface CategoryPageProps {
  params: {
    category: string
  }
}

const categoryIcons = {
  'modern-design': Building2,
  'nj-real-estate': TrendingUp,
  'financing': DollarSign,
  'technology': Cpu,
}

const categoryNames = {
  'modern-design': 'Modern Design',
  'nj-real-estate': 'NJ/NY Real Estate',
  'financing': 'Financing',
  'technology': 'Technology',
}

const categoryDescriptions = {
  'modern-design': 'Explore the latest trends in mid-century and contemporary residential architecture, sustainable design practices, and innovative home features.',
  'nj-real-estate': 'Stay informed about New Jersey and New York real estate market trends, local regulations, and best practices for buyers and sellers.',
  'financing': 'Learn about mortgage options, financing strategies, and investment opportunities in the New Jersey real estate market.',
  'technology': 'Discover how cutting-edge technology is transforming the real estate industry, from smart homes to proptech innovations.',
}

export async function generateStaticParams() {
  return [
    { category: 'modern-design' },
    { category: 'nj-real-estate' },
    { category: 'financing' },
    { category: 'technology' },
  ]
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categoryName = categoryNames[params.category as keyof typeof categoryNames]
  const categoryDescription = categoryDescriptions[params.category as keyof typeof categoryDescriptions]
  
  if (!categoryName) {
    notFound()
  }

  return {
    title: `${categoryName} Articles`,
    description: categoryDescription,
    keywords: [categoryName.toLowerCase(), 'new jersey', 'real estate', 'housing'],
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = categoryNames[params.category as keyof typeof categoryNames]
  const categoryDescription = categoryDescriptions[params.category as keyof typeof categoryDescriptions]
  const Icon = categoryIcons[params.category as keyof typeof categoryIcons]
  
  if (!categoryName) {
    notFound()
  }

  const articles = getArticlesByCategory(categoryName)

  return (
    <div className="min-h-screen bg-porcelain">
      <div className="container-custom py-12">
        {/* Category Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-walnut bg-opacity-10 rounded-xl flex items-center justify-center">
              <Icon className="w-8 h-8 text-walnut" />
            </div>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-near-black mb-4">
            {categoryName}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {categoryDescription}
          </p>
        </div>

        {/* Articles Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            {articles.length} article{articles.length !== 1 ? 's' : ''} in this category
          </p>
        </div>

        {/* Articles Grid */}
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="font-heading font-semibold text-xl text-gray-600 mb-2">
              No articles found
            </h3>
            <p className="text-gray-500">
              We're working on adding more content to this category. Check back soon!
            </p>
          </div>
        )}

        {/* Related Categories */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-heading font-semibold text-2xl text-near-black mb-6">
            Explore Other Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(categoryNames).map(([slug, name]) => {
              if (slug === params.category) return null
              const RelatedIcon = categoryIcons[slug as keyof typeof categoryIcons]
              const relatedArticles = getArticlesByCategory(name)
              
              return (
                <a
                  key={slug}
                  href={`/category/${slug}`}
                  className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="w-10 h-10 bg-walnut bg-opacity-10 rounded-lg flex items-center justify-center">
                    <RelatedIcon className="w-5 h-5 text-walnut" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-near-black">
                      {name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {relatedArticles.length} article{relatedArticles.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

