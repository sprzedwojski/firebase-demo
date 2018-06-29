import React, {Component} from 'react'
import {StyledFirebaseAuth} from 'react-firebaseui'
import firebase from 'firebase'

class SignInScreen extends Component {

  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
  }

  render() {
    return (
      <div>
        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    )
  }
}

export default SignInScreen
