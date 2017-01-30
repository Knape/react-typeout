
## React TypeOut

Install the package from [npm](https://npmjs.com/release)

```bash
npm install --save react-typeout
```

## Usage

API Documentation comming soon


### Basic Example

```js
import React, { Component } from 'react';
import { render } from 'react-dom';
import TypeOut from 'TypeOut';

const words = ['a first sentence', 'a second sentance'];

class App extends Component {

    render() {
        return (
          <TypeOut words={words} />
        )
    }
}

render(<App/>, document.getElementById('app'));

```

## License

[MIT](LICENSE). Copyright (c) 2016 Philip Knape.
