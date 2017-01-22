import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Calculadora extends Component {
  constructor(props) {
    super(props);
    this.mutliplicar1 = this.mutliplicar1.bind(this);
    this.mutliplicar2 = this.mutliplicar2.bind(this);
    this.state = {
      resultado: 0,
      valor1: 0,
      valor2: 0
    };
  }
  
  mutliplicar1(event) {
    this.setState({
      valor1: event.target.value,
      resultado: event.target.value * this.state.valor2
    });
  }

  mutliplicar2(event) {
    this.setState({
      valor2: event.target.value,
      resultado: event.target.value * this.state.valor1
    });
  }

  render() {
    return <div>
      <input type="number" value={this.state.valor1} onChange={this.mutliplicar1} />
      *
      <input type="number" value={this.state.valor2} onChange={this.mutliplicar2} />
      = <label>{ this.state.resultado }</label>
    </div>
  }
}

export default Calculadora;