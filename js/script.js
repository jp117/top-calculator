let firstNumber, operator, secondNumber;

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
