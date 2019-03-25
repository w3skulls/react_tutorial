import React, {Component} from 'react';
import style from './style.css'

export default class ProfileBar extends Component{

    constructor(){
        super()
    }

    render(){
        return(
            <div className={style.root}>
                <div className={style.iconContainer}>
                    <figure>
                        <img className={style.avatar} src= {this.props.picture } alt="imagen usuario"/>
                    </figure>
                    <span className={ style.username }>@{ this.props.username}</span>
                </div>
                <button onClick={ this.props.onOpenText } className={ style.button }>
                    <span className="fa fa-lg fa-edit"></span> > Tweet!
                </button>
            </div>
        )
    }
}