import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './container/reducers'
import App from './container/App'
import 'antd/dist/antd.css'; 

let store = createStore(todoApp);
let rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)