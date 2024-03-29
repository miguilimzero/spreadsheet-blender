import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'

import './assets/style.css'

const i18n = createI18n({ locale: 'en' })

createApp(App).use(i18n).mount('#app')
