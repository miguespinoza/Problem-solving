/* *
 * @param {*} k
 * @param {*} v
 */

var Node = function(k, v) {
  this.val = v;
  this.key = k;
  this.prev = null;
  this.next = null;
};

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.cache = new Map();
  this.head = new Node(0, 0);
  this.tail = new Node(0, 0);
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

LRUCache.prototype.remove = function(node) {
  let prev = node.prev;
  let next = node.next;
  prev.next = next;
  next.prev = prev;
};

LRUCache.prototype.add = function(node) {
  let p = this.tail.prev;
  p.next = node;
  this.tail.prev = node;
  node.prev = p;
  node.next = this.tail;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.cache.has(key)) {
    const valNode = this.cache.get(key);
    this.remove(valNode);
    this.add(valNode);
    return valNode.val;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
    this.remove(this.cache.get(key));
  }
  let newNode = new Node(key, value);
  this.add(newNode);
  this.cache.set(key, newNode);

  if (this.cache.size > this.capacity) {
    let nodeToDelete = this.head.next;
    this.remove(nodeToDelete);
    this.cache.delete(nodeToDelete.key);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let cache = new LRUCache(2 /* capacity */);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // returns 1
cache.put(3, 3); // evicts key 2
cache.get(2); // returns -1 (not found)
cache.put(4, 4); // evicts key 1
cache.get(1); // returns -1 (not found)
cache.get(3); // returns 3
cache.get(4); // returns 4
