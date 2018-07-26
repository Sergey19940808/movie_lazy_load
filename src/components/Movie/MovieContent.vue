<template>
    <main class='movie-content'>
        <img :src='movie.img' class='movie-content__img' width="200" height="200" />
		<div class='movie-content__description'>
            <header class='movie-content__title'>
			    {{movie.name}}
		    </header>
            <article class='movie-content__text'>
                {{movie.text}}
            </article>
		</div>
    </main>
</template>

<script>
import moviesList from '../../sources/movies.js'
export default {
    name: 'MovieContent',
    props: {
		name: String
    },
    data: function() {
        return {
            movie: {}
        }
    },
    created: function() {
        const itemMovie = moviesList.filter((i)=>
            {if (i.name === this.name) return i}
        )
        this.movie = itemMovie[0]

    }
}
</script>

<style scoped>
    .movie-content {
        display: flex;
    }
    .movie-content__description {
        display: flex;
        flex-direction: column;
    }
    .movie-content__title {
        padding: 0 0 1.5em 0;
    }
    .movie-content__text {
        padding: 1.5em 1em 0 4em;
    }
</style>