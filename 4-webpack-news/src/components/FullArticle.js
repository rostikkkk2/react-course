import React, { Component } from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import CommentForm from './CommentForm'
import Comments from './Comments'


export default class FullArticle extends Component {
  state ={
    article: {}
  }

  componentDidMount() {
    axios.get(`http://139.59.166.202/news/${this.props.match.params.id}?expand=comments`).then((resp) => {
      this.setState({
        article: resp.data
      })
    })
  }

  parentSendComment = (data) => {
    axios.post('http://139.59.166.202/comments', data).then((response) => {
      this.refreshArticle()
    })
  }

  refreshArticle = () => {
    axios.get(`http://139.59.166.202/news/${this.props.match.params.id}?expand=comments`).then((resp) => {
      this.setState({
        article: resp.data
      })
    })
  }


  render() {
    if (!this.state.article.id) {
      return (
        <Loader type="Circles" color="red" height={80} width={80}/>
      )
    }else {
      return (
        <div className="article">
          <div className="article-author">{this.state.article.author}</div>
          <div className="article-text">
          {this.state.article.text}
          </div>
          <div className="article-likes-wrapper">
          <span className="article-likes">{this.state.article.likes}</span>
          <span className="article-dislikes">{this.state.article.dislikes}</span>
          </div>
          <CommentForm parentSendComment={this.parentSendComment} news_id={this.state.article.id} />
          <Comments comments={this.state.article.comments} />
        </div>
      )

    }
  }
}
