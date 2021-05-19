// In JavaScript, a linked list looks like this:

// const list = {
//   head: {
//     value: 6,
//     next: {
//       value: 10,
//       next: {
//         value: 12,
//         next: {
//           value: 3,
//           next: null
//         }
//       }
//     }
//   }
// }

// An advantage of Linked Lists:
// * Nodes can easily be removed or added from a linked list without reorganizing
// * The entire data structure. This is one advantage it has over arrays. 

// Disadvantages of Linked Lists:
// * Search operations are slow.Unlike arrays, random access of data elements are not allowed.
//   Nodes are accessed sequentially starting from the first node.
// * It uses more memory than arrays because of the storage of the pointers. 



// IMPLEMENTING A LIST NODE IN JAVASCRIPT
// A list node contains two items: the data and the pointer to the next node. 

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null 
  }
}

// IMPLEMENTING A LINKED LIST IN JAVASCRIPT
// Notice that if the head node is not passed, the head is initialised to null. 

class LinkedList {
  constructor(head = null) {
    this.head = head 
  }
}
  
// PUTTING IT ALL TOGETHER

// First, we create two list nodes, node1 and node2 and a pointer from node1 to node2.
let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2

// Next, we'll create a Linked list with the node1. 
let list = new LinkedList(node1)

// Then, let's try to access the nodes in the list we just created.
console.log(list.head.next.data)
// returns 5 



// SOME LinkedList HELPER METHODS: 

// 1. size() - this method returns the number of nodes present in the linked list. 

size() {
  let count = 0;
  let node = this.head;
  while (node) {
    count++;
    node = node.next
  }
  return count; 
}

// 2. clear() - this method empties out the list. 

clear() {
  this.head = null; 
}

// 3. getLast() - this method returns the last node of the linked list. 

getLast() {
  let lastNode = this.head;
  if (lastNode) {
    while (lastNode.next) {
      lastNode = lastNode.next
    }
  }
  return lastNode;
}

// 4. getFirst() - this method returns the first node of the linked list. 

getFirst() {
  return this.head; 
}