import { observable, action, computed, runInAction } from "mobx"
import { login } from '../service/login'
require('../mock/loginData');
class Login {
    @observable isLogin
    @observable userInfo
    constructor(){
        this.isLogin = false;
        this.userInfo={}
    }
    @action.bound async login(values) {
      const data = await login(values);
      if(data.status==200){
          runInAction(()=>{
              this.isLogin = true;
              this.userInfo=data;
              sessionStorage.isLogin = this.isLogin;
          })
      }
    }
    @action loginOut() {
        this.isLogin = false
    }
}
export default new Login();