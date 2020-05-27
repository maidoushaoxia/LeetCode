/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @description  链表中倒数第k个节点
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
  // 快慢指针
  let fast = head
  let slow = head
  for(let i = 0;i < k;i++) {
    fast = fast.next
  }
  while(fast) {
    fast = fast.next
    slow = slow.next
  }
  return slow
};