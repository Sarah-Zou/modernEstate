import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock } from 'lucide-react'

interface Article {
  id: string
  title: string
  excerpt: string
  category: string
  author: string
  publishedAt: string
  readTime: string
  image: string
  slug: string
}

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200 group">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Category Pill */}
        <div className="flex items-center justify-between">
          <span className="bg-muted-wood text-walnut px-3 py-1 rounded-full text-sm font-medium">
            {article.category}
          </span>
          <div className="flex items-center space-x-3 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <Calendar className="w-3 h-3" />
              <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="font-heading font-semibold text-xl text-near-black leading-tight group-hover:text-walnut transition-colors duration-200">
          <Link href={`/articles/${article.slug}`}>
            {article.title}
          </Link>
        </h3>
        
        {/* Excerpt */}
        <p className="text-gray-600 leading-relaxed line-clamp-3">
          {article.excerpt}
        </p>
        
        {/* Author */}
        <div className="pt-2">
          <span className="text-sm text-gray-500">By {article.author}</span>
        </div>
      </div>
    </article>
  )
}

