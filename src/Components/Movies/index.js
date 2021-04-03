import React from 'react'
import { Link } from 'react-router-dom'
import { useMovies } from '../../data/MoviesContext'
import Loader from '../Loader'
import SingleMovie from '../SubComponents/SingleMovie'
import './movies.sass'

const Movies = () => {
  let { movies, loading } = useMovies()

  const addAnimationToTitle = () => {
    let titles2 = document.querySelectorAll('.title')
    titles2.forEach((element) => {
      if (element.firstChild.clientHeight > element.clientHeight) {
        element.firstChild.classList.add('animated')
      } else {
        element.firstChild.classList.remove('animated')
      }
    })
  }

  React.useEffect(() => {
    if (!loading) addAnimationToTitle()
  }, [loading])

  window.addEventListener('resize', addAnimationToTitle)

  return loading ? (
    <div className='movies'>
      <div className='loader-wrapper'>
        <Loader />
      </div>
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
