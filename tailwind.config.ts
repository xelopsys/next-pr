/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';
import defaultTheme from './src/theme/default';
import plugin from 'tailwindcss/plugin';
import { themeColors } from '@/theme/themeColors';

export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['selector', '.dark-mode'],
  jit: true,
  theme: {
    extend: {
      ...defaultTheme,
      // ...defaultTheme,
      // keyframes: {
      //     "slide-down-and-fade": {
      //         from: { opacity: 0, transform: "translateY(-20%)" },
      //         to: { opacity: 1, transform: "translateY(0)" },
      //     },
      //     "slide-left-and-fade": {
      //         from: { opacity: 0, transform: "translateX(20%)" },
      //         to: { opacity: 1, transform: "translateX(0)" },
      //     },
      //     "slide-up-and-fade": {
      //         from: { opacity: 0, transform: "translateY(20%)" },
      //         to: { opacity: 1, transform: "translateY(0)" },
      //     },
      //     "slide-right-and-fade": {
      //         from: { opacity: 0, transform: "translateX(-20%)" },
      //         to: { opacity: 1, transform: "translateX(0)" },
      //     },
      // },
      // animation: {
      //     "slide-down-and-fade": "slide-down-and-fade 200ms ease-in-out",
      //     "slide-left-and-fade": "slide-left-and-fade 200ms ease-in-out",
      //     "slide-up-and-fade": "slide-up-and-fade 200ms ease-in-out",
      //     "slide-right-and-fade": "slide-right-and-fade 200ms ease-in-out",
      // },

      // transitionTimingFunction: {
      //     DEFAULT: "ease",
      // },
      // transitionDuration: {
      //     DEFAULT: "240ms",
      // },
    },
  },

  plugins: [
    require('./typography/index'),
    require('./src/plugins/textStyles'),
    require('tailwindcss-react-aria-components'),
    require('tailwindcss-animate'),
    require('@designbycode/tailwindcss-mask-image'),
    plugin(({ addVariant, addUtilities }) => {
      addVariant('focus-input-within', ['&:has(input:focus)']);

      addVariant('label', ['& [data-label]']);

      addUtilities({
        '.transition-inherit-all': {
          'transition-property': 'inherit',
          'transition-duration': 'inherit',
          'transition-timing-function': 'inherit',
        },
      });
    }),
  ],
} satisfies Config;
