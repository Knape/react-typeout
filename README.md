
## React typeout

[![Build Status](https://travis-ci.org/Knape/react-typeout.svg?branch=master)](https://travis-ci.org/Knape/react-typeout)
[![Coverage Status](https://coveralls.io/repos/github/Knape/react-typeout/badge.svg?branch=master)](https://coveralls.io/github/Knape/react-typeout?branch=master)

Simply a React Component that types by itself. Add any Array of strings, and watch it type at the speed you've set, backspace what it's typed, and begin a new sentence for however many strings you've set.

## Installation

Install the package from [npm](https://npmjs.com/release)

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

## License

[MIT](LICENSE). Copyright (c) 2017 Philip Knape.
