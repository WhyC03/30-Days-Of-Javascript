function reverseNumber(num) {
    const numStr = num.toString();
    const reversedStr = numStr.split('').reverse().join('');
    const reversedNum = parseInt(reversedStr, 10);
    
    return reversedNum;
  }
  const x = 32243;
  const reversedX = reverseNumber(x);
  console.log(reversedX);
  