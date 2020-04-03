// Back End
// var tiggerNumber = [1, 2, 3]
// var replacments = ["beep", "boop", "Won't you be my neighbor?"]


//  var finalNumber = function(firstNumber) {
//   var inputNumber = firstNumber.split("");
//   var outputNumber = inputNumber.map(function();



//   if (tiggerNumber.includes(firstNumber)) {
//     return (outputNumber + "Beep")

//   });

// Front End

$(document).ready(function() {
  $("form#formForm").submit(function(event) {
    event.preventDefault();

  
    var firstNumber = $("input#input1").val();
    var lastNumber = firstNumber;
    
    $("#result").text(lastNumber);
  });
});