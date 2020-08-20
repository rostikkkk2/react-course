import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Header extends Component{
  render() {
    return(
      <header style={{backgroundColor: this.props.color}}>
        <span>lololol</span>
      </header>
    )
  }
}
Header.propTypes = {
  color: PropTypes.string.isRequired,
  isAuth: PropTypes.bool
}

Header.defaultProps = {
  color: 'red'
}

export default Header
