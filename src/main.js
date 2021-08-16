import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Vue from 'vue'
import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage);

new Vue({
    el: '#app',
    render: h => h(App)
});

createApp(App).use(router).mount('#app')