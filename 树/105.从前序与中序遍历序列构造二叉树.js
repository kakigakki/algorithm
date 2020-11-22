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
//从前序遍历中获取第一个元素为根节点
//从中序遍历中找到根节点，然后找到左右子树
//然后递归
// var buildTree = function(preorder, inorder) {
//     if (inorder.length === 0) {
//         return null;
//     }
//     let nodeVal = preorder[0];
//     const mid = inorder.indexOf(nodeVal);
//     let node = new TreeNode(nodeVal);
//     node.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
//     node.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
//     return node;
// };

var buildTree = function(preorder, inorder) {
    let map = {}
    for (let i = 0; i < inorder.length; i++) {
        map[inorder[i]] = i
    }
    let bulid = (pStart, pEnd, iStart, iEnd) => {
        if (iStart === iEnd) {
            return null;
        }
        let nodeVal = preorder[pStart];
        const mid = map[nodeVal]
        let node = new TreeNode(nodeVal)
        node.left = bulid(pStart + 1, mid + 1, iStart, mid);
        node.right = bulid(mid + 1, pEnd, mid + 1, iEnd);
        return node;
    };

    return bulid(0, preorder.length, 0, inorder.length);
};
// @lc code=end