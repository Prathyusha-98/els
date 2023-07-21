/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        '3xl': '1728px',
      },
      textShadow: {
        md: '0px 4px 20px 0px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        bounce: 'bounce 1s ease-in-out infinite',
      },
      backgroundImage: {
        'candy': 'linear-gradient(45deg,  #00ffc3 ,  #f1a661,   #00ffd5  ,  #00ffc3 ,   #f1a661 ,#00ffd5)',
        'fire': 'linear-gradient( to right,#ee7724,#d8363a,#dd3675,#b44593)',
        'fall': 'linear-gradient(90deg, #013849 0.97%, #073041 4.67%, #0E2738 13.52%, #122233 32.8%, #161E2E 46.14%, #181B2B 58.79%, #1A1929 98.5%)',
        'peach': 'linear-gradient(90deg, #0CC4CF 0%, #058DD1 100%)',
        'leaf': 'rgba(15, 131, 146)',
        'uni': 'linear-gradient(180deg, #051A30 0%, #2F2B75 100%)',
      },
    },
  },
  plugins: [],
}
