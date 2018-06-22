import React, { Component } from 'react'
import Articles from './Articles'
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import FullArticle from './FullArticle'


export default class Main extends Component{
  render() {
    return(
      <main>
        <Route exact path='/' component={Home} />
        <Route exact path='/article/:id' component={FullArticle} />
        <Route exact path='/articles' component={Articles} />
      </main>
    )
  }
}
