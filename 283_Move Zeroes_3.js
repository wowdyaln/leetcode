/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example,                   given nums = [0, 1, 0, 3, 12],
after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.

由右到左 逐一檢查0，碰到 0 就刪除
每碰到一個 0 、刪除後 就加1個記錄
全部刪除完了之後
建立一個新的 array ，之前刪除了幾個 0 就補上幾個
原來的 array.concat(0的array)

* @return {void} Do not return anything, modify nums in-place instead.
題目要求我們不要回傳任何東西，只要改變原本 array 就好
*/



a = [0, 1, 0, 3, 12]
a = [0, 1, 0, 3, 12]
a = [0, 1, 0, 3, 12]
a = [0, 1, 0, 3, 12]


function moveZeroes(nums) {
  nums
  for (var i = nums.length-1; i>=0; i--){
    i
    nums
    if ( nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
    }
  }
}

test PASS!!!!

function moveZeroes(nums) {
  for (var i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
    }
  }
}


// 最快的方法，奇妙！！

var moveZeroes = function (nums) {
  nums
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
      // j 記錄有幾個不是 0

      j
      nums
    }
  }
  j
  for (let index = j; index < nums.length; index++) {
    index
    nums
    nums[index] = 0;
  }
};

moveZeroes(a)

a