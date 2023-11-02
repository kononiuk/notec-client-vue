import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "../public/css/styles.css";

createApp(App)
.use(router)
.mount('#app')