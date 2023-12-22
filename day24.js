function debounce(func, delay) {
    let timer;
  
    return function () {
      const context = this;
      const args = arguments;
  
      clearTimeout(timer);
  
      timer = setTimeout(function () {
        func.apply(context, args);
      }, delay);
    };
  }
function myFunction() {
    console.log("Function invoked!");
  }
  
  const debouncedFunction = debounce(myFunction, 500);
  
  debouncedFunction(); 
  debouncedFunction(); 
  debouncedFunction(); 
  
    