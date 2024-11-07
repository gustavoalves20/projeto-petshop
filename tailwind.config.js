/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'fundo': "url('assets/fundo.png)",
      },
      colors: {
        'meuAzul': '#007BFF',
        'meuBackground': '#F8F9FA',
      }
    },
  },
  plugins: [],
}
