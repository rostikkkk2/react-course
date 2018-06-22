import React, { Component } from 'react'
import axios from 'axios'
import Todolist from './todolist'
import AddTodolistButton from './AddTodolistButton'
export default class Todolists extends Component {
  state = {
    todolists: []
  }

  refreshTodolists = () => {
    axios.get('http://159.65.25.48/todolists?expand=tasks').then((resp) => {
      this.setState({
        todolists: resp.data
      })
    })
  }

  componentDidMount(){
    this.refreshTodolists()
  }

  addTodolist = () => {
    axios.post('http://159.65.25.48/todolists', {text:'my todo'}).then((resp) => {
      this.refreshTodolists()
    })
  }

  deleteTodolist = (id) => {
    axios.delete(`http://159.65.25.48/todolists/${id}`).then((resp) => {
      this.refreshTodolists()
    })
  }

  updateTodolist = (id, text) => {
    axios.put(`http://159.65.25.48/todolists/${id}`, {text: text}).then((resp) => {
      this.refreshTodolists()
    })
  }

  render() {
    const todolist_parsed = this.state.todolists.map((todolist) => {
      return <Todolist
                deleteTodo={this.deleteTodolist}
                key={todolist.id}
                id={todolist.id}
                tasks={todolist.tasks}
                refreshTodolists={this.refreshTodolists}
                updateTodolist={this.updateTodolist}
                text={todolist.text} />
    })
    return (
      <div className="text-center">
        {todolist_parsed}
        <AddTodolistButton addTodo={this.addTodolist}/>
      </div>
    )
  }

}
