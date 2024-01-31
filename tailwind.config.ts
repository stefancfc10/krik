import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        "hero-background": "url(../../public/Homepage/herosection_1920x1120px.jpg)"
      },
      colors: {
        yellowColor: "#F8AC2E",
        blackColor:"#191919",
        orangeColor:"#FB5E3C",
        purpleColor:"#B8AFDA"

      },
      

    },
  },
  plugins: [],
}
export default config
