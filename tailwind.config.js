/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "light-coffee": "#C89F94",
            },
            fontFamily: {
                Karla: ["Karla", "sans-serif"],
            },
            keyframes: {
                slideDown: {
                    "0%": { transform: "translateY(-100%)" },
                    "100%": { transform: "translateY(0)" },
                },
                fadeIn: {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
            },
            animation: {
                slideDown: "slideDown .5s ease-in-out",
                fadeIn: "fadeIn .5s ease-in-out",
            },
        },
    },
    plugins: [],
};
