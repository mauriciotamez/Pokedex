import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import reducer from './redux'
import 'flowbite'

const store = createStore(reducer, composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
