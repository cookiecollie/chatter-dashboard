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
                text: {
                    default: "#16161de0",
                    white: "#ffffffd9",
                    secondary: "#000000A6",
                    disabled: "#00000040",
                    border: "#D9D9D9FF",
                    separator: "#0505050F",
                },
                brand: {
                    twitch: "#b9a3e3",
                },
            },
        },
    },
    plugins: [],
}
