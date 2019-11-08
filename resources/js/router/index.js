import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './router'
import NProgress from 'nprogress';

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes
})

router.beforeResolve((to, from, next) => {
	if (to.name) {
		NProgress.start()
	}
	next()
})

router.afterEach((to, from) => {
	NProgress.done()
})


export default router