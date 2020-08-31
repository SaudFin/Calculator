let nums = document.querySelectorAll(".num");
let result = document.getElementById("result");
nums = Array.from(nums);

// to display numbers on the result screen
const resultScreen = numElement => {
  //   console.log(numElement, "herre");
  numElement.addEventListener("click", () => {
    result.innerHTML = numElement.textContent;
  });
};

// loop through nums elements and activiate the event listener
nums.forEach(resultScreen);

// Addition
const add = (num1, num2) => {
  return num1 + num2;
};

// subtraction
const subtract = (num1, num2) => {
  return num1 - num2;
};

// multiplication
const multiply = (num1, num2) => {
  return num1 * num2;
};

// division
const divide = (num1, num2) => {
  return num1 / num2;
};

// CALCULATOR
const operate = (num1, operater, num2) => {
  return operater(num1, num2);
};
