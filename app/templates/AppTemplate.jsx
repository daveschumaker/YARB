import React from 'react';
import HelloWorld from 'app/modules/HelloWorld';
import StyleSheet from 'scss/templates/AppTemplate';

class AppTemplate extends React.Component {
    render() {
        return (
            <div className="AppTemplate">
                <HelloWorld />
            </div>
        );
    }
}

module.exports = AppTemplate;
