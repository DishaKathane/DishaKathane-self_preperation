// Input: linked list: 1->2->3->4->5
// Output: 3 
// Explanation: There are 5 nodes in the linked list and there is one middle node whose value is 3.


// Input: linked list = 10 -> 20 -> 30 -> 40 -> 50 -> 60
// Output: 40
// Explanation: There are 6 nodes in the linked list, so we have two middle nodes: 30 and 40, but we will return the second middle node which is 40.

class Node{
    constructor(x){
        this.data = x;
        this.next = null;
    }
}
function ListLength(head){
    let length = 0;
    while(head){
        length ++;
        head = head.next
    }
    return length;
};

function middleelement(head){
    let length = ListLength(head);
    middle_index = Math.floor(length/2);

    while(middle_index-->0){
        head = head.next;
    }
    return head.data
}


function main(){
    let head = new Node(10);
    head.next = new Node(20)
    head.next.next = new Node(30);
    head.next.next.next = new Node(40);
    head.next.next.next.next = new Node(50);
    head.next.next.next.next.next = new Node(60)
    console.log(head);

    console.log(ListLength(head));

    console.log("this is middleindex------------------",middleelement(head));

}
main();