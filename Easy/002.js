/*
 * @Author: shaoyun
 * @Date: 2019-08-15 16:10:08
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-08-16 15:04:48
 * @Description: 两数相加
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // 创建保存结果链表的头节点
    let result = new ListNode(null)
    let nextRst = result

    let carry = 0 // 进位
    let val = 0 // 对应位上的值

    while (l1 !== null || l2 !== null) {
      let x = (l1 !== null) ? l1.val : 0
      let y = (l2 !== null) ? l2.val : 0

      val = (x + y + carry) % 10
      carry = parseInt((x + y + carry) / 10)

      // 将结果存在链表里
      nextRst.next = new ListNode(val)
      
      // 将指针指向下一位
      nextRst = nextRst.next
      // 计算下一位
      if (l1 !== null) l1 = l1.next
      if (l2 !== null) l2 = l2.next
    }
    
    // 最后还有进位，则链表新增一个节点
    if (carry) {
      nextRst.next = new ListNode(carry)
    }
    return result.next
};