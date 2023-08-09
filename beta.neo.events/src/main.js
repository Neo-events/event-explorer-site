import './assets/site.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import axios from 'axios'
axios.defaults.baseURL = 'https://localhost:7180'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
