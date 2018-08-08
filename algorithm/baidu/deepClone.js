// 深拷贝
// js 复杂对象， 引用拷贝
// 递归，树 key => value ,value是object 时，继续递归

// 1. 递归主体， 循环要解决的
// 2. 退出条件，不能一直循环，要退出

function deepClone(o1, o2) {
  for(let k in o2) {
    if(typeof o2[k] === 'object') {
      o1[k] = o2[k];
      deepClone(o1[k], o2[k]);
    } else {
      o1[k] = o2[k];
    }
  }
}

let obj = {
  a: 1,
  b: [1,2,3],
  c:{
    d: 4
  }
}

let emptyObj = Object.create(null);
deepClone(emptyObj, obj);
console.log(emptyObj.a == obj.a);
console.log(emptyObj. b== obj.b);
