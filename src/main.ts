import './assets/main.css'
import './assets/base.css'

import { createApp } from 'vue'
import store from './stores/store'; // Import the Vuex store

// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './includes/validation'
import './includes/firebase'


const app = createApp(App)

// app.use(createPinia())
app.use(router)
app.use(VeeValidatePlugin)
app.use(store); // Use the Vuex store



app.mount('#app')
