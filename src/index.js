import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk'

// Reducers
import reducers from './reducers/index'

// Styles
import 'bootstrap/dist/css/bootstrap.css'

// Components
import App from './components/App';

const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
