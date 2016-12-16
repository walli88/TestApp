import React, { Component } from 'react';
import { render, ReactDOM }  from 'react-dom';
import axios from 'axios';
import { fetchApi } from '../actions/index'
import { connect, Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import reducers from '../reducers'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.querySelector('.container')
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  apiCall () {
    // return axios.get('http://10.0.0.170:8080/walter')
    // .then(function(response) {
    //   console.log(response)
    //   sessionStorage.setItem("response", response.data.hello)
    // })
    this.props.fetchApi()
  }

  myResult = sessionStorage.getItem("response")

  render() {
    console.log(this.props)
    this.apiCall()
    return (
      <div>
        { this.props.result }
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
, document.querySelector('.container'));

function mapStateToProps ({ result }) {
  return { result } // weather: weather
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(fetchApi, dispatch)
}

// export default connect(mapStateToProps)(App)
export default connect(null, mapDispatchToProps)(App)
