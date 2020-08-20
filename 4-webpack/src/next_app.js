import React, { Component } from 'react'

export default class NextApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }

    this.counterUp = this.counterUp.bind(this);
    this.counterDown = this.counterDown.bind(this);
  }

  counterUp() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  counterDown() {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.counterDown}>-</button>
        <input value={this.state.counter}/>
        <button onClick={this.counterUp}>+</button>
      </div>
    )
  }
}
