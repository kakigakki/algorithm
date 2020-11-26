/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  if (!s.length) return 0;
  let count = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  while (i < g.length) {
    if (s[j] >= g[i]) {
      i++;
      count++;
    }
    j++;
    if (j === s.length) return count;
  }
  return count;
};
// @lc code=end
