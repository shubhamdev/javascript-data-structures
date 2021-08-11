
class Node {
  constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
  }
}
class BinarySearchTree {
  constructor(){
      this.root = null;
  }
  insert(value){
    var newNode = new Node(value);
    if(!this.root){
      this.root = newNode;
      return this;
    } else {
      var inserted = true;
      var current  = this.root;
      while(inserted){
        if(value === current.value){
          return undefined;
        }
        //     10        <  3
        // Right
        if(current.value < value){
          if(current.right === null){
            current.right = newNode;
            return this;
          }
          current = current.right;
        } 
        //     10        >  3
        // Left
        if(current.value > value){
          if(current.left === null){
            current.left = newNode;
            return this;
          }
          current = current.left;
        }
      }
      
    }
  }
  search(value){
    if(!this.root) return undefined;
    if(!value) return undefined;
    var current  =  this.root,
        found = false;
    while(!found && current){
      if(value === current.value){
        return current;
      }
      if(value > current.value){
        current = current.right;
      } else if(value < current.value){
        current = current.left;
      } else {
        found =  true;
      }
    }
    if(!found) return undefined;
    return current
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(18);
tree.insert(2);
tree.insert(17);
tree.insert(15)
tree.insert(9);
tree.insert(17.5);
tree.insert(15.5)
tree.insert(11);
console.log(tree.search(15.5))
console.log(tree)