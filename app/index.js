// Entry point for app.

import React from 'react';
import { render } from 'react-dom';
import AppRoutes from 'app/AppRoutes';

window.onload = () => {
    render(<AppRoutes/>, document.getElementById('app'));
};
