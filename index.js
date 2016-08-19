import React from 'react';
import ReactDOM from 'react-dom';
import { createStore ,applyMiddleware,compose} from 'redux';
import { Provider } from 'react-redux';
import todoApp from './container/reducers'
import App from './container/App'
import createLogger from 'redux-logger'  //日志输出中间件
import 'antd/dist/antd.css'; 
/*const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}*/ //自定义日志输出

let createStoreWithMiddleware = compose(applyMiddleware( createLogger()),window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore) //dispath输出
//let store = createStore(todoApp);
let store = createStoreWithMiddleware(todoApp); //增加日志输出console
let rootElement = document.getElementById('root');


ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    rootElement
)