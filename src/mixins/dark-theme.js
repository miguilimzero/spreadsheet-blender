export default {
	data: () => ({
		currentTheme: '',
	}),

	created() {
		this.applyTheme()
	},

	methods: {
		changeTheme(newValue) {
			localStorage.theme = newValue

			this.applyTheme()
		},

		applyTheme() {
			this.currentTheme = localStorage.theme

			if (this.currentTheme === 'dark') {
				document.querySelector('html').classList.add('dark')

				return
			}

			if (this.currentTheme === 'light') {
				document.querySelector('html').classList.remove('dark')

				return
			}

			// Use system defined one
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.querySelector('html').classList.add('dark')
			} else {
				document.querySelector('html').classList.remove('dark')
			}
		},
	},
}
