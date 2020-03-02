/**
 * implement a max stacmk, it also has a method called max stack which gives the max item in the stack without modifying it
 * 
 * I used a Lined list
 * Another stack would work just fine
 */

// Implement the push, pop, and getMax methods
class LLNode {
    constructor(val){
      this.val = val;
      this.next = null;
    }
  }
  
  
  class MaxStack {
    constructor() {
      this.stack = new Stack();
      this.max = null;
    }
  
    push(item) {
      this.stack.push(item);
      if(this.max == null || this.max.val < item){
        let t = new LLNode(item);
        t.next = this.max;
        this.max = t;
      }
    }
  
    pop() {
      let n = this.stack.pop();
      if(n === this.max.val){
        this.max = this.max.next;
      }
      return n;
    }
  
    getMax() {
      return this.max ? this.max.val : 0;
    }
  }
  
  class Stack {
    constructor() {
  
      // Initialize an empty stack
      this.items = [];
    }
  
    // Push a new item onto the stack
    push(item) {
      this.items.push(item);
    }
  
    // Remove and return the last item
    pop() {
  
      // If the stack is empty, return null
      // (It would also be reasonable to throw an exception)
      if (!this.items.length) {
        return null;
      }
      return this.items.pop();
    }
  
    // Return the last item without removing it
    peek() {
      if (!this.items.length) {
        return null;
      }
      return this.items[this.items.length - 1];
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Tests
  
  const s = new MaxStack();
  s.push(5);
  
  assertEquals(5, s.getMax(), 'check max after 1st push');
  
  s.push(4);
  s.push(7);
  s.push(7);
  s.push(8);
  
  assertEquals(8, s.getMax(), 'check before 1st pop');
  assertEquals(8, s.pop(), 'check pop #1');
  assertEquals(7, s.getMax(), 'check max after 1st pop');
  assertEquals(7, s.pop(), 'check pop #2');
  assertEquals(7, s.getMax(), 'check max after 2nd pop');
  assertEquals(7, s.pop(), 'check pop #3');
  assertEquals(5, s.getMax(), 'check max after 3rd pop');
  assertEquals(4, s.pop(), 'check pop #4');
  assertEquals(5, s.getMax(), 'check max after 4th pop');
  
  function assertEquals(a, b, desc) {
    if (a === b) {
      console.log(`${desc} ... PASS`);
    } else {
      console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
  }