function sym() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  console.log(args);

  function symDiff(arrayOne, arrayTwo) {
    var result = [];

    arrayOne.forEach(function(item) {
      if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item);
        console.log(result);
      }
    });

    arrayTwo.forEach(function(item) {
      if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item);
        console.log(result);

      }
    });

    return result;
  }

  // Apply reduce method to args array, using the symDiff function

  return args.reduce(symDiff);
}



console.log(sym([1, 2, 3], [5, 2, 1, 4], [8,9,10]));
