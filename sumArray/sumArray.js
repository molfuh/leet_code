var sumArray = function(arr) {
  //current subarray - first elem of arr
  let sub = arr[0];
  //create max var
  let max = sub;
  //iterate through arr
  for (var i = 1; i < arr.length; i++) {
    //if current num > sum of num + sum of previous subarray
    if (sub < sub + arr[i]) {
      //max var is current num
      max = sub + arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
    sub = sub + arr[i];
  }
  //return max
  return max;
};

(() => {
  console.log(sumArray([1, 2, 3])); // => 6
  console.log(sumArray([1, 2, 3, -4])); // 6
  console.log(sumArray([1, 2, 3, -4, 5])); // 7
  console.log(sumArray([4, -1, 5])); // => 8
  console.log(sumArray([10, -11, 11])); // 11
  console.log(sumArray([-7,-6,-9]));//.should.equal(-6));
  console.log(sumArray([-3,-2,-1,-2,-3]));//.should.equal(-1))
})();

/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

//  [1, 2, 3, -4]
//   i