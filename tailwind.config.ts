import type { Config } from 'tailwindcss'
import { colors } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...colors,
      primary: '#1a3977',
      secondary: '#f9b233',
      accent: '#f9b233',
      dark: '#0e131d',
      light: '#f9f9ff',
    },
  },
  plugins: [],
}
export default config
