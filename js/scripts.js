// Back End

function mrRodgers(firstNumber) {
  // var tiggerNumber = [1, 2, 3]
  var replacments = ["beep", "boop", "Won't you be my neighbor?"]


 var firstReturn = firstNumber.toString().split("");
  if (firstReturn.includes("3")) {
    return replacments[2];
  } else
  console.log(firstReturn)

  var countingNumbers = [];

  for (var i = 1; i<= firstNumber; i++) {
    console.log(i)
    var x = i.toString().split('');
      if (x === "3") {
      countingNumbers.push(replacments[2]);
      } else {
      countingNumbers.push(i.toString());
      }
  }
    
    console.log(countingNumbers)
    return countingNumbers
}
//   var inputNumber = firstNumber.split("");
//   var outputNumber = inputNumber.map(function();



//   if (tiggerNumber.includes(firstNumber)) {
//     return (outputNumber + "Beep")

//   });

// var spanNumber = function(count)




// Front End

$(document).ready(function() {
  $("form#formForm").submit(function(event) {
    event.preventDefault();

  
    var firstNumber = parseInt($("input#input1").val());
    var lastNumber = mrRodgers(firstNumber);
    
    $("#result").text(lastNumber);
  });
});