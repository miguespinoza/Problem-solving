### Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

_Taken from https://leetcode.com/problems/lru-cache/_

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // returns 1
cache.put(3, 3); // evicts key 2
cache.get(2); // returns -1 (not found)
cache.put(4, 4); // evicts key 1
cache.get(1); // returns -1 (not found)
cache.get(3); // returns 3
cache.get(4); // returns 4

## SOLUTION

This problem uses a Map to keep track of values, this way the access to the map is O(1).

The hard part is to keep track of the least recently used key. for this you use a Queue
The First In First out characteristic allows you to "dequeue" the least recently used key to delete it in case of an overlfow
However you must "refresh" the key when used, weather is reading or writing to. to do this, you delete the key from the Queue and insert it again

There a two ways to explore this in JS

- Queue with array
  In JS you can emulate a queue with an array, but The delete operation necessary for the refresh will take O(n) to complete, since the only way is to filter the array
  So this is not an efficient solution

- Queue with Double Linked List
  You can emulate a queue by keeking track of the Head and Tail of the list. insert items by the tail and take them by the head.
  With a doublelinked list you can insert and delete elements with O(1) thus the algorithm is much more efficient

I implemented the solution with queue
