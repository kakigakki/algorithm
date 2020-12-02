/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */

//迭代解法
var preorder = function(root) {
    let arr = [root]
    let res = []
    while (arr.length) {
        const node = arr.pop()
        if (node) {
            res.push(node.val)
            for (let i = node.children.length - 1; i >= 0; i--) {
                arr.push(node.children[i])
            }
        }
    }
    return res
};
// @lc code=end