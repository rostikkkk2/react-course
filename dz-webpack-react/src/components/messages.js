import React, { Component } from 'react';

export default class Messages extends Component{
  render(){
    return(
      <div>

          <div> {this.props.me}</div>
          <div> {this.props.show}</div>
        
      </div>
    )
  }
}
