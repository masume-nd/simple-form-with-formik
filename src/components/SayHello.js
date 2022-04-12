import React from 'react';
import Withlogin from './WithLogin';

const Sayhello = () => {
  return (
    <div>
      <h1>{hello}</h1>
      <button></button>
    </div>
  );
}

export default Withlogin(Sayhello);
