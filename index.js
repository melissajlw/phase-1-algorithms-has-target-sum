function hasTargetSum(array, target) {
  // Write your algorithm here
  const len = array.length
  for (i = 0; i < len - 1; i++) {
    if (array[i] < target) {
      for (j = i + 1; j < len; j++) {
        if (array[i] + array[j] == target) {
          return true;
        }
      }
    } 
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  The time complexity of this algorithm is O(n * (n - 1)), or O(n^2)
*/

/* 
  Add your pseudocode here
  For each element of the array, if the element is less than the target, check the remaining
  elements to see if they add up to the target. If they do, return true.
  Otherwise, return false.
*/

/*
  Add written explanation of your solution here
  If the element in the array is larger than the target, there is no need to check the other
  elements because there is no number in the array that can be added to achieve the target value.
  If the element is smaller, then the remaining elements must be checked in order to see if any of
  them add up to the target value. The last element does not need to be checked because it was
  already attempted to be added to the previous elements. Once the array has been iterated through,
  then it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
