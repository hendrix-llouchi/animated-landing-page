/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'redbull': {
                    dark: '#0a0f1a',
                    darker: '#050810',
                    blue: '#1e3a5f',
                    silver: '#c0c0c0',
                    red: '#db0a40',
                    gold: '#ffd700'
                }
            },
            fontFamily: {
                'display': ['Inter', 'system-ui', 'sans-serif'],
                'heading': ['Inter', 'system-ui', 'sans-serif']
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'shimmer': 'shimmer 2s linear infinite',
            },
            keyframes: {
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' }
                }
            }
        },
    },
    plugins: [],
}
