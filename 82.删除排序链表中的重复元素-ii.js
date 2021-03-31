/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
    if (!(head && head.next)) return head
    const dummy = new ListNode(0)
    dummy.next = head
    let prev = dummy
    let cur = head
    while (cur) {
        while (cur.next && cur.val === cur.next.val) {
            cur = cur.next
        }
        //如果prev跟cur相邻的话,则正常前进
        if (prev.next == cur) {
            prev = prev.next
        } else {
            //不相邻则证明之间有跳过重复节点,prev需要跳到cur的下一个
            prev.next = cur.next
        }
        cur = cur.next
    }
    return dummy.next
};
// @lc code=end