import React, { Component } from 'react'
import AddTaskBar from './AddTaskBar'
import TasksList from './TasksList'
import axios from 'axios'


export default class Tasks extends Component {

  addTask = (text) => {
    let data = {
      todolist_id: this.props.todolist_id,
      text: text
    }
    axios.post('http://159.65.25.48/tasks?expand=tasks', data).then(resp => {
      this.props.refreshTodolists()
    })
  }

  deleteTask = (id) => {
    axios.delete(`http://159.65.25.48/tasks/${id}`).then((resp) => {
      this.props.refreshTodolists()
    })
  }


  render(){
    return(
      <div>
        <AddTaskBar addTask={this.addTask}/>
        <TasksList deleteTask={this.deleteTask} tasks={this.props.tasks}/>
      </div>
    )
  }
}
