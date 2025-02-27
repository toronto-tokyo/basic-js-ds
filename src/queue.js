const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor(){
     this.head = null
  }

  getUnderlyingList() {
    return this.head

    // function myFn(node){
    //   if(node.next === null) return node
      
    //   return myFn(node.next)
    // }
  }

  enqueue(value) {

     if(this.head == null) return this.head = new ListNode(value)

    return myFn(this.head)
    
    function myFn(node){
     
     if(node.next == null) return node.next = new ListNode(value)
     
     return myFn(node.next)
    }
  }

  dequeue() {
    const deletedValue = this.head.value
    this.head = this.head.next
    return deletedValue
  }
}
 
module.exports = {
  Queue
};
