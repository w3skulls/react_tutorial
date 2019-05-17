//import App from './components/App'

import React from 'react';
import { render } from 'react-dom';

class Test extends React.Component{
    render(){
        //alert("Funcionando")
        return(
            <h1>App funcionando !!!</h1>
            
        )
    }
}


//Render test
render(<Test/>, document.getElementById('root'))   
