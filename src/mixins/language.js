import { nextTick } from 'vue'

export default {
	data: () => ({
		currentLanguage: '',
        supportedLanguages: ['en', 'pt', 'es'],
	}),

	created() {
		this.currentLanguage = localStorage.language

		if (!this.currentLanguage) {
			const browserLanguage = (navigator.language || navigator.userLanguage).split('-')[0]

			if (this.availableLanguages.includes(this.supportedLanguages)) {
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
			await this.loadLocaleMessages(this.$i18n, this.currentLanguage)

			this.setI18nLanguage(this.$i18n, this.currentLanguage)
		},
        
        async loadLocaleMessages(i18n, locale) {
            if(locale === 'en') {
                return nextTick()
            }
            
            let messages = await import(/* webpackChunkName: "locale-[request]" */ `./../locales/${locale}.json`)
        
            i18n.setLocaleMessage(locale, messages.default)
        
            return nextTick()
        },

        setI18nLanguage(i18n, locale) {
            i18n.locale = locale
        
            document.querySelector('html').setAttribute('lang', locale)
        },
	},
}
