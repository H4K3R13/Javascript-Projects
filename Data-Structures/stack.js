class Stack{
    constructor(){
        this.items = [];
    }

    push(item){
        this.items.unshift(item);
    }

    pop(item){
        return this.items.shift();
    }

    top(item){
        return this.items[0];
    }

    isEmpty(){
        return this.items === 0;
    }
}

const stack = new Stack();

stack.push('A');
stack.push(1);
stack.push("B");

console.log(stack);

console.log("Item popped " + stack.pop());

console.log(stack.top());

console.log("This stack empty:"+stack.isEmpty());
