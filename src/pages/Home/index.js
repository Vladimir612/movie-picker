import React from 'react'
import TopHeader from './../../Components/TopHeader'
import './home.sass'
import MoviesFilter from '../../Components/MoviesFilter'
import Movies from '../../Components/Movies'
import Footer from '../../Components/Footer'

const Home = () => {
  return (
    <div className='home-page'>
      <TopHeader firstText='Movie' secondText='Picker' left='60%' />
      <section className='movies-section'>
        <MoviesFilter />
        <Movies />
      </section>
      <Footer />
    </div>
  )
}

export default Home
