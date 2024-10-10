/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                customPink: "#e83d60",
            },
        },
    },
    plugins: [require("daisyui")],
};
