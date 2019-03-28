/**
 * Created by wjl on 2018/3/15.
 */
import { observable, action, computed, runInAction } from "mobx"

class AsideStore {
    @observable currentKey
    @observable asideList=[];
    constructor(){
        this.asideList=[];
    }
    @action.bound  async getAsideMenu(){
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
    @action.bound async changeTest(){
        this.testData=[1,2,3]
    }
    @computed get getTes(){
        return this.testData.map(i=>i*2)
    }

}
export default new AsideStore()