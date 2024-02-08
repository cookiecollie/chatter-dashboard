/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{html,ts,tsx}", "./src/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                bg: {
                    default: "#E2EFF7",
                },
                primary: "#135CFE",
                secondary: "#ffffff",
                tertiary: "#FE483B",
                text: { default: "#16161d" },
            },
        },
    },
    plugins: [],
}
