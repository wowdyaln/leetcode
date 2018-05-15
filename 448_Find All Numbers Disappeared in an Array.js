/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array),
some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime?
You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

sort ->
sortNums = [1,2,2,3,3,4,7,8]

find the biggest number 'N' (8)
create a array: from 1 to N （）
oneToN = [1,2,3,4,5,6,7,8]

oneToN 每個 ele 丟到 sortNums 去判斷有沒有存在
有： 繼續下一個 ele

沒有：把這個 ele 存起來

 * @param {number[]} nums
 * @return {number[]}
 * 
 * 
特殊狀況：
[1,1] => [2]
[2,2] => [1]
[] => []
*/
// serialize numbers
function serialize(n){
  let output = []
  for (var i = 1; i <= n; i++){
    output.push(i)
  }
  return output
}


var findDisappearedNumbers = function (nums) {
  let output = []
  sortNums = nums.sort( (x,y) => x-y)
  // sortNums

  let biggestN = Math.max( 
    nums.length, sortNums[sortNums.length-1]
  )

  let oneToN = serialize( biggestN )
  // oneToN
  oneToN.forEach( ele => {
    if (sortNums.includes(ele)) {
      return
    } else {
      output.push(ele)
    }
  })
  return output
};



// a = findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])
// a = findDisappearedNumbers([1])
// a

// kk = a.includes(2)
// kk

// OK， 但是  Time Limit Exceeded
// 想不出更快的方式了


//Answer
 function answer_448(nums) {
   nums
    var actual,
        i,
        res = [];
    
        actual
        i
        res
    for(i = 0; i < nums.length; i++){
      i
        actual = Math.abs(nums[i]) - 1;
        actual
        nums[actual]
        if(nums[actual] > 0)
            nums[actual] *= -1;
    }
    
    for(i = 0; i < nums.length; i++){
        if(nums[i] > 0)
            res.push(i+1);
    }
    res
    return res;
};

a = answer_448([4,9,2,2,9,5])
a