let totalCounter;

class LinkedList {
  
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    totalCounter = 1;
  }

  addToTop(value) {
    this.head = {
      value,
      next: this.head,
    };
    totalCounter += 1;
  }

  addToBottom(value) {
    const lastEl = this.getLastElement();
    if (!lastEl) {
      this.addToTop(value);
    } else {
      lastEl.next = {
        value,
        next: null,
      }
    }
    totalCounter += 1;
  }

  removeFromTop() {
    if (this.head !== null) {
      this.head = this.head.next;
      totalCounter -= 1;
    }
  }

  removeFromBottom() {
    if (this.head !== null) {
      if (totalCounter >= 2) {
        const lastParent = this.getByIndex(totalCounter - 2);
        lastParent.next = null;
        totalCounter -= 1;
      } else {
        this.removeFromTop();
      }
    }
  }

  getLastElement() {
    let pointer = this.head;

    if (pointer) {
      while (pointer.next !== null) {
        pointer = pointer.next;
        if (pointer.next === null) {
          break;
        }
      }
    }

    return pointer;
  }

  getFullList() {
    const result = [];
    let pointer = this.head;

    if (pointer) {
      result.push(pointer.value);
      while (pointer.next !== null) {
        pointer = pointer.next;
        result.push(pointer.value);
      }
    }

    return result;
  }

  getByIndex(index) {
    let pointer = this.head;
    let counter = 0;
    let result = null;

    if (pointer) {
      while (pointer !== null) {
        if (counter === index) {
          result = pointer;
          break;
        }
        pointer = pointer.next;
        counter += 1;
      }
    }

    return result;
  }

  get total() {
    return totalCounter;
  }

}

export default LinkedList;