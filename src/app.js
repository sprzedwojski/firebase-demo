import React, {Component} from 'react'
import SignInScreen from './sing-in-screen'
import firebase from 'firebase'
import Home from './home'

class App extends Component {
  state = {
    signedIn: false,
    elements: []
  }

  handleAuthStateChanged(signedIn) {
    this.setState({signedIn: signedIn})
  }

  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  componentDidMount() {
    this.watchAuth()
    this.watchElements()
  }

  watchElements() {
    firebase.firestore().collection('elements').onSnapshot(querySnapshot => {
      const elements = []
      querySnapshot.forEach(doc => elements.push(doc.data()))
      this.setState({elements: elements})
    })
  }

  watchAuth() {
    this.unregisterAuthObserver = firebase.auth()
      .onAuthStateChanged(user => this.handleAuthStateChanged(!!user))
  }

  addElement(name) {
    firebase.firestore().collection('elements').add({
      name: name
    })
  }

  render() {
    if (!this.state.signedIn)
      return <SignInScreen />
    return <Home logout={() => firebase.auth().signOut()} elements={this.state.elements} addElement={this.addElement}/>
  }
}

export default App
