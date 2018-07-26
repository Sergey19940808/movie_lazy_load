<template>
	<main class='list-movies'>
		<header class='header'>
			{{ textHead }}
		</header>
		<ul class='movies'>
			<Movie
				v-for='movie in movies'
				:key='movie.name'
				:movie='movie'
			/>
		</ul>
	</main>
</template>

<script>
import Movie from './Movie'
import moviesList from '../sources/movies.js'
export default {
	name: 'ListMovie',
	components: {
		Movie
	},
	data: function () {
		return {
			textHead: 'Каталог фильмов по всем жанрам',
			movies: moviesList
		}
	},
	created: function () {

	},
	methods: {
		nextPart: function () {

		}
	}
}
</script>

<style scoped>
	.header {
		font-size: 1.5em;
	}
	.list-movies {
		padding: 0.8em;
	}
	.movies {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
</style>
