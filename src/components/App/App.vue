<template>
	<section class='app' id="app">
		<router-view></router-view>
	</section>
</template>

<script>
import ListMovie from '../Movie/ListMovie.vue'

export default {
	name: 'App'
}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		padding: 0.8em;
	}
</style>
