var factorial = function(number) {
  var newNumber = number;
  if (number < 0 || number % 1 != 0) {
    return 'Please Enter a Positive Integer';
  } else if (number === 0) {
    return 1;
  } else {
    for (var i = number - 1; i > 1; i--) {
      newNumber *= i;
    }
    return newNumber;
  }
  
};
