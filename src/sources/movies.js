const moviesList = []
const total = 101
let count = 1

for (count; count < total; count++) {
	moviesList.push({name: `Реквием по мечте ${count}`, img: '/movie.jpeg'})
}

export default moviesList