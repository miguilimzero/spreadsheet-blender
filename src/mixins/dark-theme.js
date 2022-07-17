export default {
	data: () => ({
		currentTheme: '',
	}),

	created() {
		this.currentTheme = localStorage.theme

		if(this.currentTheme !== 'dark' && this.currentTheme !== 'light') {
			this.currentTheme = 'system'
		}
	},

	watch: {
		currentTheme() {
			this.updateTheme()
		}
	},

	methods: {
		updateTheme() {
			localStorage.theme = this.currentTheme

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
