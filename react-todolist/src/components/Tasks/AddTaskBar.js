import React, { Component } from 'react'


export default class AddTaskBar extends Component {
  state = {
    input: ''
  }
  saveText = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  addParentTask = () => {
    this.props.addTask(this.state.input)
    this.setState({
      input: ''
    })
  }

  render(){
    return(
      <div>
        <div>
          <input onChange={this.saveText} value={this.state.input} className="input-tasks" type='text'/>
          <button onClick={this.addParentTask} >add task</button>
        </div>
      </div>
    )
  }
}
