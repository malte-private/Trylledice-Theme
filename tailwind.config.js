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
				"ornament-contact": "url('../assets/contact-ornament.svg')",
				"button-primary": "url('../assets/button-primary.svg')",
				"button-secondary": "url('../assets/button-secondary.svg')",
				arrow: "url('../assets/arrow-right.svg')",
				"small-arrow": "url('../assets/arrow-small.svg')",
			},
			colors: {
				"main-primary": "#E7D7C6",
				"main-secondary": "#DEC8B0",
				"main-accent": "#500039",
				"main-text": "#532D0D",
			},
			aspectRatio: {
				dice: "5 / 3",
				button: "138 / 35",
			},
			content: {
				arrow: 'url("../assets/arrow-right.svg")',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
