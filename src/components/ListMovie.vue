<template>
	<main class='list-movies'>
		<ul class='movies' v-if='movies.length'>
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
			movies: moviesList
		}
	}
}
console.log(moviesList)
</script>

<style scoped>
.list-movies {
	padding: 0.8em;
}
.movies {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}
</style>
