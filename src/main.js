import Vue from 'vue'
import App from './components/App/App.vue'
import router from './routers/movies.js'

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')