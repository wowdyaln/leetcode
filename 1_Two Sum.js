/*
Given an array of integers, return indices of the two numbers such 
that they add up to a specific target.

You may assume that each input would have exactly one solution,
 and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
　
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * 兩個相加，所以可以先過濾掉大於 target 的 element
 * 
 * 剩下的 array 對半分成兩個 SUB array
 * arrayA ; arrayB
 * (考慮到 elements 有可能是奇數的狀況)
 * 
 * 
 *1。 arrayA 挑一個，然後 arrayB 挑第二個，
 * 兩個相加
 * 如果的等於 target 就 return
 * 如果不等於 target ；arrayB 換下一個
 * 
 * 這樣一輪之後，如果都沒有，arrayA 換下一個，重複動作 1。
 * 
 */
var twoSum = function (nums, target) {
  let new_nums = nums
  new_nums

  for (var i = 0; i < new_nums.length; i++){
    let a = new_nums[i]
    a
    for (var j = i+1; j < new_nums.length; j++){
      let b = new_nums[j]
      b
      if (a+b == target){
        return [i, j]
      } else {
        continue
      }
    }
  }


  return "not found"
};



a = twoSum([0, 4, 3, 0], 0)
a

b = [1,2,3,4,5].slice(0,2)
b

c = [1,2,3,4,5].slice(2)
c

ee = [1, 2, 3, 4]


// 整理

var twoSum = function (nums, target) {
  
  for (var i = 0; i < nums.length; i++) {
    let a = nums[i]
    for (var j = i + 1; j < nums.length; j++) {
      let b = nums[j]
      if (a + b == target) {
        return [i, j]
      } else {
        continue
      }
    }
  }
  return "not found"
};