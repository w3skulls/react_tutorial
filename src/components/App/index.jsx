console.log('Vengo de app');
import React, {Component} from 'react';
import Header from './../Header'
import Main from './../Main'
import Footer from './../Footer'


const _403 = 'Aplicación funcionado!!!';

export default class App extends React.Component {

    constructor(){
      super();
      this._403 = _403;
    }

    //Para poder renderizar los elementos necesitamos que estén encerrados en un mismo contenedor
    render(){
      return (
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      )
    }
  }