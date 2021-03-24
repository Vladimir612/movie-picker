// import { APIKEY } from '../hidden-variables'
const visibleApiKey = '7d09a7a4574bfd3fe9cb9058dfbe63d4'

const url = 'https://api.themoviedb.org/3'

export const genreUrl = `${url}/genre/movie/list?&api_key=${visibleApiKey}`
export const imageUrl = 'https://image.tmdb.org/t/p/original'
export const popularMoviesUrl = `${url}/discover/movie?sort_by=popularity.desc&api_key=${visibleApiKey}&page=1`
