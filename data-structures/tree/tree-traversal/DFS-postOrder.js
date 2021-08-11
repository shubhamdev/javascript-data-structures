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
 
  DFSPostOrder() {
    var data = [];
    function traverse(node){
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
      data.push(node.value)
    }
    traverse(this.root)
    return data;
  }
}

var tree = new BinarySearchTree();

//                20
//         15               25
//    10       13        23     30
//  2    3  12    14  21            40

// Starting point = > 3
// End point = > 20
// Output => [3,  2, 12, 14, 13, 10,15, 21, 23, 40, 30, 25,20]      
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

//          10
//       6      15
//     3   8       20

// 
// tree.insert(10);
// tree.insert(6);
// tree.insert(15);
// tree.insert(3);
// tree.insert(8);
// tree.insert(20);

console.log(tree.DFSPostOrder())