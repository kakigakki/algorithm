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
    let valid = (node, upper, lower) => {
        if (!node) return true
        if (node.val >= upper || node.val <= lower) return false
        return valid(node.left, node.val, lower) && valid(node.right, upper, node.val)
    }
    return valid(root, Infinity, -Infinity)
};
// @lc code=end