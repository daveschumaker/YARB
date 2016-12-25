// src/routes.js
import React from 'react'
import { browserHistory, Route, Router, IndexRoute } from 'react-router'
import AppContainer from 'app/AppContainer';
import HomePage from 'app/pages/HomePage';
import NotFoundPage from 'app/pages/NotFoundPage';

const routes = (
    <Route path="/" component={AppContainer}>
        <IndexRoute component={HomePage}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

export default class AppRoutes extends React.Component {
  render() {
    return (
        <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
    );
  }
}
