var missingNumber = function(nums) {
  /* FREQUENCY COUNTER */
  //create object - will store true or false for each value up to n
  let obj = {};
  //get array length
  //loop over array length
  for (var i = 0; i < nums.length + 1; i++) {
    //add each num to object with falsey value
    obj[i] = false;
  }
  //loop over input nums
  for (var j = 0; j < nums.length; j++) {
    //change value to true
    obj[nums[j]] = true;
  }
  //return object key that has falsey value still
  for (let key in obj) {
    if (!obj[key]) {
      return key;
    }
  }
};

//I: array of unique nums
//O: return only num in range that is missing from array
//C: O(1) space and O(n) time

(() => {
  // length === 3
  // 3
  // 0
  // 1
  // return 2
  // somehow need to store all nums up to n w/o taking up space


  // linkedin.com/lisa-modin
  // reza wang-lotf
  // christian.zamora to Everyone (9:01 PM)
  // Natalie Stam to Everyone (8:59 PM)

              // i
  var nums = [3,0,1];

  // [3, 2, 0, 1];

  console.log(missingNumber(nums)); //Output: 2
  nums = [0,1];
  console.log(missingNumber(nums)); //Output: 2
  nums = [9,6,4,2,3,5,7,0,1];
  console.log(missingNumber(nums)); //Output: 8
  nums = [0];
  console.log(missingNumber(nums)); //Output: 1
})();