// 快速排序
// 基于分治的概念
//       1. 随机选择数组中的一个数，作为基准，一般选择终点
//       2. 其他数字跟它比较，小于它的放左边；大于它的，放右边
//       3. 递归的思想，将左边的数和右边的数重复做以上两步

//       a b c 
//       a.concat(b).concat(c)
// 复杂排序： 
//   归并排序
//   快速排序
//   堆排序
// 简单排序： N^2 
//   冒泡
//   选择
//   插入
// 执行效率
// N = log2(N), 复杂排序都是nlogn
const arr = [85, 24, 63, 45, 17, 31, 96, 50];
function quickSort(arr) {
  if(arr.length <= 1) {  //递归的退出条件
    return arr;
  }
  let pivotIndex = Math.floor(arr.length /2); //基准点下标
  // 基准点事提前排好了序的
  let pivot = arr.splice(pivotIndex, 1);  //从数组中删除基准点
  let left = [];
  let right = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(pivot, quickSort(right))  //单个数， pivot或者 [pivot] 都可以
}

console.log(quickSort(arr));