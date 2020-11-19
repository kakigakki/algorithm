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
    let ser = (node,str)=>{
        if(!node){
            str+="null,"
        }else{
            str+=node.val+","
            str =ser(node.left,str)
            str =ser(node.right,str)
        }
        return str
    }
    return ser(root,"")
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let arr = data.split(",")
    let deser = (node)=>{
        const ele = +arr.shift()
        if(isNaN(ele)) return null
        node = new TreeNode(ele)
        node.left= deser()
        node.right=deser()
        return node 
    }
    return deser()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

