import React, {Component} from 'react'

class Home extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.logout}>Logout</button>
        <h1>
          Firebase demo
        </h1>
        <ul>
          {this.props.elements.map(el => <li key={el.name}>{el.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default Home