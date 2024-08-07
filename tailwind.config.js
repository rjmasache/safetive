/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                comic: ["Comic Neue", "cursive"],
            },
            colors: {
                navbar: "#1985A1",
                link: "#FFFFFF",
                hover: "#191919",
                safetive: "#8A1313",
                character: "#F2F5F5",
            },

            backgroundImage: {
                wallpaper: 'url("./assets/wallpaper.jpg")',
                aboutWallpaper: 'url("./assets/about-wallpaper.jpg")',
            },
            spacing: {
                custom: "500px",
            },
            backgroundSize: {
                all: "100% 100%",
            },
        },
    },
    plugins: [],
};
