// Back End
var tiggerNumber = [1, 2, 3]
var replacments = ["beep", "boop", "Won't you be my neighbor?"]


 var finalNumber = function(firstNumber) {
  var inputNumber = firstNumber.split("")
  var outputNumber = inputNumber.map(function())

 }

// Front End

$(document).ready(function(){
  $("form#input").submit(function(event){
    event.preventDefault();
  
    var firstNumber = parseint($("input#input").val());
   
    $(".output").html();
});