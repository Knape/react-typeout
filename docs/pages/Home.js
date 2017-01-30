import React from 'react';
import TypeOut from '../../src/';

const words = ['hello', 'world'];

const Home = () => {
    return (
      <div className="container">
        <h1>
          <TypeOut words={words} />
        </h1>
      </div>
    );
};

export default Home;
