// var foo = {
//   value: 1
// }

// function bar(name, age) {
//   console.log(this.value)
//   console.log(name)
//   console.log(age)
// }

// const bar2 = bar.bind(foo,"ya", 25)
// bar.apply(foo)  //1
// bar.call(foo)  // 1
// call 和 apply  立即执行；bind不是 ，由于bind会返回一个新函数
// bar2();

// bind? (手写)
// 1 返回一个函数，高阶函数， return function() { bar() }
// 2 this的指向 通过闭包


// 原型链本质 ：自己有的方法属性 ，就用自己的，若没有，则沿着原型链往上查找方法

// 在bind时 实现传参 有两种方法 f1 和 f2

// Function.prototype.bind2 = function (context, ...args) { //  f1...args
Function.prototype.bind2 = function (context, ) { // f2
  var args = Array.prototype.slice.call(arguments, 1) //f2
  var that = this
  return function () {
    // ？ bar 是谁？ bar -> Function  指向 this 
    // ？ apply（context)

    // that.apply(context,args)  //f1

    const bindArgs = Array.prototype.slice.call(arguments); //f2
    that.apply(this instanceof that ? this : context,args.concat(bindArgs))  //f2
    // console.log(context)
  }
}
// const bar2 = bar.bind2(foo,"ya",25)
// bar2()





var value = 2;
var foo = {
  value:1
}
function bar(name, age) {
  this.habit = "shopping";
  console.log(this.value)
  console.log(name);
  console.log(age);
}

bar.prototype.friend = "kevin";
var bindFoo = bar.bind2(foo, 'daisy')
var obj = new bindFoo("18");
console.log(obj.habit)
console.log(obj.friend)
// bindFoo();