import React from 'react';

const Comment = (props) => {
  return(
    <div>
      <div>
        <span>Name: {props.name}</span>
      </div>
      <div>
        <span>Text: {props.text}</span>
      </div>
      <hr />
    </div>
  )
}

export default Comment
