import { Config } from 'tailwindcss';
import { themeColors } from './themeColors';

const round = (num: number) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');
const rem = (px: number) => `${round(px / 16)}rem`;

const theme: Config['theme'] = {
  ...themeColors,
  screens: {
    xxs: '320px',
    // This must match the breakpoint in sonner: https://github.com/emilkowalski/sonner/blob/main/src/styles.css
    xs: '600px',
  },
  spacing: {
    px: rem(1),
    0: rem(0),
    0.5: rem(2),
    1: rem(4),
    1.5: rem(6),
    2: rem(8),
    2.5: rem(10),
    3: rem(12),
    3.5: rem(14),
    4: rem(16),
    4.5: rem(18),
    5: rem(20),
    5.5: rem(22),
    6: rem(24),
    7: rem(28),
    8: rem(32),
    8.5: rem(34),
    9: rem(36),
    9.5: rem(38),
    10: rem(40),
    10.5: rem(42),
    11: rem(44),
    11.5: rem(46),
    12: rem(48),
    13: rem(52),
    14: rem(56),
    16: rem(64),
    17: rem(68),
    18: rem(72),
    20: rem(80),
    24: rem(96),
    26: rem(104),
    28: rem(112),
    32: rem(128),
    40: rem(160),
    48: rem(192),
    56: rem(224),
    64: rem(256),
    72: rem(288),
    80: rem(320),
    96: rem(384),
    120: rem(480),
    160: rem(640),
    180: rem(720),
    192: rem(768),
    256: rem(1024),
    320: rem(1280),
    360: rem(1440),
    400: rem(1600),
    480: rem(1920),

    xxs: rem(2),
    xs: rem(4),
    sm: rem(6),
    md: rem(8),
    lg: rem(12),
    xl: rem(16),
    '2xl': rem(20),
    '3xl': rem(24),
    '4xl': rem(32),
    '5xl': rem(40),
    '6xl': rem(48),
    '7xl': rem(64),
    '8xl': rem(80),
    '9xl': rem(96),
    '10xl': rem(128),
    '11xl': rem(160),
  },
  maxWidth: {
    container: '1280px',
  },
  width: {
    mobile: '375px',
  },
  fontSize: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20),
    'display-xs': rem(24),
    'display-sm': rem(30),
    'display-md': rem(36),
    'display-lg': rem(48),
    'display-xl': rem(60),
    'display-2xl': rem(72),
  },
  lineHeight: {
    xs: rem(18),
    sm: rem(20),
    md: rem(24),
    lg: rem(28),
    xl: rem(30),
    'display-xs': rem(32),
    'display-sm': rem(38),
    'display-md': rem(44),
    'display-lg': rem(60),
    'display-xl': rem(72),
    'display-2xl': rem(90),
  },
  letterSpacing: {
    'display-md': '-0.72px',
    'display-lg': '-0.96px',
    'display-xl': '-1.2px',
    'display-2xl': '-1.44px',
  },
  fontFamily: {
    body: [`Inter, -apple-system, "Segoe UI", Roboto, Arial, sans-serif`],
    display: [`Inter, -apple-system, "Segoe UI", Roboto, Arial, sans-serif`],
    manrope: [`Manrope, -apple-system, "Segoe UI", Roboto, Arial, sans-serif`],
    mono: [
      `"Roboto Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
    ],
  },
  textUnderlineOffset: {
    3: '3px',
  },
  borderRadius: {
    none: '0px',
    xs: '0.25rem',
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  ringWidth: {
    3: '3px',
    6: '6px',
  },
  outlineWidth: {
    3: '3px',
    6: '6px',
  },
  ringOffsetWidth: {
    '-1': '-1px',
    '-2': '-2px',
    '-4': '-4px',
    '-8': '-8px',
  },
  transitionProperty: {
    inherit: 'inherit',
  },

  backgroundImage: {
    'dropdown-icon': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23667085' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.67' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
  },
  boxShadow: ({ theme }) => {
    const shadows: Record<string, string> = {
      xs: '0px 1px 2px rgba(10, 13, 18, 0.05)',
      sm: '0px 1px 3px rgba(10, 13, 18, 0.10), 0px 1px 2px -1px rgba(10, 13, 18, 0.10)',
      md: '0px 4px 6px -1px  rgba(10, 13, 18, 0.10), 0px 2px 4px -2px  rgba(10, 13, 18, 0.06)',
      lg: '0px 12px 16px -4px  rgba(10, 13, 18, 0.08), 0px 4px 6px -2px  rgba(10, 13, 18, 0.03), 0px 2px 2px -1px  rgba(10, 13, 18, 0.04)',
      xl: '0px 20px 24px -4px  rgba(10, 13, 18, 0.08), 0px 8px 8px -4px  rgba(10, 13, 18, 0.03), 0px 3px 3px -1.5px  rgba(10, 13, 18, 0.04)',
      '2xl':
        '0px 24px 48px -12px  rgba(10, 13, 18, 0.18), 0px 4px 4px -2px  rgba(10, 13, 18, 0.04)',
      '3xl':
        '0px 32px 64px -12px  rgba(10, 13, 18, 0.14), 0px 5px 5px -2.5px  rgba(10, 13, 18, 0.04)',

      skeumorphic:
        '0px 0px 0px 1px rgba(10, 13, 18, 0.18) inset, 0px -2px 0px 0px rgba(10, 13, 18, 0.05) inset',

      'modern-mockup-inner-lg':
        '0px 0px 3.765px 1.255px rgba(10, 13, 18, 0.08) inset, 0px 0px 2.51px 1.255px rgba(10, 13, 18, 0.03) inset',
      'modern-mockup-inner-md':
        '0px 0px 1.692px 0.564px rgba(10, 13, 18, 0.08) inset, 0px 0px 1.128px 0.564px rgba(10, 13, 18, 0.03) inset',
      'modern-mockup-inner-sm':
        '0px 0px 4.48px 1.493px rgba(10, 13, 18, 0.08) inset, 0px 0px 2.987px 1.493px rgba(10, 13, 18, 0.03) inset',

      'modern-mockup-outer-lg':
        '0px 7.529px 10.039px -2.51px rgba(10, 13, 18, 0.08), 0px 2.51px 3.765px -1.255px rgba(10, 13, 18, 0.03), 0px 1.255px 1.255px -0.627px rgba(10, 13, 18, 0.04)',
      'modern-mockup-outer-md':
        '0px 3.385px 4.513px -1.128px rgba(10, 13, 18, 0.08), 0px 1.128px 1.692px -0.564px rgba(10, 13, 18, 0.03), 0px 0.564px 0.564px -0.282px  rgba(10, 13, 18, 0.04)',
    };

    shadows['xs-border-disabled-subtle'] = `${shadows['xs']}, 0px 0px 0px 1px ${
      theme('borderColor')['disabled_subtle']
    } inset`;

    shadows['xs-skeumorphic'] = `${shadows['skeumorphic']}, ${shadows['xs']}`;

    shadows['xs-skeumorphic-secondary-color'] = `0px 0px 0px 1px ${
      theme('colors').button['secondary']['color']['border']
    } inset, 0px -2px 0px 0px rgba(16, 24, 40, 0.05) inset, ${shadows['xs']}`;
    shadows['xs-skeumorphic-secondary-error'] = `0px 0px 0px 1px ${
      theme('colors').button['secondary']['error']['border']
    } inset, 0px -2px 0px 0px rgba(16, 24, 40, 0.05) inset, ${shadows['xs']}`;
    return shadows;
  },
  dropShadow: {
    'iphone-mockup': '20px 12px 18px rgba(16,24,40,0.2)',
  },
  textStyles: ({ theme }: { theme: (path: string) => any }) => ({
    'tt-xs': {
      fontSize: theme('fontSize').xs,
      lineHeight: theme('lineHeight').xs,
      fontWeight: 400,
    },
    'tt-sm': {
      fontSize: theme('fontSize').sm,
      lineHeight: theme('lineHeight').sm,
      fontWeight: 400,
    },
    'tt-md': {
      fontSize: theme('fontSize').md,
      lineHeight: theme('lineHeight').md,
      fontWeight: 400,
    },
    'tt-lg': {
      fontSize: theme('fontSize').lg,
      lineHeight: theme('lineHeight').lg,
      fontWeight: 400,
    },
    'tt-xl': {
      fontSize: theme('fontSize').xl,
      lineHeight: theme('lineHeight').xl,
      fontWeight: 400,
    },
    'td-xs': {
      fontSize: theme('fontSize')['display-xs'],
      lineHeight: theme('lineHeight')['display-sm'],
      fontWeight: 400,
    },
    'td-sm': {
      fontSize: theme('fontSize')['display-sm'],
      lineHeight: theme('lineHeight')['display-sm'],
      fontWeight: 400,
    },
    'td-md': {
      fontSize: theme('fontSize')['display-md'],
      lineHeight: theme('lineHeight')['display-md'],
      fontWeight: 400,
      letterSpacing: theme('letterSpacing')['display-md'],
    },
    'td-lg': {
      fontSize: theme('fontSize')['display-lg'],
      lineHeight: theme('lineHeight')['display-lg'],
      fontWeight: 400,
      letterSpacing: theme('letterSpacing')['display-lg'],
    },
    'td-xl': {
      fontSize: theme('fontSize')['display-xl'],
      lineHeight: theme('lineHeight')['display-xl'],
      fontWeight: 400,
      letterSpacing: theme('letterSpacing')['display-xl'],
    },
    'td-2xl': {
      fontSize: theme('fontSize')['display-2xl'],
      lineHeight: theme('lineHeight')['display-2xl'],
      letterSpacing: theme('letterSpacing')['display-2xl'],
    },
    'tt-xs-md': {
      fontSize: theme('fontSize').xs,
      lineHeight: theme('lineHeight').xs,
      fontWeight: 500,
    },
    'tt-sm-md': {
      fontSize: theme('fontSize').sm,
      lineHeight: theme('lineHeight').sm,
      fontWeight: 500,
    },
    'tt-md-md': {
      fontSize: theme('fontSize').md,
      lineHeight: theme('lineHeight').md,
      fontWeight: 500,
    },
    'tt-lg-md': {
      fontSize: theme('fontSize').lg,
      lineHeight: theme('lineHeight').lg,
      fontWeight: 500,
    },
    'tt-xl-md': {
      fontSize: theme('fontSize').xl,
      lineHeight: theme('lineHeight').xl,
      fontWeight: 500,
    },
    'td-xs-md': {
      fontSize: theme('fontSize')['display-xs'],
      lineHeight: theme('lineHeight')['display-xs'],
      fontWeight: 500,
    },

    'td-sm-md': {
      fontSize: theme('fontSize')['display-sm'],
      lineHeight: theme('lineHeight')['display-sm'],
      fontWeight: 500,
    },
    'td-md-md': {
      fontSize: theme('fontSize')['display-md'],
      lineHeight: theme('lineHeight')['display-md'],
      fontWeight: 500,
      letterSpacing: theme('letterSpacing')['display-md'],
    },
    'td-lg-md': {
      fontSize: theme('fontSize')['display-lg'],
      lineHeight: theme('lineHeight')['display-lg'],
      fontWeight: 500,
      letterSpacing: theme('letterSpacing')['display-lg'],
    },
    'td-xl-md': {
      fontSize: theme('fontSize')['display-xl'],
      lineHeight: theme('lineHeight')['display-xl'],
      fontWeight: 500,
      letterSpacing: theme('letterSpacing')['display-xl'],
    },
    'td-2xl-md': {
      fontSize: theme('fontSize')['display-2xl'],
      lineHeight: theme('lineHeight')['display-2xl'],
      fontWeight: 500,
      letterSpacing: theme('letterSpacing')['display-2xl'],
    },
    'tt-xs-semi': {
      fontSize: theme('fontSize').xs,
      lineHeight: theme('lineHeight').xs,
      fontWeight: 600,
    },
    'tt-sm-semi': {
      fontSize: theme('fontSize').sm,
      lineHeight: theme('lineHeight').sm,
      fontWeight: 600,
    },
    'tt-md-semi': {
      fontSize: theme('fontSize').md,
      lineHeight: theme('lineHeight').md,
      fontWeight: 600,
    },
    'tt-lg-semi': {
      fontSize: theme('fontSize').lg,
      lineHeight: theme('lineHeight').lg,
      fontWeight: 600,
    },
    'tt-xl-semi': {
      fontSize: theme('fontSize').xl,
      lineHeight: theme('lineHeight').xl,
      fontWeight: 600,
    },
    'td-xs-semi': {
      fontSize: theme('fontSize')['display-xs'],
      lineHeight: theme('lineHeight')['display-xs'],
      fontWeight: 600,
    },
    'td-sm-semi': {
      fontSize: theme('fontSize')['display-sm'],
      lineHeight: theme('lineHeight')['display-sm'],
      fontWeight: 600,
    },
    'td-md-semi': {
      fontSize: theme('fontSize')['display-md'],
      lineHeight: theme('lineHeight')['display-md'],
      fontWeight: 600,
      letterSpacing: theme('letterSpacing')['display-md'],
    },
    'td-lg-semi': {
      fontSize: theme('fontSize')['display-lg'],
      lineHeight: theme('lineHeight')['display-lg'],
      fontWeight: 600,
      letterSpacing: theme('letterSpacing')['display-lg'],
    },
    'td-xl-semi': {
      fontSize: theme('fontSize')['display-xl'],
      lineHeight: theme('lineHeight')['display-xl'],
      fontWeight: 600,
      letterSpacing: theme('letterSpacing')['display-xl'],
    },
    'td-2xl-semi': {
      fontSize: theme('fontSize')['display-2xl'],
      lineHeight: theme('lineHeight')['display-2xl'],
      fontWeight: 600,
      letterSpacing: theme('letterSpacing')['display-2xl'],
    },
  }),
  keyframes: {
    'caret-blink': {
      '0%, 70%, 100%': { opacity: '1' },
      '20%, 50%': { opacity: '0' },
    },
  },
  animation: {
    'caret-blink': 'caret-blink 0.75s ease-out infinite',
  },
  zIndex: {
    '1': '1',
  },
};

export default theme;
