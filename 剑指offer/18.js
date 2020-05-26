/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @description 删除链表的节点
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
  if (head.val === val) return head.next
  let pre = head
  let cur = head.next
  // 遍历，找到目标节点
  while (cur !== null && cur.val !== val) {
    pre = cur
    cur = cur.next
  }
  // 删除节点
  if (cur.val !== null) {
    pre.next = cur.next
  }

  return head
};
