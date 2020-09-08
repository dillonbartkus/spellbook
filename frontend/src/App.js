import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom"
import SpellDetails from './SpellDetails';
import NewSpell from './NewSpell';
import SpellContainer from './SpellContainer';

export default function App() {

  return(

    <Router>
      <Switch>

      <Route
      exact path='/'
      render={ () => <SpellContainer />} />

      <Route
      exact path='/spell/:id'
      render={ () => <SpellDetails />} />

      <Route
      exact path='/new-spell'
      render={ () => <NewSpell />} />

      <Redirect to='/' />

    </Switch>
  </Router>

  )
}