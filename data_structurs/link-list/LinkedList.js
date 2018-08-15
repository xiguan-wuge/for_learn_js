import LinkedListNode from './LinkedListNode';
// 形成链表？如何将节点链起来，使数据从开始到结束显示出来 
// 链表里无[]，但是有next，
// 有了head，就可以next 一直到tail(尾)
  // head
  //   next
          // next
  //     ...
    
  // tail

export default class LinkedList {
  constructor() {
    this.head = null;   
    this.tail = null;
  }
  toArray(){ //把数据结构变成数组
    const nodes = [];
    let currentNode = this.head;
    while(currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    } 
    return nodes;
  }
  append(value) {
    const newNode = new LinkedListNode(value);
    // 节点由value 和next构成、
    // 1. 空的， head为空
    // 2. 非空, tall.next = null,新节点加在尾节点后面
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
  toString(callback) {

    return this.toArray().map(node => node.toString(callback)).toString() //变成数组,返回所有 的节点
  }
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }
  delete(value) { 
    if(!this.head) {
      return null;
    }
    let deletedNode = null;
    // 判断head节点是不是要删除的节点
    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    // 单项链表只能从上往下查找
    let currentNode = this.head;
    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    // 判断tail节点是不是 要删除的点；
    //tail.next =null  //(必须)
    if(this.tail.value === value) {
      this.tail = currentNode;
    }
    return deletedNode;
  }
  // 查找节点
  find({value = undefined, callback = undefined}) {
    if(!this.head) {
      return null;
    }

    let currentNode = this.head;
    while(currentNode) {
      if(callback && callback(currentNode.value)) {
        return currentNode;
      }

      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }
    return null;
    
  }

  
}