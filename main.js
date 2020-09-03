let nums = document.querySelectorAll(".num");
let result = document.getElementById("result");
let operaters = document.querySelectorAll(".operator");
let equalizer = document.getElementById("equal");
let operation = false;
let clearButton = document.getElementById("clear");
// to display result in the screen results
let total = 0;
// to keep caculating all totals
// let lastResult = 0;
nums = Array.from(nums);
operaters = Array.from(operaters);

let firstNum;
let action;
// to display numbers on the result screen
const resultScreen = numElement => {
  numElement.addEventListener("click", () => {
    if (operation === false && result.innerHTM != 0) {
      result.innerHTML = numElement.textContent;
      operation = true;
    } else {
      result.innerHTML = result.innerHTML + numElement.textContent;
    }
  });
};
// to activate the math operation
const operaterAction = operateElement => {
  operateElement.addEventListener("click", () => {
    firstNum = result.innerHTML;
    action = operateElement.id;
    operation = false;
  });
};

// to get the result of the math operation
equalizer.addEventListener("click", () => {
  if (operation === true) {
    let secondNum = result.innerHTML;
    firstNum = parseInt(firstNum);
    secondNum = parseInt(secondNum);

    operate(firstNum, action, secondNum);
  }
});

// to clear the screen results and the total
const clearResult = () => {
  result.innerHTML = 0;
  operation = false;
  total = 0;
};

clearButton.addEventListener("click", clearResult);
// loop through nums elements and activiate the event listener
nums.forEach(resultScreen);
// loop through operaters elements and activiate the event listener
operaters.forEach(operaterAction);
// Addition
const add = (num1, num2) => {
  total = num1 + num2;
};

// subtraction
const subtract = (num1, num2) => {
  console.log(num1, num2);
  total = num1 - num2;
};

// multiplication
const multiply = (num1, num2) => {
  total = num1 * num2;
};

// division
const divide = (num1, num2) => {
  total = num1 / num2;
};

// CALCULATOR
const operate = (num1, operater, num2) => {
  // console.log(operater, num1, num2);
  switch (operater) {
    case "multiply":
      multiply(num1, num2);
      break;
    case "divide":
      divide(num1, num2);
      break;
    case "plus":
      add(num1, num2);
      break;
    case "subtract":
      subtract(num1, num2);
      break;
  }
  result.innerHTML = total;
  // lastResult = result.innerHTML;
};
