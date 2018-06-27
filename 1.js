// COMMONJS require NODE 内置支持的js 模块化方案
// es6的module
// sea.js
const fs=require('fs');
let data;

// 路径，文件打开方式，异步处理


let p=new Promise((resolve,reject)=>{
  fs.readFile('./file2.txt','utf8',(err,data)=>{
    if(err){
      reject(err)
    }else{
      resolve(data)
    } 
  });
})
p.then(data=>{
  console.log('读取完成，做其他事情')
}).catch(e=>{
    console.log(e)
})
