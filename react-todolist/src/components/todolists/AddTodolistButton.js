import React, { Component } from 'react'
import axios from 'axios'
export default class AddTodolistButton extends Component {



  render() {
    return (
      <div className="text-center">
        <button onClick={this.props.addTodo} className="btn btn-primary btn-lg">
          <i className='glyphicon glyphicon-plus'></i>
          <span>Add todolist</span>
        </button>
      </div>
    )
  }

}
