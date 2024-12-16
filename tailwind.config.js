/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      "1xs": "200px",
      "2xs": "281px",
      "3xs": "305px",
      "xxs": "320px",
      "xs": "343px",
      "ssm": "350px",
      "sxs": "360px",
      "5sm": "375px",
      "xsm": "390px",
      "1xsm": "393px",
      "6sm": "412px",
      "7sm": "414px",
      "nsm": "430px",
      "3sm": "440px",
      "2.5sm": "460px",
      "2sm": "500px",
      "4sm": "540px",
      "1sm": "600px",
      "sm": "640px",
      "xm": "650px",
      "xmm": "730px",
      "md": "768px",
      "1lg": "900px",
      "lg": "1024px",
      "pc": "1100px",
      "1pc": "1180px",
      "2pc": "1200px",
      "3pc": "1249px",
      "xl": "1280px",
      "1xl": "1360px",
      "2xl": "1536px",
    },
    extend: {
      animation: {
        'fly-in': 'fly-in 0.5s ease-out forwards',
      },
      keyframes: {
        'fly-in': {
          '0%': { transform: 'translateY(-150px) translateX(-200px)', opacity: '0' },
          '100%': { transform: 'translateY(0) translateX(0)', opacity: '1' },
        }
      },
      fontFamily: {
        red_display: ['Red Hat Display', 'sans-serif'],
        anton_regular: ['Anton', 'sans-serif'],
      },
      backgroundImage: {
        'mainImage': 'url(@/assets/images/app/app-bg.png)',
        'adsImage': 'url(@/assets/images/article/111.jpg)',
      }
    },
    plugins: [],
  }
}
