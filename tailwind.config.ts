import type { Config } from 'tailwindcss'
import { colors, screens } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      // prettier-ignore
      "xs": '475px',
      ...screens,
    },
    extend: {
      colors: {
        primary: '#fe494b',
        secondary: '#3baf20',
        accent: '#a1d873',
        dark: '#0a311e',
        light: '#fbfff9',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
}
export default config
