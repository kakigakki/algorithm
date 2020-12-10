/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let helper = (node, str) => {
        if (!node) {
            str += "null,"
            return str
        } else {
            str += node.val + ","
        }
        str = helper(node.left, str)
        str = helper(node.right, str)
        return str
    }
    return helper(root, "")
};

var deserialize = function(data) {
    const arr = data.split(",")
    let helper = () => {
        const newNode = +arr.shift()
        let root = null
        if (!isNaN(newNode)) {
            root = new TreeNode(newNode)
            root.left = helper()
            root.right = helper()
        }
        return root
    }
    return helper()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end