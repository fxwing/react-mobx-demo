/**
 * Created by wjl on 2018/3/15.
 */
import { observable, action, computed, runInAction } from "mobx"

class AsideStore {
    @observable currentKey
    @observable asideList
    constructor(){
        this.asideList=[];
    }
    @action getAsideMenu(){
        return new Promise((resolve,reject)=>{

            setTimeout(()=>{
                if(this.currentKey =='1'){
                    runInAction(()=>{
                        this.asideList = [0,1,2];
                        resolve(this.asideList);
                    })

                }else{
                   // this.asideList=[];
                }
            })
        })




    }

}
export default new AsideStore()