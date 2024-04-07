/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin');

const midasTypography = plugin(function ({ addUtilities }) {
  const typographyUtilities = {
    '.text-heading-01': {
      fontSize: '6.4rem', // 64px
      fontWeight: 500, //medium
      lineHeight: '119%', //118.75
    },
    '.text-heading-02': {
      fontSize: '4.8rem', // 48px
      fontWeight: 500, //medium
      lineHeight: '125%',
    },
    '.text-heading-03': {
      fontSize: '3.6rem', // 3.6px
      fontWeight: 500, //medium
      lineHeight: '133%', //133.3
    },
    '.text-heading-04': {
      fontSize: '2.4rem', // 24px
      fontWeight: 600, //semi-bold
      lineHeight: '133%', //133.3
    },
    '.text-heading-05': {
      fontSize: '2rem', // 20px
      fontWeight: 600, //semi-bold
      lineHeight: '140%',
    },
    '.text-sub-01': {
      fontSize: '1.6rem', // 16px
      fontWeight: 600, //semi-bold
      lineHeight: '150%',
    },

    '.text-sub-02': {
      fontSize: '1.4rem', // 14px
      fontWeight: 600, //semi-bold
      lineHeight: '143%', //142.8
    },
    '.text-body-01': {
      fontSize: '1.6rem',
      fontWeight: 400,
      lineHeight: '150%',
    },
    '.text-body-02': {
      fontSize: '1.4rem',
      fontWeight: 400,
      lineHeight: '143%', //142.8
    },
    '.text-body-03': {
      fontSize: '1.2rem',
      fontWeight: 400,
      lineHeight: '150%',
    },

    // for component liabrary
    '.text-reg-H1': {
      fontSize: '1.6rem',
      fontWeight: '400', // normal
      lineHeight: '125%', // 80px
    },
    '.text-reg-H2': {
      fontSize: '4.8rem', // 48px
      fontWeight: '400', // normal
      lineHeight: '125%', // 60px
    },
    '.text-reg-H3': {
      fontSize: '3.2rem', // 32px
      fontWeight: '400', // normal
      lineHeight: '138%', // 44px
    },
    '.text-reg-H4': {
      fontSize: '2.4rem', // 24px
      fontWeight: '400', // normal
      lineHeight: '150%', // 36px
    },
    '.text-reg-sub-01': {
      fontSize: '1.8rem', // 18px
      fontWeight: '400', // normal
      lineHeight: '167%', // 30px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    '.text-reg-sub-02': {
      fontSize: '1.6rem', // 16px
      fontWeight: '400', // normal
      lineHeight: '150%', // 24px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    '.text-reg-body': {
      fontSize: '1.4rem', // 14px
      fontWeight: '400', // normal
      lineHeight: '143%', // 20px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    '.text-reg-body-sm': {
      fontSize: '1.2rem', // 12px
      fontWeight: '400', // normal
      lineHeight: '150%', // 18px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    '.text-reg-body-xs': {
      fontSize: '1rem', // 10px
      fontWeight: '400', // normal
      lineHeight: '120%', // 12px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    // MEDIUM
    '.text-med-H1': {
      fontSize: '6.4rem', // 64px
      fontWeight: '500', // medium
      lineHeight: '125%', // 80px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    '.text-med-H2': {
      fontSize: '4.8rem', // 48px
      fontWeight: '500', // medium
      lineHeight: '125%', // 60px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    '.text-med-H3': {
      fontSize: '3.6rem', // 36px
      fontWeight: '500', // medium
      lineHeight: '138%', // 44px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    '.text-med-H4': {
      fontSize: '2.4rem', // 24px
      fontWeight: '500', // medium
      lineHeight: '150%', // 36px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    '.text-med-sub-01': {
      fontSize: '1.8rem', // 18px
      fontWeight: '500', // medium
      lineHeight: '167%', // 30px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    '.text-med-sub-02': {
      fontSize: '1.6rem', // 16px
      fontWeight: '500', // medium
      lineHeight: '150%', // 24px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    '.text-med-body': {
      fontSize: '1.4rem', // 14px
      fontWeight: '500', // medium
      lineHeight: '143%', // 20px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    '.text-med-body-sm': {
      fontSize: '1.2rem', // 12px
      fontWeight: '500', // medium
      lineHeight: '150%', // 18px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    '.text-med-body-xs': {
      fontSize: '1rem', // 10px
      fontWeight: '500', // medium
      lineHeight: '120%', // 12px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    // SEMI BOLD
    '.text-semi-bold-H1': {
      fontSize: '6.4rem', // 64px
      fontWeight: '700', // semi-bold
      lineHeight: '125%', // 80px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    '.text-semi-bold-H2': {
      fontSize: '4.8rem', // 48px
      fontWeight: '700', // semi-bold
      lineHeight: '125%', // 60px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    '.text-semi-bold-H3': {
      fontSize: '3.2rem', // 32px
      fontWeight: '700', // semi-bold
      lineHeight: '138%', // 44px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    '.text-semi-bold-H4': {
      fontSize: '2.4rem', // 24px
      fontWeight: '700', // semi-bold
      lineHeight: '150%', // 36px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    '.text-semi-bold-sub-01': {
      fontSize: '1.8rem', // 18px
      fontWeight: '700', // semi-bold
      lineHeight: '167%', // 30px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    '.text-semi-bold-sub-02': {
      fontSize: '1.6rem', // 16px
      fontWeight: '700', // semi-bold
      lineHeight: '150%', // 24px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    '.text-semi-bold-body': {
      fontSize: '1.4rem', // 14px
      fontWeight: '700', // semi-bold
      lineHeight: '143%', // 20px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    '.text-semi-bold-body-sm': {
      fontSize: '1.2rem', // 12px
      fontWeight: '700', // semi-bold
      lineHeight: '150%', // 18px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    '.text-semi-bold-body-xs': {
      fontSize: '1rem', // 10px
      fontWeight: '700', // semi-bold
      lineHeight: '120%', // 12px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    // BOLD
    '.text-bold-H1': {
      fontSize: '6.4rem', // 64px
      fontWeight: '700', // bold
      lineHeight: '125%', // 80px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    '.text-bold-H2': {
      fontSize: '4.8rem', // 48px
      fontWeight: '700', // bold
      lineHeight: '125%', // 60px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    '.text-bold-H3': {
      fontSize: '3.2rem', // 32px
      fontWeight: '700', // bold
      lineHeight: '138%', // 44px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    '.text-bold-H4': {
      fontSize: '2.4rem', // 24px
      fontWeight: '700', // bold
      lineHeight: '150%', // 36px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    '.text-bold-sub-01': {
      fontSize: '1.8rem', // 18px
      fontWeight: '700', // bold
      lineHeight: '167%', // 30px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    '.text-bold-sub-02': {
      fontSize: '1.6rem', // 16px
      fontWeight: '700', // bold
      lineHeight: '150%', // 24px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    '.text-bold-body': {
      fontSize: '1.4rem', // 14px
      fontWeight: '700', // bold
      lineHeight: '143%', // 20px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    '.text-bold-body-sm': {
      fontSize: '1.2rem', // 12px
      fontWeight: '700', // bold
      lineHeight: '150%', // 18px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
    '.text-bold-body-xs': {
      fontSize: '1rem', // 10px
      fontWeight: '700', // bold
      lineHeight: '120%', // 12px
      fontFeatureSettigs: `'case' on, 'ordn' off, 'zero' off, 'cv01' on, 'cv02' on, 'cv03' on,
    'cv04' on, 'cv05' on, 'cv08' on, 'cv09' on`,
    },
  };
  addUtilities(typographyUtilities, ['responsive', 'hover']);
});

module.exports = midasTypography;
