/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    let arr = [root]
    let res = []
    while (arr.length) {
        const curNode = arr[arr.length - 1]
        for (let i = curNode.children.length - 1; i >= 0; i--) {
            arr.push(curNode.children[i])
        }
        const n = arr.pop()
        res.push(n.val)
    }
    return res
};
// @lc code=end