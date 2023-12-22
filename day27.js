function* range(start, end) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  }
  
  const start = 1;
  const end = 5;
  
  const numberGenerator = range(start, end);
  
  for (const number of numberGenerator) {
    console.log(number);
  }
  