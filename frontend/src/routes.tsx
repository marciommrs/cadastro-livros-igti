import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Books from './pages/Books';
import EditBook from './pages/EditBook';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Books} path="/" exact />
      <Route component={Books} path="/books"/>
      <Route component={EditBook} path="/editBook"/>
    </BrowserRouter>
  );
}

export default Routes;