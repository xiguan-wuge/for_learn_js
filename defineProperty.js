var o={};
// o.step=1;
// var bValue=1;
// Object.defineProperty(o,'a',{
//   get:function(){
//     console.log('get');
//     return bValue;
//   },
//   set:function(val){
//     console.log('设置新的值')
//     bValue=val;
//     // return bValue;
//   }
// });
// o.a=2;
// console.log(o.a)

// 严格模式
// (function(){
//   // 'use strict'
//   console.log(this)
//   var o={};
//   Object.defineProperty(o,'a',{
//   value:7,
//   // get:function(){

//   // },
//   writable:false
//   });
//   console.log(o.a)
//   o.a=25;

// })()


// var o={};
// // defineProperty 一次只能设置一个属性  
// Object.defineProperty(o,'a',{
//   value:1,
//   enumerable:true
// });
// Object.defineProperty(o,'b',{
//   value:2,
//   enumerable:false
// });
// Object.defineProperty(o,'3',{
//   value:3,
//   // enumerable:true
//   // enumerable 默认为false ，不可被枚举
// });
// o.d=4;
// console.log(Object.keys(o));
// for(let  key in o){
//   console.log(key,o[key])
// }
// console.log(o.b)
// console.log(o.propertyIsEnumerable('b'));


// 'use strict'
// var o={};
// Object.defineProperty(o,'a',{
//   // configurable 是否可以被删除
//   configurable:false,
//   get:function(){
//     return 1;
//   }
// })
// console.log(o.a)
// delete o.a;
// console.log(o.a);

function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    },
    set: function(value) {
      temperature = value;
    }
  })
  // var data = {
  //   age: 19,
  //   name: '喻顺武',
  // }
  // for (let key in data) {
  //   Object.defineProperty(data, key, {
  //     get: function() {
  //       console.log('get!');
  //       return data[key];
  //     },
  //     set: function(newVal) {
  //       console.log('set!');
  //       data[key] = newVal;
  //     }
  //   })
  // }
  // data.age = 20;
}
var arc = new Archiver();
arc.temperature = 35;
console.log(arc.temperature);
arc.temperature = 38;
console.log(arc.temperature);
