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

createApp(App)
  .use(vuetify)
  .use(router)
  .use(pinia)
  .mount('#app')
