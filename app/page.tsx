'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Building2, DollarSign, Cpu, TrendingUp, PenTool } from 'lucide-react'
import ArticleCard from '@/components/ArticleCard'
import { getAllArticles } from '@/lib/articles'

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  
  const allArticles = getAllArticles()
  
  const categories = [
    { name: 'All', icon: null },
    { name: 'Modern Design', icon: PenTool },
    { name: 'NJ/NY Real Estate', icon: Building2 },
    { name: 'Financing', icon: DollarSign },
    { name: 'Prop-Tech', icon: Cpu },
  ]

  const filteredArticles = allArticles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-porcelain">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-porcelain via-porcelain to-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-walnut mb-6 leading-tight">
              The Modern Estate
            </h1>
            <p className="text-xl md:text-2xl text-near-black mb-8 max-w-3xl mx-auto leading-relaxed">
              Your source for cutting-edge insights on modern design, NJ/NY real estate, financing, and property technology.
            </p>
          </div>
        </div>
      </section>

      {/* Utility Row */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Field */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-walnut focus:border-transparent focus:outline-none shadow-sm"
              />
            </div>

            {/* Filter Chips */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category.name
                      ? 'bg-walnut text-white shadow-md'
                      : 'bg-white text-walnut border border-gray-200 hover:bg-muted-wood hover:border-walnut'
                  }`}
                >
                  {category.icon && <category.icon className="w-4 h-4" />}
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-12 bg-porcelain">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-gray-600">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

