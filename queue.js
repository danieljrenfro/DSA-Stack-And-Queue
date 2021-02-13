const Stack = require('./stack');

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

  enqueue(value) {
    const node = new _Node(value);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }

    const node = this.first;

    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }
}

class _DLNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DLLQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(value) {
    const node = new _DLNode(value);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
      node.prev = this.last;
    }

    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }

    const node = this.first;

    this.first = this.first.next;
    this.first.prev = node.prev;

    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }
}

class StackQueue {
  constructor() {
    this.oldStack = new Stack();
    this.newStack = new Stack();
  }

  enqueue(item) {
    this.oldStack.push(item);
  }

  dequeue() {
    this._reverseElement();
    return this.newStack.pop();
  }

  peek() {
    this._reverseElement();
    return this.newStack.peek();
  }

  _reverseElement() {
    if(this.newStack.isEmpty()) {
      while(!this.oldStack.isEmpty()) {
        this.newStack.push(this.oldStack.pop());
      }
    }
  }
}

function peek(queue) {
  if (queue.first === null) {
    return null;
  }

  return queue.first.value;
}

function isEmpty(queue) {
  return queue.first === null ? true : false;
}

function display(queue) {
  let queueDisplayed = 'Queue:';

  if (queue.first === null) {
    queueDisplayed += ' empty';
  }

  let currNode = queue.first;

  while (currNode !== null) {
    if (currNode === queue.first && currNode === queue.last) {
      queueDisplayed += `${currNode.value}`;
      return;
    }
    
    if (currNode === queue.first) {
      queueDisplayed += ` First: ${currNode.value}`;
    }
    else if (currNode === queue.last) {
      queueDisplayed += `, Last: ${currNode.value}`;
    }
    else {
      queueDisplayed += `, ${currNode.value}`;
    }

    currNode = currNode.next;
  }

  return queueDisplayed;
}

function secondMain() {
  const starTrekQ = new DLLQueue();

  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhara');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  starTrekQ.enqueue('Scotty');
  starTrekQ.dequeue();
  starTrekQ.dequeue();

  console.log('display(starTrekQ)', display(starTrekQ));
  console.log('starTrekQ', starTrekQ);
}

function main() {
  const starTrekQ = new Queue();
  const emptyQ = new Queue();

  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhara');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  starTrekQ.enqueue('Scotty');
  starTrekQ.dequeue();
  starTrekQ.dequeue();

  console.log('display(emptyQ)', display(emptyQ));
  console.log('display(starTrekQ)', display(starTrekQ));
  console.log('peek(emptyQ)', peek(emptyQ));
  console.log('peek(starTrekQ)', peek(starTrekQ));
  console.log('isEmpty(emptyQ)', isEmpty(emptyQ));
  console.log('isEmpty(starTrekQ)', isEmpty(starTrekQ));
}

secondMain();
main();