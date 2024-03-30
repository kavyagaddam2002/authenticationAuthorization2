import {BrowseRouter, Route, Switch, Redirect} from 'react-router-dom'
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'

import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <BrowseRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/about" component={About} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </BrowseRouter>
)

export default App
