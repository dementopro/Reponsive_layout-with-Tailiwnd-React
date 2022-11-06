/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  safelist: [
    {
        pattern: /((col|grid)-(span|cols)-.)|(gap)-./,
        variants: ['lg', 'sm', 'md'],
    }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
