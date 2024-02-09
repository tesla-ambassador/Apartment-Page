/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      backgroundImage: {
        homeBg: "images/bg_apart.jpg",
      },
    },
  },
  plugins: [],
};
