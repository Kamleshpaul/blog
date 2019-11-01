import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import users from './modules/users';

export const store = new Vuex.Store({
  modules : {
    users
  }  
})