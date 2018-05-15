/*
Given an array of size n, find the majority element.
The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

sort first

the length is even
[1,1,1,3, 3 ,3,3,3,4]
中位數的概念

the length is odd
[1,1,1,3,  3,3,3,3]
中位數的概念

*/
a = [1]
a = [3, 3, 4]


var majorityElement = function (nums) {
  if (nums.length === 1){
    return nums[0]
  } else {
    nums.sort((a, b)=> a -b)
    let even, odd
    if (nums.length % 2 === 0){
      even = [nums.slice(0, nums.length/2), nums.slice(nums.length/2, nums.length)]
      return nums[nums.length/2]
    } else {
      odd = [nums.slice(0, Math.ceil(nums.length/2)), nums.slice(Math.ceil(nums.length/2), nums.length)]
      return nums[Math.ceil(nums.length/2)]
    }
  }
};



//

var majorityElement = function (nums) {
  if (nums.length === 1) {
    return nums[0] 
  } else {
    nums.sort((a, b) => a - b)
    if (nums.length % 2 === 0) {
      return nums[nums.length / 2]
    } else {
      return nums[Math.ceil(nums.length / 2-1)]
    }
  }
};
a
c = Math.ceil(5 / 2)
c = majorityElement(a)
c