function checkNumbers(num1, num2) {
    return num1 === 50 || num2 === 50 || num1 + num2 === 50;
  }
  
  let number1 = 21;
  let number2 = 26;
  let result1 = checkNumbers(number1, number2);
  
  console.log(result1); 

  let number3 = 24;
  let number4 = 26;
  let result2 = checkNumbers(number3, number4);
  
  console.log(result2)