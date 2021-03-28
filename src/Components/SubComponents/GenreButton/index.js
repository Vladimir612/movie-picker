import React from 'react'
import { useMovies } from '../../../data/MoviesContext'
import './genre-button.sass'

const GenreButton = (props) => {
  let { text } = props
  const { selectedGenres, changeSelectedGenres } = useMovies()

  let shouldBeMarked = selectedGenres.includes(props.id)
  return (
    <button
      className={shouldBeMarked ? 'genre-button active' : 'genre-button'}
      onClick={() => {
        changeSelectedGenres(props.id)
      }}
    >
      {text}
    </button>
  )
}

export default GenreButton
