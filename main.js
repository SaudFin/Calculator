let nums = document.querySelectorAll(".num");
let result = document.getElementById("result");
let score = document.getElementById("total");
let operaters = document.querySelectorAll(".operator");
let equalizer = document.getElementById("equal");
let newNum = true;
let clearButton = document.getElementById("clear");
let mathOperation = false;
// to caculate how many operations have been done
let numOfOps = 0;
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
    if (newNum === true) {
      result.innerHTML = numElement.textContent;
      newNum = false;
    } else {
      result.innerHTML = result.innerHTML + numElement.textContent;
    }
  });
};
// to get the result of math operation
const equaliation = () => {
  if (mathOperation === true) {
    let secondNum = result.innerHTML;

    secondNum = parseInt(secondNum);
    mathOperation = false;
    if (numOfOps === 0) {
      firstNum = parseInt(firstNum);
    } else {
      firstNum = total;
    }
    numOfOps++;
    operate(firstNum, action, secondNum);
  }
};
// to activate the math operation
const operaterAction = operateElement => {
  operateElement.addEventListener("click", () => {
    if (mathOperation === true) {
      equaliation();
    }
    firstNum = result.innerHTML;
    action = operateElement.id;
    newNum = true;
    mathOperation = true;
  });
};

// to get the result of the math operation
equalizer.addEventListener("click", equaliation);

// to clear the screen results and the total
const clearResult = () => {
  newNum = true;
  total = 0;
  score.innerHTML = total;
  numOfOps = 0;
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
  if (num2 == 0) {
    alert("Error, never divide by zero");
  } else {
    total = num1 / num2;
  }
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
  score.innerHTML = Math.round(total);
  result.innerHTML = "";
  // lastResult = result.innerHTML;
};
