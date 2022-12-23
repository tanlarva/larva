import './bootstrap';
import '../sass/app.scss'
import Router from '@/router'
import Store from '@/store'
import mitt from 'mitt'

import { createApp } from 'vue/dist/vue.esm-bundler';

const app = createApp({})
const emitter = new mitt()
app.use(Router)
app.use(Store)
app.config.globalProperties.emitter = emitter
app.mount('#app')
