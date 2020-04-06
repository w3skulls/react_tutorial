import React, { Component } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import 'normalize-css';


class App extends Component {

    //el método <render> se llama cada vez que cambia el estado del componente;
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}

export default App;