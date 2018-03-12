import React,{ Component } from 'react'
import styles from './Login.less'
import { observer,inject } from 'mobx-react'

@inject('loginStore') @observer
class Login extends Component {
     render(){
         return (<div>我是登陆页面</div>)
     }
}
export default Login