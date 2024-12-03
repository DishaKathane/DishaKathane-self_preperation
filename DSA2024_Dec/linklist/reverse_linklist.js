/* 
Reverse a Linked List
Last Updated : 26 Aug, 2024
Given a linked list, the task is to reverse the linked list by changing the links between nodes.

Examples: 

Input: Linked List = 1 -> 2 -> 3 -> 4 -> NULL 
Output: Reversed Linked List = 4 -> 3 -> 2 -> 1 -> NULL


Input: Linked List = 1 -> 2 -> 3 -> 4 -> 5 -> NULL 
Output: Reversed Linked List = 5 -> 4 -> 3 -> 2 -> 1 -> NULL


Input: Linked List = NULL 
Output: Reversed Linked List = NULL


Input: Linked List = 1->NULL 
Output: Reversed Linked List = 1->NULL 
*/

class Node{
    constructor(x){
        this.data = x;
        this.next = null;
    }
}

function getstring(head){
    let arr = []
    while(head !==null){
    console.log("------------->1 -->",head.data)
    arr.push(head.data)
    head = head.next
}
return arr.join(" ");
}

function reverselinklist(head){
    let curr = head;
    let pre = null;
    let next;

    while(curr !==null){
        next = curr.next;
        curr.next = pre;
console.log(curr)
        pre = curr ;
        curr =next
    };
    return pre;
}

let head = new Node(10);
head.next= new Node(20);
head.next.next=new Node(30);
head.next.next.next=new Node(40);
head.next.next.next.next=new Node(50);
console.log(getstring(head)) //output------------- 10 20 30 40 50

head = reverselinklist(head);
console.log(head);
console.log(getstring(head))  // output -----50 40 30 20 10
// console.log(head)