import React from "react";
import styles from '../stylesheets/main.scss'

export default class App extends React.Component {
    render() {
        return (
            <div className={`app-container`}>
                <div className={`container ${styles.container}`}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
