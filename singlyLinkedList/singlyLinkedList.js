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
    }
    this.tail = node;
    this.length++;
  }
}

(() => {
  let list = new SinglyLinkedList();
  list.push(0);
  list.push(1);
  console.log(list);
})();