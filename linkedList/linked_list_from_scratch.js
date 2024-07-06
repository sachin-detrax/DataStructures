class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {

        const newNode = { value: value, next: null }
        this.tail.next = newNode
        this.tail = newNode;
        this.length++;

    }
    prepand(value) {
        const newNode = { value: value, next: this.head }
        this.head = newNode;
        this.length++;
    }

    printLinkedList(){
        const LinkedListArr = [];
        let currentNode = this.head;
        while(currentNode !== null){
            LinkedListArr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return LinkedListArr;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(88);
myLinkedList.prepand(7);
myLinkedList.printLinkedList();
console.log(myLinkedList)
