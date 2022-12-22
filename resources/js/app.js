import './bootstrap';
import '../sass/app.scss'
import Router from '@/router'
import Store from '@/store'

import { createApp } from 'vue/dist/vue.esm-bundler';
import navbar from './components/layouts/Nav.vue';

const app = createApp({
    components: {
        'navbar':navbar
    }
})
app.use(Router)
app.use(Store)
app.mount('#app')