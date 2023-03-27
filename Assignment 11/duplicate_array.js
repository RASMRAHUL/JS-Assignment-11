function findDuplicatesAndRemove(arr) {
    const duplicates = [];
    const unique = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (unique.indexOf(arr[i]) === -1) {
        unique.push(arr[i]);
      } else {
        if (duplicates.indexOf(arr[i]) === -1) {
          duplicates.push(arr[i]);
        }
      }
    }
  
    return {
      duplicates: duplicates,
      unique: unique
    };
  }
  
  // Example usage
  const input = [1, 2, 3, 2, 3, 4, 5];
  const output = findDuplicatesAndRemove(input);
  console.log("Duplicate Elements = " + output.duplicates);
  console.log("Array without duplicate elements = " + output.unique);
  