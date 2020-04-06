import React, { Component } from 'react';
import styles from './message.css'
import moment from 'moment';

const TAG = '[classMessage] ';

class Message extends Component {

    constructor(props) {
        super();
        //propiedades que se pasan en el MessageList
        console.log(TAG + "props ", props);
    }


    render() {

        let dateFormat = moment(this.props.message.date).fromNow();

        return (
            <div className={styles.root}>
                <div className={styles.user}>
                    <div>
                        <figure className={styles.avatar}>
                            <img src={this.props.message.picture} />
                        </figure>
                        <span className={styles.displayName}>
                            {this.props.message.displayName}
                        </span>
                    </div>
                    <span className={styles.date}>
                        {dateFormat}
                    </span>
                </div>

                <h3 className={styles.text}>{this.props.message.text}</h3>

                <div className={styles.buttons}>
                    <div className={styles.icon}>
                        <span className="fa fa-reply"></span>
                    </div>
                    <div className={styles.icon}>
                        <span className="fa fa-retweet"></span>
                    </div>
                    <div className={styles.icon}>
                        <span className="fa fa-star"></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Message;