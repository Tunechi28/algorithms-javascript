/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  
  And you put xdescribe instead of describe if you want to suspend running the unit tests.  
*/

function insertionSort(nums) {
  // code goes here
  //insertion sort
  for(let i=1; i<nums.length; i++) {
    let j =i;
    while(j>0 && nums[j] < nums[j-1]){
      [nums[j], nums[j-1]] = [nums[j-1], nums[j]];
      j--;
    }
  }
}



function insertionSort2 (nums) {
  for (let i =1; i< nums.length; i++) {
    let j;
    const temp = nums[i];
     for(j = i -1; j >=0 && nums[j] > temp; j--) {
       nums[j+1] = nums[j];
     }
      nums[j+1] = temp;
  }
}

// [2,3,5,4,1]

// unit tests
// do not modify the below code
test("insertion sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  insertionSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
