/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#05070d',
          900: '#0a0e1a',
          800: '#0f1626',
          700: '#1a2236',
        },
        electric: {
          50: '#eef9ff',
          100: '#d8f0ff',
          200: '#b9e6ff',
          300: '#88d7ff',
          400: '#4fc0ff',
          500: '#1ba0ff',
          600: '#0080f0',
          700: '#0066c9',
          800: '#04549f',
          900: '#0a4880',
        },
        spark: {
          400: '#ffc233',
          500: '#ffb01f',
          600: '#f59e0b',
          700: '#d97706',
        },
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(27, 160, 255, 0.45)',
        spark: '0 0 30px -8px rgba(255, 176, 31, 0.55)',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'spark-line': {
          '0%': { strokeDashoffset: '200' },
          '100%': { strokeDashoffset: '0' },
        },
        'float-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'spark-line': 'spark-line 2.5s ease-out forwards',
        'float-y': 'float-y 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
