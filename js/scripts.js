// Back End

function mrRodgers(firstNumber) {
  
  var replacments = [" Beep", " Boop", " Won't you be my neighbor?", " Not a Number Bruh"]
  var countingNumbers = [];

  for (var i = 0; i<= firstNumber; i++) {
    console.log(i)
    var x = i.toString()
      if (x.includes("3")) {
      countingNumbers.push(replacments[2]);
      } else if (x.includes ("2")) {
      countingNumbers.push(replacments[1]);
      } else if (x.includes ("1")) {
      countingNumbers.push(replacments[0])
      } else {
      countingNumbers.push(x)
      }
  }
    
    console.log(x)
    return countingNumbers
}
// Front End

$(document).ready(function() {
  $("form#formForm").submit(function(event) {
    event.preventDefault();

  
    var firstNumber = parseInt($("input#input1").val());
    var lastNumber = mrRodgers(firstNumber);
    
    $("#result").show();
    $("#result").text(lastNumber);
  });
});