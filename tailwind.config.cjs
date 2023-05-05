/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-\w+-[1-9]00/,
    },
    {
      pattern: /text-\w+-[1-9]00/,
    },
    {
      pattern: /border-\w+-[1-9]00/,
    },
    {
      pattern: /w-[\w+%]/,
    },
    {
      pattern: /.+/,
    },
  ],
};
