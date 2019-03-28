import { observable, action, computed, runInAction } from "mobx"
import { login } from '../service/login'
require('../mock/loginData');
class Login {
    @observable isLogin
    @observable userInfo
    @observable testData = '默认数据';
    constructor(){
        this.isLogin = sessionStorage.isLogin||false;
        this.userInfo={}
    }
    @computed get computedData(){
        this.testData='computed'
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
    @action.bound   async loginOut() {
        this.isLogin = false
        sessionStorage.clear();
        this.testData='退出登录'
    }
    @action.bound async  changeTest(){
        this.testData='登陆成功'
    }
}
export default new Login();