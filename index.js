// 2秒后resolve的定时器，同步化

// const p=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('hello world');
//     reject("no");
//   },2000)
// });
// p.then((res)=>{
//   console.log(res)
// })
const Promise=require('./promise.js');
// 将要执行的耗时任务封装在executor,实例化时就开始执。
// resolve?
// reject?
// 形参
const p=new Promise((resolve,reject)=>{
  // var that=this;
  // console.log(this.constructor.status);
  // setTimeout(()=>{
    // resolve('hello');
  // },2000)
  reject("nonono");
   
});
p.then((data)=>{
  console.log(data);
},(err)=>{
  console.log(err);
});