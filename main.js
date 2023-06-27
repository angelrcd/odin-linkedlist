class Node {
  constructor(value=null, nextNode=null){
    this.value = value;
    this.nextNode = nextNode;
  }

  print(){
    return `( ${this.value} )`;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value){
    const newNode = new Node(value);

    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode
      this.tail = newNode
    }
    this.size++;
  }

  prepend(value){
    const newNode = new Node(value);

    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  at(index){
    let pointer = this.head;
    let count = 0;

    while(pointer){
      if(count === index){
        return pointer
      }
      pointer = pointer.nextNode
      count++;
    }
    return null;
  }

  pop(){
    if(this.size === 0) return null;
    if(this.size === 1){
      const oldTail = this.tail;
      this.head = null;
      this.tail = null;
      this.size--;
      return oldTail;
    }

    const oldTail = this.tail;
    const newTail = this.at(this.size -2);

    newTail.nextNode = null;
    this.tail = newTail;
    this.size--;

    return oldTail;
  }

  contains(value){
    let pointer = this.head;
    while(pointer){
      if(pointer.value === value) return true;
      pointer = pointer.nextNode;
    }
    return false;
  }

  find(value){
    let index = 0;
    let pointer = this.head;
    while(pointer){
      if(pointer.value === value){
        return index;
      }
      index++;
      pointer = pointer.nextNode;
    }
    return null;
  }

  toString(){
    let result = "";
    let pointer = this.head;
    while(pointer){
      result += pointer.print() + " -> ";
      pointer = pointer.nextNode;
    }
    result += "null"
    return result
  }
}

const test = new LinkedList();
test.prepend("test1")
test.prepend("test2")
test.prepend("test3")
// console.log(test.head);
// console.log(test.tail);
console.log(test.toString());
// console.log(test.size);
test.pop()
test.pop()
test.prepend("test2")
console.log(test.toString());
console.log(test.contains("test1"));
console.log(test.find(""));