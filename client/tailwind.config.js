module.exports = {
    // purge: [],
 
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: { 
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
      
        black: '#000',
        white: '#fff',
        dark : {
          'primary' : '#0a070773',
        },
        gray: {
          100: '#f7fafc',
          200: '#28333F',
          300: '#1A232B',
          400: '#161D23',
          500: '#2C3B4A',
          600: '#1E2932',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        red: {
          100: '#fff5f5',
          200:'#F4465E',
          300: '#feb2b2',
          400: '#fc8181',
          500: '#f56565',
          600: '#e53e3e',
          700: '#c53030',
          800: '#9b2c2c',
          900: '#742a2a',
        },
        orange: {
          100: '#fffaf0',
          200: '#feebc8',
          300: '#fbd38d',
          400: '#f6ad55',
          500: '#ed8936',
          600: '#dd6b20',
          700: '#c05621',
          800: '#9c4221',
          900: '#7b341e',
        },
        yellow: {
          100: '#fffff0',
          200: '#fefcbf',
          300: '#faf089',
          400: '#f6e05e',
          500: '#ecc94b',
          600: '#d69e2e',
          700: '#b7791f',
          800: '#975a16',
          900: '#744210',
        },
        green: {
          100: '#7CFA4C',
          200: '#c6f6d5',
          300: '#9ae6b4',
          400: '#68d391',
          500: '#48bb78',
          600: '#38a169',
          700: '#2f855a',
          800: '#276749',
          900: '#22543d',
        },
        teal: {
          100: '#e6fffa',
          200: '#b2f5ea',
          300: '#81e6d9',
          400: '#4fd1c5',
          500: '#38b2ac',
          600: '#319795',
          700: '#2c7a7b',
          800: '#285e61',
          900: '#234e52',
        },
        blue: {
          100: '#52B4FF',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
        indigo: {
          100: '#ebf4ff',
          200: '#c3dafe',
          300: '#a3bffa',
          400: '#7f9cf5',
          500: '#667eea',
          600: '#5a67d8',
          700: '#4c51bf',
          800: '#434190',
          900: '#3c366b',
        },
        purple: {
          100: '#faf5ff',
          200: '#e9d8fd',
          300: '#d6bcfa',
          400: '#b794f4',
          500: '#9f7aea',
          600: '#805ad5',
          700: '#6b46c1',
          800: '#553c9a',
          900: '#44337a',
        },
        pink: {
          100: '#fff5f7',
          200: '#fed7e2',
          300: '#fbb6ce',
          400: '#f687b3',
          500: '#ed64a6',
          600: '#d53f8c',
          700: '#b83280',
          800: '#97266d',
          900: '#702459',
        },
      },
      extend : {
        screens: {
          'desktop' : '1920px',
        },
        fontFamily: {
          'mulish': ['"Mulish"', 'sans-serif'],
          'lexend' : ['"Lexend Zetta"', 'sans-serif'],
          'acumin' : ['"acumin-pro"', 'sans-serif']
        },
        width : {
          '18/25' : '72%',
          '9/10' : '90%',
          '200' : '200px'
        },
        height : {
          '99/100' : '99%'
        },
        minHeight : {
          '600' : '600px'
        },
        maxWidth : {
          'xxs' : '200px'
        },
        zIndex : {
          'infinite' : '20000'
        } 
      }
    },
     variants: {
      extend: {
        backgroundColor: ['active','focus'],
        opacity : ['active'],
        boxShadow : ['active'],
        visibility: ['hover', 'focus'],
        ringWidth: ['hover', 'active'],
        ringColor: ['hover', 'active'],
        appearance: ['hover', 'focus', 'active'],
        fontWeight : ['hover', 'focus', 'active']
      }
     },
   }
  