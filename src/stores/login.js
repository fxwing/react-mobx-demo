import { observable, action, computed, runInAction } from "mobx"

class Login {
    @observable isLogin
    constructor(){
        this.isLogin = false
    }
    @action login() {
        this.isLogin = true
    }
    @action loginOut() {
        this.isLogin = false
    }
}
export default new Login();