/**
 * 
 * @param {Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

 * You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.} head 

 Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL


Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL
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
var oddEvenList = function(head) {
    let resHead = new ListNode(-1);
    let resNode = resHead;
    let node = head;
    while(node){
        resNode.next = new ListNode(node.val);
        resNode = resNode.next;
        if(node.next == null){
            break;
        }
        node = node.next.next;
    }
    
    node = head.next;
    while(node && node.next){
        resNode.next = new ListNode(node.val);
        resNode = resNode.next;
        if(node.next == null){
            break;
        }
        node = node.next.next;
    }
    
    return resHead.next;
};

function ListNode(val) {
         this.val = val;
         this.next = null;
     }
head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

oddEvenList(head);


// [-1,-7,7,-4,19,6,-9 HERE,-5,-2,-5]