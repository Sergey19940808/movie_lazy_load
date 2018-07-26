<template>
	<li class='movie-item'>
		<img :src="movie.img" class='movie-item__img movie-item__name' />
		<span class='movie-item__name'>
			<router-link :to="{ name: 'movie', params: {name: movie.name}}">
				{{movie.name}}
			</router-link>
		</span>
	</li>
</template>

<script>
export default {
	name: 'Movie',
	props: {
		movie: Object
	}
}
</script>

<style scoped>
	.movie-item {
		list-style-type: none;
		display: flex;
		flex-direction: column;
		padding: 0.5em;
	}
	.movie-item__name {
		cursor: pointer;
	}
	.movie-item__name a {
		text-decoration: none;
		color: #2c4a50;
	}
	.movie-item__name a:hover {
		color: #4c2a50;
	}
</style>