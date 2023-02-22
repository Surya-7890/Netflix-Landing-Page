/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      'backgroundImage': {
        'bigImg': 'url("/nf.jpg")',
        'namelogo': 'url("/netflix.png")',
        'tv': 'url("/tv.png")',
        'mobile': 'url("/mobile.jpg")',
        'device-pile': 'url("/device-pile.png")',
        'children': 'url("/children.png")'
      }
    },
  },
  plugins: [],
}