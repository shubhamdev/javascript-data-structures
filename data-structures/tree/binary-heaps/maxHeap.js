class MaxHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12]
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
    return this.values;
  }
  bubbleUp() {
    var id = this.values.length - 1;
    const element = this.values[id];
    while (id > 0) {
      const parentId = Math.floor((id - 1) / 2)
      const parent = this.values[parentId];
      if (element > this.values[parentId]) {
        this.values[id] = parent;
        this.values[parentId] = element;
        id = parentId;
      } else {
        break;
      }
    }
  }
  dequeue(){
    const min = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0){
        this.values[0] = end;
        this.sinkDown();
    }
    return min;
}
sinkDown(){
  let idx = 0;
  const length = this.values.length;
  const element = this.values[0];
  while(true){
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild,rightChild;
      let swap = null;

      if(leftChildIdx < length){
          leftChild = this.values[leftChildIdx];
          if(leftChild.priority < element.priority) {
              swap = leftChildIdx;
          }
      }
      if(rightChildIdx < length){
          rightChild = this.values[rightChildIdx];
          if(
              (swap === null && rightChild.priority < element.priority) || 
              (swap !== null && rightChild.priority < leftChild.priority)
          ) {
             swap = rightChildIdx;
          }
      }
      if(swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
  }
}
}

// [41, 39, 33, 18, 27, 12, 55]
var heap = new MaxHeap();
heap.insert(55)
heap.insert(90)
// heap.insert(1)
heap.insert(45)
// console.log(heap.insert(55))
// console.log(heap.insert(90))
// console.log(heap.insert(1))
// console.log(heap.insert(45))
console.log(heap.dequeue())
console.log(heap.dequeue())
console.log(heap.values)
