export class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
    } else {
      var current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  prepend(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let curValue = this.head;
      this.head = newNode;
      this.head.next = curValue;
    }
  }
  size() {
    let count = 0;
    let current = this.head;
    while (current != null) {
      count++;
      current = current.next;
    }
    return count;
  }
  headMethod() {
    //returns undefined if list is empty
    if (this.head == null) {
      return undefined;
    } else {
      return this.head.value;
    }
  }
  tailMethod() {
    //returns undefined if list is empty
    if (this.head == null) {
      return undefined;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      return current.value;
    }
  }
  nodeAt(index) {
    //returns undefined if no node at index
    if (this.head == null || index >= this.size()) {
      return undefined;
    } else {
      let current = this.head;
      for (var i = 0; i < index+1; i++) {
        if (i == index) {
          return current;
        }
        current = current.next;
      }
    }
  }
  pop() {
    //removes the head node and returns its value, undefined if list is empty
    if (this.head == null) {
      return undefined;
    } else {
      let oldHead = this.head;
      let newHead = this.head.next;
      let newNextNode = newHead.next;
      //this.head = this.head.next;
      this.head = newHead;
      this.head.next = newNextNode;
      return oldHead.value;
    }
  }
  contains(value) {
    let current = this.head;
    while (current != null) {
      if (current.value == value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  findIndex(value) {
    //returns the index of the node containing the value, -1 if not found, or index of 1st instance/copy
    let current = this.head;
    let indexNum = 0;
    while (current != null) {
      if (current.value == value) {
        return indexNum;
      }
      current = current.next;
      indexNum++;
    }
    return -1;
  }
  toString() {
    if (this == null) {
      return undefined;
    } else {
      let current = this.head;
      let str = "";
      while (current != null) {
        str += `(${current.value}) -> `;
        current = current.next;
      }
      return str + "null";
    }
  }

  // extra credit methods from here on down
  insertAt(index, ...values) {
    if (index < 0 || index > this.size()) {
      throw RangeError("Index out of bounds");
    } else {
      let currentNode = this.head;
      let insertionPoint = this.nodeAt(index);
      while (currentNode != null) {
        let currentIndex = this.findIndex(currentNode.value);
        if (currentIndex == (index-1)) {
          for (let value of values) {
            const newNode = new Node(value);
            currentNode.next = newNode;
            newNode.next = insertionPoint;
            currentNode = currentNode.next;
          }
          return;
        }
        currentNode = currentNode.next;
      }
    }
  }
  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      throw RangeError("Index out of bounds");
    } else {
      let currentNode = this.head;
      let removalPoint = this.nodeAt(index);
      while (currentNode != null) {
        let currentIndex = this.findIndex(currentNode.value);
        if (currentIndex == (index-1)) {
          let newNextNode = removalPoint.next;
          currentNode.next = newNextNode;
        }
        currentNode = currentNode.next;
      }
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
