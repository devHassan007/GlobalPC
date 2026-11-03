module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            colors: {
                navy: "#142B4A",
                gold: "#C5A66B",
                paper: "#F8F9FB",
                muted: "#54738F"
            }
        }
    },
    plugins: [
        require("tailwindcss-animate")
    ]
};