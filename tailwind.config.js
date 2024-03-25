/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1480px',
      // => @media (min-width: 1480px) { ... }
    },
    extend: {
      colors: {
        'mango': '#FEBB24',
        'zero': '#003FBC',
        'indigo': '#6E81B6',
        'violet': '#CF99FF',
        'night': '#020842',
        'shell': '#FFF8F4',
      },
      // fontFamily: {
      //   tommy: ['MADE TOMMY', 'sans-serif'],
      // },
    },
  },
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '745px',
          },
          '@screen lg': {
            maxWidth: '965px',
          },
          '@screen xl': {
            maxWidth: '1180px',
          },
          '@screen 2xl': {
            maxWidth: '1460px',
          },
        }
      })
    }
  ]
}

