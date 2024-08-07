/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/**/*.{js,vue,ts}",
    "./pages/**/**/*.{js,vue,ts}",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      mplus: ["M PLUS rounded 1c"],
    },
    extend: {
      colors: {
       'st-grey': '#79819A',
       'st-grey-black': '#47516B',
       'st-content-brand': '#FF4848',
       'st-content-secondary': '#8B8B8D',
       'st-bg-secondary': '#252529',
       'st-bg-primary': '#18181B',
       'st-bg-tertiary': '#2F2F32',
      },
      fontSize: {
        'st-h1': ['32px', '110%'],
        'st-h2': ['28px', '110%'],
        'st-t1': ['28px', '110%'],
        'st-t2': ['22px', '110%'],
        'st-b1': ['16px', '110%'],
        'st-b2': ['14px', '110%'],
        'st-c': ['12px', '110%']
      },
      spacing: {
        'st-1': '4px',
        'st-2': '8px',
        'st-3': '16px',
        'st-4': '24px',
        'st-5': '48px'
      }
    },
  },
  plugins: [],
}

