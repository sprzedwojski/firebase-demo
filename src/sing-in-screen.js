import React, {Component} from 'react'
import {StyledFirebaseAuth} from 'react-firebaseui'
import firebase from 'firebase'

class SignInScreen extends Component {

  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
  }

  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth()
      .onAuthStateChanged(user => this.props.handleAuthStateChanged(!!user))
  }

  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  render() {
    return (
      <div>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    )
  }
}

export default SignInScreen
