import React, { useEffect } from 'react'
import { useSingleActor } from '../../data/SingleActorContext'
import './actor.sass'
import {
  specificActorMoviesUrl,
  specificActorDataUrl,
} from './../../data/apiURL'
import SingleActor from '../../Components/SubComponents/SingleActor'
import Loader from '../../Components/Loader'
import { Link, useHistory } from 'react-router-dom'
import SingleMovie from './../../Components/SubComponents/SingleMovie/index'
import { IoArrowBackOutline } from 'react-icons/io5'
import { useScroll } from '../../data/ScrollContext'

const Actor = (props) => {
  const history = useHistory()
  const slug = props.match.params.actor
  let { setShouldScroll, setPositionTo } = useScroll()
  let {
    getSingleActorData,
    getSingleActorMovies,
    loadingMovies,
    loadingData,
    singleActorData,
    singleActorMovies,
  } = useSingleActor()

  let actorMoviesDataUrl = specificActorMoviesUrl.replace('person-id', slug)
  let actorDataUrl = specificActorDataUrl.replace('person-id', slug)

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

  useEffect(() => {
    if (!loadingMovies) addAnimationToTitle()
  }, [loadingMovies])

  window.addEventListener('resize', addAnimationToTitle)

  useEffect(() => {
    getSingleActorData(actorDataUrl)
    getSingleActorMovies(actorMoviesDataUrl)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  let { biography } = singleActorData && singleActorData
  if (biography && biography.length > 480) {
    biography = biography.substr(0, 478) + '...'
  }

  return loadingData && loadingMovies ? (
    <div className='loader-wrapper whole-page'>
      <Loader />
    </div>
  ) : (
    <div className='actor-page'>
      <div className='back-button-wrapper'>
        <button
          className='back'
          onClick={() => {
            setShouldScroll(true)
            setPositionTo(2)
            history.goBack()
          }}
        >
          <IoArrowBackOutline size={25} />
        </button>
      </div>
      <div className='actor-info-wrapper'>
        <SingleActor data={singleActorData} hover={false} />
        <div className='actor-bio-movies'>
          <div className='profession'>
            <h2>
              Profession:
              {singleActorData.job === 'Acting' ? ' Actor' : ' Director'}
            </h2>
          </div>
          <div className='biography'>
            <p>{biography}</p>
          </div>
          <div className='actor-movies'>
            {singleActorMovies.map((movie) => {
              return (
                <Link key={movie.id} to={`/movies/${movie.id}`}>
                  <SingleMovie data={movie} />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Actor
