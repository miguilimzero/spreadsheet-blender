import { SUPPORT_LOCALES, loadLocaleMessages, setI18nLanguage } from '@/i18n'

export default {
	data: () => ({
		currentLanguage: '',
	}),

	created() {
		this.currentLanguage = localStorage.language

		if (!this.currentLanguage) {
			const browserLanguage = (navigator.language || navigator.userLanguage).split('-')[0]

			if (this.availableLanguages.includes(SUPPORT_LOCALES)) {
				this.currentLanguage = browserLanguage
			} else {
				this.currentLanguage = 'en'
			}
		}

		this.initializeI18n()
	},

	watch: {
		currentLanguage(newVal) {
			if (!newVal) {
				return
			}

			localStorage.language = newVal

			this.initializeI18n()
		},
	},

	methods: {
		async initializeI18n() {
			await loadLocaleMessages(this.i18n, this.currentLanguage)

			setI18nLanguage(this.i18n, this.currentLanguage)
		},
	},
}
