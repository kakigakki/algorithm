/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];
  let dfs = (start, path) => {
    //terminator
    if (path.length === k) {
      //light copy
      res.push(path.slice());
    }
    //process
    for (let i = start; i <= n; i++) {
      path.push(i);
      //recursion
      dfs(i + 1, path);
      //restore
      path.pop();
    }
  };
  dfs(1, []);
  return res;
};
// @lc code=end
