import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.scss'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));
