/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(20px) ' },
          '50%': { transform: 'translateY(-90px)' },
        },
        wiggle1: {
          '0%, 100%': { transform: 'translate(-50px) ' },
          '50%': { transform: 'translate(50px)' },
        },
        spin: {
          
        '0%, 100%':{transform: 'rotate(0deg)'} 
          },
          '50%':
           {transform: 'rotate(360deg)'} 
          }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        wiggle1: 'wiggle 1s ease-in-out infinite',
        animation: 'spin 1s linear infinite'

       
      },
    
  
  plugins: [],
}

