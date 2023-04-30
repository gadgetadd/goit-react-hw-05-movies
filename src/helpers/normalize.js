import previewPlaceholder from 'images/preview-placeholder.png'
import castPlaceholder from 'images/cast-placeholder.jpg'
import detailsPlaceholder from 'images/details-placeholder.jpg'

const base_url = "https://image.tmdb.org/t/p/";
// const backdrop_sizes = ['w300', 'w780', 'w1280', 'original'];
// const logo_sizes = ['w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original'];
const poster_sizes = ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'];
const profile_sizes = ['w45', 'w185', 'h632', 'original'];

const forList = (data) => data.results.map(movie => ({
    title: movie.title,
    poster: movie.poster_path ? base_url + poster_sizes[3] + movie.poster_path : previewPlaceholder,
    id: movie.id,
}))

const forDetails = movie => ({
    title: movie.title,
    poster: movie.poster_path ? base_url + poster_sizes[3] + movie.poster_path : detailsPlaceholder,
    year: new Date(movie.release_date).getFullYear(),
    userScore: movie.vote_average !== 0.0 ? `${Math.floor(movie.vote_average * 10)}%` : 'no ratings yet',
    overview: movie.overview,
    genres: movie.genres.map(genre => genre.name).join(', ')
})

const forCast = movie => movie.cast.map(actor => ({
    id: actor.id,
    photo: actor.profile_path ? base_url + profile_sizes[0] + actor.profile_path : castPlaceholder,
    name: actor.name,
    character: actor.character,
})).filter(actor => !actor.character.includes('uncredited'))

const forReviews = data => data.results.map(review => ({
    id: review.id,
    author: review.author,
    content: review.content,
}))


const normalize = { forList, forDetails, forCast, forReviews };

export default normalize;