function averagePair(arr, target){
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let currentAvg = (arr[start] + arr[end]) / 2;
    if (currentAvg < target) {
      start++;
    } else if (currentAvg > target) {
      end--;
    } else {
      return true;
    }
  }
  return false;
}

//I: SORTED arr of ints, target average
//O: boolean - if there is PAIR in arr where avergae of pair === target average
//C: O(n) time, O(1) space
//E: may be more than one pair that matches average target

//average = num1 + num2 / 2;

//questions:
//what if im given 0 inputs? 1 input?
//what if multiple pairs average to given average? - return true at first one
//what if pairs are not next to each other?
//     i
// [1, 2, 4] // looking for average: 3
//        j
//average: 2
//average : 4


//        i
// [1, 2, 3, 4, 7] // looking for average: 6  // true
//           j
// 3.5
// 7
// 4
// 6 - true!

//if current average < target
  //increment i
//else if averge > target
  //decrement j
//else if equal
  //return true
//return false

// examples:
// (() => {
//   console.log(averagePair([1, 2, 3], 2)) // should return true, since 2 + 3 / 2 === 3;
//   console.log(averagePair([1, 2, 3, 4, 7], 6)); // true
//   console.log(averagePair([0], 3)); //false
//   console.log(averagePair([], 3)); //false
// })();

