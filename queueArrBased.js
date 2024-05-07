class Queue{
    constructor(){
        this.queue = [];
        this.head =0;
        this.rear =0;
    }

    enqueue(val){
        this.queue[this.rear] = val
        this.rear ++;
    }

    dequeue(){
        var valOfHead=  this.queue[this.head];
        delete this.queue[this.head];
        this.head ++;
        return valOfHead;
    }

    peek(){
        return this.queue[this.head];
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    print(){
         console.log(this.queue);
    }

    search(val){
        var found = false;
        var i = 0;

        if(i < this.queue.length && !found){
            if(this.queue[i]=== val){
                found = true;
                console.log(found);
            }
            i++;
        }
        if(!found){
            console.log(found);
            return -1;
        }else{
            return i;
        }
    }
};

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

q.print();
console.log(q.search(2));