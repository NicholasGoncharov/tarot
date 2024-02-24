/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        jockey: ['JockeyOne']
      },
      boxShadow: {
        'header': '0px 4px 36px 0px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        32: '32px'
      }
    },
  },
  plugins: [],
}

