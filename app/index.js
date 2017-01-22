import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Calculadora from './calculadora';

class App extends Component {
  render() {
    return <div><Calculadora/></div>
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));