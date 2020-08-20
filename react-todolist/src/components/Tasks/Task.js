import React, { Component } from 'react'

export default class Task extends Component {
  deleteTask = () => {
    this.props.deleteTask(this.props.id)
  }
  render(){
    return(
      <div>
        {this.props.text}
        <button onClick={this.deleteTask}>destroy</button>
      </div>
    )
  }
}
