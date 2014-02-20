var factorial = function(number) {
  if (number < 0 || number % 1 != 0) {
    return 'Please Enter a Positive Integer';
  } else if (number === 0) {
    return 1;
  } else if (number === 1) {
    return number;
  } else {
    return factorial(number - 1) * number;
  }
};

// var factorial = function(number) {
//   var newNumber = number;
//   if (number < 0 || number % 1 != 0) {
//     return 'Please Enter a Positive Integer';
//   } else if (number === 0) {
//     return 1;
//   } else {
//     for (var i = number - 1; i > 1; i--) {
//       newNumber *= i;
//     }
//     return newNumber;
//   }
  
// };

$(document).ready(function() {
  $('form#factorial-calc').submit(function(event) {
    var originalNumber = parseInt($('input#number').val());
    var result = factorial(originalNumber);

    if (originalNumber < 0 || originalNumber % 1 != 0){
      $(".resultError").text(result);
      $('#error').show();
      $('#result').hide();
    } else {
      $('.originalNumber').text(originalNumber);
      $('.resultNumber').text(result);
      $('#result').show();
      $('#error').hide();
    }

    event.preventDefault();
  })
})
