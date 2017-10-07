
## React typeout

[![Build Status](https://travis-ci.org/Knape/react-typeout.svg?branch=master)](https://travis-ci.org/Knape/react-typeout)
[![Coverage Status](https://coveralls.io/repos/github/Knape/react-typeout/badge.svg?branch=master)](https://coveralls.io/github/Knape/react-typeout?branch=master)

Simply a React Component that types by itself. Add any Array of strings, and watch it type at the speed you've set, backspace what it's typed, and begin a new sentence for however many strings you've set.

## Installation

Install the package from [npm](https://npmjs.com/react-typeout)

```bash
npm install --save react-typeout
```

## Usage

### Basic Example

```js
import React, { Component } from 'react';
import { render } from 'react-dom';
import TypeOut from 'react-typeout';

const words = ['the first sentence', 'the second sentence'];

class App extends Component {

    render() {
        return (
          <TypeOut words={words} />
        )
    }
}

render(<App/>, document.getElementById('app'));

```

## Props

#### `words`: PropTypes.arrayof(PropTypes.string).isRequired

The `words` property is the only required prop. Here you set all the words/sentences you would like it to type out.


#### `random`: PropTypes.bool
The `random` property specifies wether the array of words should be typed out in its correct order or random order.

Defaults to: `false`

#### `infinitive`: PropTypes.bool
The `infinitive` property specifies if words can be typed multiple times

Defaults to: `true`

#### `typeSpeed`: PropTypes.number
The `typeSpeed` property specifies the speed of each char in the sentence to be typed.

Defaults to: `200`


#### `rewindSpeed`: PropTypes.number
The `rewindSpeed` property specifies the speed of each char in the sentence to be typed back.

Defaults to: `50`


#### `pauseSpeed`: PropTypes.number
The `pauseSpeed` property specifies the we will wait before typing out next word/sentence after one is complete.

Defaults to: `1000`


#### `Node`: PropTypes.string
The `Node` property specifies the tag type our text will be rendered inside

Defaults to: `span`


#### `className`: PropTypes.string
The `className` property specifies the class that react-typeout will have

Defaults to: `react-typeout`

#### `caret`: PropTypes.bool
The `caret` property specifies if react-typeout should render a caret after the word, See styling documentation best result. Caret will always use the `className` of `react-typeout-caret`

Defaults to: `false`

#### `done`: PropTypes.func
The `done` property specifies if a method should be called then react-typeout has no words left to print. `infinitive`needs to be `false`

Defaults to: `null`

## Styling

Basic caret styling

```css
.react-typeout-caret {
  content: "|";
  margin-left: 5px;
  opacity: 1;
  font-weight: 100;
  -webkit-animation: blink 0.7s infinite;
  -moz-animation: blink 0.7s infinite;
  -ms-animation: blink 0.7s infinite;
  -o-animation: blink 0.7s infinite;
  animation: blink 0.7s infinite;
}

@keyframes blink{
  0% { opacity:1; }
  50% { opacity:0; }
  100% { opacity:1; }
}
@-webkit-keyframes blink{
  0% { opacity:1; }
  50% { opacity:0; }
  100% { opacity:1; }
}
@-moz-keyframes blink{
  0% { opacity:1; }
  50% { opacity:0; }
  100% { opacity:1; }
}
@-ms-keyframes blink{
  0% { opacity:1; }
  50% { opacity:0; }
  100% { opacity:1; }
}
@-o-keyframes blink{
  0% { opacity:1; }
  50% { opacity:0; }
  100% { opacity:1; }
}

```

## License

[MIT](LICENSE). Copyright (c) 2017 Philip Knape.
