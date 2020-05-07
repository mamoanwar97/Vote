import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import reducer from './reducers'
import middleware from './middleware'
import Main from './Main.js';

const store = createStore(reducer, middleware);


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  </Provider>
  );
}

export default App;
