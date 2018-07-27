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
			total: 60,
			movies: []
		}
	},
	created: function () {
		JSON.parse(localStorage.getItem('movies')) === null ? 
			this.currentPart(this.current, this.current+60) :
			this.movies = JSON.parse(localStorage.getItem('movies'))
		localStorage.getItem('current') === null ?
			this.current += 60 :
			this.current = parseInt(localStorage.getItem('current'))
		localStorage.getItem('total') === null ?
			this.total = 60 :
			this.total = parseInt(localStorage.getItem('total'))
		window.addEventListener('wheel', this.handleScroll)
	},
	beforeDestroy: function() {
		localStorage.setItem('current', this.current)
		localStorage.setItem('total', this.total)
		localStorage.setItem('movies', JSON.stringify(this.movies))
	},
  	destroyed: function () {
    	window.removeEventListener('wheel', this.handleScroll)
  	},
	methods: {
		currentPart: function (current, point) {
			for (current; current < point; ++current) {
				this.movies.push(moviesList[current])
			}
			
		},
		nextPart: function () {
			if (this.total < 180) this.currentPart(this.current, this.current+60)
			else if (this.total > 180) {
				this.movies = []
				this.currentPart(this.current-120, this.current+60)
			}
		},
		previosPart: function () {
			if (this.total > 180) {
				this.movies = []
				this.currentPart(this.current-180, this.current)
			}
		},
		handleScroll: function (e) {
			if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
				this.current === 0 ? this.current += 60 : null 
				this.nextPart()
				this.current < moviesList.length-60 ? this.current += 60 : null
				this.total <= 180 ? this.total += 60 : null
			} else if (this.current !== 120 && document.documentElement.scrollTop === 0) {
				this.previosPart()
				this.current !== 0 ? this.current -= 60 : null
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
