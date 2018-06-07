// es6的 class 只是语法糖

function Person(name){
  this.name=name
}
Person.prototype={
   getName:function(){
     return this.name;
   }
}
function Author(name,books){
  // .call 借用一个方法来执行
  // this 它实例后的一个对象
  Person.call(this,name);
  this.books=books;
}

extend(Author,Person);
Author.prototype.getBooks=function(){
  return this.book;
}
function extend(subClass,superClass){
  subClass.prototype=new superClass();
  // constructor 属性丢失了
  subClass.prototype.constructor=subClass;
  // var F=function(){}

}
const author=new Author('高尔基',['我的offer'])
console.log(author);
const person=new Person('周杰伦');
console.log(person)
// new Person()