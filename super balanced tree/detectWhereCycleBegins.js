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
var detectCycle = function(head) {
    // use two pointers fast and slow
    // fast will go 2x slow
    let fast = head.next.next; // HANDLE POSSIBLE type error
    let slow = head;
    let meetingPoint;
    while(fast && slow){
        console.log(fast.val, slow.val);
        if(Object.is(fast,slow)){
            meetingPoint = fast;
        }
        slow = slow.next;
        if(slow)
            fast = slow.next;
    }
    
    if(meetingPoint){
        slow = head;
        while(slow && fast){
            if(Object.is(fast,slow)){
                return fast;
            }
            slow = slow.next;
            fast = slow;
        }
    } 
    return null;
    
    // iterate untill they find eachother, create "meetingPoint" and point it to the meeting point
    
    // iterate with slow starting from head and fast from meetingPoint
    // both will move at 1x speed
    // the node where they meet is where the cycle begins
    
    
};/**
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
var detectCycle = function(head) {
    // use two pointers fast and slow
    // fast will go 2x slow
    if(head== null || head.next == null){
        return null;
    }
    let fast = head.next.next; // HANDLE POSSIBLE type error
    let slow = head;
    let meetingPoint;
    while(fast && slow){
        if(Object.is(fast,slow)){
            meetingPoint = fast;
            break;
        }
        slow = slow.next;
        if(slow)
            fast = fast.next.next;
    }
    console.log(meetingPoint);
    if(meetingPoint){
        slow = head;
        while(slow && fast){
            if(Object.is(fast,slow)){
                return fast;
            }
            slow = slow.next;
            fast = fast.next;
        }
    } 
    return null;
    
    // iterate untill they find eachother, create "meetingPoint" and point it to the meeting point
    
    // iterate with slow starting from head and fast from meetingPoint
    // both will move at 1x speed
    // the node where they meet is where the cycle begins
    
    
};

function ListNode(val) {
         this.val = val;
         this.next = null;
     }
head = new ListNode(3);
head.next = new ListNode(2);
let cycle = head.next;
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = cycle;

detectCycle(head);


// [-1,-7,7,-4,19,6,-9 HERE,-5,-2,-5]