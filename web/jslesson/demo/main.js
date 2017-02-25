/**
 * Created by sxin on 2017/2/18.
 */

let apiurl="http://blog.wucj.me:8234/Scom/"
let loginapi=apiurl+"login.action"
let login=(username,password)=>{
    let req=require('request')
    req.request(loginapi,function (error,reponse,body) {
        if(!error && reponse.statusCode==200){
            console.log(body)
        }
    })
}

login("123","123")

