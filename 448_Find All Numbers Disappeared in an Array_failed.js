
/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array),
some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime?
You may assume the returned list does not count as extra space.

乍看之下簡單
Example:

Input:
[4,3,2,7,8,2,3,1]

sort ->
[1,2,2,3,3,4,7,8]

7-4 => 3

兩兩 eles 比較差距
差距是 0 或是 1 的話，跳過繼續下一個
差距是 2 以上，（假設是 diff ）, 就push :   ele+1 , ele+2 , ... , (ele + diff-1)

Output:
[5,6]

1.先找出那個 ele 最大 N，然後製作一個 1~N 的 arrayN
2. 從 arrayN 裏面一個個拿出來，判斷是不是在 nums 裏面
3。 如果有在 nums 裏面，
 * @param {number[]} nums
 * @return {number[]}
 * 
 * 
特殊狀況：
[1,1] => [2]
 * 
 */

 //sort array

// b = [1,1]
// b = [4, 3, 2, 7, 8, 2, 3, 1]
b = []
// c = b.sort( (x,y)=> x-y)
// c

// function gaps(n1, n2, missNum){
//   var missNum = []
  
//     let gap = n2-n1

//     for (var i = 1; i < gap; i++ ){
//       missNum.push( n1+i);
//     }
//     return missNum
// }



// a = gaps(3,7)
// a

// arr = [1, 1]

// function noGap(arr){
//   if (arr == []){
//     return []
//   }
//   let max = Math.max(...arr)
//   if (max == arr.length){
//     return [max]
//   } else {
//     return [arr.length]
//   }
// }

// cc = noGap(arr)
// cc


// var findDisappearedNumbers = function (nums) {
//   nums
//   let sortArray = nums.sort( (x,y) => x-y)
//   let container = []
//   let missNs = []

//   for (var i =0; i < sortArray.length; i++){
//     var n1 = sortArray[i]
//     var n2 = sortArray[i+1]

//     if (n2-n1 > 1) {
//       missNs.push( gaps(n1, n2, container) )
//     }
//   }

//   missNs
//   if (missNs == false) {
//     let output = noGap(sortArray)
//     return output
//   } else {
//     let output = [].concat(...missNs)
//     return output
//   }

// };

b


// 整理
function gaps(n1, n2, missNum) {
  var missNum = []
  let gap = n2 - n1

  for (var i = 1; i < gap; i++) {
    missNum.push(n1 + i);
  }
  return missNum
}

function noGap(arr) {
  let max = Math.max(...arr)
  if (max == arr.length) {
    return [max]
  } else {
    return [arr.length]
  }
}

var findDisappearedNumbers = function (nums) {
  if (nums == false){
    return []
  } else {
    let sortArray = nums.sort((x, y) => x - y)
    let container = []
    let missNs = []
  
    for (var i = 0; i < sortArray.length; i++) {
      var n1 = sortArray[i]
      var n2 = sortArray[i + 1]
  
      if (n2 - n1 > 1) {
        missNs.push(gaps(n1, n2, container))
      }
    }
    if (missNs == false) {
      let output = noGap(sortArray)
      return output
    } else {
      let output = [].concat(...missNs)
      return output
    }
  }
};



kk = findDisappearedNumbers(b)
kk
kk

// 不能用這樣的邏輯，會變的非常複雜