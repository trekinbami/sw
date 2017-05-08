import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

//Redux reducers
import reducers from './reducers';

// Componenten
import App from './components/App';

// SCSS
import '../scss/main.scss';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const routes = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));
