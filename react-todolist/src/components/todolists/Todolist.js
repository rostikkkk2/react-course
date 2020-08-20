import React, { Component } from 'react'
import Tasks from '../Tasks/Tasks'
export default class Todolist extends Component {
  state = {
    is_editing: false,
    edited_text: this.props.text,
  }

  deleteTodo = () => {
    this.props.deleteTodo(this.props.id)
  }

  editTodo = () => {
    this.setState({
      is_editing: true
    })
  }

  ChangeText = (e) => {
    this.setState({
      edited_text: e.target.value
    })
  }

  updateTodo = () => {
    this.props.updateTodolist(this.props.id, this.state.edited_text)
    this.setState({
      is_editing: false
    })
  }

  escChangeTitle = (e) => {
    if (e.keyCode == 27) {
      this.setState({
        is_editing: false,
        edited_text: this.props.text
      })
    }
  }

  render() {
    if (!this.state.is_editing) {
      return(
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <div className="all-todo">
                <span onClick={this.editTodo} className="title-todo">{this.state.edited_text}</span>
                <button className="btn-delete-todo" onClick={this.deleteTodo}>deleteTodo</button>
                <button onClick={this.editTodo}>edit</button>
                <div>
                  <Tasks tasks={this.props.tasks} todolist_id={this.props.id} refreshTodolists={this.props.refreshTodolists}/>
                </div>
              </div>

            </div>
          </div>
        </div>
      )
    }else{
      return(
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <div className="all-todo">
                <button className="btn-delete-todo" onClick={this.deleteTodo}>deleteTodo</button>
                <input onKeyDown={this.escChangeTitle}  onChange={this.ChangeText} className='input-edit-todo' value={this.state.edited_text} type='text'/>
                <button onClick={this.updateTodo}>ok</button>


                <div>
                  <Tasks tasks={this.props.tasks} todolist_id={this.props.id} refreshTodolists={this.props.refreshTodolists}/>
                </div>
              </div>

            </div>
          </div>
        </div>
      )
    }

  }

}
