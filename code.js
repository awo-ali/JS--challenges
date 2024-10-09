function minMax(arr) {
    const sortedArray = arr.sort(function(a, b){return a-b});
    return [sortedArray[0], sortedArray[sortedArray.length-1]];
    
  }
  console.log( minMax([105, 2, 33, 4, 56]));
  