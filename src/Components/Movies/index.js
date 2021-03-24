import React from 'react'
import { Link } from 'react-router-dom'
import { useMovies } from '../../data/MoviesContext'
import SingleMovie from '../SubComponents/SingleMovie'
import './movies.sass'

const Movies = () => {
  const { movies } = useMovies()

  console.log(movies)
  return (
    <div className='movies'>
      <div className='movie-list'>
        {movies.map((movie) => {
          return (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <SingleMovie data={movie} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Movies
