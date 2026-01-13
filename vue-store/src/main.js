import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'

const cart = reactive([])

const app = createApp(App)
app.provide('cart', cart)
app.use(router)
app.mount('#app')