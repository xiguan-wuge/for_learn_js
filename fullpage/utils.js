// 截流throtlle,规定时间只执行一次 先执行；
// debounce  防抖，规定时间只执行一次 后执行；
// 都为解决高频事件而来
// scroll mouseWheel mousemove mouseover touchmove onresize 
const utils={
  // 帮忙method执行的次数在规定时间内只有一次
  // method 执行时，函数内的this PureFullPage
  // this.container
  throttle(method,context,delay){
    // args?
    // 返回的函数就是等下事件正真执行的函数体
    // 闭包
    let wait=false;
    return function(...args){ 
      // 一个方法作为普通函数执行时 this指向window
      // ->
      // args? event 对象
      // 执行时，上下文环境要跟以前一样
      // console.log(args)
      if(!wait){
        method.apply(context,args)
        wait=true;
        setTimeout(()=>{
        wait=false;
      },delay)
      }
      
    }
  },
  debounce(method,context,event,delay){
    // window.resize 不要急 ，等一下再执行
    clearTimeout(context.tId);
    // 定时器要保存名字？
    // js动态语言
    context.tId=setTimeout(()=>{
      method.call(context,event);
    },delay)
    
  },
  gettWheelDelta(event){
    // console.log(event)
    if(event.wheelDelta){
      this.gettWheelDelta=event=>event.wheelDelta;
      return event.wheelDelta
    }
    //chrome
    // this.gettWheelDelta=event=>-event.detail;
    // return -event.detail
  }
}