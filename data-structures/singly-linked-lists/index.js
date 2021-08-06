
class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value){
     var node =  new Node(value)
     if(!this.head){
        this.head = node;
        this.tail = this.head;
     } else {
       this.tail.next = node;
       this.tail = node;
     }
     this.length += 1;
     return this;
  }
  pop(){
    if(!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while(current.next){
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length ===0){
      this.tail = null;
      this.head = null;
    }
    return current;
  }
  shift(){
     if(!this.head) return undefined;
     var current = this.head;
     var newHead = current.next;
     this.head = newHead;
     this.length--;
    if(this.length ===0){
      this.tail = null;
      this.head = null;
    }
    return current;
  }
  unshift(value){
    var node  = new Node(value);
    if(!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      var current = this.head;
      this.head = node;
      this.head.next = current;
    }
    this.length += 1;
    return this;
  }
  get (item) {
    if(!this.head) return undefined;
    if(item < 0 || item >= this.length) return null;
    var current = this.head;
    var count = 0;
    while(current.next){
      current = current.next;
      count += 1;
      if(item === count){
        break;
      }
    }
    return current;
  }
  set(value, index){
    var found = this.get(index);
    if(found){
        found.val = value;
        return true;
    }
    return false;
  }
  insert (data, index) {
    var found = this.get(index);
    if(found){
        var found1 = this.get(index-1);
        var node = new Node(data);
        node.next = found;
        found1.next = node;
        return true;
    }
    return false;
  }
  reverse(){
    // [10[1],  20[2],  30[3],  40]
   //  Node    Next     Pre

   // [10[1],  20[2],  30[3],  40]
   //           Node    Next

    // [40, 30, 20, 10]

    var node = this.head;
    this.head  = this.tail;
    this.tail = node;
    var next;
    var prev =  null;
    for(var i = 0; i < this.length; i++ ){ // 20
         next = node.next;
         node.next = prev;
         prev = node;
         node = next;
    }
    return 'Done';
  }
  print () {
    var arrayList = [];
    var current  = this.head;
    while(current){
      arrayList.push(current.val)
      current =  current.next;
    }
    return arrayList;
  }
}

var list  = new SinglyLinkedList();
list.push(10)
list.push(20)
list.push(30)
list.push(40)
list.push(50)
list.push(60)
// console.log(list)
console.log(list.print())
console.log(list.reverse())
console.log(list.print())