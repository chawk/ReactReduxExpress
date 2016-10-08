import React from 'react'
import { render } from 'react-dom'
import Counter from './Counter'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import counterApp from './reducers'
import MainComponent from './MainComponent'
import AnotherComponent from './AnotherComponent'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


const store = createStore(
    combineReducers({
        global: counterApp,
        routing: routerReducer
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={MainComponent}>
                <IndexRoute component={Counter} />
                <Route path="test" component={AnotherComponent} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById("app")
)