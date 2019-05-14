/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var p1 = head;
    var p2 = head;

    while(p2 !== null && p2.next !== null){    //因为p2是快指针,先到达终点
      p1 = p1.next;
      p2 = p2.next.next;
      if(p1 == p2){
        return true;
      }
    }
    return false;
};
