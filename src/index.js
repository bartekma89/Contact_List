import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import './styles/css/index.css';

const middleWare = applyMiddleware(logger, thunk);

const store = createStore(rootReducer, middleWare);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
