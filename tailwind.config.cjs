/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'cards': "-5px -5px 15px rgba(255,255,255,0.1), 5px 5px 15px rgba(0,0,0,0.35), inset -5px -5px 15px rgba(255,255,255,0.1), inset 5px 5px 15px rgba(0,0,0,0.35)",
        'cards2': "3px 3px 3px rgba(255,255,255,0.2), -3px -3px 3px rgba(0,0,0,0.3)"
      },
      animation:{
        'slide': 'minNav 1s ease-in-out both',
        'here': 'readArrow 1s ease-in infinite'
      },
      keyframes:{
        'minNav': {
          '0%': {transform:'translateX(100%)'},
          '100%': {transform: 'translateX(0)'}
        },
        'readArrow':{
          '0%':{transform:'translateX(0)'},
          '50%':{transform: 'translateX(5px)'},
          '100%':{transform: 'translateX(1px)'},
        }
      }
    },
  },
  plugins: [],
}
