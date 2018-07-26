<template>
	<main class='list-movies' @scroll='alert(`sadf`)'>
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
import moviesList from '../../sources/movies.js'
export default {
	name: 'ListMovie',
	components: {
		Movie
	},
	data: function () {
		return {
			textHead: 'Каталог фильмов по всем жанрам',
			current: 0,
			total: 10,
			movies: []
		}
	},
	created: function () {
		this.currentPart(this.current, this.current+10)
		this.current += 10
		window.addEventListener('scroll', this.handleScroll)
	},
  	destroyed: function () {
    	window.removeEventListener('scroll', this.handleScroll)
  	},
	methods: {
		currentPart: function (current, point) { 
			for (current; current < point; ++current) {
				this.movies.push(moviesList[current])
			}
			
		},
		nextPart: function () {
			if (this.total < 30) this.currentPart(this.current, this.current+10)
			else if (this.total > 30) {
				this.movies = []
				this.currentPart(this.current-20, this.current+10)
			}
		},
		previosPart: function () {
			this.currentPart(this.current)
		},
		handleScroll: function (e) {
			if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
				this.nextPart(this.current, this.current+10)
				this.current += 10
				this.total += 10
			}
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
