/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let res = [];
  //空间换时间的思想，防止选定的数，重新被选
  let visited = new Array(nums.length);

  let helper = (path) => {
    if (path.length === nums.length) {
      res.push(path.slice());
    }
    //防止相同层级的相同元素重复插入到path中的同一个位置
    let subVisited = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
      if (visited[i] || subVisited[nums[i]]) continue;
      visited[i] = true;
      subVisited[nums[i]] = true;
      path.push(nums[i]);
      helper(path);
      path.pop();
      visited[i] = false;
    }
  };

  helper([]);
  return res;
};
// @lc code=end
