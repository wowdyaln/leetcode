/*
The Hamming distance between two integers is the number of positions
at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 2^31

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.-

把數字 binary 之後，從個位數開始比較
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */



var hammingDistance = function (x, y) {
  let x_binary = (x).toString(2).split("")
  let y_binary = (y).toString(2).split("")
  x_binary
  y_binary
  let xleg = x_binary.length
  let yleg = y_binary.length
  let diff = 0
  let doit = []


  function cut_apart(aryA , aryB){
    b = (xleg < yleg ? yleg : xleg)
    s = (xleg < yleg ? xleg : yleg)
    let b_ary = (xleg < yleg ? y_binary : x_binary)
    let s_ary = (xleg < yleg ? x_binary : y_binary)
    s_ary
    let left_ary = b_ary.slice(0, b - s)
    left_ary
    let right_ary = b_ary.slice(b - s)
    right_ary
    return [left_ary, right_ary, s_ary]
  }
  // ary1.length must equal ary2.length
  function howmany_diff(ary1, ary2){
    for (var i = 0; i < ary1.length; i++){
      var a = ary1[i]
      var b = ary2[i]
      if (a != b){
        diff++
      }
    }
  }

  function howmany_one(ary){
    let d = ary.filter( ele => ele == "1").length
    diff += d
  }

  if (xleg != yleg){
    doit = cut_apart(x_binary, y_binary)
    doit
    howmany_diff( doit[1], doit[2])
    howmany_one( doit[0])
  } else {
    howmany_diff( x_binary, y_binary)
  }
  return diff

};

a = (4).toString(2).split("")
a
kk = a.pop()
kk

dd = hammingDistance(0,0)
dd


// 整理
var hammingDistance = function (x, y) {
  let x_binary = (x).toString(2).split("")
  let y_binary = (y).toString(2).split("")
  let xleg = x_binary.length
  let yleg = y_binary.length
  let diff = 0
  let doit = []


  function cut_apart(aryA, aryB) {
    b = (xleg < yleg ? yleg : xleg)
    s = (xleg < yleg ? xleg : yleg)
    let b_ary = (xleg < yleg ? y_binary : x_binary)
    let s_ary = (xleg < yleg ? x_binary : y_binary)
    let left_ary = b_ary.slice(0, b - s)
    let right_ary = b_ary.slice(b - s)
    return [left_ary, right_ary, s_ary]
  }
  // ary1.length must equal ary2.length
  function howmany_diff(ary1, ary2) {
    for (var i = 0; i < ary1.length; i++) {
      var a = ary1[i]
      var b = ary2[i]
      if (a != b) {
        diff++
      }
    }
  }

  function howmany_one(ary) {
    let d = ary.filter(ele => ele == "1").length
    diff += d
  }

  if (xleg != yleg) {
    doit = cut_apart(x_binary, y_binary)
    howmany_diff(doit[1], doit[2])
    howmany_one(doit[0])
  } else {
    howmany_diff(x_binary, y_binary)
  }
  return diff
};


//////// 更好更快更單純的做法!!!!!! 多寫了 3個 function 還比較慢
var hammingDistance = function (x, y) {
  // 重要觀念 xor 可以直接用在 10 進位
  var xor = x ^ y;
  var str = xor.toString(2);
  var match = str.match(/1/g); // 用正则匹配计算个数；match 为 null 或者数组。
  return match ? match.length : 0;
};


cc = 4023^5391

cc