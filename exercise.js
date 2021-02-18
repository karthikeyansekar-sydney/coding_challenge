//Finding symetric differences between two or more sets
function sym() {
  var args = [];

  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  console.log(args);

  function symDiff(arrayOne, arrayTwo) {
    console.log(`two arrays printing.....`);

    console.log(arrayOne);
    console.log(arrayTwo);

    var result = [];
    let y = 0;

    arrayOne.forEach(function(item) {
      if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item);
      }
    });

    arrayTwo.forEach(function(item) {
      if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item);
        }
    });

    return result;
  }

  // Apply reduce method to args array, using the symDiff function

  return args.reduce(symDiff);
}



console.log(sym([1, 2, 3], [5, 2, 1, 4], [8,9,10]));
