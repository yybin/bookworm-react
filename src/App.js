import React from 'react';
import { Route } from 'react-router-dom'
import HomePage from './containers/HomePage'
import Login from './containers/Login'


const App = () => <div>
  <Route path="/" exact component={HomePage}/>
  <Route path="/login"  component={Login}/>
</div>;

export default App;
