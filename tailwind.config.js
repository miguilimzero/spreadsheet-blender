const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',

	content: ['./src/App.vue', './src/**/*.vue'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: colors.indigo,
			},
		},
	},

	plugins: [require('@tailwindcss/forms')],
}
