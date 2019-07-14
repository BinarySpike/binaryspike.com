import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Hunting from './views/Hunting.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/hunting',
            name: 'Hunting',
            component: Hunting,
        }
    ]
})