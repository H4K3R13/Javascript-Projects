class Queue {

    constructor(){
        this.items = [];
    }

    enqueue(item){
        this.items.push(item);
    }

    dequeue(item){
        return this.items.shift();
    }

    peek(item){
        return this.items[0];
    }

    isEmpty(){
        return this.items.length === 0;
    }

}

const queue = new Queue;

queue.enqueue('A');
queue.enqueue('R');
queue.enqueue('J');

console.log(queue.isEmpty());

console.log(queue);

console.log(queue.peek());

queue.dequeue();
console.log(queue);

queue.enqueue('U');
console.log(queue);     