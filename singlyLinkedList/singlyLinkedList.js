class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    let current = this.head;
    let old, newest;
    while (current.next) {
      current = current.next;
      if (current.next) {
        newest = current;
      }
    }
    old = current;
    newest.next = null;
    this.tail = newest;
    this.length--;
    return old.value;
  }
}

(() => {
  let list = new SinglyLinkedList();
  list.push(0);
  list.push(1);
  list.push(2);
  // console.log(list.tail.val); //should be 2
  list.pop();
  // console.log(list.tail.val); //should be 1
})();