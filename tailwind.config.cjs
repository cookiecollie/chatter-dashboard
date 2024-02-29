/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{html,ts,tsx}", "./src/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                bg: {
                    default: "#E2EFF7",
                    white: "#ffffff",
                },

                primary: "#135CFE",
                secondary: "#ffffff",
                tertiary: "#FE483B",
                container: "#f2f2f2",
                black: "#16161de0",
                white: "#ffffffd9",
                gray: {
                    separator: "#0505050F",
                    border: "#D9D9D9",
                    default: "#6b7280",
                    disabled: "#00000040",
                },

                disabled: "#00000040",
                border: "#D9D9D9FF",
                separator: "#0505050F",

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
