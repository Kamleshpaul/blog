require('./bootstrap');
window.Vue = require('vue');


import App from './App.vue';
import router from './router';
import { store } from './store'



Vue.component('app', require('./App.vue'));

const app = new Vue({
    el: '#app',
    template: `<app></app>`,
    components: { App },
    router,
    store
});
