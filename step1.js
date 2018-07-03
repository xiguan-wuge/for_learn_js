class Promise {
  constructor(executor){
    this.status='pending';
    this.value=undefined;
    this.onRejectCallbacks=[];
    this.onResolveCallbacks=[];
    // value ? executor 调用时传过来的结果
    this.reason=undefined;
    let resolve = (value)=>{
      if(this.status=='pending'){
        this.status='resolved';
        this.value=value;
        this.onResolveCallbacks.forEach(fn => fn());
      }
    }
    let reject=(reason)=>{
      if(this.status==='pending'){
        this.status='rejected';
        this.reason=reason;
        this.onRejectCallbacks.forEach(fn=>fn())
      }
    }
     // 在构造函数里执行一个方法等于在其原型链上生命了一个方法
    // 即 Promise.prototype.executor()
    executor(resolve,reject); 
    // resolve.reject  形参函数
    // ajax setTimeout node 数据库处理，fs file
  }
  then(onFullfilled,onRejected){
    console.log(this.status)
    // 同步代码
    // if(this.status=='resolved'){
    //   onFullfilled(this.value)
    // }
    // if (this.status =='rejected'){
    //   onRejected(this.reason)
    // }
    if(this.status=='pending'){
      this.onResolveCallbacks.push(()=>{
        onFullfilled(this.value);
      })
      this.onRejectCallbacks.push(()=>{
        onRejected(this.reason);
      })
    }
  }
}
const p = new Promise((resolve, reject) => {
  setTimeout(()=>{
    // resolve("hello world");
    reject('I am  sorry!');
  },1000)  
});

p.then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);

module.exports=Promise