import React, { Component, useReducer } from 'react';
import styles from './profile-bar.css';

const TAG = '[classProfileBar] ';

class ProfileBar extends Component {

    constructor(props) {
        super();
        console.log(TAG, props);
    }


    render() {
        return (
            <div className={styles.root}>
                <figure>
                    <img src={this.props.photoURL} alt="userPhotoProfile" />
                </figure>
            </div>
        )
    }
}

export default ProfileBar;