/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			"Jost": ['Jost', 'serif'],
		},
		extend: {
			colors: {
				'peach': '#E7816B',
				'blackish': '#1D1C1E',
				'whiteish': '#DCDCDC',
				'light-peach': '#FFAD9B',
				'dark-gray': '#333136',
				'light-gray': '#DFDFDF',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
}
