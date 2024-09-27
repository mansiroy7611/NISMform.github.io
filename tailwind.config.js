/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'xl': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        '2xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '3xl': '0 30px 50px -10px rgba(0, 0, 0, 0.3), 0 20px 40px -15px rgba(0, 0, 0, 0.2)',
        '4xl': '0 40px 70px -15px rgba(0, 0, 0, 0.4), 0 30px 60px -20px rgba(0, 0, 0, 0.3)',
        '5xl': '0 50px 90px -20px rgba(0, 0, 0, 0.5), 0 40px 80px -25px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}

