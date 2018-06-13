function Otaku(name,age){
  this.name=name;
  this.age=age;
  this.habit='Games';
}
//自定义属性
Otaku.prototype.strength=60;
Otaku.prototype.sayYourName=function(){
  console.log("I am "+this.name);
}
// 数组中最基本的对象 object

// new 关键字
// 1 要返回一个新的对象
// 2 访问到Otaku 具有构造函数的属性
// 3 访问到Otaku.prototype中的属性或方法

// const person=new Otaku('曾凯',18);
// person.sayYourName();


// 参数1是类，后几个参数...
// (js的参数不需要确定)\
// js 的函数参数异常灵活，数量可以不定，形参可以不给，还有... reset 运算符整合起来，都会跟arguments结合起来
function objectFactory(){
  // var Constructor=Array.from(arguments)
  // []代表Array
   var Constructor=[].shift.call(arguments);
  // console.log(Constructor,arguments)
  var obj=new Object();
  // 1.obj __proto__
  // 2 构造函数上的this属性，参数要传进去，要赋值，this要指向当前的对象
  obj.__proto__=Constructor.prototype;
  // 在apply内部手动指定函数执行是的this
  Constructor.apply(obj,arguments)
  return obj;
  // console.log(obj)

// 类（构造函数，原型链对象）
// 对象（属性或方法）
  // console.log(arguments)
  // var constructor=arguments[0]
  // console.log(constructor)
  // var args=?参数
}
var person=objectFactory(Otaku,'鸠摩智',50);
person.sayYourName();