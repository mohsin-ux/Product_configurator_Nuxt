/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      grey_lighter: "#F8F8FA",
      grey_light: "#EAEAF0",
      kitchenz_blue: "#404855",
      Beige: "#EEEDE8",
      dark_grey: "#404853",
      white: "#ffffff",
      grey_text: "#7A7A7A",
      Beige_Dark: "#DEDAD4",
    },
    extend: {},
  },
  plugins: [],
};

