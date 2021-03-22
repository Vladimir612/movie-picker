import React from 'react'
import './genre-button.sass'

const GenreButton = (props) => {
  let { text } = props
  return <button className='genre-button'>{text}</button>
}

export default GenreButton
