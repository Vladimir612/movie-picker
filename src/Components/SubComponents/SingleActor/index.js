import React from 'react'
import defaultImg from '../../../img/defaultImage.png'
import './single-actor.sass'

const SingleActor = (props) => {
  let { actorName, frontImage } = props.data
  return (
    <div className='single-actor'>
      <div className='actor-img-wrapper'>
        <img
          src={frontImage ? frontImage : defaultImg}
          alt={actorName}
          className='movie-img'
        />
      </div>
      <div className='actor-info'>
        <h3 title={actorName}>{actorName}</h3>
      </div>
    </div>
  )
}

export default SingleActor
