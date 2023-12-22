function firstNonRepeatedCharacter(str) {
    let charFrequency = {};
  
    
    for (let char of str) {
      charFrequency[char] = (charFrequency[char] || 0) + 1;
    }
  
    for (let char of str) {
      if (charFrequency[char] === 1) {
        return char;
      }
    }
  
    return null;
}
let result = firstNonRepeatedCharacter('abacddbec');
console.log(result); 
  