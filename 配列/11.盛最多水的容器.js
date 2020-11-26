/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let res = 0;
  while (i < j) {
    const sum = Math.min(height[i], height[j]) * (j - i);
    height[i] < height[j] ? i++ : j--;
    res = Math.max(sum, res);
  }
  return res;
};
// @lc code=end
