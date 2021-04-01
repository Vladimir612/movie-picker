import Home from './pages/Home'
import Movie from './pages/Movie'
import Actor from './pages/Actor'
import Error from './pages/Error'
import { Switch, Route } from 'react-router-dom'
import { SingleMovieProvider } from './data/SingleMovieContext'
import { ScrollProvider } from './data/ScrollContext'

const App = () => {
  return (
    <>
      <Switch>
        <SingleMovieProvider>
          <ScrollProvider>
            <Route exact path='/' component={Home} />
            <Route exact path='/movies/:movie' component={Movie} />
            <Route exact path='/actors/:actor' component={Actor} />
            <Route path='/404' component={Error} />
          </ScrollProvider>
        </SingleMovieProvider>
      </Switch>
    </>
  )
}

export default App
