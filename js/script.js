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
    if (displayNumber == "" && current.innerText == "0"){

    } else {
      displayNumber = displayNumber += current.innerText;
      display[0].innerText = displayNumber;
    }
  } );
})

let addButton = document.getElementById("add");
addButton.addEventListener('click', function(){
  setNumber();
  doMath();
  operator = "add";
})

let divideButton = document.getElementById("divide");
divideButton.addEventListener('click', function(){
  setNumber();
  doMath();
  operator = "divide";
})

let multiplyButton = document.getElementById("multiply");
multiplyButton.addEventListener('click', function(){
  setNumber();
  doMath();
  operator = 'multiply';
})

let subtractButton = document.getElementById("subtract");
subtractButton.addEventListener('click', function(){
  setNumber();
  doMath();
  operator = "subtract";
})

let equalsButton = document.getElementById("equals");
equalsButton.addEventListener('click', function(){
  setNumber();
  doMath();
})

function calculate(firstNumber, operator, secondNumber){
  switch(operator){
    case 'add': return add(Number(firstNumber), Number(secondNumber));
    case 'subtract': return subtract(Number(firstNumber), Number(secondNumber));
    case 'multiply': return multiply(Number(firstNumber), Number(secondNumber));
    case 'divide': return divide(Number(firstNumber), Number(secondNumber));
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

function setNumber(){
  if (first && second){
    second = undefined;
    displayNumber = "";
    console.log(`top, first = ${first}`);
    console.log(`top, second = ${second}`);
  } else if (!first) {
    first = displayNumber;
    displayNumber = "";
    console.log(`middle, first = ${first}`);
    console.log(`middle, second = ${second}`);
  } else if (!second){
    second = displayNumber;
    displayNumber = "";
    console.log(`bottom, first=${first}`);
    console.log(`bottom, second = ${second}`);
  }
}

function doMath(){
  if (first && second && operator != ""){
    displayNumber = calculate(first, operator, second);
    display[0].innerText = displayNumber;
    first = displayNumber;
    second = undefined;
    displayNumber = "";
  }
}

