/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let i = 0;
  let j = 1;
  let res = 0;
  while (j < prices.length) {
    if (prices[i] >= prices[j]) {
      i++;
    } else {
      res += prices[j] - prices[i];
      i = j;
    }
    j++;
  }
  return res;
};
// @lc code=end
