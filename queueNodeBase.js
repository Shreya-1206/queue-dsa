class Node {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.front = new Node(null, null);
        this.rear = new Node(null, null);
        this.size =0;
    }

    enqueue(val){
        var newNode = new Node(val, null)
        if(this.size === 0){
            this.front = this.rear = newNode;
            this.size ++;
        }else {
            this.rear.next =newNode;
            this.rear =newNode;
            this.size ++;
        }
    }

    dequeue(){
        if(this.size === 0){
            return 'No Nodes Are there to dequeue'
        }else {
            var valDel = this.front.value;
            console.log(`This is the value which is deleted - ${valDel}`);
            this.front = this.front.next;
            this.size -- ;
            return valDel;
        }
    }

    peek(){
        if(this.size === 0){
            return 'No Nodes Are there to Peek'
        }else {
            return this.front.value;
        }
    }

    print() {
        var holder = this.front;
        while(holder !== null){
            console.log(holder.value);
            holder = holder.next;
        }
    }

    max(){
      var holder = this.front;
       var maxVal = this.front.value;

       while (holder !== null) {
        if(holder.value > maxVal){
            maxVal = holder.value;
        }
        holder = holder.next;
       }

      return maxVal;
    }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(33);

q.print();
q.dequeue();
q.print();
console.log(q.peek());

console.log(q.max());