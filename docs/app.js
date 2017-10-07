import React from 'react';
import ReactDOM from 'react-dom';
import TypeOut from '../src/';
import sentences from './sentences';

const App = (
  <div className="full-view">
    <div className="container">
      <h1>
        <TypeOut words={sentences} typeSpeed={100} infinitive caret />
      </h1>
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('app'));
