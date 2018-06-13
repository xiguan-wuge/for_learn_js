// symbol js 的基础数据类型之一，为js 带来唯一值，不会重复
var s=Symbol();
console.log(typeof s);
var s1=Symbol();
console.log(s==s1)
// false symbol  唯一值

console.log(new Symbol());
//不能被new