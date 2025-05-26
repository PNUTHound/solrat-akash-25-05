/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-primary))',
          light: 'rgb(var(--color-primary-light))',
          dark: 'rgb(var(--color-primary-dark))'
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary))',
          light: 'rgb(var(--color-secondary-light))',
          dark: 'rgb(var(--color-secondary-dark))'
        },
        accent: {
          DEFAULT: 'rgb(var(--color-accent))',
          light: 'rgb(var(--color-accent-light))',
          dark: 'rgb(var(--color-accent-dark))'
        },
        background: {
          DEFAULT: 'rgb(var(--color-background))',
          light: 'rgb(var(--color-background-light))',
          dark: 'rgb(var(--color-background-dark))'
        },
        text: {
          DEFAULT: 'rgb(var(--color-text))',
          muted: 'rgb(var(--color-text-muted))'
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
          '0%': { boxShadow: '0 0 5px rgba(var(--color-primary), 0.5), 0 0 10px rgba(var(--color-accent), 0.3)' },
          '100%': { boxShadow: '0 0 10px rgba(var(--color-primary), 0.8), 0 0 20px rgba(var(--color-accent), 0.6)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-nebula': 'linear-gradient(to bottom right, rgb(var(--color-secondary)), rgb(var(--color-background)), rgb(var(--color-background-dark)))',
      }
    },
  },
  plugins: [],
};