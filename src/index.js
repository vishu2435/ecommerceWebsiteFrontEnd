import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import cartReducer from './store/reducers/cartReducer'
import loginReducer from './store/reducers/loginreducer'

const rootReducer=combineReducers({cartReducer:cartReducer,loginReducer:loginReducer})

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
 <Provider store={store}>
  <App/>
 </Provider>
  ,
  document.getElementById('root')
);

