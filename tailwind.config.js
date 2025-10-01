/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        walnut: '#8B5E3C',
        porcelain: '#F5F3EF',
        'near-black': '#111111',
        'muted-wood': '#EADFD3',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'heading': ['Inter', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#111111',
            fontFamily: 'Inter, sans-serif',
            h1: {
              fontFamily: 'Inter, sans-serif',
              fontWeight: '700',
            },
            h2: {
              fontFamily: 'Inter, sans-serif',
              fontWeight: '600',
            },
            h3: {
              fontFamily: 'Inter, sans-serif',
              fontWeight: '600',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

