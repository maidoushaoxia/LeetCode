/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @description 反转链表
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // 双指针
  let cur = head, pre = null
  while (cur) {
    let temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
  }
  return pre
};