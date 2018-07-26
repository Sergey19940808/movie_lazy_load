<template>
    <main class="movie-content">
        <img :src="movie.img" class='movie-item__img movie-item__name' />
		<span class='movie-item__name'>
			{{movie.name}}
		</span>
    </main>
</template>

<script>
import moviesList from '../sources/movies.js'
export default {
    name: 'MovieContent',
    props: {
		name: String
    },
    data: function() {
        return {
            movies: []
        }
    },
    computed: {
        movie: function() {
            return this.movies[0]
        }
    },
    created: function() {
        this.movies = moviesList.filter((i)=>
            {if (i.name === this.name) return i}
        )
    }
}
</script>

<style scoped>
    .movie-content {
        
    }
	.movie-item {
		list-style-type: none;
		display: flex;
		flex-direction: column;
		padding: 0.5em;
	}
	.movie-item__name {
		cursor: pointer;
	}
	.movie-item__name:hover {
		color: #4c2a50;
	}
</style>