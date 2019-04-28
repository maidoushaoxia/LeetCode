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
var deleteDuplicates = function(head) {
    var point = head;
    if(point == null){
      return null;
    }
    while(point.next != null){
      if(point.val == point.next.val){
        point.next = point.next.next;
      }else{
        point = point.next;         //出现的错误:一定要有else,否则指针就直接指向链表尾
      }
    }

    return head;
};
