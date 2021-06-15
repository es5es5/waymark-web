import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Plugins
// https://github.com/tserkov/vue-plugin-load-script/tree/vue3
import LoadScript from 'vue-plugin-load-script'

const app = createApp(App);

createApp(App).use(store).use(router).mount('#app')
