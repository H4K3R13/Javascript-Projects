const num = new Set([1,2,3]);
num.add(1);
num.add(2);
num.add(4);
console.log(num);

const num2 = [...num]; // spread operator
console.log(num2);

num.delete(4)
console.log(num);

console.log(num.has(4));

console.log(num2.size);


console.log(num2);