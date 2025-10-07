import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react'
import { getArticleBySlug, getAllArticles } from '@/lib/articles'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  
  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  // Extract images from article content for SEO
  const contentImages = article.content.match(/!\[([^\]]*)\]\(([^)]+)\)/g) || []
  const imageUrls = contentImages.map(img => {
    const match = img.match(/!\[([^\]]*)\]\(([^)]+)\)/)
    return match ? match[2] : null
  }).filter(Boolean)

  // Combine hero image with content images
  const allImages = [article.image, ...imageUrls].map((url, index) => ({
    url: url.startsWith('/') ? `https://themodern.estate${url}` : url,
    width: 800,
    height: index === 0 ? 600 : 400,
    alt: index === 0 ? article.title : `Article illustration ${index}`,
  }))

  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.tags,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author],
      images: allImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: allImages.map(img => img.url),
    },
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "description": article.excerpt,
            "image": [
              article.image,
              ...(article.content.match(/!\[([^\]]*)\]\(([^)]+)\)/g) || []).map(img => {
                const match = img.match(/!\[([^\]]*)\]\(([^)]+)\)/)
                return match ? match[2] : null
              }).filter(Boolean)
            ],
            "author": {
              "@type": "Person",
              "name": article.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "The Modern Estate",
              "logo": {
                "@type": "ImageObject",
                "url": "https://themodern.estate/logo.png"
              }
            },
            "datePublished": article.publishedAt,
            "dateModified": article.publishedAt,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://themodern.estate/articles/${article.slug}`
            }
          })
        }}
      />
      
      <div className="min-h-screen bg-porcelain">
        <div className="container-custom py-8">
        {/* Back Button */}
        <Link
          href="/articles"
          className="inline-flex items-center text-walnut hover:text-walnut-600 font-medium mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Articles
        </Link>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            {/* Category and Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-walnut bg-opacity-10 text-walnut px-3 py-1 rounded-full text-sm font-medium">
                {article.category}
              </span>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>By {article.author}</span>
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-near-black mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {article.excerpt}
            </p>

            {/* Featured Image */}
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: article.content
                  .replace(/^# (.*$)/gim, '<h1 class="font-heading font-bold text-3xl text-near-black mb-6 mt-8">$1</h1>')
                  .replace(/^## (.*$)/gim, '<h2 class="font-heading font-semibold text-2xl text-near-black mb-4 mt-8">$1</h2>')
                  .replace(/^### (.*$)/gim, '<h3 class="font-heading font-semibold text-xl text-near-black mb-3 mt-6">$1</h3>')
                  .replace(/^\- (.*$)/gim, '<li class="mb-2">$1</li>')
                  .replace(/^\d+\. (.*$)/gim, '<li class="mb-2">$1</li>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-near-black">$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
                  .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="w-full h-auto rounded-lg my-6" loading="lazy" decoding="async" itemprop="image" />')
                  .replace(/\n\n/g, '</p><p class="mb-4">')
                  .replace(/^(?!<[h|l])/gm, '<p class="mb-4">')
                  .replace(/<p class="mb-4"><\/p>/g, '')
              }}
            />
          </div>

          {/* Tags */}
          {article.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="font-heading font-semibold text-lg text-near-black mb-4">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="font-heading font-semibold text-lg text-ink mb-4">
              Share this article
            </h3>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-walnut transition-colors duration-200">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

