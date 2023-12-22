function deepEqual(obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
      return obj1 === obj2;
    }
  
    if (obj1 === null && obj2 === null) {
      return true;
    }
  
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (const key of keys1) {
      if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
  
    return true;
  }
  
  const objA = { a: 1, b: { c: 2, d: { e: 3 } } };
  const objB = { a: 1, b: { c: 2, d: { e: 3 } } };
  const objC = { a: 1, b: { c: 2, d: { e: 4 } } };
  
  console.log(deepEqual(objA, objB));
  console.log(deepEqual(objA, objC)); 
  