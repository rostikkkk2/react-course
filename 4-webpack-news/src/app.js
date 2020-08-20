import React, { Component } from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/header';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header
         isAuth={true} />
        <Main/>
        <Footer/>
      </div>
    )
  }

}
//reactjsx tabaet
