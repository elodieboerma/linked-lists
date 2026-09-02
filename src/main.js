import { LinkedList } from "./index.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.prepend("fish");

console.log(list.toString());
console.log(list.size());

console.log(`Node at [3]: ${list.at(3).toString()}`);
console.log(`Node at [10]: ${list.at(10)}`);


console.log(`Removed head node: ${list.pop()}`);
console.log(list.toString());
console.log(`Head: ${list.headMethod()}`);

list.append("dog");
console.log(list.toString());
console.log(`Tail: ${list.tailMethod()}`);

console.log(`Contains "bunny": ${list.contains("bunny")}`);
console.log(`Contains "turtle": ${list.contains("turtle")}`);

//
console.log(`Index of "parrot": ${list.findIndex("parrot")}`);
console.log(`Index of "bunny": ${list.findIndex("bunny")}`);
//
console.log(`Index of "dog": ${list.findIndex("dog")}`);

//
//extra credit methods
