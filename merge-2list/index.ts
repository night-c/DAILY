// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/merge-two-sorted-lists
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

interface ListNode {
  value: number;
  next: ListNode;
}

const impl = (l1: ListNode, l2: ListNode): ListNode => {
  if (l1 != null && l2 != null) {
    // 借助一个新的头节点
    const prehead: ListNode = { value: -1, next: null }
    let prev = prehead
    while (l1.value && l2.value) {
      if (l1.value < l2.value) {
        prev.next = l1
        l1 = l1.next
      } else {
        prev.next = l2
        l2 = l2.next
      }
      prev = prev.next
    }
    // 连接剩余节点
    prev.next = l1 == null ? l2 : l1
    return prehead.next
  }
  return l1 || l2
}
