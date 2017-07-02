import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import {AppContainer} from './components/App.js';
import reducer from './reducers';

import {initializeGame, setScores} from './actions';

let store = createStore(reducer, undefined, window.devToolsExtension ? window.devToolsExtension() : undefined);

store.dispatch(setScores(0, 0));
store.dispatch(initializeGame());

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
