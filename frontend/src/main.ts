import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import router from './router'
import locales from '@/locales/locales'
import dayjs from '@/plugins/Dayjs'
import './assets/css/main.scss'

const i18n = createI18n({
  locale: 'es',
  fallbackLocale: 'es',
  messages: locales(),
  legacy: false
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(dayjs)

app.mount('#app')
