import React from 'react';  
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import AllReducer from './Reducer'
import Home from './Component/Home'

const store = createStore(AllReducer);

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
     //<Stack />
    );
  }
}