// var obj1={
//   name:'sven'
// }
// var obj2={
//   name:'anne'
// }
// // window.name='window';
// var getName=function(){
//   // 函数this 有运行时决定，运行时的函数调用方式来决定
//   console.log(`Hi，I am ${this.name}`);
// }

// // 普通函数
// getName.call(obj1);
// getName.apply(obj1);
// console.log(window.name)

// apply,call借用其他函数的方法，内部的this可以被指定



var func=function(a,b,c){
  console.log([1,b,c]);
}
// func.apply(null,[1,2,3])
func.call()