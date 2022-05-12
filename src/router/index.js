import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
	{
	path: '/',
	name: 'home',
	component: HomeView,
	redirect:'home/index',
	children:[
		{
		path: '/home/index',
		name: 'index',
		component: () => import('../views/home/HomeIndex.vue')
		}
	]
	},
	{
	path: '/about',
	name: 'about',
	component: () => import('../views/AboutView.vue')
	},
	{	
	path: '/animalInfo',
	name: 'animalInfo',
	redirect:'animalInfo/index',
	component: () => import( '../views/AnimalInfo.vue'),
	children:[
		{
		path: '/animalInfo/index',
		name: 'index',
		component: () => import('../views/appinfo/InfoIndex.vue')
		}
	]
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
