// src/routes.js
// import React from 'react'
// import { Route, IndexRoute } from 'react-router'
// import AppContainer from 'app/AppContainer';
// import HomePage from 'app/pages/HomePage';
// import NotFoundPage from 'app/pages/NotFoundPage';
//
// const routes = (
//     <Route path="/" component={AppContainer}>
//         <IndexRoute component={HomePage}/>
//         <Route path="*" component={NotFoundPage}/>
//     </Route>
// );
//
// export default routes;

//////////
import React from 'react'
import { browserHistory, Route, Router, IndexRoute } from 'react-router'
import AppContainer from 'app/AppContainer';
import HomePage from 'app/pages/HomePage';
import NotFoundPage from 'app/pages/NotFoundPage';

const AppRouter = () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={AppContainer}>
                <IndexRoute component={HomePage}/>
                <Route path="*" component={NotFoundPage}/>
            </Route>
        </Router>
    )
}

export default AppRouter;
