class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value) {
    var newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
  }
  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    --this.size;
    return temp.value;
  }
}

var stack = new Stack();
stack.push(20);
stack.push(21);
stack.push(22);
stack.push(23);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(stack.pop())
// console.log(stack)