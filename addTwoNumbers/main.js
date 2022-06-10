var addTwoNumbers = function(l1,l2){
  let carry = 0
  let prevNode = new ListNode()
  let headNode = prevNode
  while(l1 || l2 || carry){
    let value1 = 0
    let value2 = 0
    if(l1){
      value1 = l1.val
      l1 = l1.next
    }
    if(l2){
      value2 = l2.val
      l2 = l2.next
    }
    let sum = value1 + value2 + carry
    carry = sum > 9 ? 1 : 0
    let num = sum % 10
    let currNode = new ListNode(num)
    prevNode.next = currNode
    prevNode = currNode
  }
  return headNode.next
}