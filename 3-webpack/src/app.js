import React, { Component } from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
export default class App extends Component {
  render() {
    const header_text = this.props.authorized ? 'hello admin' : 'hello pidrila'
    console.log(this.props);
    return (
      <div>
        <Header authorized={true}/>
        <Main authorized={false}/>
        <Footer />

      </div>
    )
  }


}
