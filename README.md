# The Modern Estate

A fast, SEO-ready content site for real estate research, focusing on modern housing design, New Jersey real estate practices, financing strategies, and property technology.

**Website**: [themodern.estate](https://themodern.estate)  
**Author**: The Modern Estate Team

## Features

- **Modern Design**: Clean, grid-based layout with plenty of white space
- **SEO Optimized**: Comprehensive metadata, structured data, and performance features
- **Responsive**: Mobile-first design that works on all devices
- **Fast Loading**: Optimized images, fonts, and code splitting
- **Content Management**: Easy-to-update article system
- **Category Organization**: Four main content areas with filtering

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: PT Sans (body) and Space Grotesk (headings)
- **Icons**: Lucide React
- **Images**: Next.js Image optimization

## Design System

### Colors
- **Primary (Walnut)**: #8B5E3C
- **Background (Porcelain)**: #F5F3EF
- **Accent (Near-Black)**: #111111
- **Muted Wood**: #EADFD3

### Typography
- **Body Font**: PT Sans - Humanist sans-serif for excellent readability
- **Headline Font**: Space Grotesk - Strong, legible font for clear communication

## Content Categories

1. **Modern Design**: Mid-century and contemporary residential architecture
2. **NJ Real Estate**: Local market insights and best practices
3. **Financing**: Mortgage strategies and investment tips
4. **Technology**: Proptech innovations for real estate

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── articles/          # Article pages
│   ├── category/          # Category pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ArticleCard.tsx    # Article card component
│   ├── Footer.tsx         # Site footer
│   └── Header.tsx         # Site header
├── lib/                   # Utility functions
│   └── articles.ts        # Article data and functions
└── public/                # Static assets
```

## SEO Features

- Comprehensive metadata for all pages
- Open Graph and Twitter Card support
- Structured data for articles
- Optimized images with proper alt text
- Clean URLs and navigation
- Fast loading times
- Mobile-friendly design

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

