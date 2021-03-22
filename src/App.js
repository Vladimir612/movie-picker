import Home from './pages/Home'
import Movie from './pages/Movie'
import Actor from './pages/Actor'
import Error from './pages/Error'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/movies/:movie' component={Movie} />
        <Route exact path='/actors/:actor' component={Actor} />
        <Route component={Error} />
      </Switch>
    </>
  )
}

export default App
