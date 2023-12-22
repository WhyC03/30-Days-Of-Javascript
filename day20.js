function findFirstNegative(numbers) {
    const firstNegative = numbers.find(number => number < 0);
  
    return firstNegative !== undefined ? firstNegative : undefined;
  }
  
  const array1 = [1, 2, -3, 4, -5, 6];
  const result1 = findFirstNegative(array1);
  console.log(result1);
  
  const array2 = [1, 2, 3, 4, 5, 6];
  const result2 = findFirstNegative(array2);
  console.log(result2);  