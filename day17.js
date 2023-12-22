function filterOutOdd(numbers) {
    const filteredNumbers = numbers.filter(function (num) {
      return num % 2 === 0;
    });
  
    return filteredNumbers;
  }
  
  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const resultArray = filterOutOdd(inputArray);
  
  console.log(resultArray);
  