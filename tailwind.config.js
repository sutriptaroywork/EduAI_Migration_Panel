/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

const midasColors = require('./plugins/colors');
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ["'Hanken Grotesk'", ...fontFamily.sans],
    },
    extend: {
      listStyleType: {
        alpha: 'upper-alpha',
      },
      colors: { ...midasColors, blue: { ...midasColors.primary } },
      gridTemplateColumnss: {
        5: 'repeat(5, minmax(0, 1fr))',
        8: 'repeat(8, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))',
        8: 'repeat(8, minmax(0, 1fr))',
      },

      boxShadow: {
        'extra-small': ' 0px 3px 4px -5px rgba(0, 0, 0, 0.03), 0px 1px 2px rgba(0, 0, 0, 0.04)',
        small: '0px 1px 1px rgba(0, 0, 0, 0.04), 0px 3px 4px rgba(0, 0, 0, 0.04)',
        medium: '0px 2px 4px -2px rgba(0, 0, 0, 0.06), 0px 4px 8px -2px rgba(0, 0, 0, 0.1)',
        large: '0px 2px 6px rgba(0, 0, 0, 0.06), 0px 32px 41px -23px rgba(0, 0, 0, 0.07)',
        'extra-large':
          '0px 48px 64px -36px rgba(0, 0, 0, 0.13), 0px 24px 48px -8px rgba(0, 0, 0, 0.11)',
        'hard-05': '0px 8px 16px 6px rgba(22, 22, 22, 0.16), 0px 4px 8px rgba(22, 22, 22, 0.3)',
        gray: '0px 0px 0px 4px rgba(94, 113, 141, 0.16)',
        primary: '0px 0px 0px 4px rgba(147, 98, 243, 0.16)',
        red: '0px 0px 0px 4px rgba(255, 56, 56, 0.08)',
        'primary-small': '0px 0px 0px 2px rgba(147, 98, 243, 0.48)',
        'primary-btn':
          '0px -1px 0px 0px rgba(37, 37, 133, 0.16) inset, 0px 1px 1px 0px rgba(255, 255, 255, 0.16) inset, 0px 0px 12px 8px rgba(206, 184, 255, 0.16), 0px 0px 1px 4px rgba(147, 98, 243, 0.48)',
        'hover-primary-btn':
          ' 0px -1px 0px 0px rgba(37, 37, 133, 0.16) inset, 0px 1px 1px 0px rgba(255, 255, 255, 0.16) inset, 0px 0px 12px 8px rgba(206, 184, 255, 0.16), 0px 0px 4px 4px rgba(147, 98, 243, 0.24)',
      },
      backgroundSize: {
        8: '.8rem',
      },
      backgroundImage: {
        'home-bg-gradient':
          'radial-gradient(163.4% 131.77% at 50.00% -0.00%, rgba(0, 0, 0, 0.00) 29.38%, #6144BD 71.56%, #FFF 100%)',
        // 'radial-gradient(127.47% 131.77% at 50.00% -0.00%, rgba(0, 0, 0, 0.00) 29.38%, #6144BD 71.56%, #FFF 100%)',
        'primary-btn-gradient':
          'linear-gradient(263.57deg, #111B73 0%, #DCD1FF 21.45%, #C09EFF 72.76%, #6144BD 100%)',
        'home-text-gradient':
          'background: radial-gradient(1397.24% 222.60% at 49.93% 49.99%, #FFF 0%, rgba(255, 255, 255, 0.64) 100%)',
        // 'linear-gradient(115deg, #111B73 0%, #DCD1FF 21.45%, #C09EFF 72.76%, #6144BD 100%)',
        // 'linear-gradient(165deg, #494949 -30.45%, #000000 74.14%)',
      },
      screens: {
        1300: '1300px',
        1440: '1440px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('./plugins/typography')],
};
