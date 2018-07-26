import Vue from 'vue'
import VueRouter from 'vue-router'
import ListMovie from '../components/ListMovie.vue'
import MovieContent from '../components/MovieContent.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [
		{path: '/', name: 'home', component: ListMovie},
		{path: '/movie/:name', name: 'movie', component: MovieContent, props: true}
	]
})

export default router