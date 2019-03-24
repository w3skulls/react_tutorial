import React, {Component} from 'react';
import styles from './footer.css'

class Footer extends React.Component{

    render(){
        return (
            <footer className={styles.footer}>
                <h3>Soy el footer</h3>
            </footer>
        )
    }
}

export default Footer;