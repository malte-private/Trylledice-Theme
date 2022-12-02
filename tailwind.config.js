module.exports = {
	purge: {
		enabled: true,
		content: [
			"./layout/*.liquid",
			"./templates/*.liquid",
			"./sections/*.liquid",
			"./snippets/*.liquid",
		],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: {
				footer: "url('../assets/footer.svg')",
				drage: "url('../assets/drage.svg')",
				ornament: "url('../assets/ornament.svg')",
				"ornament-product": "url('../assets/ornament-product.svg')",
			},
			colors: {
				"main-primary": "#E7D7C6",
				"main-secondary": "#DEC8B0",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
