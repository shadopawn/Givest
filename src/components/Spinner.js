import React from 'react';
import spinner from '../assets/img/loading_circle.gif';

export default () => {
  return (
    <div>
      <img
        src={spinner}
        style={{ width: '100px', height: '100px', margin: 'auto', padding: "50px 50px 50px", display: 'block' }}
        alt="Loading..."
      />
    </div>
  );
};