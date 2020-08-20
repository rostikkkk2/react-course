import React, { Component } from 'react';

export default class Users extends Component{
  render(){
    return(
      <div>
        <ul>
          <li className="user">
            <img src={this.props.avatar} className="avatar"></img>
            <div className="name"> {this.props.name}</div>
            <div className={this.props.isOnline ? 'online' : 'notOnline'}></div>
          </li>
        </ul>
      </div>
    )
  }
}
