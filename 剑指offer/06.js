/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @description: 从尾到头打印链表
 * @param {ListNode}: head
 * @return {number[]}
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
  let arr = []
  if (!head) return []
  while(head) {
    // unshift方法耗时84ms
    // arr.unshift(head.val)

    // push + reverse方法耗时76ms
    arr.push(head.val)
    head = head.next 
  }
  return arr.reverse()
};