import React, {Component} from 'react'
import Login from './login'
import firebase from 'firebase'

class App extends Component {
  state = {
    isLoggedIn: false,
    elements: [],
    inputVal: ''
  }

  componentDidMount() {
    firebase.auth()
      .onAuthStateChanged(user =>
      this.setState({isLoggedIn: !!user}))
  }

  render() {
    const {isLoggedIn, elements, inputVal} = this.state

    if(!isLoggedIn)
      return <Login/>
    return (
      <div className='app'>
        Firebase demo, woohoo!
      </div>
    )
  }
}

export default App
