/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let slow = head;
  let fast = head;
  let hasMeet = false;
  while (fast && fast.next) {
    slow = slow.next;
    if (hasMeet) {
      fast = fast.next;
    } else {
      fast = fast.next.next;
    }
    if (fast === slow) {
      if (!hasMeet && fast !== head) {
        hasMeet = true;
        fast = head;
      } else {
        return fast;
      }
    }
  }
  return null;
};
// @lc code=end
