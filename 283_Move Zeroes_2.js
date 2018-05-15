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

發現碰到 計數的問題
覺得可以用到 closure 這東西
*/



function killZero(arr){
  let index = arr.indexOf(0)
  if (index != -1){
    arr.splice(index, 1)
  } else {
    return
  }
}

function concatZero(arr, j){
  let zero = []
  for (var i = 0; i < j; i++){
    zero.push(0)
  }
  zero
  return arr.concat(zero);
}

var moveZeroes = function (nums) {
  let times = 0
  for (var i = 0; i < nums.length; i++){
      if (nums.includes(0)){
        killZero(nums)
        times++
    }
  }
  return concatZero(nums, times)
};