import React from 'react';
import StyleSheet from 'scss/AppContainer';

export default class AppContainer extends React.Component {
    render() {
        return (
            <div className="AppContainer">
                <div className="app-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
