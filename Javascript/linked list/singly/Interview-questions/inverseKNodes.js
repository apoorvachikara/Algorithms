/**
 * Node creation class
 */
 class Node {
    /**
       *
       * @param {number | string} val
       * @param {number | string} next
       */
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  
  /**
   * Linklist class
   */
  class LinkList {
    /**
       *
       * @param {number | string} data
       * Creates the first node and assign the head
       */
    constructor(data) {
      this.head = new Node(data);
      this.size = 0;
    }
  
    /**
     *
     * @param {*} data
     * insert the nodes to the LinkList
     */
    insert(data) {
      this.head = new Node(data, this.head);
    }
  
    /**
     * print the LL in form of array
     */
    print() {
      const values = [];
  
      let current = this.head;
      while (current) {
        values.push(current.val);
        current = current.next;
      }
  
      console.log(values);
    }
  
    /**
     * reverse the link list
     */
    invert(count) {
      let prev = null;
      let current = this.head;
      let next = null;
  
      while (current !== null && count--) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
      
      let head = prev;
      while (prev.next) {
          prev = prev.next;
      }

     prev.next = current;
     this.head = head; 

    }
  }
  
  const l1 = new LinkList(1);
  
  for (let i = 2; i < 11; i++) {
    l1.insert(i);
  }
  
  l1.print();
  l1.invert(4);
  l1.print();
  



  