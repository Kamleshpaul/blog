import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../pages/Admin/Dashboard';
import User from '../pages/Admin/User';


Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/dashboard', component: Dashboard },
		{ path: '/users', component: User },
	]
})

export default router