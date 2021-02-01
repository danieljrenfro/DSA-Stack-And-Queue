class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  // Places data onto the top of a stack
  push(data) {
    // if the stack is empty, execute this block of code
    if (this.top === null) {
      // set the top of the stack to a new node with the data and the next pointer pointing to nothing.
      this.top = new _Node(data, null);
      // then stop the code from further executing by returning the top of the stack.
      return this.top;
    }

    // otherwise, if the stack is not empty, then we will create a new node with the data whose next pointer is pointing at the current top of the stack.
    const node = new _Node(data, this.top);
    // then, we'll reset the top of the stack to the new node, thus pushing down the rest of the data down a level.
    this.top = node;
  }
  // Time complexity for adding elements to a stack is O(1).

  // Removes data from the top of the stack
  pop() {
    // store the top of the stack in a variable.
    const node = this.top;
    // set the top of the stack to equal the next node below the current top. This effectively removes the old top of the stack from the stack.
    this.top = node.next;
    // we then return the data from the removed node.
    return node.data;
  }
  // Time complexity for removing elements from a stack is O(1).
}