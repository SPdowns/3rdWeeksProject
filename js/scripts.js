// Back End

function mrRodgers(firstNumber) {
  // var tiggerNumber = [1, 2, 3]
  var replacments = ["beep", "boop", "Won't you be my neighbor?"]


 var firstReturn = firstNumber.toString().split("");
  if (firstReturn.includes(3)) {
    return replacments[2];
  }

  var countingNumbers = [];

  for (var i = 0; i<= firstNumber; i++) {
    console.log(i)
    if (i === 3) {
      countingNumbers.push(replacments[2]);
    }
  }
//   var inputNumber = firstNumber.split("");
//   var outputNumber = inputNumber.map(function();



//   if (tiggerNumber.includes(firstNumber)) {
//     return (outputNumber + "Beep")

//   });

// var spanNumber = function(count)


}


// Front End

$(document).ready(function() {
  $("form#formForm").submit(function(event) {
    event.preventDefault();

  
    var firstNumber = $("input#input1").val();
    var lastNumber = mrRodgers(firstNumber);
    
    $("#result").text(lastNumber);
  });
});