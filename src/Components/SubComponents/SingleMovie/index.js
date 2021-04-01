import React from 'react'
import defaultImg from '../../../img/defaultImage.png'
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
        <img
          src={frontImage ? frontImage : defaultImg}
          alt={movieTitle}
          className='movie-img'
        />
      </div>
      <div className='movie-info'>
        <div className='title'>
          <h3 title={movieTitle}>{movieTitle}</h3>
        </div>
        <p className='release'>
          <span>Release date: {releaseDate}</span>
        </p>
      </div>
      <p className='overview'>{overview}</p>
    </div>
  )
}

export default SingleMovie
