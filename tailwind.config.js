/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 2px 52px 4px #00000013",
        box: "0px 2.27px 4.55px 0px rgba(0, 0, 0, 0.07)",
      },
    },
  },
  plugins: [],
};
