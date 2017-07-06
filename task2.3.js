function sumOne(a) {

  var sum = a;

  function sumTwo(b) {
    sum += b;
    return sumTwo;
  }

  sumTwo.toString = function() {
    return sum;
  };

  return sumTwo;
}