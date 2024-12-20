const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins"],
            },

            aspectRatio: {
                "4/3": "4 / 3",
            },
        },

        container: {
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
        },
    },
    darkMode: "class",
    plugins: [
        nextui({
            themes: {
                dark: {
                    colors: {
                        background: "#1a1a1a",
                        foreground: "#ffffff",
                    },
                },
            },
        }),
    ],
};
