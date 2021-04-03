import React, { useEffect } from 'react'
import TopHeader from './../../Components/TopHeader'
import './home.sass'
import MoviesFilter from '../../Components/MoviesFilter'
import Movies from '../../Components/Movies'
import Footer from '../../Components/Footer'
import { GenresProvider } from '../../data/GenresContext'
import { MoviesProvider } from '../../data/MoviesContext'
import { useScroll } from '../../data/ScrollContext'
import { ActorsProvider } from '../../data/ActorsContext'
import Actors from '../../Components/Actors'

const Home = () => {
  let { shouldScroll } = useScroll()

  useEffect(() => {
    const element = document.querySelector('.movies-section')
    if (shouldScroll) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      })
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className='home-page'>
      <TopHeader firstText='Movie' secondText='Picker' left='60%' />
      <section className='movies-section'>
        <MoviesProvider>
          <GenresProvider>
            <MoviesFilter />
          </GenresProvider>
          <Movies />
        </MoviesProvider>
      </section>
      <section className='actors-section'>
        <ActorsProvider>
          <Actors />
        </ActorsProvider>
      </section>
      <Footer />
    </div>
  )
}

export default Home
