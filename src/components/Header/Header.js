import React, {Component} from 'react';
import styles from './header.css';


class Header extends Component{
    render(){
        return(
            <header className={styles.header}>
                <h1 className={styles.logo}>Header</h1>
            </header>
            
            
        )
    }
}

export default Header;