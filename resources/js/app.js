require('./bootstrap');
import Vue from 'vue'; 
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
import App from './components/app.vue';
import { routes } from './routes';
import "../css/app.css";

const router = new VueRouter({
    mode: 'history',
    routes: routes
});
const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});