const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")
const { colors: defaultColors } = require("tailwindcss/defaultTheme")
module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            ...defaultColors,
            orange: colors.orange,
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "1rem",
                lg: "2rem",
                xl: "4rem",
                "2xl": "5rem",
            },
        },
        extend: {
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {
            opacity: ["disabled"],
            userSelect: ["disabled"],
        },
    },
    plugins: [require("@tailwindcss/forms")],
}
