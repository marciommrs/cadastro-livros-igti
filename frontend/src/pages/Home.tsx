import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <header>
      <h1>Home</h1>
      <Link to="/counter" >Counter</Link><br/>
      <Link to="/books" >Books</Link><br/>
    </header>
  );
}

export default Home;