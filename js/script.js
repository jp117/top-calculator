let first, operator, second;
let displayNumber = "";
let display = document.querySelectorAll('.display');

let clear = document.getElementById("clear");
clear.addEventListener('click', function(){
  displayNumber = "";
  first = 0;
  second = 0;
  operator = "";
  display[0].innerText = displayNumber;
})

let numbers = document.querySelectorAll('.number');
numbers.forEach(function(current){
  current.addEventListener('click', function(){
    displayNumber = displayNumber += current.innerText;
    display[0].innerText = displayNumber;
  } );
})

let addButton = document.getElementById("add");
addButton.addEventListener('click', function(){
  operator = "add";
})

let divideButton = document.getElementById("divide");
divideButton.addEventListener('click' function(){
  operator = 'divide';
})

let multiplyButton = document.getElementById("multiply");
multiplyButton.addEventListener('click', function(){
  operator = 'multiply';
})

let subtractButton = document.getElementById("divide");
subtractButton.addEventListener('click', function(){
  operator = "subtract";
})

let equalsButton = document.getElementById("equals");
equalsButton.addEventListener('click' function(){
  displayNumber = calculate(firstNumber, operator, secondNumber);
  display[0].innerText = displayNumber;
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

