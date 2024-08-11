/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#F9DEC9',
                secondary: '#99B2DD',
                background: '#2E3138'
            }
        },
    },
    plugins: [
        require('daisyui'),
    ],
};
