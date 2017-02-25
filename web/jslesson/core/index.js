/**
 * Created by sxin on 2017/2/16.
*/
let ajax=(fun)=>{
    setTimeout(()=>{
        fun()
    },2000);
}

let me={
    _cache:{
        list:[]
    },
    get cacheList(){
      return this._cache.list
    },
    set cacheList(value){
      this._cache.list=value
    },
    loadCache(fun){
      if(this.cacheList.length==0) {
          this.cacheList=this.getList()
      }

    },
    getList(){
        return ajax(()=>{
            return [
                {newId:1,newTitle:"标题1"},
                {newId:2,newTitle:"标题12"},
                {newId:3,newTitle:"标题123"},
                {newId:4,newTitle:"标题1234"}
                ]
        })
    },
    getOne(id){
        this.loadCache()
        let index=-1
        let getRet=this.cacheList.map((item,i)=>{
            if(id==item.newId){
                index=i
                return item
            }
            else
                return null
        });
        if(index>=0)
            getRet=getRet[index]
        else
            getRet=null
        return getRet;
    },
    search(title){
        let getRet=[]
        let index=0
        this.loadCache()
        this.cacheList.map((item)=>{
            if(item.newTitle.indexOf(title)!=-1) {
                 getRet[index++] = item
            }
        });
        return getRet;
    }
}

console.log(me.getOne(2));