import React, {Component} from 'react'
import SignInScreen from './sing-in-screen'
import firebase from 'firebase'

class App extends Component {
  state = {
    signedIn: false,
    elements: []
  }

  handleAuthStateChanged(signedIn) {
    this.setState({signedIn: signedIn})
  }

  componentDidMount() {
    firebase.firestore().collection('elements').get().then(querySnapshot => {
      const elements = []
      querySnapshot.forEach(doc => elements.push(doc.data()))
      this.setState({elements: elements})
    })
  }

  render() {
    if (!this.state.signedIn)
      return <SignInScreen handleAuthStateChanged={(user) => this.handleAuthStateChanged(user)}/>
    return (
      <div>
        <h1>
          Firebase demo
        </h1>
        <ul>
          {this.state.elements.map(el => <li key={el.name}>{el.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default App
