// Function to calculate the sum of numbers at odd and even places in an array
function calculateSums(arr) {
  let oddSum = 0;
  let evenSum = 0;
  let oddCount = 0;
  let evenCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) { // even index
      evenSum += arr[i];
      evenCount++;
    } else { // odd index
      oddSum += arr[i];
      oddCount++;
    }
  }

  const difference = oddSum - evenSum;
  const average = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
  const gcd = calculateGcd(oddSum, evenSum);

  console.log(`Difference = ${difference}`);
  console.log(`Odd Elements = ${oddCount}`);
  console.log(`Even Elements = ${evenCount}`);
  console.log(`Average = ${average}`);
  console.log(`GCD = ${gcd}`);
}

// Function to calculate the GCD of two numbers using Euclidean algorithm
function calculateGcd(a, b) {
  if (b === 0) {
    return a;
  }
  return calculateGcd(b, a % b);
}

// Example usage
const input = [1, 2, 3, 4, 5];
calculateSums(input);
