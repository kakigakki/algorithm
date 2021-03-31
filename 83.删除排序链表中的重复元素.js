/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    const dummy = new ListNode(0)
    let prev = dummy
    let cur = head
    while (cur) {
        while (cur.next && cur.val === cur.next.val) {
            cur = cur.next
        }
        prev.next = cur
        prev = prev.next
        cur = cur.next
    }
    return dummy.next
};
// @lc code=end