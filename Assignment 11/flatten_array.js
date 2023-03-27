function flattenArray(arr) {
    const result = [];
  
    function recursiveFlatten(currArr) {
      for (let i = 0; i < currArr.length; i++) {
        if (Array.isArray(currArr[i])) {
          recursiveFlatten(currArr[i]);
        } else {
          result.push(currArr[i]);
        }
      }
    }
  
    recursiveFlatten(arr);
    return result;
  }
  
  // Example usage
  const input = [1, 2, [3, 4, [5]]];
  const output = flattenArray(input);
  console.log(output);
  