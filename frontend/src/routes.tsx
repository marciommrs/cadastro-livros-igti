import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Counter from './pages/Counter';
import Header from './pages/Header';
import Books from './pages/Books';
import EditBook from './pages/EditBook';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact/>
      <Route component={Counter} path="/counter"/>
      <Route component={Header} path="/header"/>
      <Route component={Books} path="/books"/>
      <Route component={EditBook} path="/editBook"/>
    </BrowserRouter>
  );
}

export default Routes;