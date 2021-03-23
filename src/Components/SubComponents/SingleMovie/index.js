import React from 'react'
import './single-movie.sass'

const SingleMovie = (props) => {
  let { title, img, overview, release_date } = props.data
  if (overview.length > 180) {
    overview = overview.substr(0, 178) + '...'
  }

  return (
    <div className='single-movie'>
      <div className='movie-img-wrapper'>
        <img src={img} alt={title} className='movie-img' />
      </div>
      <div className='title'>
        <h3>{title}</h3>
      </div>
      <p className='cast'>
        <span>Release date: {release_date}</span>
      </p>
      <p className='overview'>{overview}</p>
    </div>
  )
}

export default SingleMovie
