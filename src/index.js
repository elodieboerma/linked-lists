import "./styles.css";

// contains the whole linked list
class LinkedList {
    constructor() {

    }
    append(value) {
        //adds new node to the end of the list
    }
    prepend(value) {
        //adds new node to the start of the list
    }
    size() {
        //returns the total number of nodes in the list
    }
    head() {
        //returns the first node in the list, undefined if list is empty
    }
    tail() {
        //returns the last node in the list, undefined if list is empty
    }
    at(index) {
        //returns the node at the given index, undefined if no node at index
    }
    pop() {
        //removes the head node and returns its value, undefined if list is empty
    }
    contains(value) {
        //returns true if the passed in value is in the list and otherwise returns false
    }
    findIndex(value) {
        //returns the index of the node containing the value, -1 if not found, or index of 1st node if multiple 
        // nodes contain the value
    }
    toString() {
        //returns a string representation of the list (so can be printed/previewed in console) in the format: 
        // ( value ) -> ( value ) -> ( value ) -> null
        // or undefined if list is empty
    }

}

class Node {
    constructor(value = null, node = null) {}

}