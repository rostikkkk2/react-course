import React, { Component } from 'react'
import CommentForm from './CommentForm'
import Comment from './Comment'
const Comments = (props) => {
      const parsed_comments = props.comments.map((comment) => {
        return <Comment key={comment.id} id={comment.id} name={comment.name} text={comment.comment_text}/>
      })


      return(
      <div>
        {parsed_comments}
      </div>
      )
}
export default Comments
