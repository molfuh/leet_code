function maxSubarraySum(arr, numLength){
  if (numLength > arr.length) {
    return null;
  }
  let currentSum = 0;
  for (var i = 0; i < numLength; i++) {
    currentSum += arr[i];
  }

  for (var i = numLength; i < arr.length; i++) {
    let tempSum = currentSum + (arr[i] - arr[i - numLength]);
    currentSum = Math.max(tempSum, currentSum);
  }
  return currentSum;
}

//I: array of ints and num
//O: max sum of subarray with LENGTH OF NUM PASSED IN
//C: O(N) time and O(1) space -> can do multiple for-loops to achieve O(n) time
//E: must be consecutive

// [   300   ]
// [100, 200, 300, 400] //2
//      [   500   ]
//           [   700   ]

//create currentNum var & count var
//iterate through array up to array.length - INPUT NUM
  //if count < INPUT NUM
    //add current elem to currentNum
  //otherwise
    //currentNum -= arr[i - INPUT NUM]
    //currentNum += arr[i]
//return currentNum

(() => {
  console.log(maxSubarraySum([100, 200, 300, 400], 2)); //700
  console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); //39
  console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); //5
  console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, 2, -2, 1], 2)); //5
  console.log(maxSubarraySum([2, 3], 3));
})();

/*
  //create currentNum var & count var
  let currentNum = arr[0];
  let count = 1;
  //iterate through array up to array.length - INPUT NUM
  for (let i = 1; i < arr.length; i++) {
    //if count < INPUT NUM
    if (count < numLength) {
      //add current elem to currentNum
      currentNum += arr[i];
      count++;
    } else {
      //otherwise
      //currentNum -= arr[i - INPUT NUM]
      currentNum -= arr[i - numLength];
      //currentNum += arr[i]
      currentNum += arr[i];
    }
  }
  return currentNum;
  */