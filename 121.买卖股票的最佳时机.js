/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0;
  let i = 0;
  let j = 1;
  while (i < prices.length) {
    if (prices[i] < prices[j]) {
      res += prices[j] - prices[i];
      console.log(res);
      i = j;
    } else {
      i++;
    }
    j++;
  }
  return res;
};
// @lc code=end
