class Node {
  constructor(value=null, nextNode=null){
    this.value = value;
    this.nextNode = nextNode;
  }

  print(){
    return `( ${this.value} )`;
  }
}

export class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
  * Appends new node at the end of the list with given value.
  * @param {string} value
  */
  append(value){
    if(!value) return;

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

  /**
  * Inserts new node at the beginning of the list with given value.
  * @param {string} value
  */
  prepend(value){
    if(!value) return;

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

  /**
  * Return node at given index, not found if it does not exist.
  * @param {number} index
  * @returns {Node|null} Node at index position, not found if index is out of range.
  */
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

  /**
  * Removes last node from the list and returns it.
  * @returns {Node|null} Last node in the list, null if list is empty.
  */  
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


  /**
  * Checks if the list contains given value.
  * @param {string} value
  * @returns {boolean}
  */  
  contains(value){
    let pointer = this.head;
    while(pointer){
      if(pointer.value === value) return true;
      pointer = pointer.nextNode;
    }
    return false;
  }

  /**
  * Returns first index that stores the value, -1 if it's not on the list.
  * @param {string} value
  * @returns {number|null}
  */    
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
    return -1;
  }

  /**
  * Inserts new node in given index, does nothing if index is out of bounds.
  * @param {string} value
  * @param {number} index
  */
  insertAt(value, index){
    if(index === 0){
      this.prepend(value);
      return;
    } else if (index === this.size){
      this.append(value);
      return;
    } else if (index > this.size){
      return;
    }

    const newNode = new Node(value)
    const prev = this.at(index -1);
    const next = this.at(index);

    prev.nextNode = newNode;
    newNode.nextNode = next;
    this.size++;
  }

  /**
  * Removes node in given index, does nothing if index is out of bounds.
  * @param {number} index
  */
  removeAt(index){
    if(index === 0){
      this.head = this.head.nextNode;
      this.size--;
      return;
    } else if(index === this.size - 1){
      this.pop()
      return;
    } else if(this.size === 0){
      return;
    }

    const prev = this.at(index - 1);
    prev.nextNode = prev.nextNode.nextNode;
    this.size--;
  }

  /**
  * Returns visual representation of the list.
  * @returns {string}
  */
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

const list = new LinkedList();
list.append("A");
list.append("B");
list.append("C");
list.append("D");
list.append("E");
console.log(list.toString());
list.insertAt("AS", "1");
console.log(list.toString());
