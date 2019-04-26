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
var mergeTwoLists = function(l1, l2) {  
    var head = new ListNode(0);
    var pre = head;
    while((l1 != null) && (l2 != null)) {
      if(l1.val <= l2.val){
        pre.next = l1;
        l1 = l1.next;
      }else{
        pre.next = l2;
        l2 = l2.next;
      }
      pre = pre.next;
    }
    if(l1 == null){
      pre.next = l2;
    }
    if(l2 == null){
      pre.next = l1;
    }
    return head.next;
};
