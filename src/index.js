import React, { Component } from 'react';
import { render, ReactDOM }  from 'react-dom';
import axios from 'axios';
import { fetchApi } from '../actions/index'
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../reducers'
import App from '../components/App'

let store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.container')
)
