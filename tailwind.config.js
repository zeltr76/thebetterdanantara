/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        text: "hsl(0, 0%, 0%)",
        background: "hsl(0, 0%, 100%)",
        primary: "hsl(0, 72%, 51%)",
        secondary: "hsl(0, 0%, 0%)",
        accent: "hsl(0, 63%, 31%)",
      },
      fontFamily: {
        sans: ["Inter"],
        serif: ["Inter"],
      },
    },
  },
  plugins: [],
}
