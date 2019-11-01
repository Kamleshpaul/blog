import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './router'
import NProgress from 'nprogress';

Vue.use(VueRouter)

const router = new VueRouter({
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


// middleware
router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (localStorage.getItem('passport') == null) {
			next({
				name: 'admin_login',
				params: { nextUrl: to.fullPath }
			})
		}
	}else{
		next()
	}
})


export default router