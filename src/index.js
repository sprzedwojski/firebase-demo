import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './index.css'
import firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAamz0k64OP6hyONz6tcebonarkEGBCb2I',
  authDomain: 'warsawjs.firebaseapp.com',
  databaseURL: 'https://warsawjs.firebaseio.com',
  projectId: 'warsawjs',
  storageBucket: 'warsawjs.appspot.com',
  messagingSenderId: '385556384328'
})

console.log(app.name)

ReactDOM.render(<App />, document.getElementById('root'))
