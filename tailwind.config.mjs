import defaultTheme from 'tailwindcss/defaultTheme'


/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "sm": "630px",
                "2xl": "1400px",
            },
        },
        extend: {
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
			},
            screens: {
                'navM': '1114px',
                'navL': '1250px'
            },
            colors: {
                cryoSolve: {
                    // Primary / Neutrals
                    "blue-grey-050": "#F0F4F8",
                    "blue-grey-100": "#D9E2EC",
                    "blue-grey-200": "#BCCCDC",
                    "blue-grey-300": "#9FB3C8",
                    "blue-grey-400": "#829AB1",
                    "blue-grey-500": "#627D98",
                    "blue-grey-600": "#486581",
                    "blue-grey-700": "#334E68",
                    "blue-grey-800": "#243B53",
                    "blue-grey-900": "#102A43",

                    // Supporting
                    "light-blue-vivid-050": "#E3F8FF",
                    "light-blue-vivid-100": "#B3ECFF",
                    "light-blue-vivid-200": "#81DEFD",
                    "light-blue-vivid-300": "#5ED0FA",
                    "light-blue-vivid-400": "#40C3F7",
                    "light-blue-vivid-500": "#2BB0ED",
                    "light-blue-vivid-600": "#1992D4",
                    "light-blue-vivid-700": "#127FBF",
                    "light-blue-vivid-800": "#0B69A3",
                    "light-blue-vivid-900": "#035388",

                    "cyan-050": "#E0FCFF",
                    "cyan-100": "#BEF8FD",
                    "cyan-200": "#87EAF2",
                    "cyan-300": "#54D1DB",
                    "cyan-400": "#38BEC9",
                    "cyan-500": "#2CB1BC",
                    "cyan-600": "#14919B",
                    "cyan-700": "#0E7C86",
                    "cyan-800": "#0A6C74",
                    "cyan-900": "#044E54",

                    "pink-vivid-050": "#FFE3EC",
                    "pink-vivid-100": "#FFB8D2",
                    "pink-vivid-200": "#FF8CBA",
                    "pink-vivid-300": "#F364A2",
                    "pink-vivid-400": "#E8368F",
                    "pink-vivid-500": "#DA127D",
                    "pink-vivid-600": "#BC0A6F",
                    "pink-vivid-700": "#A30664",
                    "pink-vivid-800": "#870557",
                    "pink-vivid-900": "#620042",

                    "red-vivid-050": "#FFE3E3",
                    "red-vivid-100": "#FFBDBD",
                    "red-vivid-200": "#FF9B9B",
                    "red-vivid-300": "#F86A6A",
                    "red-vivid-400": "#EF4E4E",
                    "red-vivid-500": "#E12D39",
                    "red-vivid-600": "#CF1124",
                    "red-vivid-700": "#AB091E",
                    "red-vivid-800": "#8A041A",
                    "red-vivid-900": "#610316",

                    "yellow-vivid-050": "#FFFBEA",
                    "yellow-vivid-100": "#FFF3C4",
                    "yellow-vivid-200": "#FCE588",
                    "yellow-vivid-300": "#FADB5F",
                    "yellow-vivid-400": "#F7C948",
                    "yellow-vivid-500": "#F0B429",
                    "yellow-vivid-600": "#DE911D",
                    "yellow-vivid-700": "#CB6E17",
                    "yellow-vivid-800": "#B44D12",
                    "yellow-vivid-900": "#8D2B0B",

                    "teal-050": "#EFFCF6",
                    "teal-100": "#C6F7E2",
                    "teal-200": "#8EEDC7",
                    "teal-300": "#65D6AD",
                    "teal-400": "#3EBD93",
                    "teal-500": "#27AB83",
                    "teal-600": "#199473",
                    "teal-700": "#147D64",
                    "teal-800": "#0C6B58",
                    "teal-900": "#014D40",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: {height: "0"},
                    to: {height: "var(--radix-accordion-content-height)"},
                },
                "accordion-up": {
                    from: {height: "var(--radix-accordion-content-height)"},
                    to: {height: "0"},
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
	plugins: [require("tailwindcss-animate")],
}
