import {createApp} from 'vue'
import App from './App.vue'
import {loadFonts} from './plugins/webfontloader'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {router} from "@/router";
import {createPinia} from "pinia";
import {aliases, mdi} from "vuetify/iconsets/mdi";
import YmapPlugin from 'vue-yandex-maps'
import './assets/main.scss'
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
})

const pinia = createPinia()

loadFonts()

const settings = {
  apiKey: 'e6ac4ad7-3142-4351-9bde-8a86cadb91f2', // Индивидуальный ключ API
  lang: 'ru_RU', // Используемый язык
  coordorder: 'latlong', // Порядок задания географических координат
  debug: false, // Режим отладки
  version: '2.1' // Версия Я.Карт
}

createApp(App)
  .use(vuetify)
  .use(router)
  .use(pinia)
  .use(YmapPlugin, settings)
  .mount('#app')
