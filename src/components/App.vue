<template>
	<section class='app' id="app">
		<header class='header'>
			{{ textHead }}
		</header>
		<ListMovie />
	</section>
</template>

<script>
import ListMovie from './ListMovie.vue'

export default {
	name: 'App',
	components: {
		ListMovie
	},
	data: function () {
		return {
			textHead: 'Каталог фильмов по всем жанрам'
		}
	}
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
	display: grid;
	justify-items: center;
}
.header {
	font-size: 1.5em;
}
</style>
