import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import Home from './pages/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/home" component={Home} />
    </BrowserRouter>
  );
}

export default Routes;
