function computeSumOrTriple(int1, int2) {
    if (int1 === int2) {
      return 3 * (int1 + int2);
    } else {
      return int1 + int2;
    }
  }
  
  const num1 = 5;
  const num2 = 5;
  const result = computeSumOrTriple(num1, num2);
  
  console.log(`The result is: ${result}`);
  