import React from 'react';
import {Gameboard} from './component/Gameboard';

const App = () => {
  return (
    <>
      <h1 className='text-7xl text-center my-10'>MINESWEEPER!</h1>
      <Gameboard/>
    </>
  );
};

export default App;
