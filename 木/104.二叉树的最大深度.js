/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
    let depth = (node,dep)=>{
        if(!node) return dep
        dep++
        return Math.max(depth(node.left,dep),depth(node.right,dep))
    }
    return depth(root,0)
};
// @lc code=end

