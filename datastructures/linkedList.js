class Node {
    constructor(val=null, next=null) {
        this.val    = val;
        this.next   = next;
    }
}

export class LinkedList {
    
    constructor() {
        this.head = null;
        this.tail = null;
    }
    
    append(value) {
        const node = new Node(value);
        if(!this.head){
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    prepend(value) {
        const node = new Node(value);
        if(!this.head) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current != null) {
            count++;
            current = current.next;
        }

        return count;
    }

    getHead() {
        return this.head.val;
    }

    getTail() {
        return this.tail.val;
    }

    at(index) {
        if( index < 0 ) throw new Error('Index cannot be less than 0');
        let curr = this.head.val;
        let i = 0;
        
        while( curr != null ) {
            if ( i === index ) return curr;
            curr = curr.next;
            i++;
        }

        return null;
    }

    pop() {

        if( !this.head ) return null;

        if( this.head === this.tail ) {
            const removed = this.head;
            this.head = this.tail = null;
            return removed.val;
        }

        let prev = this.head;

        while( prev.next !== this.tail ) {
            prev = prev.next;
        }

        const removed = this.tail;
        this.tail = prev;
        this.tail.next = null;
        return removed.val;
    }

    contains(value) {
    let current = this.head;

        while( current !== null ) {
            if( current.val === value ) return true;
            current = current.next;
        }

        return false;
    }

    find(value) {
        let current = this.head;
        let index = 0;
        while( current !== null ) {
            if( current.val === value ) return index;

            index++;
            current = current.next;
        }

        return -1;
    }

    toString() {
        let current = this.head;

        while( current != null ) {
            console.log("(  " + current.val + "  )  ->  ");
            current = current.next;
        }
        console.log("null");
    }
}