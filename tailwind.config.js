/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gunmetal: {
          900: '#0F1115',
          800: '#1a1d21',
          700: '#2B2E34',
          600: '#3a3f47',
        },
        steel: {
          500: '#71757c',
          400: '#8a8e94',
          300: '#a3a6ab',
        },
        accent: {
          cyan: '#00D9C0',
          orange: '#FF6B35',
          lime: '#CCFF00',
          purple: '#6B2FF0',
        },
        neutral: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.875rem', { lineHeight: '1.5' }],
        'sm': ['1rem', { lineHeight: '1.6' }],
        'base': ['1.125rem', { lineHeight: '1.75' }],
        'lg': ['1.25rem', { lineHeight: '1.75' }],
        'xl': ['1.5rem', { lineHeight: '1.75' }],
      },
      animation: {
        'float': 'float 12s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite',
        'fade': 'fadeIn 1s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.9' },
          '50%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        'tactical': '2px',
        'sharp': '4px',
      },
    },
  },
  plugins: [],
}
