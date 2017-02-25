/**
 * Created by sxin on 2017-02-22.
 */
let test={
    a:{
        list:[]
    },
    b(){
        return this.a.list;
    },
    c:(a=test.a)=>{
        return a.list;
    },
    d:function () {
        return this.a.list
    }
}

var arguments = process.argv;

if(arguments[2]==1)
    console.log(test.b())
else if (arguments[2]==2)
    console.log(test.c())
else if (arguments[2]==3)
    console.log(test.d())
