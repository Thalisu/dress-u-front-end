/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        primary: ['Integral CF', 'sans-serif'],
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        erased: 'var(--color-erased)',
        discount: 'var(--color-discount)',
      },
      borderColor: {
        primary: 'var(--color-border)',
      },
      backgroundColor: {
        primary: 'var(--background-primary)',
        secondary: 'var(--background-secondary)',
        tertiary: 'var(--background-tertiary)',
        discount: 'var(--background-discount)',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}
