function countUniqueValues (arr) {
  let count = 0;
  let pointer1Index = 0;
  let pointer1, pointer2;
  for (let i = 1; i < arr.length; i++) {
    pointer1 = arr[pointer1Index];
    pointer2 = arr[i];
    if (pointer1 !== pointer2) {
      count ? count += 1 : count += 2;
      pointer1Index++;
    }
  }
  return count;
}

(() => {
  console.log(countUniqueValues([1,1,1,1,1,1,2])) //2
  console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) //7
  console.log(countUniqueValues([])) //0
  console.log(countUniqueValues([-2,-1,-1,0,1])) //4
})();