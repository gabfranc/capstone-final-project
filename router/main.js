import { createApp } from 'vue'
import router from './router'
import meals from './meals'
import App from './App.vue'

createApp(App)
  .user(router)
  .use(meals)
  .mount('#app')