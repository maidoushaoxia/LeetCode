/*
 * @Author: shaoyun
 * @Date: 2019-09-07 18:35:26
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-07 19:53:17
 * @Description: 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    // 新建一个空的头结点来保存整个链表的访问
    let node = new ListNode(0)
    let pre = node
    pre.next = head

    while(pre.next && pre.next.next) {
      let cur = pre.next
      let next = cur.next
      let temp = next.next
      // 需要改变节点的引用
      cur.next = temp
      next.next = cur
      pre.next = next
      pre = cur
    }
    return node.next
};
