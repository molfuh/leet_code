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
    if (this.head === null) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null; // severs the arrow/pointer
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;

    // let current = this.head;
    // let old, newest;
    // while (current.next) {
    //   current = current.next;
    //   if (current.next) {
    //     newest = current;
    //   }
    // }
    // old = current;
    // newest.next = null;
    // this.tail = newest;
    // this.length--;
    // return old.value;
  }

  shift() {
    if (this.head === this.tail) {
      return undefined;
    }
    let current = this.head;
    this.head = current.next;
    this.length--;
    //assign variables to what you will be returning - clarifies
    return current;
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
  // console.log(list.head.val); //should be 0
  list.shift();
  // console.log(list.head.val); //should be 1
  list.shift();
  // console.log(list.head.val); //should be 2
})();