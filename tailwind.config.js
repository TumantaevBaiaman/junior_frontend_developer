module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {},
    },
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false,
    variants: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin'),
    ]
}