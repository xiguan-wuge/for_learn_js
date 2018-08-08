// 菲波那切数列
// 1,1,2,3,5,8,13,21,34,55,89 前两项之和等于第三项

// 主题： 递归的优化

// f(n) = f(n-1) + f(n-2)

// let count = 0;
// function fabo(n) {
//   count ++;
//   if (n == 1 || n == 2) { //退出条件
//     return 1;
//   }
//   return fabo(n-1) + fabo(n-2)
// }

// console.log(fabo(20), count);  //6765 13529

// 递归的次数太大， 可以通过for 或者while 来代替递归
// 当次数不多时 ，可以使用递归，简单明了
// 递归使用时 注意优化

let count = 0;
function fn(n) {
  let cache = {};
  function _fn(n) {
    if(cache[n]) {
      return cache[n];
    }
    count ++;
    if(n ==1 ||n == 2) {
      return 1;
    }

    let prev = _fn(n-1);
     cache[n-1] = prev;
     let next = _fn(n-2);
     cache[n-2]=next;
     return prev + next;
  }
  return _fn(n)
}
console.log(fn(30), count)