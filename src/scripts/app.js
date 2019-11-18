import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './Components/Nav';
import About from './Components/About';

const App = () => {
  return (
    <Router>
      <div className='container flex-container'>
        <main className='flex-container-item'>
          <Nav />
          <h1>Prashant Acharya</h1>
        </main>

        <article className='flex-container-item about'>
          <Switch>
            <Route exact path='/' component={About} />
          </Switch>
        </article>
      </div>
    </Router>
  );
};

render(<App />, document.getElementById('app'));
