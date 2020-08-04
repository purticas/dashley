import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Orders from './templates/Orders';
import Dashboard from './templates/Dashboard';
import './css/global.css';

const App = () => (
  <Router>
    <Navigation />
		<Header />
    <Switch>
      <Route path='/orders' component={Orders} />
      <Route path='/' component={Dashboard} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));