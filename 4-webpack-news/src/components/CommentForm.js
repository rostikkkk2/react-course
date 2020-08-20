import React, { Component } from 'react'
import axios from 'axios'

export default class CommentForm extends Component {
  state = {
    name: '',
    comment_text: ''
  }


  setName = (e) => {
    this.setState({
      name: e.target.value,
    })
  }

  setCommentText = (e) => {
    this.setState({
      comment_text: e.target.value,
    })
  }

  sendComment = () => {
    const data = {
      name: this.state.name,
      comment_text: this.state.comment_text,
      news_id: this.props.news_id
    }
    this.props.parentSendComment(data)
  }



  render(){
    return(
      <div>
          <input onChange={this.setName}/>
          <input onChange={this.setCommentText}  placeholder="оставить комент"/>
          <button type="button" onClick={this.sendComment}>post</button>
      </div>
    )
  }
}
