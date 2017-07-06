function filter(arr, func) {
  var res = [];

  for (var i = 0; i < arr.length; i++) {
    var val = arr[i];
    if (func(val)) {
      res.push(val);
    }
  }

  return res;
}

function inBetween(nOne, nTwo) {
    return function(nX) {
      return nX >= nOne && nX <= nTwo;
    };
  }

function inArray(arr) {
    return function(nX) {
      return arr.indexOf(nX) != -1;
    };
  }
