import React from 'react';

export const Minefield = () => {
  const renderTiles = () => {
    const tiles = [];
    for (let i = 1; i <= 100; i++) {
      tiles.push(<Tile/>);
      if (i % 10 === 0) tiles.push(<br/>);
    }
    return tiles;
  };

  return (
    <div className='p-5 max-w-max mx-auto rounded-2xl bg-purple-300 leading-none'>
      {renderTiles()}
    </div>
  );
};

const Tile = () => {
  return (
    <div className='w-9 h-9 bg-yellow-600 m-0.5 rounded inline-block'></div>
  );
};
