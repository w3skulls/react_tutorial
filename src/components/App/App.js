import React, { Component } from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';
import 'normalize-css';



class App extends Component {

    constructor(){
        super();
        this.state = {
            user: {
                username: 'Mi username',
                photoURL: 'https://cdn.shopify.com/s/files/1/0701/0143/products/XXRAYPlus_SesameStreet_CookieMonster_OG_01s_800x.png?v=1578547055',
                email: 'hectorochoa.bellon@gmail.com',
                onOpenText: 'false'
            }
        }
    }

    //el método <render> se llama cada vez que cambia el estado del componente;
    render() {

        

        return (
            <div>
                <Header/>
                <Main user={this.state.user}/>
            </div>
        )
    }
}

export default App;