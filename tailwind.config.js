/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF9F6',
        'cream-dark': '#F0EDE8',
        sage: '#9CAF88',
        'sage-light': '#B5C4A8',
        'sage-dark': '#7A9168',
        terracotta: '#C85D3C',
        'terracotta-light': '#D4785E',
        'terracotta-dark': '#A84B2F',
        charcoal: '#2C2C2C',
        'charcoal-light': '#3D3D3D',
        gold: '#D4A574',
        'gold-light': '#E0BC94',
        'gold-dark': '#B8895A',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'extra-wide': '0.25em',
      },
    },
  },
  plugins: [],
}
