import React from 'react';
import { Link } from 'react-router';

export default class NotFoundPage extends React.Component {
    render() {
        return (
            <div className="not-found">
                <h1>404: Page Not Found</h1>
                <p>
                    <Link to="/">Return to main page</Link>
                </p>
            </div>
        );
    }
}
