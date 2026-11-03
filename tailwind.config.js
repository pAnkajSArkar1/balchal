/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
          950: '#431407',
        },
        navy: {
          850: '#14253D',
          900: '#0B192C',
          950: '#060E1A',
        },
        royal: {
          600: '#1E3E62',
          700: '#152C46',
          800: '#0E1D2F',
        },
        tripura: {
          green: '#15803D',
          saffron: '#FF6F00',
          gold: '#EAB308',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-saffron': '0 0 25px -5px rgba(249, 115, 22, 0.4)',
        'glow-navy': '0 0 25px -5px rgba(11, 25, 44, 0.3)',
        'card-hover': '0 20px 30px -10px rgba(11, 25, 44, 0.08), 0 10px 15px -3px rgba(249, 115, 22, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}

