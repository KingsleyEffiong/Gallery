/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': 'rgba(13, 96, 132) 0px 5px 15px;',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(45deg, #33ADEE 0%, #BD28C0 100%)',
      },
      keyframes: {
        slideInCenter: {
          '0%': {
            transform: 'translateY(50%) scale(0.5)',
            opacity: 0,
          },
          '100%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: 1,
          },
        },
        slideInLeft: {
          '0%': {
          transform: 'translateX(-1000px) scaleX(2.5) scaleY(0.2);',
          filter: 'blur(40px)',
          opacity: 0,
          },
          '100%':{
           transform: 'translateX(0) scaleY(1) scaleX(1);',
           filter: 'blur(0)',
           opacity: 1,
          },
        },
        textAnimate: {
          '0%': {
            letterSpacing: '1.5em',
            transform: 'translateZ(400)',
            opacity: 0,
          },
          '40%': {
            opacity: 0.6,
          },
          '100%': {
            transform: 'translateZ(0)',
            opacity: 1,
          },
        },
        
        slideOutBackCenter: {
          '0%': {
          transform: 'translateX(0)',
          opacity: 0,
          },
          '100%':{
           transform: 'translateX(1100px)',
           opacity: 1,
          },
        },
        slideOut:{
          '0%': {
            transform: 'translateY(0, 0) scale(1)',
            opacity: 0,
          },
          '100%': {
            transform: 'translate(0, -100%) scale(0.5)',
            opacity: 1,
          },
        }
      },
      animation: {
        slideInCenter: 'slideInCenter 1.5s ease-out forwards',
        slideOut: 'slideOut 1.5s ease-out forwards',
        slideInLeft: 'slideInLeft 1.5s ease-out forwards',
        slideInLeftImage: 'slideInLeft 1s ease-out forwards',
        slideOutBackCenter: 'slideOutBackCenter 1.5s ease-out forwards',
        textAnimate: 'textAnimate 1.5s ease-out',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-indent-custom': {
          'text-indent': '1.5rem',
        },
      });
    },
  ],
}
