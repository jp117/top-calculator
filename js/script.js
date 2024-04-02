let first, operator, second;
let displayNumber = "";
let display = document.querySelectorAll('.display');

let numbers = document.querySelectorAll('.number');
numbers.forEach(function(current){
  current.addEventListener('click', function(){
    displayNumber = displayNumber += current.innerText;
    display[0].innerText = displayNumber;
  } );
})

function calculate(firstNumber, operator, secondNumber){
  switch(operator){
    case 'add': return add(firstNumber, secondNumber);
    case 'subtract': return subtract(firstNumber, secondNumber);
    case 'multiply': return multiply(firstNumber, secondNumber);
    case 'divide': return divide(firstNumber, secondNumber);
  }
}

function add(one, two){
  return one + two;
}

function subtract(one, two){
  return one - two;
}

function multiply(one, two){
  return one * two;
}

function divide(one, two){
  return one / two;
}

