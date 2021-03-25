import Home from './pages/Home'
import Movie from './pages/Movie'
import Actor from './pages/Actor'
import Error from './pages/Error'
import { Switch, Route } from 'react-router-dom'
import { SingleMovieProvider } from './data/SingleMovieContext'

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <SingleMovieProvider>
          <Route exact path='/movies/:movie' component={Movie} />
        </SingleMovieProvider>
        <Route exact path='/actors/:actor' component={Actor} />
        <Route component={Error} />
      </Switch>
    </>
  )
}

export default App
