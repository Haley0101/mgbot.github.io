import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// import VueFullPage from 'vue-fullpage.js'

createApp(App).use(router)/*.use(VueFullPage)*/.mount('#app')