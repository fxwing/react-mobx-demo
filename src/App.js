import React, { Component } from 'react';
import './App.css';
import { observer, inject } from 'mobx-react'
import Main from './components/Main'
import Login from './components/Login/Login'

@inject('loginStore')
@observer class App extends Component {
  render() {
    const { isLogin } =this.props.loginStore
    return isLogin ? <Main /> : <Login />
  }
}

export default App;
