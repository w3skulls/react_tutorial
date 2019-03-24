import React, {Component} from 'react';
import styles from './main.css';


class Main extends React.Component{
    render(){
        return(
            <main className={styles.main}>
                <h1 className={styles.h1}>Soy el main</h1>
            </main>
        )
    }
}

export default Main;