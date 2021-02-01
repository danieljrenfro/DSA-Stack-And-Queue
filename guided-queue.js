class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    // instantiate a new node with the given data.
    const node = new _Node(data);

    // if the first place is empty in the queue, meaning the queue itself is empty, then insert the new node into the first position.
    if (this.first === null) {
      this.first = node;
    }

    // if there is a node in the last position of the queue, make sure that that node is pointing to our newly created node.
    if (this.last) {
      this.last.next = node;
    }

    // Set the last position in the queue equal to our newly created node.
    this.last = node;
  }
  // Since we only ever add to the end of the queue, the time complexity is O(1).

  dequeue() {
    // if the queue is empty, return and do nothing else. There is not item to remove.
    if (this.first === null) {
      return;
    }

    // Find the node that is in the first position, assign it to a variable.
    const node = this.first;

    // Change the value of the first item in the queue to the next item in the queue, effectively removing the first item from the queue.
    this.first = this.first.next;

    // if the node that we are removing is in fact the last node as well as the first node, then we need to set the last item in the queue to null.
    if (node === this.last) {
      this.last = null;
    }

    // then we just need to return the value that we removed.
    return node.value;
  }
  // Since we only ever remove items in a queue from the beginning of the list, our time complexity is O(1).

}