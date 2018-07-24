<template>
	<li class='movie-item'>
		<router-link :to="{ name: 'Movie', params: {name: `${movie.name}`}}">
			<img :src="movie.img" class='movie-item__img movie-item__name' />
			<span class='movie-item__name'>
				{{movie.name}}
			</span>
		</router-link>
		<router-view></router-view>
	</li>
</template>

<script>
export default {
	name: 'Movie',
	props: {
		movie: Object,
		index: Number
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
	.movie-item__name:hover {
		color: #4c2a50;
	}
</style>