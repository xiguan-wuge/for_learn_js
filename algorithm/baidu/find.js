// 需求： 1.有一个二维数组，
//  2.每一行从左到右递增的顺序, 每一列从上到下递增
//  3.完成一个函数， 判断是否有这个数
// target=10

// [[1,2,3,4],
//  [5,6.7,8],
//  [9,10,11,12],
// ]

function find(target, arr) {
  let i = 0; //row
  let j = arr[i].length - 1; //每行的最后一个
  while (i < arr.length && j >= 0) {
    if (arr[i][j] < target) {
      i += 1;
    } else if (arr[i][j] > target) {
      j--
    } else {
      return true;
    }
  }
  return false;
}

console.log(find(110, [
  [1, 2, 3, 4],
  [5, 9, 10, 11],
  [13, 20, 21, 23]
]))