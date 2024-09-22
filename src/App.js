import React, { Component } from 'react'
import Hello from './components/hello'
export default class App extends Component {
  render () {
    return (
      <div>
        <Hello></Hello>
      </div>
    );
  }
}


/*class App extends Component {
  render () {
    return (
      <div className="App">
        hello world
      </div>
    );
  }
}

export default App;*/
