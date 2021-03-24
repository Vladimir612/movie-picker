import React from 'react'
import './single-movie.sass'

const SingleMovie = (props) => {
  //I will need id for link to movie page
  let { movieTitle, frontImage, overview, releaseDate } = props.data
  if (overview.length > 180) {
    overview = overview.substr(0, 178) + '...'
  }

  return (
    <div className='single-movie'>
      <div className='movie-img-wrapper'>
        <img src={frontImage} alt={movieTitle} className='movie-img' />
      </div>
      <div className='title'>
        <h3>{movieTitle}</h3>
      </div>
      <p className='cast'>
        <span>Release date: {releaseDate}</span>
      </p>
      <p className='overview'>{overview}</p>
    </div>
  )
}

export default SingleMovie
