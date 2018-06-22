import React, { Component } from 'react'
import Article from './Article'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loader from 'react-loader-spinner'

export default class Articles extends Component {
  state = {
    articles: []
  }
  
  componentDidMount(){

    axios.get('http://139.59.166.202/news').then((resp) => {
      this.setState({
        articles: resp.data
      })
    })
  }

  render(){
    const articles = this.state.articles.map((article) =>{
      return <Article
      key={article.id}
      id={article.id}
      author={article.author}
      text={article.text}
      likes={article.likes}
      dislikes={article.dislikes}
      />

    })

    if (this.state.articles.length == 0) {
      return(
        <Loader type="Circles" color="red" height={80} width={80}/>
      )
    }else {
      return(
        <div>
          <Link to="/">back</Link>
          {articles}
        </div>
      )
    }
  }
}
