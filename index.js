class Node {
  constructor(val) {
    this.next = null;
    this.prev = null;
    this.data = val;
  }
}

class LinkedList {
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
  }
  addToHead = (value) => {
    if (value < 10) {
      throw Error("too small");
    }
    const nodeObj = new Node(value);
    if (this.head == null) {
      this.head = nodeObj;
      this.tail = this.head;
    } //
    else {
      nodeObj.next = this.head;
      this.head.prev = nodeObj;
      this.head = nodeObj;
      //   if (this.tail == null) this.tail = nodeObj;
    }
  };
  addToTail(value ) {
    const nodeObj = new Node(value);
    if (this.tail == null) {
      return "linkedList is empty";
    } else {
      nodeObj.prev = this.tail;
      this.tail.next = nodeObj;
      this.tail = nodeObj;
    }
  }
  getLinkedList() {
    console.log(this.head);
    function print(node) {
      console.log(node.data);
      if (node.next == null) return;
      print(node.next);
    }
    // print(this.head)
  }
}

// const a = new Node(3);
// const c = new Node(2);
// const d = new Node(1);
const g = new Node(14);
const b = new LinkedList();
b.addToHead(13);
b.addToHead(12);
b.addToHead(11);
b.addToTail(g);
b.getLinkedList();
