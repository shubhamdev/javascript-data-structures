class Node {
  constructor(val){
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value){
    var newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
  pop(){
    if(!this.head) return undefined;
    var tail = this.tail;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
       this.tail = tail.prev;
        this.tail.next = null;
        tail.prev = null;
        this.length--;
    }
    return tail;
  }
  shifting(){
     if(!this.head) return undefined;
     var removed = this.head
     if(this.length === 1){
       this.head = null;
       this.tail = null;
     } else {
        var next = this.head.next;
        next.prev = null;
        this.head = next;
        this.length--;
     }
     return removed;
  }
  unshift(value){
    if(this.length === 0){
      this.push(value);
    } else {
      var newNode = new Node(value);
      var oldNode = this.head;
      newNode.next = oldNode;
      this.head = newNode;
      this.length++;
      return this;
    }
  }
  get(index){
    if(index < 0 || index >= this.length) return null;
    var counter = 0;
    var current  = this.head;
    if(index <= this.length/2){
     while(counter !== index){
        counter += 1;
        current = current.next;
      }
      return current;
    } else {
      counter = this.length -1;
      current = this.tail;
      while(counter !== index){
        counter--;
        current = current.prev;
      }
      return current;
    }
  }
  set(value, index){
    var data = this.get(index);
    if(data){
      data.val = value;
      return true;
    }
    return false;
  }
  insert(value, index){
    if(index < 0 || index >= this.length) return null;
    if(index === 0) return this.unshift(index);
    if(index === 1) return this.push(value);
    var newNode = new Node(value);
    var beforeNode =  this.get(index-1);
    var afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    afterNode.prev = newNode;
    newNode.next = afterNode;
    this.length += 1;
    return true;
  }
  remove (index){
    if(index < 0 || index >= this.length) return null;
     if(index === 0) return this.shift(index);
     if(index === this.length -1) return this.pop();
     // A B C D
     // A B D
     var current = this.get(index);
     var beforeNode = current.prev;
     var afterNode = current.next;
     beforeNode.next = afterNode;
     afterNode.prev = beforeNode;
     current.next = null;
     current.prev = null;
     this.length--;
     return true;
  }
}

var dll = new DoublyLinkedList();
dll.push(10);
dll.push(11);
dll.push(12);
dll.push(13);
dll.push(14);
dll.push(15);
dll.push(16);
dll.push(17);
dll.push(18);
dll.push(19);
dll.push(20);
console.log(dll);