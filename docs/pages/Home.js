import React from 'react';

import TypeOut from '../../src/';
import sentences from './sentences';

const Home = () => {
    return (
      <div className="full-view">
        <div className="container">
          <h1>
            <TypeOut words={sentences} typeSpeed={100} />
          </h1>
        </div>
      </div>
    );
};

export default Home;
