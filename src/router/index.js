import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {	
	path: '/animalInfo',
	name: 'animalInfo',
	component: () => import( '../views/AnimalInfo.vue')
  },
  {	
	path: '/AnimalMoments',
	name: 'AnimalMoments',
	component: () => import( '../views/AnimalMoments.vue')
  },
  {
	path: '/Login',
	name: 'LoginVue',
	component: () => import( '../views/LoginPage.vue')
  },
	{
		path: '/news',
		name: 'HotNews',
		component: () => import( '../views/HotNews.vue')
	},
	{
		path: '/Register',
		name: 'RegisterPage',
		component: () => import( '../views/RegisterPage.vue')
	}
]

const router = new VueRouter({
  routes
})

export default router
