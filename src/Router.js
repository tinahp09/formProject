import Vue from 'vue'
import Router from 'vue-router'
import Form from './pages/RegisterUser.vue'
import Dashboard from './pages/dashboard.vue'
import Home from './pages/Home.vue'
import LoginUser from './pages/LoginUser.vue'
import VueRouter from 'vue-router'
import { store } from './store/Store'

Vue.use(Router)


const Routes = [
    {
        path: '/',
        component: Home,
        meta: {  }
    },
    {
        path: '/form',
        component: Form,
        meta: {  middleware: 'is-no-auth' }
    },
    {
        path: '/dashboard',
        component: Dashboard,
        meta: {  }
    },
    {
        path: '/loginUser',
        component: LoginUser,
        meta: { middleware: 'is-auth', layout: 'registerLogin' }
    }
]

export const router = new VueRouter({
    routes: Routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    store.dispatch('SetValueWhenRefresh')
    if (to.meta.middleware) {
        if (to.meta.middleware == 'is-auth' && store.getters.GetUser) {
            router.replace('/form')
        } else if (to.meta.middleware == 'is-no-auth' && !store.getters.GetUser) {
            router.replace('/loginUser')
        }
        next()
    } else {
        next()
    }
})