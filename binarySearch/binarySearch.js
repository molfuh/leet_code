function binarySearch(arr, target){
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return -1;
}
//  i
// [1, 2, 3, 4, 5]
//     j
// (() => {
//   console.log(binarySearch([1,2,3,4,5], 2)); //1
//   console.log(binarySearch([1,2,3,4,5], 3)); //2
// })();

//I: sorted arr, value
//O: index at which val exists