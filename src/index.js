import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
 import { Provider } from "react-redux";
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

  const reducer = combineReducers({ form: formReducer});
  //const store = createStore(reducer);
  const store = (window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore)(reducer);

ReactDOM.render(
    <Provider store={store}><Main/></Provider> , 
  document.getElementById("root")
);