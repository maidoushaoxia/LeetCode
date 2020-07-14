/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @description 复制复杂链表
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) return null
    const map = new Map()
    let node = head
    while(node) {
    // 保存原节点与复制节点的映射关系
      map.set(node, new Node(node.val))
      node = node.next
    }

    // 复制random指针
    node = head
    while(node) {
      map.get(node).next = map.get(node.next) || null
      map.get(node).random = map.get(node.random) || null
      node = node.next
    }

    return map.get(head)
};