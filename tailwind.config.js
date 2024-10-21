/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            Roboto: ["RobotoCondensed"],
        },
        extend: {
            colors: {
                customPlatinum: "#DCDCDD",
                customBlue: "#1985A1",
                customFrenchGray: "#C5C3C6",
                customOuterSpace: "#46494C",
                customPayne: "#4C5C68",
            },
        },
    },
    plugins: [require("daisyui")],
};
