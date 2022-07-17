import { nextTick } from 'vue'

export const SUPPORT_LOCALES = ['en', 'pt', 'es']

export function setI18nLanguage(i18n, locale) {
	if (i18n.mode === 'legacy') {
		i18n.global.locale = locale
	} else {
		i18n.global.locale.value = locale
	}

	document.querySelector('html').setAttribute('lang', locale)
}

export async function loadLocaleMessages(i18n, locale) {
	// load locale messages with dynamic import
	const messages = await import(/* webpackChunkName: "locale-[request]" */ `./locales/${locale}.json`)

	// set locale and locale message
	i18n.global.setLocaleMessage(locale, messages.default)

	return nextTick()
}
