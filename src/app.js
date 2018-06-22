import React, {Component} from 'react'
import SignInScreen from './sing-in-screen'

class App extends Component {
  state = {
    signedIn: false
  }

  handleAuthStateChanged(signedIn) {
    this.setState({signedIn: signedIn})
  }

  render() {
    if(!this.state.signedIn)
      return <SignInScreen handleAuthStateChanged={(user) => this.handleAuthStateChanged(user)}/>
    return (
      <h1>
        Firebase demo
      </h1>
    )
  }
}

export default App
