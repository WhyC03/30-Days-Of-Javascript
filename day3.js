function isInRange(num1, num2) {
    return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99);
  }
  
  const num1 = 45;
  const num2 = 75;
  
  if (isInRange(num1, num2)) {
    console.log("At least one number is in the range 50..99");
  } else {
    console.log("Neither number is in the range 50..99");
  }