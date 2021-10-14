import { createApp } from 'vue'
import Root from './App.vue'
import router from './router/index'


import './index.css'
import './styles/_config.sass'
import './styles/_main.sass'

const app = createApp(Root)

app.use(router)
app.mount('#app')
