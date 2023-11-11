import type { Config } from 'tailwindcss'
import { screens } from 'tailwindcss/defaultTheme'
import daisyUI from 'daisyui'

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
        light: '#fff9f9',
        white: '#ffffff',
      },
    },
  },
  plugins: [daisyUI],
  daisyui: {
    themes: false,
    darkTheme: false,
    base: false,
    // styled: false,
  },
}
export default config
