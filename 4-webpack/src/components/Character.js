import React, { Component } from 'react';

export default class Character extends Component{
  render(){
    return(
      <div>
        <ul>
          <li>  Name - {this.props.name} </li>
          <li>  Slug - {this.props.slug} </li>
          <li>  Male - {this.props.male} </li>
          <li>  House - {this.props.house} </li>
        </ul>
      </div>
    )
  }
}
