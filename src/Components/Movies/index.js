import React from 'react'
import { Link } from 'react-router-dom'
import { useMovies } from '../../data/MoviesContext'
import Loader from '../Loader'
import SingleMovie from '../SubComponents/SingleMovie'
import './movies.sass'

const Movies = () => {
  let { movies, loading } = useMovies()
  return loading ? (
    <div className='loader-wrapper'>
      <Loader />
    </div>
  ) : (
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
