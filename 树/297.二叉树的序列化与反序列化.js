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
var serialize = function (root) {
  let str = "";
  let ser = (str, node) => {
    if (!node) {
      str += "null,";
      return str;
    }
    str += node.val + ",";
    str = ser(str, node.left);
    str = ser(str, node.right);
    return str;
  };
  return ser(str, root);
};

var deserialize = function (data) {
  let arr = data.split(",");
  let deser = () => {
    const nodeVal = +arr.shift();
    let node = null;
    if (!isNaN(nodeVal)) {
      node = new TreeNode(nodeVal);
      node.left = deser(node.left);
      node.right = deser(node.right);
    }
    return node;
  };
  return deser();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
