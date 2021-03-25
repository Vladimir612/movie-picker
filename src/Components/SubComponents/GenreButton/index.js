import React from 'react'
import { useMovies } from '../../../data/MoviesContext'
import './genre-button.sass'

const GenreButton = (props) => {
  let { text } = props
  const { fetchMoviesBasedOnGenre, activeGenre } = useMovies()

  let shouldBeMarked = activeGenre === props.id
  return (
    <button
      className={shouldBeMarked ? 'genre-button active' : 'genre-button'}
      onClick={() => fetchMoviesBasedOnGenre(props.id)}
    >
      {text}
    </button>
  )
}

export default GenreButton
