/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let hold = new ListNode(-1)
    let holdHead = hold
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            hold.next = l1
            l1 = l1.next
        } else {
            hold.next = l2
            l2 = l2.next
        }
        hold = hold.next
    }
    hold.next = l1 || l2
    return holdHead.next
};
// @lc code=end