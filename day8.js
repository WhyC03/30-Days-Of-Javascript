function getSubsetsWithLength(arr, length) {
    const result = [];
  
    function generateSubsets(start, currentSubset) {
      if (currentSubset.length === length) {
        result.push([...currentSubset]);
        return;
      }
  
      for (let i = start; i < arr.length; i++) {
        currentSubset.push(arr[i]);
        generateSubsets(i + 1, currentSubset);
        currentSubset.pop();
      }
    }
  
    generateSubsets(0, []);
    return result;
  }
  
  const sampleArray = [1, 2, 3];
  const subsetLength = 2;
  const subsets = getSubsetsWithLength(sampleArray, subsetLength);
  console.log(subsets);
  