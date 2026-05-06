import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'outline-variant':            '#c3c8c1',
        'primary-container':          '#1b3022',
        'surface-container':          '#f0eee9',
        'surface-dim':                '#dbdad5',
        'on-tertiary-fixed':          '#161f00',
        'on-tertiary':                '#ffffff',
        'primary-fixed':              '#d0e9d4',
        'on-secondary-container':     '#741f0b',
        'on-secondary-fixed-variant': '#812914',
        'error-container':            '#ffdad6',
        'on-error':                   '#ffffff',
        'on-surface-variant':         '#434843',
        'surface-container-high':     '#eae8e3',
        'surface':                    '#fbf9f4',
        'on-secondary':               '#ffffff',
        'on-primary':                 '#ffffff',
        'tertiary-fixed-dim':         '#bdce89',
        'tertiary':                   '#121a00',
        'secondary-fixed-dim':        '#ffb4a3',
        'on-tertiary-fixed-variant':  '#3e4c16',
        'on-error-container':         '#93000a',
        'on-primary-container':       '#819986',
        'surface-variant':            '#e4e2dd',
        'inverse-surface':            '#30312e',
        'surface-bright':             '#fbf9f4',
        'on-secondary-fixed':         '#3d0700',
        'inverse-primary':            '#b4cdb8',
        'primary':                    '#061b0e',
        'tertiary-container':         '#243000',
        'tertiary-fixed':             '#d9eaa3',
        'inverse-on-surface':         '#f2f1ec',
        'secondary-fixed':            '#ffdad2',
        'surface-container-lowest':   '#ffffff',
        'on-background':              '#1b1c19',
        'surface-container-highest':  '#e4e2dd',
        'error':                      '#ba1a1a',
        'on-surface':                 '#1b1c19',
        'outline':                    '#737973',
        'secondary-container':        '#fe876a',
        'secondary':                  '#a03f29',
        'background':                 '#fbf9f4',
        'primary-fixed-dim':          '#b4cdb8',
        'on-primary-fixed-variant':   '#364c3c',
        'on-tertiary-container':      '#8a9a5b',
        'surface-container-low':      '#f5f3ee',
        'on-primary-fixed':           '#0b2013',
        'surface-tint':               '#4d6453',
      },

      // Custom font families matching the design system
      fontFamily: {
        sans:           ['var(--font-inter)',      'Inter',      'sans-serif'],
        serif:          ['var(--font-noto-serif)', 'Noto Serif', 'serif'],
        display:        ['var(--font-noto-serif)', 'Noto Serif', 'serif'],
        // Named families used as classes (font-display-lg, font-headline-lg, etc.)
        'display-lg':   ['var(--font-noto-serif)', 'Noto Serif', 'serif'],
        'display-md':   ['var(--font-noto-serif)', 'Noto Serif', 'serif'],
        'headline-lg':  ['var(--font-noto-serif)', 'Noto Serif', 'serif'],
        'headline-md':  ['var(--font-noto-serif)', 'Noto Serif', 'serif'],
        'body-lg':      ['var(--font-inter)',      'Inter',      'sans-serif'],
        'body-md':      ['var(--font-inter)',      'Inter',      'sans-serif'],
        'label-sm':     ['var(--font-inter)',      'Inter',      'sans-serif'],
      },

      // Custom font sizes with bundled line-height and weight
      fontSize: {
        'display-lg':  ['64px',  { lineHeight: '1.1', fontWeight: '400', letterSpacing: '-0.02em' }],
        'display-md':  ['48px',  { lineHeight: '1.2', fontWeight: '400' }],
        'headline-lg': ['32px',  { lineHeight: '1.3', fontWeight: '400' }],
        'headline-md': ['24px',  { lineHeight: '1.4', fontWeight: '500' }],
        'body-lg':     ['18px',  { lineHeight: '1.6', fontWeight: '400' }],
        'body-md':     ['16px',  { lineHeight: '1.6', fontWeight: '400' }],
        'label-sm':    ['12px',  { lineHeight: '1',   fontWeight: '600', letterSpacing: '0.05em' }],
      },

      // Custom spacing tokens
      spacing: {
        'margin-desktop': '64px',
        'margin-mobile':  '20px',
        'unit':           '8px',
        'gutter':         '24px',
        'section-gap':    '120px',
        'container-max':  '1280px',
      },

      maxWidth: {
        'container-max': '1280px',
      },

      borderRadius: {
        DEFAULT: '0.25rem',
        lg:      '0.5rem',
        xl:      '0.75rem',
        '2xl':   '1rem',
        '3xl':   '1.5rem',
        full:    '9999px',
      },
    },
  },
  plugins: [],
}

export default config
