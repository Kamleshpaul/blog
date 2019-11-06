require('./bootstrap');
window.Vue = require('vue');


//css import
import 'nprogress/nprogress.css'
import 'sweetalert2/dist/sweetalert2.min.css';


import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);


import App from './App.vue';
import router from './router';
import { store } from './store'


// toast set to global
window.Toast = Vue.swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
})

Vue.component('app', require('./App.vue'));

const app = new Vue({
    el: '#app',
    template: `<app></app>`,
    components: { App },
    router,
    store
});
