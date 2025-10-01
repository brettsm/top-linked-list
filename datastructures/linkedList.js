class LinkedList {
    
    constructor(data, next) {
        if(data == undefined) {
            throw new Error('data parameter is required');
        }
        this.data=data;
        if(next !== undefined){
            this.next=next;
        }
    }

    append(value) {
        
    }


}