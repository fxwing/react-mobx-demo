import { observable, action, computed, runInAction } from "mobx"
import { login } from '../service/login'
require('../mock/loginData');
class Login {
    @observable isLogin
    @observable userInfo
    constructor(){
        this.isLogin = sessionStorage.isLogin||false;
        this.userInfo={}
    }
    @action.bound async login(values) {
      const data = await login(values);
      if(data.status==200){
          runInAction(()=>{
              this.isLogin = true;
              this.userInfo=data;
              sessionStorage.isLogin = this.isLogin;
              sessionStorage.token = this.userInfo.token;
          })
      }
    }
    @action loginOut() {
        this.isLogin = false
        sessionStorage.clear();
    }
}
export default new Login();