import { createWebHistory, createRouter } from 'vue-router'
import store from '@/store'

/* Guest Component */
const Login = () => import('@/components/Login.vue')
const Register = () => import('@/components/Register.vue')
const Home = () => import('@/components/Home.vue')
/* Guest Component */

/* Layouts */
const SetLayout = () => import('@/components/layouts/Set.vue')
/* Layouts */

/* Authenticated Component */
const Dashboard = () => import('@/components/Dashboard.vue')
/* Authenticated Component */

const routes = [
    {
        path: "/",
        component: SetLayout,
        meta: {
            middleware: "guest"
        },
        children: [
            {
                name: "home",
                path: "/home",
                component: Home,
                meta: {
                    title: `Home`
                }
            },
            {
                name: "login",
                path: "/login",
                component: Login,
                meta: {
                    title: `Login`
                }
            },
            {
                name: "register",
                path: "/register",
                component: Register,
                meta: {
                    title: `Register`
                }
            },
        ]
    },
    {
        path: "/",
        component: SetLayout,
        meta: {
            middleware: "auth"
        },
        children: [
            {
                name: "dashboard",
                path: '/',
                component: Dashboard,
                meta: {
                    title: `Dashboard`
                }
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    if (to.meta.middleware == "guest") {
        if (store.state.auth.authenticated) {
            next({ name: "dashboard" })
        }
        next()
    } else {
        if (store.state.auth.authenticated) {
            next()
        } else {
            next({ name: "home" })
        }
    }
})

export default router