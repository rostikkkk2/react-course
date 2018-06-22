import React, { Component } from 'react'
import Task from './Task'

export default class TasksList extends Component {
  render(){



    if (this.props.tasks.length == 0) {
      return <div>no tasks</div>
    }else {
      const tasks = this.props.tasks.map((task) => {
        return <Task deleteTask={this.props.deleteTask} id={task.id} key={task.id} text={task.text}/>
      })
      return(
        <div>
          {tasks}
        </div>
      )
    }
  }
}
