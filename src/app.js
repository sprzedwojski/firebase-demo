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

    firebase.firestore()
      .collection('cities')
      .onSnapshot(querySnapshot => {
        const elements = []
        querySnapshot.forEach(doc =>
          elements.push({id: doc.id, ...doc.data()})
        )
        this.setState({elements: elements})
      })
  }

  handleSubmit(e) {
    e.preventDefault()

    firebase.firestore()
      .collection('cities')
      .add({name: this.state.inputVal})
      .then(() => console.log('Document added'))

    this.setState({inputVal: ''})
  }

  render() {
    const {isLoggedIn, elements, inputVal} = this.state

    if(!isLoggedIn)
      return <Login/>
    return (
      <div className='app'>
        <button onClick={() => firebase.auth().signOut()}>
          Logout
        </button>

        <ul>
          {elements.map(el =>
            <li key={el.id}>
              {el.name} <br/><i>{el.coolness}</i>
            </li>
          )}
        </ul>

        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            value={inputVal}
            onChange={e => this.setState({
              inputVal: e.target.value
            })}
          />
        </form>
      </div>
    )
  }
}

export default App
