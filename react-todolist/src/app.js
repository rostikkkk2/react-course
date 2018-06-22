import React, { Component } from 'react';
import Todolists from './components/todolists/Todolists'
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 ">
            <h1 className=" text-center mb-0">SIMPLE TODO LIST</h1>
            <h2 className="low-title-header text-center mb-0 mt-0">FROM RUBY GARAGE</h2>
          </div>
        </div>
        <Todolists />
        <div className="row">
          <div className="col-xs-12 ">
            <div className="copywrite text-center">
              <h3 className="company"><i className="glyphicon glyphicon-copyright-mark"></i>Ruby Garage</h3>
            </div>
          </div>
        </div>
    </div>
    )
  }

}
//reactjsx tabaet
