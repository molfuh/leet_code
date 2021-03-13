function selectionSort(arr) {
  for (let j = 0; j < arr.length; j++) {
      let smallest = j;
      for (let i = j + 1; i < arr.length; i++) {
          smallest = arr[smallest] > arr[i] ? i : smallest;
        }
      let temp = arr[j];
      arr[j] = arr[smallest];
      arr[smallest] = temp;
  }
  return arr;
}

//O(n^2) time complexity
//O(n) space complexity

(() => {
    console.log(selectionSort([5, 4, 3, 2, 1]));
})();