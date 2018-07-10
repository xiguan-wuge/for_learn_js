//图书馆
function Book(isbn,title,author){
  this._setIsbn(isbn);
  this.title=title || '未给标题';
  this.author=author || '未给作者';

}
Book.prototype._setIsbn=function(isbn){
  if(/[0-9]{10}/.test(isbn)){
    this.isbn=isbn;
  }else{
    throw new Error('isbn有误');
  }
}
Book.prototype.getTilte=function(){
  return this.title;
}
Book.prototype.getAuthor=function(){
  return this.author;
}
Book.prototype.borrow=function(){

}
Book.prototype._checkIsbn=function(isbn){
  return /[0-9]{10}/.test(isbn);
}
var book=new Book('sjs1212','三国演义','罗贯中');