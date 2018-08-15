export default class LinkedListNode {
  // data collections data node 
  // Linked 
  // List 
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

// 链表节点
  // [] 内存分配给我们一定数量的空间

  // 链表解决的问题： 存储空间的连续性问题，灵活性不够，通过指针来处理
    // a[10] = [1,2,3,4,5,6,7,8,9,10];
    // 1 101 90 5 a b c
    // 内存位置：
    // 1001
    // 1002
    // 1003
    // 1004
    // 1005
    // 数据指针对应： 
    //   1 （value） -》 1001
        // next 指针，指向下一个节点的位置
    //   101 -》 1002
    //   。。。