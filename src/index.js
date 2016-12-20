// Node modules import
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

// Components import
import routes from './routers';

// Reducers import
import reducers from './reducers/index.js';

// Style import
import '../styles/index.scss';

// Store definition with Middleware applying and Rendering of React Document Object Model
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory} routes={routes} />
    </Provider>, document.querySelector('#react-application')
);
