// Entry point for app.

import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router } from 'react-router'

import AppRoutes from 'app/AppRoutes';

window.onload = () => {
    render(
        <Router
            history={browserHistory}
            onUpdate={() => window.scrollTo(0, 0)}
            routes={AppRoutes}
        />, document.getElementById('app'));
};
