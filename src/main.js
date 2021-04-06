import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css'
import './styles/index.scss'

const ratio = window.screen.availWidth / 375
document.getElementsByTagName('html')[0].style.fontSize = 100 * ratio + 'px'

createApp(App).use(store).use(router).mount('#app')
