/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',        // all pages/layouts/components in app
    './components/**/*.{js,ts,jsx,tsx}', // shared components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
