/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let res = [];
  while (queue.length) {
    let len = queue.length;
    const subRes = [];
    while (len--) {
      const curNode = queue.shift();
      subRes.push(curNode.val);
      curNode.left && queue.push(curNode.left);
      curNode.right && queue.push(curNode.right);
    }
    res.push(subRes);
  }
  return res;
};
// @lc code=end
