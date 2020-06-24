import React, { Fragment } from 'react';
import Navbar from './components/layouts/Navbar.js';
import Days from './views/Days';

const App = () => (
  <Fragment className='app'>
    <Navbar />
    <Days />
  </Fragment>
);

export default App;
