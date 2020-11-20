/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  let isValid = (node, lower, upper) => {
    if (!node) return true;
    if (node.val >= upper || node.val <= lower) return false;
    return (
      isValid(node.left, lower, node.val) &&
      isValid(node.right, node.val, upper)
    );
  };
  return isValid(root, -Infinity, Infinity);
};
// @lc code=end
