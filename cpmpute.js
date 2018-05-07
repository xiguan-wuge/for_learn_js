function add(a,b){
  return a+b;
}
function minus(a,b){
  return a-b;
}
function multiply(a,b){
  return a*b;
}
function divide(a,b){
  return a/b;
}
// function compute(a,b,operate){
//   // 看起来更像Java 
//   // switch (operate){
//   //   case '+':
//   //     return add(a,b);
//   //   break;
//   //   case '-':
//   //     return minus(a,b);
//   //   break;
//   //   case '*':
//   //     return multiply(a,b);
//   //   break;
//   //   case '/':
//   //     return divide(a,b);
//   //   break;
//   // }
// }

// 函数是一等对象，object
// fn 要做什么操作 传进来
// 高阶函数 函数的参数或者返回值是函数
function compute(a,b,fn){
  return fn(a,b);
}
// 函数过去 函数名代表函数
console.log(compute(5,8,add))
console.log(compute(5,8,minus))
console.log(compute(5,8,multiply))
console.log(compute(5,8,divide))

// js callback fn 
练习将函数作为参数
