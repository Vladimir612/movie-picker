import React from 'react'
import TopHeader from './../../Components/TopHeader'
import './home.sass'
import MoviesFilter from '../../Components/MoviesFilter'
import Movies from '../../Components/Movies'
import Footer from '../../Components/Footer'
import { GenresProvider } from '../../data/GenresContext'
import { MoviesProvider } from '../../data/MoviesContext'

const Home = () => {
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
      <Footer />
    </div>
  )
}

export default Home
