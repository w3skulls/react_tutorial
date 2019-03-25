import React, {Component} from 'react';
import Message from '../Message';


class MessageList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {this.props.messages.map( msg => {
                    //console.info( msg );
                    return (
                        <Message
                            /**
                             * Cuando React maneja varios elementos dentro de un array,
                             * se necesitan distnguir y se debe añadir una "key"
                             **/
                            key={msg.id }
                            text={msg.text}
                            picture={msg.picture}
                            displayName={msg.displayName}
                            userName={msg.userName}
                            date={msg.date}
                        />
                    )
                } )}
            </div>
        )
    }

}

export default MessageList;