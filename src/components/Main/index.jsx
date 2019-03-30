import React, {Component} from 'react';
import uuid from 'uuid';
import styles from './main.css';
import MessageList from '../MessageList';
import InputText from '../InputText';
import ProfileBar from '../ProfileBar'




class Main extends React.Component{

    constructor(){
        super()
        this.state = {
            openText: false,
            messages: [
                //mensajes del usuario
                {
                    id: uuid.v4(),
                    picture: 'https://img.icons8.com/color/48/000000/coach.png',
                    displayName: "Sara May",
                    userName: 'LaNena',
                    text: "Muy buen tutorial de React. El siguente paso react Native. Un saludo a toda la comunidad.",
                    date: Date.now() - 3*60*1000
                },
                {
                    id: uuid.v4(),
                    picture: 'https://img.icons8.com/color/48/000000/super-hero-female.png',
                    displayName: "Héctor Ochoa",
                    userName: 'soyBatman',
                    text: "Mensaje de prueba 2",
                    date: Date.now()
                }
            ] 
        }
    }


    handleOpenText( event ){
        event.preventDefault();
        console.log('Mostrando Input al queres twittear.');
        // 1 -.forzamos el método render;
        // 2 -."this" hace referencia al componente "Main"
        this.setState( { openText: true } )
    }

    //Evalúa el estado actual del objeto InputText ( formulario para poder twittear );
    renderOpenText(){
        if( this.state.openText ){
            return <InputText />
        }
    }

    render(){
        return(
            //MessageList :: componente que recibe las props del padre
            <main className={styles.main}>
                <ProfileBar 
                    picture  = { this.props.user.photoURL}
                    username = { this.props.user.email.split('@')[0] }
                    //MAL :: react confunde el objeto "this"
                    //onOpenText = { this.handleOpenText }
                    //BIEN :: decimos que al pulsar el botón.
                    //La función se ejecuta con el this_1 del componente "Main" (this_2)
                    //¿ Se puede decir que lo asocia al padre ?
                    onOpenText = { this.handleOpenText.bind( this ) }
                />
                { this.renderOpenText() }
                <MessageList messages={this.state.messages} />
            </main>
        )
    }
}

export default Main;