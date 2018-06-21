class Promise {
  constructor(executor){
    // 成功的值
    this.value=undefined;
    // 失败的值
    this.reason=undefined;
    // 状态值
    // Promise 状态有几种？
    // 1 pending  等待
    // 2 resolved  成功
    // 3 rejected  失败
    this.status="pending";
    let resolve=(value)=>{
      if(this.status==="pending"){
        this.status='resolved';
        this.value=value;
      }
      
    }
    let reject=(reason)=>{
      if(this.status==="pending"){
        this.status="rejected";
        this.reason=reason;
      }
      
    }
    //实例化部分
    executor(resolve,reject);
  }
  // 执行部分
  then(onFullFilled,onRejected){
    if(this.status==="resolved"){
      onFullFilled(this.value);
    }
   if(this.status==="rejected"){
      onRejected(this.reason);
   }
    
  }
}
module.exports=Promise;