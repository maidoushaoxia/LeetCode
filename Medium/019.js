/*
 * @Author: shaoyun
 * @Date: 2019-09-02 17:26:56
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-02 17:54:13
 * @Description: 删除链表的倒数第N个节点
 * 定义快慢双指针，先让快指针跑n步，这时候慢指针开始跑，当快指针到达终点时，慢指针的下一个节点就是要删除的的倒数第n个节点。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let fast = head
  for (let i = 0;i < n;i++) {
    fast = fast.next // 快指针先跑
  }

  // 若n为链表长度，则删除头结点
  if (!fast) {
    return head.next
  }

  let slow = head
  // 当fast到达链表尾时停止前进
  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }

  // 此时慢指针的下一个节点就是倒数第n个节点，删除该节点
  slow.next = slow.next.next
  return head
};
