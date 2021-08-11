class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  search(value) {
    if (!this.root) return undefined;
    if (!value) return undefined;
    var current = this.root,
      found = false;
    while (!found && current) {
      if (value === current.value) {
        return current;
      }
      if (value > current.value) {
        current = current.right;
      } else if (value < current.value) {
        current = current.left;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current
  }
  bfs() {
    var node = this.root,
        vistedNode = [],
        queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      console.log(node)
      vistedNode.push(node.value)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    return vistedNode;
  }
}

var tree = new BinarySearchTree();

//                20
//         15               25
//    10       13        23     30
//  2    3  12    14  21            40

// Output => [20, 15, 25, 10, 13, 23, 30, 2, 3, 12, 14, 21, 40]

tree.insert(20);
tree.insert(15);
tree.insert(25);
tree.insert(10);
tree.insert(13);
tree.insert(23)
tree.insert(30);
tree.insert(2);
tree.insert(3)
tree.insert(12);
tree.insert(14);
tree.insert(21);
tree.insert(40);
console.log(tree.bfs())