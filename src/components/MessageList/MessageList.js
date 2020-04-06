import React, { Component } from 'react';
import Message from '../Message/Message';


const TAG = '[classMessageList] ';

class MessageList extends Component {

    constructor(props) {
        super();
        //propiedades que se pasan en el Main.js
        console.log(TAG + "props ", props);
    }

    /**
     * text: "Texto del mensaje 1",
                    picture: "https://image.freepik.com/vector-gratis/icono-megafono_68708-552.jpg",
                    displayName: "Héctor Ochoa",
                    date: Date.now()
     */

    render() {
        return (

            <div>
                {this.props.messages.map(msg => {
                    //hay que meter el return de la función;
                    return (
                        <Message 
                            key={msg.id}
                            message={msg}
                        />
                    )
                })}
            </div>
        )
    }
}

export default MessageList;