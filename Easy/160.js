/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var p = headA;
    var q = headB;
    //有一个为空
    if(p == null || q == null){
      return null;
    }
    //头节点相等
    if(p == q){
      return p;
    }

    var countA = 0;
    var countB = 0;
    //计算链表长度
    while(p != null){
      countA ++;
      p = p.next;
    }
    while(q != null){
      countB ++;
      q = q.next;
    }

    var p = headA;
    var q = headB;
    //让长链表先走完多出的长度,剩下的节点数与另一条相等
    if(countA < countB){
      for(let i=countA;i<countB;i++){
        q = q.next;
      }
    }
    if(countB < countA){
      for(let i=countB;i<countA;i++){
        p = p.next
      }
    }

    //两个指针相等就是交点
    while(p != null && q != null){
      if(p == q){
        return p;
      }
      p = p.next;
      q = q.next;
    }

    //没有则返回null
    return null;
};
