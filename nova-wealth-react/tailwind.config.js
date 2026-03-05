/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                nw: {
                    navy: '#0c1a2e',      // Corporate deep navy
                    navydark: '#091322',  // Even darker navy for backgrounds
                    gold: '#b6975a',      // Corporate gold
                    'gold-hover': '#9a7d45',
                    'gold-pale': '#E2E8F0', // Reusing slate for a neutral background instead of pale gold
                    text: '#0F172A',
                    muted: '#475569',
                    border: '#E2E8F0',
                    soft: '#F8FAFC',
                    light: '#F3F4F6'
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif']
            }
        },
    },
    plugins: [],
}
