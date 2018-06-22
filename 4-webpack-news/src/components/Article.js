import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PropTypes from 'prop-types'

export default class Article extends Component{
  static propTypes = {
    id: PropTypes.number,
    author: PropTypes.string,
    text: PropTypes.string,
    likes: PropTypes.number,
    dislikes: PropTypes.number
  }
  state =  {
    likes: this.props.likes,
    dislikes: this.props.dislikes,
    canlike: true,
    candislike: true
  }


  addLike = () => {
    if (!this.state.canlike) return
    axios.get(`http://139.59.166.202/news/add-like/${this.props.id}`).then(resp => {
      this.setState({
        likes: resp.data.likes,
        canlike: false
      })
    })
  }
  addDislike = () => {
    if (!this.state.candislike) return
    axios.get(`http://139.59.166.202/news/add-dislike/${this.props.id}`).then(resp => {
      this.setState({
        dislikes: resp.data.dislikes,
        candislike: false
      })
    })
  }

  render(){
    return(
      <div className="article">
        <div className="article-author">{this.props.author}</div>
        <div className="article-text">
          {this.props.text.slice(0, 50)}
          <Link to={`/article/${this.props.id}`}>...</Link>
        </div>
        <div className="article-likes-wrapper">
          <span className="article-likes">
            <span onClick={this.addLike}>
              {this.state.likes}
            </span>
          </span>
          <span className="article-dislikes">
            <span onClick={this.addDislike}>
              {this.state.dislikes}
            </span>
          </span>
        </div>
      </div>
    )
  }
}
