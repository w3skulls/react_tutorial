import React, {Component} from 'react';

//podemos importar estilos como ficheros
import styles from './header.css'


 class Header extends React.Component{
    render(){
        return(
            <header className={styles.root}>
                <h1 className={styles.logo}>Soy el header</h1>
            </header>
        )
    }
}

export default Header;
