import React, {Component} from 'react';
import style from './message.css';
import moment from 'moment';


class Message extends Component{
    /*constructor( props ){
        super( props ); 
    }*/

    constructor(  ){
        super(  ); 
    }

    render(){

        let dateFormat = moment( this.props.date ).fromNow();
        return(
            <div className={style.message}>
                <div className={style.avatar}>
                    <figure>
                        <img className={style.avatarImg} src={this.props.picture} alt="imagen"/>
                    </figure>
                    <h3 className={style.user}>@{this.props.userName}</h3>
                </div>
                <div className={style.publishDate}>
                    <p>{ dateFormat }</p>
                </div>
                <p className={style.text}>{this.props.text}</p>
                <div className={style.buttons}>
                    <div className={style.icon}><span className="fa fa-reply"></span></div>
                    <div className={style.icon}><span className="fa fa-retweet"></span></div>
                    <div className={style.icon}><span className="fa fa-star"></span></div>
                </div>
            </div>
        )
    }
}


module.exports =  Message;