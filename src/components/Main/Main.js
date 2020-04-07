import React, { Component } from 'react';
import MessageList from '../MessageList/MessageList';
import ProfileBar from '../ProfileBar/ProfileBar';
import styles from './main.css';


const TAG = '[MAIN] ';

class Main extends Component {

    //Vamos a crear una lista de mensajes;
    constructor(props) {
        super(); //porque hereda de <Component>

        console.log(TAG, props);
        this.state = {
            messages: [
                {
                    id: 1,
                    text: "Texto del mensaje 1",
                    picture: "https://cdn.shopify.com/s/files/1/0701/0143/products/XXRAYPlus_SesameStreet_CookieMonster_OG_01s_800x.png?v=1578547055",
                    displayName: "Pepita Nostalgias",
                    date: Date.now()
                },
                {
                    id: 2,
                    text: "Texto del mensaje 2",
                    picture: "https://www.stickpng.com/assets/images/587170457b7f6103e35c6cad.png",
                    displayName: "_juanitocadenas_",
                    date: Date.now() - 180000
                },

                {
                    id: 3,
                    text: "Texto del mensaje 2",
                    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Baphosimb.svg/1200px-Baphosimb.svg.png",
                    displayName: "_@ssatan666",
                    date: Date.now() - 450546
                }


            ]
        }
    }

    render() {
        return (
            <main className={styles.main}>
                <ProfileBar 
                    username={this.props.user.username}
                    photoURL={this.props.user.photoURL} 
                    />
                <MessageList messages={this.state.messages} />
            </main>

        )
    }
}

export default Main;