async function asyncLoop(array, asyncFunction) {
    for (const element of array) {
      await asyncFunction(element);
    }
  }
  
  // Example usage:
  async function exampleAsyncFunction(item) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Processed element: ${item}`);
        resolve();
      }, 1000); 
    });
  }
  
  const myArray = [1, 2, 3, 4, 5];
  
  asyncLoop(myArray, exampleAsyncFunction)
    .then(() => {
      console.log("All elements processed");
    })
    .catch((error) => {
      console.error("Error during processing:", error);
    });
  