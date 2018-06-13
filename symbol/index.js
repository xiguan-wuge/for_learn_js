
// 不可以被实例化？即阻止new的过程
// ObjectFactory instance
function ClassCannotInstance(){
  // 任何一个函数内部都有this
  // 判断是否new了，借助this
  if(this instanceof ClassCannotInstance){
    throw new Error('不能被实例化');
  }
  
}
//不能被执行
// const instance=new ClassCannotInstance();
ClassCannotInstance();