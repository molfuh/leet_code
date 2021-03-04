var sumArray = function(arr) {
  //find max value from input arr
  let max = Math.max(...arr);
  //loop through array
  for (var i = 0; i < arr.length - 1; i++) {
    //add nums from i to j
    for (var j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      if (sum > max) {
        max = sum;
      }
    }
    //if added value is greater than determined max, update it
  }
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