class Node {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class Queue {
  constructor(){
      this.first = null;
      this.last = null;
      this.size = 0;
  }
  enqueue(value){
      var newNode = new  Node(value);
      if(!this.first){
        this.first =  newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode;
        this.last = newNode;
      }
      this.size++
  }
  dequeue(){
    if(!this.first) return null;
    var temp = this.first;
    if(this.first === this.last){
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

var queue =  new Queue();
queue.enqueue(10);
queue.enqueue(11);
queue.enqueue(12);
queue.enqueue(13);
console.log(queue)
queue.dequeue();
console.log(queue)
