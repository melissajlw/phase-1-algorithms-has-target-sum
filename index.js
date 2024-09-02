function hasTargetSum(array, target) {
  // Write your algorithm here
  // create an object to keep track of all the numbers seen previously
  const seenNums = {};
  for (const num of array) {
    // for the current num, find the complementary num that adds up to the target
    const comp = target - num;
    // check to see if the complement has been seen in the array
    // if it has, then two numbers exist that add up to the target, return true
    if (seenNums[comp]) return true
    seenNums[num] = true;
  }
  // if the end of the array is reached, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
  The time complexity of this algorithm is O(n)
*/

/* 
  Add your pseudocode here
  For each number in the array, store it in an object and check to see if a number in the
  array has been seen before that adds up to the target (the complement). If the complement has
  been seen before, return true. Otherwise, move on the next element. If the end of the array
  has been reached, than none of the array numbers have complements in the array that add up to
  target, return false.
*/

/*
  Add written explanation of your solution here
  For numbers in an array to add up to the target value, it must have a complementary number
  in the array (target - number). As the array is iterated through, the value is stored for 
  comparison for future elements. If a number's complement exist, it will be stored in an object
  as a key. Otherwise, no two numbers exist that add up to the target.
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
