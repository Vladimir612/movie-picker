import React from 'react'
import { Link } from 'react-router-dom'
import { useActors } from '../../data/ActorsContext'
import Loader from '../Loader'
import SingleActor from '../SubComponents/SingleActor'
import './actors.sass'

const Actors = () => {
  let { actors, loading } = useActors()

  return loading ? (
    <section className='actors'>
      <div className='loader-wrapper'>
        <Loader />
      </div>
    </section>
  ) : (
    <section className='actors'>
      <div className='actor-list'>
        {actors.map((actor) => {
          return (
            <Link key={actor.id} to={`/actors/${actor.id}`}>
              <SingleActor key={actor.id} data={actor} hover={true} />
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Actors
