import { Metadata } from 'next'
import ArticleCard from '@/components/ArticleCard'
import { getAllArticles, getCategories } from '@/lib/articles'
import { Building2, DollarSign, Cpu, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'All Articles',
  description: 'Browse all articles on modern housing design, New Jersey real estate, financing strategies, and property technology.',
}

const categoryIcons = {
  'Modern Design': Building2,
  'NJ/NY Real Estate': TrendingUp,
  'Financing': DollarSign,
  'Technology': Cpu,
}

export default function ArticlesPage() {
  const articles = getAllArticles()
  const categories = getCategories()

  return (
    <div className="min-h-screen bg-porcelain">
      <div className="container-custom py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-near-black mb-4">
            All Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive insights on modern housing design, New Jersey real estate, 
            financing strategies, and cutting-edge property technology.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="font-heading font-semibold text-2xl text-near-black mb-6">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category) => {
              const Icon = categoryIcons[category as keyof typeof categoryIcons]
              const categoryArticles = articles.filter(article => article.category === category)
              
              return (
                <a
                  key={category}
                  href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="card group hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-walnut bg-opacity-10 rounded-lg flex items-center justify-center group-hover:bg-opacity-20 transition-colors duration-200">
                      <Icon className="w-5 h-5 text-walnut" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-near-black group-hover:text-walnut transition-colors duration-200">
                      {category}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    {categoryArticles.length} article{categoryArticles.length !== 1 ? 's' : ''}
                  </p>
                </a>
              )
            })}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="mb-12">
          <h2 className="font-heading font-semibold text-2xl text-near-black mb-6">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100">
          <h3 className="font-heading font-bold text-2xl text-near-black mb-4">
            Stay Updated with Our Latest Research
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Get the latest insights on modern housing, real estate trends, and technology 
            delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-walnut focus:border-transparent focus:outline-none"
            />
            <button className="btn-primary">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

