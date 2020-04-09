/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    // 3 pointers
        // Start is from where we would start reversing a group
        // end is where a group ends
        // remainder is the remainder objects
        
    // start with start, end, remainder = head
    let dummy = new ListNode(-1);
    dummy.next = head;
    let start= dummy, remainder = head;
    let counter = 1;
    while(head != null){
        counter++;
        if(counter % k === 0){
            start = reverse(start, head.next);
            head = start.next;
        }else{
            head = head.next;
        }
    }
    
    return head;
    
};

var reverse = function(head, end) {
    let current = head.next;
    let next,first;
    first = current;
    let prev = head;
    while(current !== end){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next
    }
    head.next = prev;
    first.next  = curr;
    return first;
};

// 1->2->3->4->5

function ListNode(val) {
         this.val = val;
         this.next = null;
    }
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

reverseKGroup(head, 2);