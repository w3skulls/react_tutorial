import React, {Component} from 'react';
import styles from './main.css';
import MessageList from '../MessageList';


class Main extends React.Component{

    constructor(){
        super() //llama al componente padre
        this.state = {
            messages: [
                {
                    picture: 'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043250-avatar-child-girl-kid_113270.png',
                    displayName: "Sara May",
                    userName: 'LaNena',
                    text: "Muy buen tutorial de React. El siguente paso react Native. Un saludo a toda la comunidad.",
                    date: Date.now() - 3*60*1000
                },
                {
                    picture: 'https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png',
                    displayName: "Héctor Ochoa",
                    userName: 'soyBatman',
                    text: "Mensaje de prueba 2",
                    date: Date.now()
                }
            ] //mensajes del usuario
        }
    }

    render(){
        return(
            //MessageList :: componente que recibe las props del padre
            <main className={styles.main}>
                <MessageList messages={this.state.messages} />
            </main>
        )
    }
}

export default Main;