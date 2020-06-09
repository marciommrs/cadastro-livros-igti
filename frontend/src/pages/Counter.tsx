import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  

import Header from './Header';

interface Count {
  init?: number;
}

const Counter: React.FC<Count> = (props) => {

  const id = localStorage.getItem('id');

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (props.init)
      setCounter(props.init);
  },[]);

  function handleButtonClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1>Teste: {id}</h1>
      <Header title={`Contador: ${counter}`}/>
      <button type="button" onClick={handleButtonClick}>Increase</button>
      <br/>
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default Counter;
