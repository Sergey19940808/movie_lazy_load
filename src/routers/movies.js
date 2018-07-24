import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieContent from '../components/MovieContent.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/movie/:name',
			name: 'Movie',
			component: MovieContent
		}
	]
})

export default router