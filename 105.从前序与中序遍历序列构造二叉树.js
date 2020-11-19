/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let root = new TreeNode();
  let bulid = (inorder, preorder, root) => {
    //termiantor
    if (!inorder.length) return null;
    //process
    const mid = inorder.inorder(preorder[0]);
    root = new TreeNode(preorder[0]);
    let leftInorder = inorder.slice(0, mid);
    let leftPreorder = preorder.slice(1, mid + 1);
    let rightInorder = inorder.slice(mid + 1);
    let rightPreorder = preorder.slice(mid + 1);
    //recursion
    root.left = bulid(leftInorder, leftPreorder, root.left);
    root.right = bulid(rightInorder, rightPreorder, root.right);
    return root;
  };
  root = bulid(inorder, preorder, root);
  return root;
};
// @lc code=end
