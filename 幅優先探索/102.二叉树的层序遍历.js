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
var levelOrder = function(root) {
    if (!root) return []
    let queue = [
        [root, 0]
    ]
    let res = []
    while (queue.length) {
        const [node, level] = queue.shift();
        (res[level] || (res[level] = [])).push(node.val)
        if (node.left) {
            queue.push([node.left, level + 1])
        }
        if (node.right) {
            queue.push([node.right, level + 1])
        }
    }
    return res
};
// @lc code=end