/** Node: node for a singly linked list. */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */
class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to the end of the list. */
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to the start of the list. */
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return and remove the last item. */
  pop() {
    if (this.length === 0) throw new Error("List is empty");
    let current = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      while (current.next !== this.tail) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
    }
    this.length--;
    return current.val;
  }

  /** shift(): return and remove the first item. */
  shift() {
    if (this.length === 0) throw new Error("List is empty");
    const val = this.head.val;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return val;
  }

  /** getAt(idx): get the value at the given index. */
  getAt(idx) {
    if (idx < 0 || idx >= this.length) throw new Error("Invalid index");
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    return current.val;
  }

  /** setAt(idx, val): set the value at the given index. */
  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) throw new Error("Invalid index");
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    current.val = val;
  }

  /** insertAt(idx, val): insert a node with the given value at the given index. */
  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) throw new Error("Invalid index");
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);
    const newNode = new Node(val);
    let current = this.head;
    for (let i = 0; i < idx - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.length++;
  }

  /** removeAt(idx): remove and return the value at the given index. */
  removeAt(idx) {
    if (idx < 0 || idx >= this.length) throw new Error("Invalid index");
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    let current = this.head;
    for (let i = 0; i < idx - 1; i++) {
      current = current.next;
    }
    const val = current.next.val;
    current.next = current.next.next;
    this.length--;
    return val;
  }

  /** average(): return the average of all values in the list. */
  average() {
    if (this.length === 0) return 0;
    let current = this.head;
    let sum = 0;
    while (current) {
      sum += current.val;
      current = current.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;
