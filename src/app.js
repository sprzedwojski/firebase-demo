import React, {Component} from 'react'
import Login from './login'
import firebase from 'firebase'

class App extends Component {
  state = {
    isLoggedIn: false
  }

  render() {
    const {isLoggedIn} = this.state

    if(!isLoggedIn)
      return <Login/>
    return (
      <div>Firebase demo, woohoo!</div>
    )
  }
}

export default App
