import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Bricolage_Grotesque: ['Bricolage_Grotesque', 'sans-serif'],
      },
      colors: {
        'background': '#1f0836',
        'light-2': '#64CCC5',
        'dark-1': '#176B87',
        'dark-2': '#0F0F0F',
        'purpleText': '#D5B2E6',
        'orangeText': '#FFC599',
        
      },
    },
  },
  plugins: [],
}
export default config
