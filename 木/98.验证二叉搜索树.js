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
var isValidBST = function(root) {
    let helper = (node, upper, lower) => {
        if (!node) return true
        if (node.val >= upper || node.val <= lower) {
            return false
        }
        return helper(node.right, upper, node.val) && helper(node.left, node.val, lower)
    }
    return helper(root, Infinity, -Infinity)
};
// @lc code=end