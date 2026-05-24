/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['"Lora"', 'serif'],
      display: ['"Playfair Display"', 'serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1d4ed8',
          light: '#60a5fa',
          dark: '#1e40af',
        },
        accent: {
          DEFAULT: '#1d4ed8',
          light: '#60a5fa',
          dark: '#1e40af',
        },
        light: {
          bg: '#f9fafb',
          text: '#111827',
          card: '#ffffff',
        },
        dark: {
          bg: '#11182b',
          text: '#f3f4f6',
          card: '#1f2937',
        }
      },
      animation: {
        'gradient-bg': 'gradient-bg 15s ease infinite',
        'typing': 'typing 2s steps(20, end) forwards, blink 1.2s step-end infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        'gradient-bg': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'typing': {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'orange' }
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'blob': {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        }
      }
    },
  },
  plugins: [],
}
