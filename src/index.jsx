import React, {Component} from 'react';
import { render } from 'react-dom';
const _403 = 'Aplicación funcionado'; 

console.info(_403);


class TestComponent extends Component {

  constructor(){
    super();
    this._403 = _403;
  }
  
  render(){
    return (
      <h1>{this._403}</h1>
    )
  }
}

render(<TestComponent />, document.getElementById('root'))
