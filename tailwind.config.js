/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <--- Add this line for manual dark mode toggling
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6C00FF',
          light: '#8F33FF',
          dark: '#5700CC'
        },
        secondary: {
          DEFAULT: '#000F24',
          light: '#001A42',
          dark: '#000913'
        },
        accent: {
          DEFAULT: '#00C8FF',
          light: '#33D4FF',
          dark: '#00A0CC'
        },
        background: {
          DEFAULT: '#0A0A1A',
          light: '#111132',
          dark: '#05050F'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Urbanist', 'Inter', 'ui-sans-serif', 'system-ui']
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(108, 0, 255, 0.5), 0 0 10px rgba(0, 200, 255, 0.3)' },
          '100%': { boxShadow: '0 0 10px rgba(108, 0, 255, 0.8), 0 0 20px rgba(0, 200, 255, 0.6)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-nebula': 'linear-gradient(to bottom right, #000F24, #0A0A1A, #100025)',
      }
    },
  },
  plugins: [],
};