/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '22.5rem',
      md: '42.5rem',
      xl: '74rem'
    },

    colors: {
      "primary": "var(--primary)",
      "primary-gradient": "var(--primary-gradient)",
      "backdrop-gradient": "var(--backdrop-gradient)",
      "neutral-50": "var(--neutral-50)",
      "neutral-100": "var(--neutral-100)",
      "neutral-200": "var(--neutral-200)",
      "neutral-500": "var(--neutral-500)",
      "neutral-800": "var(--neutral-800)",
    },

    extend: {},
  },
  plugins: [],
}