import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// app.filter('capitalize', function (value) {
//     if (!value) return ''
//     value = value.toString()
//     return value.charAt(0).toUpperCase() + value.slice(1)
// })

app.use(router)

app.mount('#app')