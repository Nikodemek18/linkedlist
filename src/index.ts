import {LinkedList} from './linkedlist';

const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
list.add(4);

console.log('Tail', list.getTail());
console.log('Second value', list.find(2));

list.traverse(console.log);