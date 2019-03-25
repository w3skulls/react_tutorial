import 'normalize-css';
import './style.css'
import React, {Component} from 'react';
import Header from './../Header'
import Main from './../Main'
import Footer from './../Footer'


export default class App extends React.Component {
    /**
     * States :: son representaciones del componente en un momento dado (puede variar). 
     * Un cambio en el state, llama al método render().
     * Props  :: son imutables. 
     */
    constructor(){
      super()

      this.state = {
        user: {
          photoURL: 'https://cdn.icon-icons.com/icons2/1371/PNG/512/robot01_90832.png',
          email: 'hectorochoa.bellon@gmail.com',
          onOpenText: false
        }
      }
    }

    

    //Para poder renderizar los elementos necesitamos que estén encerrados en un mismo contenedor
    render(){
      console.log( "[App.js]", this.state.user )
      return (
        <div>
          <Header />
          <Main user = {this.state.user} />
          <Footer />
        </div>
      )
    }
  }