// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

var findErrorNums = function(nums) {
  let valuesObj = {};
  let result = [];
  for (var i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    let currentIndex = i + 1;
    if (valuesObj[currentNum] === undefined) {
      valuesObj[currentNum] = currentIndex;
    } else {
      result.push(currentNum);
      if (currentIndex === currentNum) {
        result.push(valuesObj[currentNum]);
      } else {
        result.push(currentIndex);
      }
      return result;
    }
  }
  return result;
};

(() => {
  var nums = [1,2,2,4];
  console.log(findErrorNums(nums)); //[2,3]
  nums = [1,1];
  console.log(findErrorNums(nums)); //[1,2]
  nums = [1,2,3,6,5,6,7,8];
  console.log(findErrorNums(nums)); //[6,4]
  nums = [1,2,1];
  console.log(findErrorNums(nums)); //[1,3]
  nums = [3,2,3,4,6,5]
  console.log(findErrorNums(nums)); //[3,1]
  nums = [3,2,2];
  console.log(findErrorNums(nums)); //[2,1]
})();