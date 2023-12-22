function throttle(func, delay) {
    let lastInvocationTime = 0;
  
    return function (...args) {
      const currentTime = Date.now();
  
      if (currentTime - lastInvocationTime >= delay) {
        func.apply(this, args);
        lastInvocationTime = currentTime;
      }
    };
  }
  
  function myFunction() {
    console.log("Function called!");
  }
  
  const throttledFunction = throttle(myFunction, 1000); 
  
  throttledFunction(); 
  throttledFunction(); 
  