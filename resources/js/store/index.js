import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import users from "./modules/users";
import category from "./modules/category";
import article from "./modules/article";
import websetting from "./modules/websetting";

export const store = new Vuex.Store({
    modules: {
        users,
        category,
        article,
        websetting
    }
});
