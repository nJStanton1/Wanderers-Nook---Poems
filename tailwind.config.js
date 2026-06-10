/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Chillax-Variable", "sans-serif"],
      mono: ["DraftingMono", "mono"],
    },
    extend: {
      fontSize: {
        // Hero / main page headings (H1)
        'heading-hero': ['1.875rem', { lineHeight: '1.1' }],      // mobile
        'heading-hero-md': ['2.25rem', { lineHeight: '1.1' }],   // tablet
        'heading-hero-lg': ['3.75rem', { lineHeight: '1.05' }],  // desktop

        // Section headings (H2)
        'heading-lg': ['1.5rem', { lineHeight: '1.2' }],     // mobile
        'heading-lg-md': ['1.5rem', { lineHeight: '1.2' }],   // tablet
        'heading-lg-lg': ['2.25rem', { lineHeight: '1.15' }], // desktop

        // Subsection headings (H3)
        'heading-md': ['1.125rem', { lineHeight: '1.3' }],       // mobile
        'heading-md-md': ['1.25rem', { lineHeight: '1.3' }],       // tablet
        'heading-md-lg': ['1.5rem', { lineHeight: '1.3' }],       // desktop

        // Body text
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],        // mobile
        'body': ['1rem', { lineHeight: '1.6' }],               // ~16px

        // Caption / small text
        'caption': ['0.875rem', { lineHeight: '1.4' }],        // ~14px
      },
      fontWeight: {
        // Semantic weight names
        thin: '300',       // hero / main headings (H1)
        normal: '400',     // body text
        medium: '500',     // subheadings (H3)
        semibold: '600',   // section headings (H2)
        bold: '700',       
      },
      colors: {
        'brand':'#5e5c3b',
        'brand-deco-1':'#868254',
        'brand-deco-2':'#B2A769',
        'accent-hub':'#88498F',  //#88498F
        'accent-hub-dark':'#733E79',
        'accent-walks':'#AF6246',
        'accent-walks-dark':'#92523A',
        'accent-trees':'#C9870B',
        'accent-trees-dark':'#AE7509',
        'accent-info':'#75BBFF',
      },
    },
  },
  plugins: [],
}

