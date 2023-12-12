import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pattern': "url('/pattern.png')",
        'hero-bg': "url('/hero-bg.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        txt_10: '0.625rem',
        txt_14: '0.875rem',
        txt_24: '1.5rem',
        txt_28: '1.75rem',
        txt_30: '1.875rem',
        txt_32: '2rem',
        txt_40: '2.5rem',
        txt_60: '3.75rem',
        txt_80: '5rem',
        txt_100: '6.25rem',
        txt_120: '7.5rem',

      },
      colors: {
        "header-blue": "#00465C",
        "header-pink": "#6C0054",
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
    },
  },
  plugins: [],
}
export default config
