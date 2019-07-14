import 'babel-polyfill'

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
/*import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'*/
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas,/*far, fab*/)

import './main.css'

import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

window.Vue = Vue;
window.store = store;


Vue.component('fa-icon', FontAwesomeIcon);

new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App),
})