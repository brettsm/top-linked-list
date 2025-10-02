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

    insertAt(value, index) {
        if( index < 0 ) throw new Error('Index cannot be below 0');

        if( index === 0 ) {
            const newNode = new Node(value, this.head);
            this.head = newNode;
            if(!this.tail) this.tail = newNode;
            return;
        }


        let prev = this.head;
        let count = 0;
        while( prev && count < index - 1 ) {
            prev = prev.next;
            count++;
        }

        if( !prev ) throw new Error('Index out of bounds');

        const inserted = new Node(value, prev.next);
        prev.next = inserted;

        if( !inserted.next ) this.tail = inserted;

        return inserted;
    }

    removeAt(index) {
        if( !this.head ) throw new Error("List is empty!");
        if( index < 0 ) throw new Error("Index should not be less than 0");
        if( !Number.isInteger(index)) throw new Error("Index must be an integer");

        if( index === 0 ) {
            const removed = this.head;
            if(this.head === this.tail) {
                this.head = this.tail = null;
            } else {
                this.head = this.head.next;
            }
            
            removed.next = null;
            return removed;
        }


        let prev = this.head;

        let i = 0;
        while( prev  && i !== index - 1 ) {
            prev = prev.next;
            i++;
        }

        if (!prev || !prev.next) {
            throw new Error("Index is out of bounds");
        }
        
        let removed = prev.next;
        prev.next = removed.next;

        if ( removed === this.tail ) this.tail = prev;

        removed.next = null;
        return removed.val;
    }
    

}