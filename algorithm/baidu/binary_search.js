function binary_search(arr, key) {
  var low = 0;
  var high = arr.length - 1;
  while(low <= high) {
    var mid = parseInt((high + low) /2);
    if(key == arr[mid]) {
      return mid;
    }else if(key > arr[mid]) {
      low = mid + 1;
    }else if(key < arr[mid]) {
      high = mid - 1;
    }else {
      return -1;
    }
  }
}

var arr = [1,2,3,4,5];
var result = binary_search(arr, 3);
console.log(result)

// function binary_search(arr, low, high, key) {
//   if(low > high) {
//     return -1;
//   }
//   var mid = Math.floor((high + low) /2);
//   if(arr[mid] == key) {
//     return mid;
//   } else if (arr[mid] > key) {
//     high = mid - 1;
//     return binary_search(arr, low, high, key)
//   } else if (arr[mid] < key ) {
//     low = mid + 1;
//     return binary_search(arr, low, high, key)
//   }
// }