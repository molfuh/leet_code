var distributeCandies = function(candyType) {
  let uniqueCandies = {};
  for (var i = 0; i < candyType.length; i++) {
    let currentCandy = candyType[i];
    if (uniqueCandies[currentCandy] === undefined) {
      uniqueCandies[currentCandy] = 1;
    } else {
      uniqueCandies[currentCandy]++;
    }
  }
  if (Object.keys(uniqueCandies).length <= candyType.length / 2) {
    return Object.keys(uniqueCandies).length;
  } else {
    return candyType.length / 2;
  }
};

(() => {
  var candyType = [1,1,2,2,3,3];
  console.log(distributeCandies(candyType));
  candyType = [1,1,2,3];
  console.log(distributeCandies(candyType));
  candyType = [6,6,6,6];
  console.log(distributeCandies(candyType));
})();