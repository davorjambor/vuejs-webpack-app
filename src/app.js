import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import { routes } from './config/routes.config'
import App from './pages/App/App.vue'

import './js/motus'

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
    routes,
    base: '',
    mode: 'history',
});

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');