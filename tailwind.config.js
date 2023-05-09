/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html","./src/**/*.{html,jsx}"],
  theme: {
    colors: {
      'rojito-1':'#F5D9D6',
      'rojito-2':'#EBB2AD',
      'rojito-3':'#E18D85',
      'rojito-4':'#DC4D3F',
      'rojito-5':'#A83B31',

      'prioridad-fuerte-hecho':'#C81204',
      'prioridad-fuerte-no-hecho':'#FDA29B',
      'prioridad-media-hecho':'#E1B905',
      'prioridad-media-no-hecho':'#FDEB9B',
      'prioridad-baja-hecho':'#2E8432',
      'prioridad-baja-no-hecho':'#C6EBC8',

      'white':'#ffffff',
      'blanco':'#E6E6E6',
      'negro':'#414141'
    },
    extend: {}
  },
  plugins: [],

  
}

