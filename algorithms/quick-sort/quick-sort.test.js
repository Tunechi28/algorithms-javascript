/*

  Quick Sort!
  
  Name your function quickSort.
  
  Quick sort should grab a pivot from the end and then separate the list (not including the pivot)
  into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those
  lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
  list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort
  is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.

*/

function quickSort(nums) {
  //base case, array with 0 or 1 elements is already sorted
  if(nums.length <= 1) {
    return nums;
  }

  //choose pivot
  const pivot = nums.pop();

  //separate array into two lists, one with elements less than pivot, one with elements greater than pivot
  const less = nums.filter(num => num <= pivot);
  const greater = nums.filter(num => num > pivot);

  //recursively call quickSort on both lists
  const sortedLess = quickSort(less);
  const sortedGreater = quickSort(greater);

  //concatenate the two lists and return
  // return sortedLess.concat(pivot, sortedGreater);
  return [...sortedLess, pivot, ...sortedGreater];

}

// unit tests
// do not modify the below code
test("quickSort", function () {
  const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
  const answer = quickSort(input);

  expect(answer).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
