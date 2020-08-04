import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Orders from './templates/Orders';
import './css/global.css';

const App = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route path='/' component={Orders} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));