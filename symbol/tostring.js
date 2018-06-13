// 经典的js考题：判断数组，函数
const arr=[1,2,3];
func=function(){}
const obj={}
// Object 来自 function(){}
// 构造函数有prototype属性 对象__proto__

// console.log(Object.prototype.toString.call(arr));
// console.log(Object.prototype.toString.call(obj));


const zk={
  name:'曾凯',
  //语义化，覆盖父对象toString()方法
  toString: function(){
    return`${this.name} 是。。。。。`;
  }
}
// serialize 序列化（对象变字符串）
"{name:'zk',habit:'交友广泛'}"
console.log(typeof(JSON.stringify(zk)));
console.log(typeof zk.toString())