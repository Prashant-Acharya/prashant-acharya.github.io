import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './Components/nav';
import About from './Components/about';
import Contact from './Components/contact';
import PageNotFound from './Components/pagenotfound';
import '../styles/styles.css';

const App = () => {
  return (
    <Router>
      <div className='container flex-container'>
        <main className='flex-container-item card'>
          <Nav />
          <h1>Prashant Acharya</h1>
        </main>

        <article className='flex-container-item about card'>
          <Switch>
            <Route exact path='/' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route component={PageNotFound} />
          </Switch>
        </article>
      </div>
    </Router>
  );
};

render(<App />, document.getElementById('app'));
