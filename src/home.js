import React, {Component} from 'react'

class Home extends Component {
  state = {
    input: ''
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.addElement(this.state.input)
  }

  render() {
    return (
      <div>
        <button onClick={this.props.logout}>Logout</button>
        <h1>
          Firebase demo
        </h1>
        <ul>
          {this.props.elements.map(el => <li key={el.name}>{el.name}: {el.translated}</li>)}
        </ul>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <input value={this.state.input} onChange={(e) => this.setState({input: e.target.value})}/>
        </form>
      </div>
    )
  }
}

export default Home