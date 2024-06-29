/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-navy": "#0a192f",
        "my-light-navy": "#112240",
        "my-lightest-navy": "#233554",
        "my-slate": "#8892b0",
        "my-light-slate": "#a8b2d1",
        "my-lightest-slate": "#ccd6f6",
        "my-white": "#e6f1ff",
        "my-green": "#64ffda",
        "my-div-navy": "#112240",
      },
    },
  },
  plugins: [],
};
