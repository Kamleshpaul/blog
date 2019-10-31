require('./bootstrap');
window.Vue = require('vue');


import router from './router';
import App from './App.vue';



Vue.component('app', require('./App.vue'));

const app = new Vue({
    el: '#app',
    template: `<app></app>`,
    components: { App },
	router
});
