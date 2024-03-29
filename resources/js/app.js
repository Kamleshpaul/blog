require("./bootstrap");
window.Vue = require("vue");

//css import
import "nprogress/nprogress.css";
import "sweetalert2/dist/sweetalert2.min.css";

import VueSweetalert2 from "vue-sweetalert2";
import CKEditor from "@ckeditor/ckeditor5-vue";
import VueContentPlaceholders from "vue-content-placeholders"; //https://github.com/michalsnik/vue-content-placeholders
import VueDisqus from 'vue-disqus'; //https://github.com/ktquez/vue-disqus

Vue.use(VueContentPlaceholders);
Vue.use(VueSweetalert2);
Vue.use(CKEditor);
Vue.use(VueDisqus)

import App from "./App.vue";
import router from "./router";
import { store } from "./store";

// toast set to global
window.Toast = Vue.swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000
});

//swal set to global
window.Swal = Vue.swal;

Vue.component("app", require("./App.vue"));
Vue.component("pagination", require("laravel-vue-pagination"));

const app = new Vue({
    el: "#app",
    template: `<app></app>`,
    components: { App },
    router,
    store
});
