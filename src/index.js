export class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    //adds new node to the end of the list
    const newNode = new Node(value);
    if (this == null) {
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
    //adds new node to the start of the list
    const newNode = new Node(value);
    if (this == null) {
      this.head = newNode;
    } else {
      this.head.next = this.head;
      this.head = newNode;
    }
  }
  size() {
    //returns the total number of nodes in the list
    let count = 0;
    let current = this.head;
    while (current != null) {
      count++;
      current = current.next;
    }
    return count;
  }
  head() {
    //returns the first node in the list, undefined if list is empty
    if (this == null) {
      return undefined;
    } else {
      return this.head;
    }
  }
  tail() {
    //returns the last node in the list, undefined if list is empty
    if (this == null) {
      return undefined;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      return current;
    }
  }
  at(index) {
    //returns the node at the given index, undefined if no node at index
    if (this == null) {
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
    if (this == null) {
      return undefined;
    } else {
      let oldHead = this.head;
      this.head = this.head.next;
      return oldHead.value;
    }
  }
  contains(value) {
    //returns true if the passed in value is in the list and otherwise returns false
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
    //returns the index of the node containing the value, -1 if not found, or index of 1st node if multiple
    // nodes contain the value
    let current = this.head;
    while (current != null) {
      if (current.value == value) {
        return current.index;
      }
      current = current.next;
    }
    return -1;
  }
  toString() {
    //returns a string representation of the list (so can be printed/previewed in console) in the format:
    // ( value ) -> ( value ) -> ( value ) -> null
    // or undefined if list is empty
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
  insertAt(index, ...values) {
    //inserts new nodes with the provided values at the given index
    if (index < 0 || index > this.size()) {
      throw RangeError("Index out of bounds");
    } else {
      let current = this.head;
      let insertionPoint = this.at(index);
      let prevPoint = this.at(index - 1);
      while (current != null) {
        if (current == insertionPoint) {
          for (let value of values) {
            const newNode = new Node(value);
            prevPoint.next = newNode;
            prevPoint = newNode;
            return;
          }
        }
        current = current.next;
      }
    }
  }
  removeAt(index) {
    //removes the node at the given index
    if (index < 0 || index >= this.size()) {
      throw RangeError("Index out of bounds");
    } else {
      let current = this.head;
      let removalPoint = this.at(index);
      let prevPoint = this.at(index - 1);
      while (current != null) {
        if (current == removalPoint) {
          prevPoint.next = current.next;
        }
        current = current.next;
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
