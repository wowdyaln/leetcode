/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Example 1:
Input: [7, 1, 5, 3, 6, 4]
Output: 5

max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
Example 2:
Input: [7, 6, 4, 3, 1]
Output: 0

In this case, no transaction is done, i.e. max profit = 0.

直接看 discuss 的結論
重點在 curMax += prices[i] - prices[i-1]

爲什麼要這樣？？
*/

var maxProfit = function (prices) {
  let curMax = 0
  let maxSoFar = 0

  for (var i = 1; i < prices.length; i++) {
    // i
    curMax = Math.max(0, curMax += prices[i] - prices[i - 1])
    // curMax
    maxSoFar = Math.max(curMax, maxSoFar)
    // maxSoFar
  }
  return maxSoFar
};

a = [2,5,1]
kk = maxProfit(a)
kk


// Test PASS