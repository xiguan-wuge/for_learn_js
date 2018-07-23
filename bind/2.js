Function.prototype.bind2 = function(context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments,1);
  var FNOP = function(){}
  var bound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    self.apply(this instanceof self ? this : context, args.concat(bindArgs)) // this instanceof self  判断是不是self的实例
  }
  FNOP.prototype = this.prototype;        
  bound.prototype = new FNOP();
  return bound
}


var value = 2;
var foo = {
  value: 1
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