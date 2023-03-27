// Function to check if 4 exists in an array
function checkFor4(arr) {
    return arr.includes(4);
  }
  
  // Function to check for 4 in both arrays
  function checkFor4InBothArrays(arr1, arr2) {
    const has4InArr1 = checkFor4(arr1);
    const has4InArr2 = checkFor4(arr2);
  
    if (has4InArr1 && has4InArr2) {
      console.log('4 in both arrays');
    } else if (has4InArr1) {
      console.log('4 in array 1');
    } else if (has4InArr2) {
      console.log('4 in array 2');
    } else {
      console.log('4 not found in either array');
    }
  }
  
  // Example usage
  const input1 = [1, 2, 3, 4, 5];
  const input2 = [4, 6, 1, 8, 2];
  checkFor4InBothArrays(input1, input2);
  